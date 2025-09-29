"use client";

import { useState } from "react";

import { BlogCard } from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

interface BlogStory {
  id?: string;
  slug?: string;
  title?: string;
  excerpt?: string;
  description?: string;
  cover_image_url?: string;
  author_name?: string;
  author_avatar?: string;
  published_at?: string;
  category?: {
    slug: string;
    title: string;
  };
  authors?: Array<{
    user_name: React.ReactNode;
    full_name: string;
    avatar_url: string;
  }>;
}

interface LoadMoreBlogsProps {
  initialStories: BlogStory[];
  totalCount: number;
  basePath?: string;
  tableLoadMore?: string;
}

const POSTS_PER_LOAD = 6;

export function LoadMoreBlogs({
  initialStories,
  totalCount,
  basePath,
  tableLoadMore = "stories_overview",
}: LoadMoreBlogsProps) {
  const [additionalStories, setAdditionalStories] = useState<BlogStory[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(initialStories.length);
  const [hasMore, setHasMore] = useState(initialStories.length < totalCount);

  const loadMore = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    try {
      const supabase = createClient();

      const { data: stories, error } = await supabase
        .from(tableLoadMore)
        .select("*", { count: "exact" })
        .order("published_at", { ascending: false })
        .order("created_at", { ascending: false })
        .range(currentOffset, currentOffset + POSTS_PER_LOAD - 1);

      if (error) {
        console.error("Error loading stories:", error);
        throw new Error("Failed to load more stories");
      }

      if (stories && stories.length > 0) {
        setAdditionalStories((prev) => [...prev, ...stories]);
        setCurrentOffset((prev) => prev + stories.length);

        // Tính hasMore dựa trên tổng số bài viết đã load
        const totalLoaded =
          initialStories.length + additionalStories.length + stories.length;
        setHasMore(totalLoaded < totalCount);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error loading more stories:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chỉ hiển thị các bài viết mới được load thêm */}
      {additionalStories.length > 0 && (
        <>
          {additionalStories.map((story: BlogStory, idx: number) => (
            <BlogCard
              key={story.id || `additional-${idx}`}
              story={story}
              index={idx}
              basePath={basePath}
            />
          ))}
        </>
      )}

      {/* Fill remaining grid slots for additional stories if needed */}
      {additionalStories.length > 0 &&
        (() => {
          // Calculate how many items are in the last row of additional stories
          const itemsPerRow = 3; // md:grid-cols-3
          const totalAdditionalItems = additionalStories.length;
          const itemsInLastRow = totalAdditionalItems % itemsPerRow;

          // If last row is not full, add empty divs to fill it
          const emptySlotsNeeded =
            itemsInLastRow > 0 ? itemsPerRow - itemsInLastRow : 0;

          return emptySlotsNeeded > 0
            ? Array.from({ length: emptySlotsNeeded }).map((_, idx) => (
                <div
                  key={`additional-empty-${idx}`}
                  className="hidden size-full md:block"
                ></div>
              ))
            : null;
        })()}

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center !border-r-0 bg-neutral-50 py-8 md:col-span-3">
          <Button
            onClick={loadMore}
            disabled={isLoading}
            variant="outline"
            size="lg"
            className="w-full max-w-md cursor-pointer rounded-3xl"
          >
            {isLoading ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-neutral-300 border-t-transparent" />
                Show more posts
              </>
            ) : (
              "Show more posts"
            )}
          </Button>
        </div>
      )}
    </>
  );
}
