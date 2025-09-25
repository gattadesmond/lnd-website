import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { generatePage } from "@/lib/generatePage";
import { createClient } from "@/lib/supabase/server";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
  searchParams: Promise<{
    page: string | undefined;
  }>;
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

const CategoryPage = generatePage(
  async ({ params, searchParams }: CategoryPageProps) => {
    const [supabase, { category }, { page }] = await Promise.all([
      createClient(),
      params,
      searchParams,
    ]);

    const currentPage = page ? parseInt(page, 10) : 1;
    const categoryTitle = category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    // Get categories for navigation
    const categoriesQuery = supabase.from("categories").select("title");

    // Get stories for this category
    const storiesQuery = supabase
      .from("stories_overview")
      .select("*", { count: "exact" })
      .eq("category_title", categoryTitle);

    const [
      { data: stories, error: loadStoriesError, count: storiesCount },
      { data: categories, error: loadCategoriesError },
    ] = await Promise.all([
      storiesQuery
        .order("published_at", { ascending: false })
        .range((currentPage - 1) * 6, currentPage * 6 - 1),
      categoriesQuery,
    ]);

    // Handle errors
    if (loadStoriesError) {
      console.error("Error loading stories:", loadStoriesError);
    }
    if (loadCategoriesError) {
      console.error("Error loading categories:", loadCategoriesError);
    }

    // If no stories found for this category, show 404
    if (!stories || stories.length === 0) {
      notFound();
    }

    const totalPages = storiesCount ? Math.ceil(storiesCount / 6) : 1;

    if (totalPages > 0 && currentPage > totalPages) {
      redirect(`/blog/category/${category}`);
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
              <div className="mb-4 flex items-center gap-2 text-sm text-neutral-500">
                <Link href="/blog" className="hover:text-neutral-700">
                  Blog
                </Link>
                <span>/</span>
                <span className="text-neutral-900">{categoryTitle}</span>
              </div>

              <h1 className="mt-5 text-left font-display text-4xl font-medium text-neutral-900 sm:text-5xl sm:leading-[1.15]">
                {categoryTitle}
              </h1>
              <p className="mt-6 text-lg text-neutral-500 sm:text-xl">
                Discover insightful articles and tips about{" "}
                {categoryTitle.toLowerCase()}. Stay informed and ahead of the
                curve with our expertly crafted content.
              </p>

              <nav className="mt-10 hidden w-fit items-center gap-x-2 gap-y-4 sm:flex sm:flex-wrap">
                <Button
                  asChild
                  variant="ghost"
                  className="text-sm font-medium"
                  size="sm"
                >
                  <a href="/blog">Overview</a>
                </Button>
                {categories && categories.length > 0 ? (
                  categories.map((cat: { title: string }) => (
                    <Button
                      key={cat.title}
                      asChild
                      variant={
                        categoryTitle === cat.title ? "default" : "ghost"
                      }
                      className="text-sm font-medium"
                      size="sm"
                    >
                      <a
                        href={`/blog/category/${cat.title.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {cat.title}
                      </a>
                    </Button>
                  ))
                ) : (
                  // Fallback categories if Supabase data is not available
                  <>
                    <Button
                      asChild
                      variant="ghost"
                      className="text-sm font-medium"
                      size="sm"
                    >
                      <a href="/blog/category/company">Company News</a>
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      className="text-sm font-medium"
                      size="sm"
                    >
                      <a href="/blog/category/education">Education</a>
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      className="text-sm font-medium"
                      size="sm"
                    >
                      <a href="/blog/category/engineering">Engineering</a>
                    </Button>
                  </>
                )}
                <Button
                  asChild
                  variant="ghost"
                  className="text-sm font-medium"
                  size="sm"
                >
                  <a href="/changelog">Changelog</a>
                </Button>
              </nav>

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

        <Container isBorderX>
          <div className="[&>*]:border-grid-border grid grid-cols-1 md:grid-cols-3 max-md:[&>*]:border-t md:[&>*:not(:nth-child(3n))]:border-r md:[&>*:nth-child(n+4)]:border-t">
            {stories && stories.length > 0 ? (
              stories.map(
                (
                  story: {
                    id?: string;
                    slug?: string;
                    title?: string;
                    excerpt?: string;
                    description?: string;
                    cover_image_url?: string;
                    author_name?: string;
                    author_avatar?: string;
                    published_at?: string;
                  },
                  idx: number,
                ) => (
                  <Link
                    key={story.id || idx}
                    className="flex flex-col transition-all hover:bg-neutral-50"
                    href={`/blog/${story.slug || "post"}`}
                  >
                    <Image
                      alt={story.title || "Blog post"}
                      width={2400}
                      height={1260}
                      className="aspect-[1200/630] object-cover"
                      src={
                        story.cover_image_url || "/images/placeholder-blog.jpg"
                      }
                    />
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <h2 className="line-clamp-2 font-display text-lg font-bold text-neutral-900">
                          {story.title || "Untitled Post"}
                        </h2>
                        <p className="mt-2 line-clamp-2 text-sm text-neutral-500">
                          {story.excerpt ||
                            story.description ||
                            "No description available"}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center space-x-2">
                        <div className="flex items-center -space-x-2">
                          <Image
                            alt={story.author_name || "Author"}
                            width={32}
                            height={32}
                            className="rounded-full transition-all group-hover:brightness-90"
                            src={
                              story.author_avatar ||
                              "/images/placeholder-avatar.jpg"
                            }
                          />
                        </div>
                        <time
                          dateTime={
                            story.published_at || new Date().toISOString()
                          }
                          className="text-sm text-neutral-500"
                        >
                          {story.published_at
                            ? new Date(story.published_at).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                },
                              )
                            : "Recently"}
                        </time>
                      </div>
                    </div>
                  </Link>
                ),
              )
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                <h3 className="text-lg font-medium text-neutral-900">
                  No articles found in this category
                </h3>
                <p className="mt-2 text-sm text-neutral-500">
                  Check back later for new content in {categoryTitle}!
                </p>
              </div>
            )}

            {/* Fill remaining grid slots if needed */}
            {stories && stories.length > 0 && stories.length < 6 && (
              <>
                {Array.from({ length: 6 - stories.length }).map((_, idx) => (
                  <div
                    key={`empty-${idx}`}
                    className="hidden size-full md:block"
                  ></div>
                ))}
              </>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                {currentPage > 1 && (
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={`/blog/category/${category}?page=${currentPage - 1}`}
                    >
                      Previous
                    </Link>
                  </Button>
                )}

                <span className="text-sm text-neutral-500">
                  Page {currentPage} of {totalPages}
                </span>

                {currentPage < totalPages && (
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={`/blog/category/${category}?page=${currentPage + 1}`}
                    >
                      Next
                    </Link>
                  </Button>
                )}
              </nav>
            </div>
          )}
        </Container>
      </>
    );
  },
);

export default CategoryPage;
