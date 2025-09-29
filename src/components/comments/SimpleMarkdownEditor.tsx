"use client";

import React, { useState } from "react";

import MDEditor from "@uiw/react-md-editor";
import { Edit3, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";

import "./markdown-editor.css";

interface SimpleMarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (content: string) => void;
  onCancel?: () => void;
  className?: string;
}

export function SimpleMarkdownEditor({
  value,
  onChange,
  onSubmit,
  onCancel,
  className = "",
}: SimpleMarkdownEditorProps) {
  const [isPreview, setIsPreview] = useState(false);

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Toggle Switch: Writer - Preview */}
      <div className="flex items-center justify-center">
        <div className="flex items-center rounded-lg bg-gray-100 p-1">
          <button
            type="button"
            onClick={() => setIsPreview(false)}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
              !isPreview
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Edit3 className="mr-1 inline h-3 w-3" />
            Writer
          </button>
          <button
            type="button"
            onClick={() => setIsPreview(true)}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
              isPreview
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Eye className="mr-1 inline h-3 w-3" />
            Preview
          </button>
        </div>
      </div>

      <div data-color-mode="light" className="wmd-editor">
        <MDEditor
          value={value}
          onChange={(val) => onChange(val || "")}
          preview={isPreview ? "preview" : "edit"}
          hideToolbar={false}
          visibleDragbar={false}
          height={140}
          data-color-mode="light"
          textareaProps={{
            placeholder: "Write your comment...",
            style: {
              fontSize: 13,
              lineHeight: 1.5,
            },
          }}
          toolbarHeight={40}
          enableScroll={false}
        />
      </div>

      {/* Action Buttons */}
      {(onSubmit || onCancel) && (
        <div className="flex items-center justify-end gap-2">
          {onCancel && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onCancel}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
          )}
          {onSubmit && (
            <Button
              type="button"
              onClick={() => onSubmit(value)}
              size="sm"
              className="bg-blue-600 text-white hover:bg-blue-700"
              disabled={!value.trim()}
            >
              Comment
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
