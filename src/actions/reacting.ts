"use server";

import {
  REACTION_ERROR_CODES,
  type ReactionErrorCode,
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

interface ReactionParams {
  emoji: string;
  postId: number;
  postType: PostType;
}

interface ReactionResult {
  success: boolean;
  data?: {
    reactions_details: Record<
      string,
      {
        total: number;
        users: { id: string; fullName: string; avatarUrl: string }[];
      }
    >;
    reactions_count: number;
  };
  errorCode?: ReactionErrorCode;
}

export async function addReaction({
  emoji,
  postId,
  postType,
}: ReactionParams): Promise<ReactionResult> {
  try {
    const supabase = await createDynamicClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (user === null || userError) {
      return {
        success: false,
        errorCode: REACTION_ERROR_CODES.AUTH_REQUIRED,
      };
    }

    const { error } = await supabase.from(`${postType}_reactions`).insert({
      emoji,
      member_id: user.id,
      [`${getPostTypeSingular(postType)}_id`]: postId,
    });

    if (error) {
      return {
        success: false,
        errorCode: REACTION_ERROR_CODES.ADD_REACTION_FAILED,
      };
    }

    const { data, error: fetchError } = await supabase
      .from(POST_TYPE_CONFIG[getPostTypeSingular(postType)].api.stats)
      .select("reactions_details, reactions_count")
      .eq(`${getPostTypeSingular(postType)}_id`, postId)
      .single();

    if (fetchError) {
      return {
        success: false,
        errorCode: REACTION_ERROR_CODES.FETCH_DATA_FAILED,
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Unexpected error in addReaction:", error);
    return {
      success: false,
      errorCode: REACTION_ERROR_CODES.UNEXPECTED_ERROR,
    };
  }
}

export async function removeReaction({
  emoji,
  postId,
  postType,
}: ReactionParams): Promise<ReactionResult> {
  try {
    const supabase = await createDynamicClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (user === null || userError) {
      return {
        success: false,
        errorCode: REACTION_ERROR_CODES.AUTH_REQUIRED,
      };
    }

    const { error } = await supabase
      .from(`${postType}_reactions`)
      .delete()
      .eq("emoji", emoji)
      .eq("member_id", user.id)
      .eq(`${getPostTypeSingular(postType)}_id`, postId);

    if (error) {
      return {
        success: false,
        errorCode: REACTION_ERROR_CODES.REMOVE_REACTION_FAILED,
      };
    }

    const { data, error: fetchError } = await supabase
      .from(
        POST_TYPE_CONFIG[getPostTypeSingular(postType)].api.fullDetailsTable,
      )
      .select("reactions_details, reactions_count")
      .eq("id", postId)
      .single();

    if (fetchError) {
      return {
        success: false,
        errorCode: REACTION_ERROR_CODES.FETCH_DATA_FAILED,
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Unexpected error in removeReaction:", error);
    return {
      success: false,
      errorCode: REACTION_ERROR_CODES.UNEXPECTED_ERROR,
    };
  }
}
