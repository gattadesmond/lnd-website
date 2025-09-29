"use client";

import React from "react";
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

      {/* Enhanced Tailwind CSS for Quill */}
      <style jsx global>{`
        .quill-editor .ql-editor {
          @apply min-h-[120px] p-4 text-sm leading-relaxed focus:outline-none;
          font-family: inherit;
        }

        .quill-editor .ql-toolbar {
          @apply rounded-t-xl border border-b-0 border-gray-300 bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-2;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .quill-editor .ql-container {
          @apply rounded-b-xl border border-t-0 border-gray-300 shadow-sm transition-all duration-200;
        }

        .quill-editor .ql-container:focus-within {
          @apply border-blue-400 shadow-md;
        }

        .quill-editor .ql-editor.ql-blank::before {
          @apply text-gray-500 italic;
          font-size: 14px;
        }

        .quill-editor .ql-toolbar .ql-formats {
          @apply mr-4;
        }

        .quill-editor .ql-toolbar button {
          @apply h-8 w-8 rounded-lg transition-all duration-200 hover:bg-white hover:shadow-sm;
          border: 1px solid transparent;
        }

        .quill-editor .ql-toolbar button:hover {
          @apply border-gray-200;
        }

        .quill-editor .ql-toolbar button.ql-active {
          @apply bg-blue-500 text-white shadow-md;
        }

        .quill-editor .ql-toolbar .ql-stroke {
          stroke: currentColor;
        }

        .quill-editor .ql-toolbar .ql-fill {
          fill: currentColor;
        }

        .quill-editor .ql-editor blockquote {
          @apply border-l-4 border-blue-400 pl-4 text-gray-700 italic;
        }

        .quill-editor .ql-editor ul,
        .quill-editor .ql-editor ol {
          @apply pl-6;
        }

        .quill-editor .ql-editor li {
          @apply mb-1;
        }
      `}</style>
    </div>
  );
}
