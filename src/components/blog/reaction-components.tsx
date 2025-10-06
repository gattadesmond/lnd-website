"use client";

import { useState, useTransition } from "react";
import Image from "next/image";

import { addReaction, removeReaction } from "@/actions/reacting";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getErrorMessage } from "@/lib/error-codes";
import { PostType } from "@/lib/post";
import { cn } from "@/lib/utils";
import { notoEmoji } from "@/styles/font";

export type UserSP = { id: string; fullName: string; avatarUrl: string };
export type EmojiData = { emoji: string; animated_url: string };

// Component for displaying reacted users list
export function ReactionUsers({ users }: { users: UserSP[] }) {
  if (!users?.length) return null;
  return (
    <div className="grid gap-2">
      {users.map((user) => (
        <div key={user.id} className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={user.avatarUrl} alt={user.fullName} />
            <AvatarFallback>{user.fullName?.[0] ?? "?"}</AvatarFallback>
          </Avatar>
          <span className="text-xs">{user.fullName}</span>
        </div>
      ))}
    </div>
  );
}

type ReactionButtonProps = {
  emoji: string;
  animated_url?: string;
  count?: number;
  users?: UserSP[];
  currentUserId?: string;
  onReactSuccessful?: (data: {
    reactions_details: Record<string, { total: number; users: UserSP[] }>;
    reactions_count: number;
  }) => void;
  onReactFailed?: (errorMessage: string) => void;
  postId: number;
  postType: PostType;
};

// Enhanced reaction button with hover animations and user display
export function ReactionButton({
  emoji,
  animated_url,
  count,
  users,
  onReactSuccessful,
  onReactFailed,
  currentUserId,
  postId,
  postType,
}: ReactionButtonProps) {
  const [openSheet, setOpenSheet] = useState(false);
  const [pressTimer, setPressTimer] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 640px)").matches;

  const handleLongPressStart = () => {
    if (!isMobile || !users?.length) return;
    const timer = window.setTimeout(() => {
      setOpenSheet(true);
    }, 400);
    setPressTimer(timer);
  };

  const handleLongPressEnd = () => {
    if (pressTimer) {
      window.clearTimeout(pressTimer);
      setPressTimer(null);
    }
  };

  const handleReaction = () => {
    const isUserReacted = users?.some((u) => u.id === currentUserId);

    startTransition(async () => {
      try {
        const result = isUserReacted
          ? await removeReaction({
              emoji,
              postId,
              postType,
            })
          : await addReaction({ emoji, postId, postType });

        if (!result.success) {
          const errorMessage = result.errorCode
            ? getErrorMessage(result.errorCode)
            : isUserReacted
              ? "Failed to remove reaction"
              : "Failed to add reaction";
          onReactFailed?.(errorMessage);
          return;
        }

        if (result.data) {
          onReactSuccessful?.(result.data);
        }
      } catch {
        onReactFailed?.("An unexpected error occurred");
      }
    });
  };

  const buttonContent = (
    <Button
      variant={users?.some((u) => u.id === currentUserId) ? "outline" : "ghost"}
      size="sm"
      disabled={isPending}
      className={cn(
        "group h-8 cursor-pointer rounded-full px-2",
        users?.some((u) => u.id === currentUserId) &&
          "ring-1 ring-blue-200 hover:bg-neutral-100",
      )}
      onClick={handleReaction}
      onTouchStart={handleLongPressStart}
      onTouchEnd={handleLongPressEnd}
      onTouchCancel={handleLongPressEnd}
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span
          className={cn(
            notoEmoji.className,
            "flex size-fit items-center justify-center text-lg group-hover:hidden",
          )}
        >
          {emoji}
        </span>
        {animated_url && (
          <span className="hidden h-full w-full items-center justify-center group-hover:flex">
            <Image
              src={animated_url}
              alt={emoji}
              width={24}
              height={24}
              className="h-5 w-5"
              loading="lazy"
            />
          </span>
        )}
      </span>
      {typeof count === "number" && (
        <span className="ml-1 text-xs font-medium text-neutral-600">
          {count}
        </span>
      )}
    </Button>
  );

  if (!users?.length) return buttonContent;

  return (
    <>
      {/* Desktop: Tooltip */}
      <span className="hidden sm:inline">
        <Tooltip delayDuration={300}>
          <TooltipTrigger asChild>{buttonContent}</TooltipTrigger>
          <TooltipContent side="top" className="min-w-[120px] p-2">
            <ReactionUsers users={users} />
          </TooltipContent>
        </Tooltip>
      </span>

      {/* Mobile: Long press for sheet */}
      <span className="inline sm:hidden">
        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
          <SheetTrigger asChild>{buttonContent}</SheetTrigger>
          <SheetContent side="bottom" className="p-4">
            <div className="mb-2 text-sm font-semibold">Reacted users</div>
            <ReactionUsers users={users} />
          </SheetContent>
        </Sheet>
      </span>
    </>
  );
}
