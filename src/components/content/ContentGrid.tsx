import { BlogCard } from "@/components/blog/blog-card";
import { LoadMoreBlogs } from "@/components/blog/load-more-blogs";
import { Container } from "@/components/container";

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
  view_count?: number;
  reacted_users_count?: number;
  authors?: Array<{
    user_name: React.ReactNode;
    full_name: string;
    avatar_url: string;
  }>;
}

interface ContentGridProps {
  stories: BlogStory[] | null;
  storiesCount: number | null;
  initialStories: BlogStory[];
  basePath?: string;
  tableLoadMore?: string;
}

export function ContentGrid({
  stories,
  storiesCount,
  initialStories,
  basePath,
  tableLoadMore,
}: ContentGridProps) {
  return (
    <Container className="relative max-w-[1080px]">
      <div className="[&>*]:border-grid-border grid grid-cols-1 gap-0 border-x border-neutral-200 md:grid-cols-3 max-md:[&>*]:border-t md:[&>*:not(:nth-child(3n))]:border-r md:[&>*:nth-child(n+4)]:border-t">
        {stories && stories.length > 0 ? (
          stories.map((story: BlogStory, idx: number) => (
            <BlogCard
              key={story.id || idx}
              story={story}
              index={idx}
              basePath={basePath}
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
            <h3 className="text-lg font-medium text-neutral-900">
              No content found
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Check back later for new content!
            </p>
          </div>
        )}

        {stories && stories.length > 0 && (
          <LoadMoreBlogs
            initialStories={initialStories}
            totalCount={storiesCount || 0}
            basePath={basePath}
            tableLoadMore={tableLoadMore}
          />
        )}

        {/* Fill remaining grid slots if needed */}
        {stories &&
          stories.length > 0 &&
          (() => {
            // Calculate how many items are in the last row
            const itemsPerRow = 3; // md:grid-cols-3
            const totalItems = stories.length;
            const itemsInLastRow = totalItems % itemsPerRow;

            // If last row is not full, add empty divs to fill it
            const emptySlotsNeeded =
              itemsInLastRow > 0 ? itemsPerRow - itemsInLastRow : 0;

            return emptySlotsNeeded > 0
              ? Array.from({ length: emptySlotsNeeded }).map((_, idx) => (
                  <div
                    key={`empty-${idx}`}
                    className="hidden size-full md:block"
                  ></div>
                ))
              : null;
          })()}
      </div>
    </Container>
  );
}
