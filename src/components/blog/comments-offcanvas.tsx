"use client";

import React from "react";

import { CommentInput, CommentsList } from "@/components/comments";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface Comment {
  id: string;
  author: {
    name: string;
    avatar?: string;
    isAuthor?: boolean;
  };
  content: string;
  createdAt: string;
  likes: number;
  replies?: Comment[];
  isLiked?: boolean;
}

interface CommentsOffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
  comments: Comment[];
  onAddComment?: (content: string) => void;
  onLikeComment?: (commentId: string) => void;
  onReplyComment?: (commentId: string, content: string) => void;
}

export function CommentsOffcanvas({
  isOpen,
  onClose,
  comments,
  onAddComment,
  onLikeComment,
  onReplyComment,
}: CommentsOffcanvasProps) {
  // Fix body overflow when sheet closes
  // useEffect(() => {
  //   if (!isOpen) {
  //     // Restore body overflow when sheet is closed
  //     document.body.style.overflow = '';
  //   }
  // }, [isOpen]);

  const handleClose = () => {
    // Ensure body overflow is restored
    // document.body.style.overflow = '';
    onClose();
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={handleClose}>
        <SheetContent className="w-[400px] gap-0 sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Comments ({comments.length})</SheetTitle>
          </SheetHeader>

          <div className="flex-1 space-y-4 overflow-y-auto p-4 pt-0">
            <CommentInput onAddComment={onAddComment} />

            <CommentsList
              comments={comments}
              onLikeComment={onLikeComment}
              onReplyComment={onReplyComment}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
