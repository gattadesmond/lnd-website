"use client";

import React, { useState } from "react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Event } from "../schemas";
import { EventPreviewCard } from "./event-preview-card";

interface EventsSectionProps {
  events: Event[];
  categories: string[];
}

export function EventsSection({ events, categories }: EventsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <Container>
      {/* Category Filters - Updated Styling */}
      <div className="mb-8 flex flex-wrap items-center gap-3 md:mb-10">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            onClick={() => setSelectedCategory(category)}
            className={cn(
              "text-sm transition-colors duration-200 ease-in-out",
              {
                "bg-primary-700 text-primary-foreground":
                  selectedCategory === category,
              },
            )}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        {events.map((event) => (
          <EventPreviewCard key={event.id} event={event} />
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
    </Container>
  );
}
