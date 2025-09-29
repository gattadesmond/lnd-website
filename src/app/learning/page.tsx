import { ContentPage } from "@/components/content/ContentPage";
import { generatePage } from "@/lib/generatePage";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Learning Resources",
  description:
    "Access our comprehensive learning materials, tutorials, and educational content designed to help you grow and develop new skills.",
  openGraph: {
    title: "Learning Resources",
    description:
      "Access our comprehensive learning materials, tutorials, and educational content designed to help you grow and develop new skills.",
    url: "https://product.momo.vn/learning",
    siteName: "LnD Hub",
    images: [
      {
        url: "https://product.momo.vn/og-learning.png",
        width: 1200,
        height: 675,
      },
    ],
  },
};

export const revalidate = 60;

// Số bài viết hiển thị ban đầu
const INITIAL_POSTS_COUNT = 9;

const POST_TYPE_ID = 3; // Learning

const LearningPage = generatePage(async () => {
  // Initialize Supabase client
  const supabase = await createClient();

  // Build queries
  const categoriesQuery = supabase
    .from("categories")
    .select(
      "title, description, slug, categories_post_types!inner(post_type_id)",
    )
    .eq("categories_post_types.post_type_id", POST_TYPE_ID)
    .order("updated_at", { ascending: false });

  const storiesQuery = supabase
    .from("stories_overview")
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
    console.error("Error loading learning resources:", loadStoriesError);
  }
  if (loadCategoriesError) {
    console.error("Error loading categories:", loadCategoriesError);
  }

  return (
    <ContentPage
      title="Learning Resources"
      description="Access our comprehensive learning materials, tutorials, and educational content designed to help you grow and develop new skills."
      basePath="/learning"
      stories={stories}
      categories={categories}
      storiesCount={storiesCount}
      initialPostsCount={INITIAL_POSTS_COUNT}
      initialStories={stories || []}
    />
  );
});

export default LearningPage;
