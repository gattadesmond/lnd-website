"use server";

import { get } from "http";

import { Comment } from "@/components/blog/comments-offcanvas";
import {
  COMMENTING_ERROR_CODES,
  type CommentingErrorCode,
} from "@/lib/error-codes";
import POST_TYPE_CONFIG from "@/lib/post-types-config.json";
import { createDynamicClient } from "@/lib/supabase/server";

export type PostType = "stories" | "events" | "learnings";

const getPostTypeSingular = (postType: PostType) => {
  switch (postType) {
    case "stories":
      return "story";
    case "events":
      return "event";
    case "learnings":
      return "learning";
    default:
      throw new Error(`Unknown post type: ${postType}`);
  }
};

interface AddCommentParams {
  content: string;
  parentId: string | null;
  postId: number;
  postType: PostType;
}

interface CommentResult {
  success: boolean;
  data?: Comment[];
  errorCode?: CommentingErrorCode;
}

export async function addComment({
  content,
  parentId,
  postId,
  postType,
}: AddCommentParams): Promise<CommentResult> {
  try {
    const supabase = await createDynamicClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (user === null || userError) {
      return {
        success: false,
        errorCode: COMMENTING_ERROR_CODES.AUTH_REQUIRED,
      };
    }

    const { error } = await supabase
      .from(`${getPostTypeSingular(postType)}_comments`)
      .insert({
        content,
        parent_id: parentId,
        [`${getPostTypeSingular(postType)}_id`]: postId,
      });

    if (error) {
      console.log("🚀 ~ addComment ~ error:", error);
      return {
        success: false,
        errorCode: COMMENTING_ERROR_CODES.ADD_COMMENT_FAILED,
      };
    }

    const { data, error: fetchError } = await supabase
      .from(
        POST_TYPE_CONFIG[getPostTypeSingular(postType)].api.commentDetailsTable,
      )
      .select("*")
      .eq(`${getPostTypeSingular(postType)}_id`, postId);

    if (fetchError || !data) {
      console.log("🚀 ~ addComment ~ fetchError:", fetchError);
      return {
        success: false,
        errorCode: COMMENTING_ERROR_CODES.FETCH_DATA_FAILED,
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Unexpected error in addComment:", error);
    return {
      success: false,
      errorCode: COMMENTING_ERROR_CODES.UNEXPECTED_ERROR,
    };
  }
}

type CommentReactionParams = {
  commentId: number;
  postType: PostType;
  postId: number;
};

export async function addCommentReaction({
  commentId,
  postId,
  postType,
}: CommentReactionParams): Promise<CommentResult> {
  try {
    const supabase = await createDynamicClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (user === null || userError) {
      return {
        success: false,
        errorCode: COMMENTING_ERROR_CODES.AUTH_REQUIRED,
      };
    }

    const { error } = await supabase
      .from(`${getPostTypeSingular(postType)}_comments_reactions`)
      .insert({
        comment_id: commentId,
      });

    if (error) {
      return {
        success: false,
        errorCode: COMMENTING_ERROR_CODES.ADD_COMMENT_REACTION_FAILED,
      };
    }

    const { data, error: fetchError } = await supabase
      .from(POST_TYPE_CONFIG.story.api.commentDetailsTable)
      .select("*")
      .eq(`${getPostTypeSingular(postType)}_id`, postId);

    if (fetchError || !data) {
      return {
        success: false,
        errorCode: COMMENTING_ERROR_CODES.FETCH_DATA_FAILED,
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Unexpected error in addCommentReaction:", error);
    return {
      success: false,
      errorCode: COMMENTING_ERROR_CODES.UNEXPECTED_ERROR,
    };
  }
}

export async function removeCommentReaction({
  commentId,
  postId,
  postType,
}: CommentReactionParams): Promise<CommentResult> {
  try {
    const supabase = await createDynamicClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (user === null || userError) {
      return {
        success: false,
        errorCode: COMMENTING_ERROR_CODES.AUTH_REQUIRED,
      };
    }

    const { error } = await supabase
      .from(`${getPostTypeSingular(postType)}_comments_reactions`)
      .delete()
      .eq("comment_id", commentId);

    if (error) {
      return {
        success: false,
        errorCode: COMMENTING_ERROR_CODES.REMOVE_COMMENT_REACTION_FAILED,
      };
    }

    const { data, error: fetchError } = await supabase
      .from(POST_TYPE_CONFIG.story.api.commentDetailsTable)
      .select("*")
      .eq(`${getPostTypeSingular(postType)}_id`, postId);

    if (fetchError || !data) {
      return {
        success: false,
        errorCode: COMMENTING_ERROR_CODES.FETCH_DATA_FAILED,
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Unexpected error in removeCommentReaction:", error);
    return {
      success: false,
      errorCode: COMMENTING_ERROR_CODES.UNEXPECTED_ERROR,
    };
  }
}
