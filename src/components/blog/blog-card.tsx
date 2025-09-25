import Image from "next/image";
import Link from "next/link";

import { EyeIcon, ThumbsUp } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

interface BlogCardProps {
  story: BlogStory;
  index: number;
}

export function BlogCard({ story, index }: BlogCardProps) {
  return (
    <Link
      key={story.id || index}
      className="flex flex-col transition-all hover:bg-neutral-50"
      href={`/blog/${story.slug || "post"}`}
    >
      <Image
        alt={story.title || "Blog post"}
        width={800}
        height={450}
        className="aspect-[16/9] object-cover"
        src={story.cover_image_url || ""}
      />
      <div className="flex flex-1 flex-col justify-between px-6 py-5">
        <div>
          <h2 className="line-clamp-2 font-display text-lg leading-snug font-semibold text-neutral-900">
            {story.title || "..."}
          </h2>
          <p className="mt-2 line-clamp-2 text-sm text-neutral-500">
            {story.excerpt || story.description || "..."}
          </p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <div className="flex items-center -space-x-2">
            <div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">
              {story.authors &&
                story.authors.length > 0 &&
                story.authors.slice(0, 3).map((author, index) => (
                  <Avatar
                    key={index}
                    className="size-8"
                    style={{ zIndex: story.authors!.length - index }}
                  >
                    <AvatarImage
                      src={author.avatar_url?.trim()}
                      alt={author.full_name?.trim() || "Author"}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-xs">
                      {author.full_name
                        ?.trim()
                        .split(" ")
                        .map((name) => name[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 2) || ""}
                    </AvatarFallback>
                  </Avatar>
                ))}
            </div>
          </div>
          <div className="leading-none">
            <div className="text-sm font-medium text-neutral-800">
              {story.authors &&
                story.authors.length > 0 &&
                story.authors.slice(0, 3).map((author, index) => (
                  <span key={index}>
                    {author.user_name}
                    {index < (story.authors?.slice(0, 3).length ?? 0) - 1 &&
                      ", "}
                  </span>
                ))}
            </div>
            {/* View count và reaction count */}
            <div className="mt-0 flex items-center space-x-3 text-xs text-neutral-500">
              <time
                dateTime={story.published_at || new Date().toISOString()}
                className="text-xs text-neutral-500"
              >
                {story.published_at
                  ? new Date(story.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Recently"}
              </time>

              {story.view_count !== undefined && (
                <div className="flex items-center space-x-1">
                  <EyeIcon className="h-3 w-3" aria-hidden="true" />
                  <span>{story.view_count.toLocaleString()}</span>
                </div>
              )}

              {story.reacted_users_count !== undefined && (
                <div className="flex items-center space-x-1">
                  <ThumbsUp className="h-3 w-3" aria-hidden="true" />
                  <span>{story.reacted_users_count.toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
