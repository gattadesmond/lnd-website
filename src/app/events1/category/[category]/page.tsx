import { notFound } from "next/navigation";

import { ContentPage } from "@/components/content/ContentPage";
import { generatePage } from "@/lib/generatePage";
import { createClient } from "@/lib/supabase/server";

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
    title: `${categoryTitle} Events | PLG Hub`,
    description: `Explore ${categoryTitle} events and workshops from the PLG Hub team.`,
    openGraph: {
      title: `${categoryTitle} Events | PLG Hub`,
      description: `Explore ${categoryTitle} events and workshops from the PLG Hub team.`,
      url: `https://plg-hub.com/events/category/${category}`,
      siteName: "PLG Hub",
      images: [
        {
          url: "https://plg-hub.com/og-events.png",
          width: 1200,
          height: 675,
        },
      ],
    },
    twitter: {
      title: `${categoryTitle} Events | PLG Hub`,
      card: "summary_large_image",
    },
  };
}

export const revalidate = 60;

// Số bài viết hiển thị ban đầu
const INITIAL_POSTS_COUNT = 9;

const POST_TYPE_ID = 2; // Event

const CategoryPage = generatePage(
  async ({ params }: { params: Promise<{ category: string }> }) => {
    const { category } = await params;

    // Initialize Supabase client
    const supabase = await createClient();

    const categoriesQuery = supabase
      .from("categories")
      .select(
        "title, description, slug, categories_post_types!inner(post_type_id)",
      )
      .eq("categories_post_types.post_type_id", POST_TYPE_ID)
      .order("updated_at", { ascending: false });

    const storiesQuery = supabase
      .from("stories_overview")
      .select("*", { count: "exact" })
      .eq("category_slug", category);

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

    // Ensure categories is not null before using find
    const categoryNow = categories?.find((i) => i.slug === category);

    // Handle errors gracefully
    if (loadStoriesError) {
      console.error("Error loading events:", loadStoriesError);
    }
    if (loadCategoriesError) {
      console.error("Error loading categories:", loadCategoriesError);
    }

    // If category not found, show 404
    if (!categoryNow) {
      notFound();
    }

    return (
      <ContentPage
        title={categoryNow.title}
        description={categoryNow.description || ""}
        basePath="/events"
        stories={stories}
        categories={categories}
        storiesCount={storiesCount}
        initialPostsCount={INITIAL_POSTS_COUNT}
        currentCategory={category}
        initialStories={stories || []}
      />
    );
  },
);

export default CategoryPage;
