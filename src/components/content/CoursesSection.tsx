import React from "react";

import Book from "@/components/book";
import { cn } from "@/lib/utils";

import { Container } from "../container";

function CoursesSection() {
  return (
    <Container isBorderX className="bg-white py-16">
      <div
        className="absolute inset-4 z-0"
        style={{
          background: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.1) 1px, transparent 0)",
          backgroundSize: "12px 12px",
        }}
      />
      <div className="relative z-[1] px-4 text-center sm:px-10">
        <h2 className="font-display text-3xl font-medium text-neutral-900 sm:text-4xl sm:leading-[1.15]">
          Keep Growing with Our Courses
        </h2>
        <p className="sm:text-md mt-5 text-neutral-500">
          Continue learning by using our courses.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 p-8 py-10 lg:grid-cols-3">
        <Book />
      </div>
    </Container>
  );
}

export default CoursesSection;
