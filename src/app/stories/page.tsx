import { ContentPage } from "@/components/content/ContentPage";
import { generatePage } from "@/lib/generatePage";
import POST_TYPE_CONFIG from "@/lib/post-types-config.json";
import { createClient } from "@/lib/supabase/server";

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

export const revalidate = POST_TYPE_CONFIG.config.revalidate;

// Số bài viết hiển thị ban đầu
const INITIAL_POSTS_COUNT = POST_TYPE_CONFIG.story.pagination.initialPostsCount;

const POST_TYPE_ID = POST_TYPE_CONFIG.story.id; // Story

const BlogPage = generatePage(async () => {
  // Initialize Supabase client
  const supabase = await createClient();

  // Build queries
  const categoriesQuery = supabase
    .from(POST_TYPE_CONFIG.story.api.categoriesTable)
    .select(
      "title, description, slug, categories_post_types!inner(post_type_id)",
    )
    .eq("categories_post_types.post_type_id", POST_TYPE_ID)
    .order("updated_at", { ascending: false });

  const storiesQuery = supabase
    .from(POST_TYPE_CONFIG.story.api.table)
    .select("*", { count: "exact" });

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

  return (
    <ContentPage
      title={POST_TYPE_CONFIG.story.metadata.title}
      description={POST_TYPE_CONFIG.story.metadata.description}
      basePath={POST_TYPE_CONFIG.story.basePath}
      stories={stories}
      categories={categories}
      storiesCount={storiesCount}
      initialPostsCount={INITIAL_POSTS_COUNT}
      initialStories={stories || []}
    />
  );
});

export default BlogPage;
