"use client";

import { useState } from "react";

import { BlogCard } from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
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
  category_title?: string;
  authors?: Array<{
    user_name: React.ReactNode;
    full_name: string;
    avatar_url: string;
  }>;
}

interface LoadMoreBlogsProps {
  initialStories: BlogStory[];
  totalCount: number;
}

const POSTS_PER_LOAD = 6;

export function LoadMoreBlogs({
  initialStories,
  totalCount,
}: LoadMoreBlogsProps) {
  const [additionalStories, setAdditionalStories] = useState<BlogStory[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(initialStories.length);
  const [hasMore, setHasMore] = useState(initialStories.length < totalCount);

  const loadMore = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    try {
      console.log(
        "Loading more stories with offset:",
        currentOffset,
        "limit:",
        POSTS_PER_LOAD,
      );
      console.log("Initial stories count:", initialStories.length);
      console.log(
        "Initial stories IDs:",
        initialStories.map((s) => s.id),
      );

      const supabase = createClient();

      const { data: stories, error } = await supabase
        .from("stories_overview")
        .select("*")
        .order("published_at", { ascending: false })
        .range(currentOffset, currentOffset + POSTS_PER_LOAD - 1);

      if (error) {
        console.error("Error loading stories:", error);
        throw new Error("Failed to load more stories");
      }

      console.log("Received stories:", stories?.length);
      console.log(
        "Received stories IDs:",
        stories?.map((s) => s.id),
      );

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
            />
          ))}
        </>
      )}

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
