"use client";

import React, { useState } from "react";

// Removed MDEditor import - using HTML rendering instead
import { Heart, Reply } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { CommentReply } from "./CommentReply";

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

interface CommentItemProps {
  comment: Comment;
  onLikeComment?: (commentId: string) => void;
  onReplyComment?: (commentId: string, content: string) => void;
}

export function CommentItem({
  comment,
  onLikeComment,
  onReplyComment,
}: CommentItemProps) {
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-6">
      {/* Main Comment */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={comment.author.avatar} />
            <AvatarFallback className="bg-gray-100 text-sm font-medium text-gray-700">
              {comment.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-900">
              {comment.author.name}
            </span>
            {comment.author.isAuthor && (
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                Author
              </span>
            )}
            <span className="text-sm text-gray-500">
              {formatDate(comment.createdAt)}
            </span>
          </div>
        </div>
        <div className="ml-11">
          <div
            className="prose prose-sm max-w-none leading-relaxed text-gray-800"
            dangerouslySetInnerHTML={{ __html: comment.content }}
          />
        </div>
        <div className="ml-11 flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onLikeComment?.(comment.id)}
            className={`h-8 gap-1.5 px-2 text-sm transition-colors ${
              comment.isLiked
                ? "text-red-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Heart
              className={`h-4 w-4 ${comment.isLiked ? "fill-red-500" : ""}`}
            />
            <span>{comment.likes}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              setReplyingTo(replyingTo === comment.id ? null : comment.id)
            }
            className="h-8 gap-1.5 px-2 text-sm text-gray-500 transition-colors hover:text-gray-700"
          >
            <Reply className="h-4 w-4" />
            <span>Reply</span>
          </Button>
        </div>
      </div>

      {/* Reply Input */}
      {replyingTo === comment.id && (
        <CommentReply
          commentId={comment.id}
          onReply={onReplyComment}
          onCancel={() => setReplyingTo(null)}
        />
      )}

      {/* Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-11 space-y-4 border-l-2 border-gray-100 pl-6">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-gray-400"></div>
            <span className="text-xs font-medium tracking-wide text-gray-500 uppercase">
              {comment.replies.length}{" "}
              {comment.replies.length === 1 ? "Reply" : "Replies"}
            </span>
          </div>
          {comment.replies.map((reply) => (
            <div key={reply.id} className="space-y-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-7 w-7 ring-1 ring-gray-200">
                  <AvatarImage src={reply.author.avatar} />
                  <AvatarFallback className="bg-gray-100 text-xs font-medium text-gray-600">
                    {reply.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">
                    {reply.author.name}
                  </span>
                  {reply.author.isAuthor && (
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                      Author
                    </span>
                  )}
                  <span className="text-xs text-gray-500">
                    {formatDate(reply.createdAt)}
                  </span>
                </div>
              </div>
              <div className="ml-10">
                <div
                  className="prose prose-sm max-w-none leading-relaxed text-gray-800"
                  dangerouslySetInnerHTML={{ __html: reply.content }}
                />
              </div>
              <div className="ml-10 flex items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onLikeComment?.(reply.id)}
                  className={`h-7 gap-1 px-2 text-xs transition-colors ${
                    reply.isLiked
                      ? "text-red-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Heart
                    className={`h-3.5 w-3.5 ${
                      reply.isLiked ? "fill-red-500" : ""
                    }`}
                  />
                  <span>{reply.likes}</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
