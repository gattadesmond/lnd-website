import { ContentGrid } from "./ContentGrid";
import { ContentPageHeader } from "./ContentPageHeader";

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
  slug: string;
  id?: string;
  title: string;
  description?: string;
}

interface ContentPageProps {
  title: string;
  description: string;
  basePath: string;
  stories: BlogStory[] | null;
  categories: BlogCategory[] | null;
  storiesCount: number | null;
  initialPostsCount: number;
  currentCategory?: string | null;
  initialStories: BlogStory[];
}

export function ContentPage({
  title,
  description,
  basePath,
  stories,
  categories,
  storiesCount,
  initialPostsCount,
  currentCategory,
  initialStories,
}: ContentPageProps) {
  return (
    <>
      <ContentPageHeader
        title={title}
        description={description}
        categories={categories}
        basePath={basePath}
        currentCategory={currentCategory}
      />

      <ContentGrid
        stories={stories}
        storiesCount={storiesCount}
        initialPostsCount={initialPostsCount}
        initialStories={initialStories}
      />

      <div className="h-0 border-t border-neutral-200" />
    </>
  );
}
