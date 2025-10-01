import { ContentPage } from "@/components/content/ContentPage";
import { generatePage } from "@/lib/generatePage";
import POST_TYPE_CONFIG from "@/lib/post-types-config.json";
import { createStaticClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Learning & Development",
  description:
    "Explore our collection of learning resources, courses, and educational content to enhance your skills and knowledge.",
  openGraph: {
    title: "Learning & Development",
    description:
      "Explore our collection of learning resources, courses, and educational content to enhance your skills and knowledge.",
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
const INITIAL_POSTS_COUNT =
  POST_TYPE_CONFIG.learning.pagination.initialPostsCount;

const POST_TYPE_ID = POST_TYPE_CONFIG.learning.id; // Learning

const LearningPage = generatePage(async () => {
  // Initialize Supabase client
  const supabase = await createStaticClient();

  // Build queries
  const categoriesQuery = supabase
    .from(POST_TYPE_CONFIG.learning.api.categoriesTable)
    .select(
      "title, description, slug, categories_post_types!inner(post_type_id)",
    )
    .eq("categories_post_types.post_type_id", POST_TYPE_ID)
    .order("updated_at", { ascending: false });

  const learningQuery = supabase
    .from(POST_TYPE_CONFIG.learning.api.table)
    .select("*", { count: "exact" });

  // Execute queries in parallel for better performance
  const [
    { data: learning, error: loadLearningError, count: learningCount },
    { data: categories, error: loadCategoriesError },
  ] = await Promise.all([
    learningQuery
      .order("published_at", { ascending: false })
      .order("created_at", { ascending: false })
      .range(0, INITIAL_POSTS_COUNT - 1),
    categoriesQuery,
  ]);

  // Handle errors gracefully
  if (loadLearningError) {
    console.error("Error loading learning:", loadLearningError);
  }
  if (loadCategoriesError) {
    console.error("Error loading categories:", loadCategoriesError);
  }

  return (
    <ContentPage
      title={POST_TYPE_CONFIG.learning.metadata.title}
      description={POST_TYPE_CONFIG.learning.metadata.description}
      basePath={POST_TYPE_CONFIG.learning.basePath}
      tableLoadMore={POST_TYPE_CONFIG.learning.api.table}
      stories={learning}
      categories={categories}
      storiesCount={learningCount}
      initialPostsCount={INITIAL_POSTS_COUNT}
      initialStories={learning || []}
    />
  );
});

export default LearningPage;
