import { createDynamicClient } from "@/lib/supabase/server";

interface RelatedContent {
  id: string;
  slug: string;
  title: string;
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
  view_count?: number;
  reacted_users_count?: number;
  authors?: Array<{
    user_name: React.ReactNode;
    full_name: string;
    avatar_url: string;
  }>;
}

interface UseRelatedContentParams {
  tableName: string;
  categorySlug: string;
  currentContentId: string;
  limit?: number;
}

export async function useRelatedContent({
  tableName,
  categorySlug,
  currentContentId,
  limit = 4, // Get 4 to account for filtering out current content
}: UseRelatedContentParams): Promise<RelatedContent[]> {
  const supabase = await createDynamicClient();

  try {
    const { data: content, error } = await supabase
      .from(tableName)
      .select("*")
      .eq("category->>slug", categorySlug)
      .neq("id", currentContentId) // Exclude current content
      .order("published_at", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      console.error("Error fetching related content:", error);
      return [];
    }

    return content || [];
  } catch (error) {
    console.error("Error in useRelatedContent:", error);
    return [];
  }
}
