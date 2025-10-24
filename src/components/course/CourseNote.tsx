"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

import "react-quill-new/dist/quill.snow.css";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

function CourseNote() {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
    ],
  };

  const formats = ["bold", "italic", "underline", "list"];

  return (
    <>
      <div className="quill-editor-note w-full">
        <ReactQuill
          theme="snow"
          value={""}
          onChange={() => {}}
          modules={modules}
          formats={formats}
          placeholder="Write your notes..."
        />
      </div>
      <style jsx global>{`
        .quill-editor-note .ql-container.ql-snow {
          border: none;
        }
        .quill-editor-note .ql-toolbar.ql-snow {
          border: none;
          border-bottom: 1px solid #e0e0e0;
        }
      `}</style>
    </>
  );
}

export default CourseNote;
