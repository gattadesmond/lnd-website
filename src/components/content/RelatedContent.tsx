import Image from "next/image";
import Link from "next/link";

import { DateDisplay } from "@/components/ui/DateDisplay";

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

interface RelatedContentProps {
  content: RelatedContent[];
  currentContentId?: string;
  title?: string;
  basePath?: string; // "/stories", "/events", "/learning"
  className?: string;
}

export function RelatedContent({
  content,
  currentContentId,
  title = "Read more",
  basePath = "/stories",
  className = "",
}: RelatedContentProps) {
  // Filter out current content and limit to 3
  const filteredContent = content
    .filter((item) => item.id !== currentContentId)
    .slice(0, 3);

  if (filteredContent.length === 0) {
    return null;
  }

  return (
    <div
      className={`border-grid-border border-t p-4 backdrop-blur-lg sm:p-10 ${className}`}
    >
      <div className="flex flex-col gap-y-4">
        <p className="py-2 font-display text-xl font-medium">{title}</p>
        <ul className="flex flex-col gap-y-6">
          {filteredContent.map((item) => (
            <li key={item.id}>
              <Link
                className="group flex flex-col items-center gap-4 sm:flex-row"
                href={`${basePath}/${item.slug}`}
              >
                {item.cover_image_url && (
                  <Image
                    alt={item.title}
                    loading="lazy"
                    width={200}
                    height={100}
                    decoding="async"
                    className="blur-0 aspect-video w-full shrink-0 rounded-lg border border-neutral-200 sm:w-[200px]"
                    src={item?.cover_image_url || "/placeholder-blog.jpg"}
                    style={{ color: "transparent" }}
                  />
                )}
                <div className="flex flex-col space-y-2">
                  <p className="line-clamp-1 font-display font-medium text-neutral-700 underline-offset-4 group-hover:underline">
                    {item.title}
                  </p>
                  {(item.excerpt || item.description) && (
                    <p className="line-clamp-2 text-sm text-neutral-500 underline-offset-2 group-hover:underline">
                      {item.excerpt || item.description}
                    </p>
                  )}
                  <DateDisplay
                    date={item.published_at}
                    variant="display"
                    className="text-xs text-neutral-400 underline-offset-2 group-hover:underline"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
