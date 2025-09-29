"use client";

import React, { useState } from "react";

import { SimpleMarkdownEditor } from "./SimpleMarkdownEditor";

interface CommentInputProps {
  onAddComment?: (content: string) => void;
}

export function CommentInput({ onAddComment }: CommentInputProps) {
  const [newComment, setNewComment] = useState("");

  const handleSubmitComment = (content: string) => {
    if (content.trim()) {
      onAddComment?.(content);
      setNewComment("");
    }
  };

  return (
    <div className="border-b border-gray-200 pb-4">
      <SimpleMarkdownEditor
        value={newComment}
        onChange={setNewComment}
        onSubmit={handleSubmitComment}
      />
    </div>
  );
}
