"use client";

import React, { useEffect, useState } from "react";

import parse from "html-react-parser";

interface Heading {
  id: string;
  text: string;
  level: number;
}

function TableOfContent({ listHeadings }: { listHeadings: Heading[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    // Set first heading as active by default
    if (listHeadings && listHeadings.length > 0) {
      setActiveId(listHeadings[0].id);
    }
  }, [listHeadings]);

  useEffect(() => {
    // Scroll spy functionality
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "80px 0px -70% 0px", // Adjust as needed
        threshold: 0.1,
      },
    );

    // Observe all headings
    listHeadings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [listHeadings]);

  if (!listHeadings || listHeadings.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 grid gap-4 border-l-2 border-gray-200">
      {listHeadings.map((heading) => {
        const paddingLeft = heading.level === 2 ? 16 : 24;
        const isActive = activeId === heading.id;

        return (
          <a
            key={heading.id}
            data-active={isActive ? "true" : "false"}
            href={`#${heading.id}`}
            className="relative -ml-0.5"
            style={{ paddingLeft }}
            onClick={(e) => {
              e.preventDefault();
              // setActiveId(heading.id);
              // Update URL hash
              window.history.pushState(null, "", `#${heading.id}`);
              document
                .getElementById(heading.id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <p
              className={`text-sm transition-colors ${isActive ? "text-black" : "text-gray-500"}`}
            >
              {heading.text && parse(heading.text)}
            </p>
            {isActive && (
              <div
                className="absolute top-0 left-0 h-full w-0.5 bg-black"
                style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
              />
            )}
          </a>
        );
      })}
    </div>
  );
}

export default TableOfContent;
