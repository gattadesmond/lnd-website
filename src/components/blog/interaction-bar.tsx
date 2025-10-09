"use client";

import { useEffect, useMemo, useState, useTransition } from "react";

import { User } from "@supabase/supabase-js";
import { List, MessageCircle, Share2 } from "lucide-react";
import { toast } from "sonner";

import {
  addComment,
  addCommentReaction,
  removeCommentReaction,
} from "@/actions/commenting";
import { AddEmojiIcon } from "@/components/add-emoji-icon";
import {
  Comment,
  CommentsOffcanvas,
} from "@/components/blog/comments-offcanvas";
import {
  ReactionButton,
  UserSP,
  type EmojiData,
} from "@/components/blog/reaction-components";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useShare } from "@/hooks/useShare";
import { getErrorMessage } from "@/lib/error-codes";
import { getPostTypeSingular, PostType } from "@/lib/post";
import { preserveEmojiOrder, ReactionsDetails } from "@/lib/reaction";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { notoEmoji } from "@/styles/font";

interface InteractionBarProps {
  emojis: EmojiData[];
  reactions_count: number;
  isLiked?: boolean;
  postId: number;
  reactions_details: ReactionsDetails;
  postType: PostType;
}

const MAX_EMOJIS_DISPLAY = 2;

export function InteractionBar({
  reactions_details,
  postId,
  emojis,
  reactions_count,
  postType,
}: InteractionBarProps) {
  // State management

  const [commentsOpen, setCommentsOpen] = useState(false);
  const [reactionsDetails, setReactionsDetails] = useState(reactions_details);
  const [reactionsCount, setReactionsCount] = useState(reactions_count);
  const [user, setUser] = useState<User | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [, startTransition] = useTransition();
  const supabase = useMemo(() => createClient(), []);
  const { share } = useShare();

  useEffect(() => {
    (async () => {
      const { data: comments } = await supabase
        .from(`${getPostTypeSingular(postType)}_comments_with_details`)
        .select("*")
        .eq(`${getPostTypeSingular(postType)}_id`, postId);
      setComments(comments ?? []);
    })();
  }, [postId, postType, supabase]);

  // Initialize user authentication
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, [supabase]);

  // Computed values
  const existingReactions = Object.entries(reactionsDetails || {}).filter(
    ([, data]) => data.total > 0,
  );

  const visibleEmojis = existingReactions.slice(0, MAX_EMOJIS_DISPLAY);
  const availableEmojis = emojis.filter(
    (emoji) =>
      !existingReactions.find(
        ([existingEmoji]) => existingEmoji === emoji.emoji,
      ),
  );

  // Event handlers
  const handleReactSuccessful = (data: {
    reactions_details: Record<string, { total: number; users: UserSP[] }>;
    reactions_count: number;
  }) => {
    setReactionsDetails((prev) =>
      preserveEmojiOrder(prev, data.reactions_details),
    );
    setReactionsCount(data.reactions_count);
  };

  const handleReactFailed = (errorMessage: string) => {
    toast.error(errorMessage);
  };

  const handleComment = () => {
    setCommentsOpen(true);
  };

  const handleShare = () => {
    share({
      title: document.title,
      text: `Check out this ${getPostTypeSingular(postType)} on LnD`,
    });
  };

  const handleAddComment = async (content: string) => {
    startTransition(async () => {
      try {
        const result = await addComment({
          content,
          parentId: null,
          postId,
          postType,
        });

        startTransition(() => {
          if (!result.success) {
            const errorMessage = result.errorCode
              ? getErrorMessage(result.errorCode)
              : "Failed to add comment";
            toast.error(errorMessage);
            return;
          }

          if (result.data) {
            setComments(result.data);
            toast.success("Comment added successfully");
          }
        });
      } catch {
        toast.error("An unexpected error occurred");
      }
    });
  };

  const handleLikeComment = async (commentId: string) => {
    startTransition(async () => {
      try {
        // Check if comment is already liked by current user
        const comment = comments.find((c) => c.id === commentId);
        const reply = comments
          ?.find((c) => c.replies?.some((r) => r.id === commentId))
          ?.replies?.find((r) => r.id === commentId);
        const isLiked = comment?.isLiked || reply?.isLiked;

        const result = isLiked
          ? await removeCommentReaction({
              commentId: parseInt(commentId),
              postId,
              postType,
            })
          : await addCommentReaction({
              commentId: parseInt(commentId),
              postId,
              postType,
            });
        startTransition(() => {
          if (!result.success) {
            const errorMessage = result.errorCode
              ? getErrorMessage(result.errorCode)
              : isLiked
                ? "Failed to remove like"
                : "Failed to like comment";
            toast.error(errorMessage);
            return;
          }

          if (result.data) {
            setComments(result.data);
          }
        });
      } catch {
        toast.error("An unexpected error occurred");
      }
    });
  };

  const handleReplyComment = async (commentId: string, content: string) => {
    startTransition(async () => {
      try {
        const result = await addComment({
          content,
          parentId: commentId,
          postId,
          postType,
        });
        startTransition(() => {
          if (!result.success) {
            const errorMessage = result.errorCode
              ? getErrorMessage(result.errorCode)
              : "Failed to add reply";
            toast.error(errorMessage);
            return;
          }

          if (result.data) {
            setComments(result.data);
            toast.success("Reply added successfully");
          }
        });
      } catch {
        toast.error("An unexpected error occurred");
      }
    });
  };

  // Render reaction summary button
  const renderReactionSummary = () => (
    <Button variant="ghost" className={"size-fit gap-1 p-2"}>
      {visibleEmojis.map(([emoji], idx) => (
        <span
          key={emoji}
          className={cn(
            notoEmoji.className,
            "-me-2.5 inline-flex size-6 items-center justify-center rounded-full bg-neutral-200 text-sm",
            idx === 0 ? "z-20" : "z-10",
          )}
        >
          {emoji}
        </span>
      ))}
      <span className="flex size-6 items-center justify-center rounded-full bg-neutral-200 text-neutral-700">
        <AddEmojiIcon className="size-5" />
      </span>
      {reactionsCount}
    </Button>
  );

  // Render popover content with all reactions
  const renderPopoverContent = () => (
    <PopoverContent
      className="flex w-fit gap-4 p-2"
      onOpenAutoFocus={(e) => e.preventDefault()}
    >
      {/* Existing reactions */}
      {existingReactions.map(([emoji, data]) => {
        const emojiObj = emojis.find((e) => e.emoji === emoji);
        return (
          <div key={emoji} className="flex items-center justify-between gap-2">
            <ReactionButton
              emoji={emoji}
              animated_url={emojiObj?.animated_url}
              users={data.users}
              onReactSuccessful={handleReactSuccessful}
              onReactFailed={handleReactFailed}
              currentUserId={user?.id}
              count={data.total}
              postId={postId}
              postType={postType}
            />
          </div>
        );
      })}

      {/* Available reactions */}
      {availableEmojis.map((emojiObj) => (
        <div
          key={emojiObj.emoji}
          className="flex items-center justify-between gap-2"
        >
          <ReactionButton
            emoji={emojiObj.emoji}
            animated_url={emojiObj.animated_url}
            onReactSuccessful={handleReactSuccessful}
            onReactFailed={handleReactFailed}
            postId={postId}
            postType={postType}
          />
        </div>
      ))}
    </PopoverContent>
  );

  return (
    <div className="fixed right-0 bottom-7 left-0 z-50 flex h-12 w-full flex-wrap justify-center 2xl:h-14">
      <div className="relative mx-auto flex h-12 max-w-full shrink flex-nowrap items-center justify-center space-x-2 rounded-full border border-neutral-200 bg-white px-2 py-1 text-sm text-neutral-800 shadow-xl">
        {/* Reactions Section */}
        <Popover>
          <PopoverTrigger asChild>{renderReactionSummary()}</PopoverTrigger>
          {renderPopoverContent()}
        </Popover>
        <div className="h-5 w-[1px] shrink-0 bg-neutral-200" />

        {/* Comments Button */}
        <Button
          variant="ghost"
          size="sm"
          className="h-9 cursor-pointer rounded-xl"
          onClick={handleComment}
        >
          <MessageCircle className="size-5 text-neutral-700" />
          <span className="text-sm font-medium text-neutral-800">
            {comments.length}
          </span>
        </Button>

        <div className="h-5 w-[1px] shrink-0 bg-neutral-200" />

        {/* List Button */}
        <Button
          variant="ghost"
          size="sm"
          className="size-9 cursor-pointer rounded-full"
        >
          <List className="size-5 text-neutral-700 transition-colors" />
        </Button>

        <div className="h-5 w-[1px] shrink-0 bg-neutral-200" />

        {/* Share Button */}
        <Button
          variant="ghost"
          size="sm"
          className="size-9 cursor-pointer rounded-full"
          onClick={handleShare}
        >
          <Share2 className="size-5 text-neutral-700 transition-colors" />
        </Button>
      </div>

      {/* Comments Offcanvas */}
      <CommentsOffcanvas
        isOpen={commentsOpen}
        onClose={() => setCommentsOpen(false)}
        comments={comments}
        onAddComment={handleAddComment}
        onLikeComment={handleLikeComment}
        onReplyComment={handleReplyComment}
      />
    </div>
  );
}
