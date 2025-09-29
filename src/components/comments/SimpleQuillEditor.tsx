"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";

// Import Quill CSS from react-quill-new
import "react-quill-new/dist/quill.snow.css";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface SimpleQuillEditorProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (content: string) => void;
  onCancel?: () => void;
  className?: string;
}

export function SimpleQuillEditor({
  value,
  onChange,
  onSubmit,
  onCancel,
  className = "",
}: SimpleQuillEditorProps) {
  // Quill toolbar configuration - simplified
  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
    ],
  };

  const formats = ["bold", "italic", "underline", "list"];

  // Convert HTML to plain text for validation
  const getPlainText = (html: string) => {
    if (typeof window === "undefined") return html;
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Editor */}
      <div className="quill-editor">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          placeholder="Write your comment..."
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
              className="text-gray-700 hover:bg-gray-50"
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
              disabled={!value.trim() || getPlainText(value).trim() === ""}
            >
              Comment
            </Button>
          )}
        </div>
      )}

      {/* Tailwind CSS for Quill */}
      <style jsx global>{`
        .quill-editor .ql-editor {
          @apply min-h-[100px] p-3 text-sm leading-relaxed;
        }

        .quill-editor .ql-toolbar {
          @apply rounded-t-lg border border-b-0 border-gray-200 bg-gray-50;
        }

        .quill-editor .ql-container {
          @apply rounded-b-lg border border-t-0 border-gray-200;
        }

        .quill-editor .ql-editor.ql-blank::before {
          @apply text-gray-400 italic;
        }

        .quill-editor .ql-toolbar .ql-formats {
          @apply mr-3;
        }

        .quill-editor .ql-toolbar button {
          @apply h-7 w-7 rounded hover:bg-gray-100;
        }

        .quill-editor .ql-toolbar button.ql-active {
          @apply bg-blue-100 text-blue-600;
        }
      `}</style>
    </div>
  );
}
