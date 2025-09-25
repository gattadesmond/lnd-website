import Link from "next/link";
import { notFound } from "next/navigation";

import { compact, map, uniqBy } from "lodash-es";

import { BlogCard } from "@/components/blog/blog-card";
import { LoadMoreBlogs } from "@/components/blog/load-more-blogs";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { generatePage } from "@/lib/generatePage";
import { createClient } from "@/lib/supabase/server";

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

interface BlogCategory {
  id?: string;
  title: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryTitle = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${categoryTitle} | PLG Hub Blog`,
    description: `Explore ${categoryTitle} articles and insights from the PLG Hub team.`,
    openGraph: {
      title: `${categoryTitle} | PLG Hub Blog`,
      description: `Explore ${categoryTitle} articles and insights from the PLG Hub team.`,
      url: `https://plg-hub.com/blog/category/${category}`,
      siteName: "PLG Hub",
      images: [
        {
          url: "https://plg-hub.com/og.png",
          width: 1200,
          height: 675,
        },
      ],
    },
    twitter: {
      title: `${categoryTitle} | PLG Hub Blog`,
      card: "summary_large_image",
    },
  };
}

export const revalidate = 60;

// Số bài viết hiển thị ban đầu
const INITIAL_POSTS_COUNT = 9;

const CategoryPage = generatePage(
  async ({ params }: { params: Promise<{ category: string }> }) => {
    const { category } = await params;
    console.log("🚀 ~ category:", category);

    // Initialize Supabase client
    const supabase = await createClient();

    // Build queries
    const categoriesQuery = supabase
      .from("stories_overview")
      .select("category_title")
      .not("category_title", "is", null);

    const storiesQuery = supabase
      .from("stories_overview")
      .select("*", { count: "exact" })
      .eq("category_title", category);

    // Execute queries in parallel for better performance
    const [
      { data: stories, error: loadStoriesError, count: storiesCount },
      { data: categories, error: loadCategoriesError },
    ] = await Promise.all([
      storiesQuery
        .order("published_at", { ascending: false })
        .order("created_at", { ascending: false })
        .range(0, INITIAL_POSTS_COUNT - 1),
      categoriesQuery,
    ]);

    // Handle errors gracefully
    if (loadStoriesError) {
      console.error("Error loading stories:", loadStoriesError);
    }
    if (loadCategoriesError) {
      console.error("Error loading categories:", loadCategoriesError);
    }

    // Process categories to get distinct values
    const distinctCategories = categories
      ? uniqBy(
          compact(map(categories, "category_title")),
          (title) => title,
        ).map((title) => ({ id: title, title }))
      : [];

    const categoryTitle = category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return (
      <>
        <section className="overflow-hidden border-b border-neutral-200">
          <Container
            isBorderX
            className="relative"
            isGridArea
            borderXClassName="[mask-image:linear-gradient(transparent,black)]"
          >
            <div className="relative pt-16 pb-6 sm:px-12 sm:pb-20">
              <h1 className="mt-5 text-left font-display text-4xl font-semibold text-neutral-900 sm:text-5xl sm:leading-[1.15]">
                {categoryTitle}
              </h1>
              <p className="mt-6 text-lg text-neutral-500 sm:text-xl">
                Explore our {categoryTitle} articles and insights from the PLG
                Hub team.
              </p>

              {/* Category Navigation */}
              <nav className="mt-10 flex w-fit flex-wrap items-center gap-x-2 gap-y-4">
                <Button
                  asChild
                  className="text-sm font-medium"
                  size="sm"
                  variant="ghost"
                >
                  <Link href="/blog">All Categories</Link>
                </Button>
                {distinctCategories &&
                  distinctCategories.length > 0 &&
                  distinctCategories.map((cat: BlogCategory) => (
                    <Button
                      key={cat.title}
                      asChild
                      variant={
                        cat.title === categoryTitle ? "default" : "ghost"
                      }
                      className="text-sm font-medium"
                      size="sm"
                    >
                      <Link
                        href={`/blog/category/${cat.title.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {cat.title}
                      </Link>
                    </Button>
                  ))}
              </nav>
            </div>
          </Container>
        </section>

        {/* Blog Grid */}
        <Container className="relative max-w-[1080px]">
          <div className="[&>*]:border-grid-border grid grid-cols-1 gap-0 border-x border-neutral-200 md:grid-cols-3 max-md:[&>*]:border-t md:[&>*:not(:nth-child(3n))]:border-r md:[&>*:nth-child(n+4)]:border-t">
            {stories && stories.length > 0 ? (
              stories.map((story: BlogStory, idx: number) => (
                <BlogCard key={story.id || idx} story={story} index={idx} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                <h3 className="text-lg font-medium text-neutral-900">
                  No blog posts found
                </h3>
                <p className="mt-2 text-sm text-neutral-500">
                  Check back later for new content!
                </p>
              </div>
            )}

            {stories && stories.length > 0 && (
              <LoadMoreBlogs
                initialStories={stories}
                totalCount={storiesCount || 0}
              />
            )}

            {/* Fill remaining grid slots if needed */}
            {stories &&
              stories.length > 0 &&
              stories.length < INITIAL_POSTS_COUNT && (
                <>
                  {Array.from({
                    length: INITIAL_POSTS_COUNT - stories.length,
                  }).map((_, idx) => (
                    <div
                      key={`empty-${idx}`}
                      className="hidden size-full md:block"
                    ></div>
                  ))}
                </>
              )}

            {/* Load More Component */}
          </div>
        </Container>

        <div className="h-0 border-t border-neutral-200" />
      </>
    );
  },
);

export default CategoryPage;
