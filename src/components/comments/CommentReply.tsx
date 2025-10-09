"use client";

import React, { useState } from "react";

import { SimpleQuillEditor } from "./SimpleQuillEditor";

interface CommentReplyProps {
  commentId: string;
  onReply?: (commentId: string, content: string) => void;
  onCancel?: () => void;
}

export function CommentReply({
  commentId,
  onReply,
  onCancel,
}: CommentReplyProps) {
  const [replyContent, setReplyContent] = useState("");

  const handleSubmitReply = (content: string) => {
    if (content.trim()) {
      onReply?.(commentId, content);
      setReplyContent("");
      onCancel?.();
    }
  };

  return (
    <div className="ml-11 space-y-4 border-l-2 border-gray-100 pl-6">
      <div className="flex items-center gap-2">
        <h4 className="text-sm font-medium text-gray-700">Write a reply</h4>
      </div>
      <div className="">
        <SimpleQuillEditor
          value={replyContent}
          onChange={setReplyContent}
          onSubmit={handleSubmitReply}
          onCancel={onCancel}
          className="text-sm"
        />
      </div>
    </div>
  );
}
