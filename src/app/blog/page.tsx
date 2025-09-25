import Link from "next/link";
import { redirect } from "next/navigation";

import { compact, map, uniqBy } from "lodash-es";

import { BlogCard } from "@/components/blog/blog-card";
import { LoadMoreBlogs } from "@/components/blog/load-more-blogs";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { generatePage } from "@/lib/generatePage";
import { createClient } from "@/lib/supabase/server";

// TypeScript interfaces for better type safety
interface BlogSearchParams {
  page?: string;
  sort?: string;
  q?: string;
}

interface BlogPageProps {
  searchParams: Promise<BlogSearchParams>;
}

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

export const metadata = {
  title: "Product Stories ",
  description:
    "Explore our collection of product stories, insights, and learnings from building and scaling product-led growth strategies.",
  openGraph: {
    title: "Product Stories ",
    description:
      "Explore our collection of product stories, insights, and learnings from building and scaling product-led growth strategies.",
    url: "https://plg-hub.com/blog",
    siteName: "PLG Hub",
    images: [
      {
        url: "https://plg-hub.com/og-blog.png",
        width: 1200,
        height: 675,
      },
    ],
  },
};

export const revalidate = 60;

// Số bài viết hiển thị ban đầu
const INITIAL_POSTS_COUNT = 9;

const BlogPage = generatePage(async ({ searchParams }: BlogPageProps) => {
  // Extract search parameters with type safety
  const { page } = await searchParams;

  // Initialize Supabase client
  const supabase = await createClient();

  // Parse and validate page number
  const currentPage = page ? parseInt(page, 10) : 1;

  // Build queries
  const categoriesQuery = supabase
    .from("stories_overview")
    .select("category_title")
    .not("category_title", "is", null);

  const storiesQuery = supabase
    .from("stories_overview")
    .select("*", { count: "exact" })
    .order("published_at", { ascending: false });

  // Execute queries in parallel for better performance
  const [
    { data: stories, error: loadStoriesError, count: storiesCount },
    { data: categories, error: loadCategoriesError },
  ] = await Promise.all([
    storiesQuery
      .order("published_at", { ascending: false })
      .range(
        (currentPage - 1) * INITIAL_POSTS_COUNT,
        currentPage * INITIAL_POSTS_COUNT - 1,
      ),
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
    ? uniqBy(compact(map(categories, "category_title")), (title) => title).map(
        (title) => ({ id: title, title }),
      )
    : [];

  // Calculate pagination
  const totalPages = storiesCount
    ? Math.ceil(storiesCount / INITIAL_POSTS_COUNT)
    : 1;

  // Redirect if page is out of range
  if (totalPages > 0 && currentPage > totalPages) {
    redirect("/blog");
  }

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
              Product Stories
            </h1>
            <p className="mt-6 text-lg text-neutral-500 sm:text-xl">
              Explore our Blog for a wealth of insightful articles and tips,
              covering a diverse array of topics. Stay informed, inspired, and
              ahead of the curve with our expertly crafted content.
            </p>

            {/* Category Navigation */}
            <nav className="mt-10 hidden w-fit items-center gap-x-2 gap-y-4 sm:flex sm:flex-wrap">
              <Button
                asChild
                className="text-sm font-medium"
                size="sm"
                variant="default"
              >
                <a href="/blog">Overview</a>
              </Button>
              {distinctCategories &&
                distinctCategories.length > 0 &&
                distinctCategories.map((category: BlogCategory) => (
                  <Button
                    key={category.title}
                    asChild
                    variant="ghost"
                    className="text-sm font-medium"
                    size="sm"
                  >
                    <Link
                      href={`/blog/category/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {category.title}
                    </Link>
                  </Button>
                ))}
            </nav>

            {/* Mobile Category Button */}
            <Button
              variant="outline"
              className="mt-10 flex h-10 w-full items-center gap-2 sm:hidden"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-«R2adrninb»"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-list"
              >
                <line x1={8} x2={21} y1={6} y2={6} />
                <line x1={8} x2={21} y1={12} y2={12} />
                <line x1={8} x2={21} y1={18} y2={18} />
                <line x1={3} x2="3.01" y1={6} y2={6} />
                <line x1={3} x2="3.01" y1={12} y2={12} />
                <line x1={3} x2="3.01" y1={18} y2={18} />
              </svg>
              <p>Categories</p>
            </Button>
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
        </div>

        {/* Load More Component */}
        {stories && stories.length > 0 && (
          <LoadMoreBlogs
            initialStories={stories}
            totalCount={storiesCount || 0}
          />
        )}
      </Container>

      <div className="h-0 border-t border-neutral-200" />
    </>
  );
});

export default BlogPage;
