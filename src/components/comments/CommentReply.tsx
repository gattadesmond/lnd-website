"use client";

import React, { useState } from "react";

import { SimpleMarkdownEditor } from "./SimpleMarkdownEditor";

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
    <div className="ml-10">
      <SimpleMarkdownEditor
        value={replyContent}
        onChange={setReplyContent}
        onSubmit={handleSubmitReply}
        onCancel={onCancel}
        className="text-sm"
      />
    </div>
  );
}
