"use client";

import React from "react";

import { CommentItem } from "./CommentItem";

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

interface CommentsListProps {
  comments: Comment[];
  onLikeComment?: (commentId: string) => void;
  onReplyComment?: (commentId: string, content: string) => void;
}

export function CommentsList({
  comments,
  onLikeComment,
  onReplyComment,
}: CommentsListProps) {
  if (comments.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="text-center">
          <p className="text-sm text-gray-500">No comments yet</p>
          <p className="mt-1 text-xs text-gray-400">Be the first to comment!</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onLikeComment={onLikeComment}
          onReplyComment={onReplyComment}
        />
      ))}
    </>
  );
}
