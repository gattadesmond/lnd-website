"use client";

import React, { useState } from "react";

import { SimpleQuillEditor } from "./SimpleQuillEditor";

interface CommentInputProps {
  onAddComment?: (content: string) => void;
}

export function CommentInput({ onAddComment }: CommentInputProps) {
  const [newComment, setNewComment] = useState("");
  console.log("🚀 ~ CommentInput ~ newComment:", newComment);

  const handleSubmitComment = (content: string) => {
    if (content.trim()) {
      onAddComment?.(content);
      setNewComment("");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-gray-600">Share your thoughts</p>
      </div>
      <SimpleQuillEditor
        value={newComment}
        onChange={setNewComment}
        onSubmit={handleSubmitComment}
      />
    </div>
  );
}
