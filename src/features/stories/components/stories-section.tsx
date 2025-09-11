"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { StoryPreviewCard } from "@/features/stories/components/story-preview-card";
import { Story } from "@/features/stories/schemas";
import { cn } from "@/lib/utils";

interface StoriesSectionProps {
  stories: Story[];
  categories: string[];
}

export function StoriesSection({ stories, categories }: StoriesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section className="container mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">
      {/* Category Filters - Updated Styling */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-3 md:mb-10">
        {categories.map((category) => (
          <Button
            key={category}
            variant="ghost"
            onClick={() => setSelectedCategory(category)}
            className={cn(
              "border border-primary px-5 py-2 text-sm font-semibold text-primary transition-colors duration-200 ease-in-out",
              {
                "bg-primary text-primary-foreground":
                  selectedCategory === category,
              },
            )}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <StoryPreviewCard key={story.id} story={story} />
        ))}
      </div>

      {/* View More Button - Updated Styling for consistency */}
      <div className="mt-12 flex justify-center">
        <Button
          variant="outline"
          className="rounded-2xl border-primary bg-transparent px-8 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          View More
        </Button>
      </div>
    </section>
  );
}
