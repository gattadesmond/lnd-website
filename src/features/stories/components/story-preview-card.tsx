import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Slottable } from "@radix-ui/react-slot";
import { format } from "date-fns";
import { EyeIcon, HeartIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Story } from "@/features/stories/schemas";
import { UserHoverCard } from "@/features/users/components/user-hover-card";
import { cn } from "@/lib/utils";

interface StoryPreviewCardProps {
  story: Story;
}

export function StoryPreviewCard({ story }: StoryPreviewCardProps) {
  const metaItems = [];
  if (story.publishedAt) {
    metaItems.push(
      <time dateTime={story.publishedAt}>
        {format(new Date(story.publishedAt), "MMM dd, yyyy")}
      </time>,
    );
  }
  if (story.totalViews && story.totalViews > 0) {
    metaItems.push(
      <div className="flex items-center gap-1">
        <EyeIcon className="h-3.5 w-3.5" aria-hidden="true" />
        <span>{story.totalViews.toLocaleString()}</span>
      </div>,
    );
  }
  if (story.totalLikes && story.totalLikes > 0) {
    metaItems.push(
      <div className="flex items-center gap-1">
        <HeartIcon className="h-3.5 w-3.5" aria-hidden="true" />
        <span>{story.totalLikes.toLocaleString()}</span>
      </div>,
    );
  }
  return (
    <Card
      className={cn(
        "flex h-full w-full flex-col gap-4 overflow-hidden border-0 bg-card pt-0 pb-2 text-card-foreground shadow-sm",
        "transition-transform duration-300 hover:-translate-y-1",
      )}
    >
      <div className="relative">
        <Link
          href={`/stories/${story.urlRewrite}`}
          aria-label={`Read more about ${story.title}`}
          className="block"
        >
          <Image
            src={story.coverImageUrl}
            alt={story.title}
            width={400}
            height={225}
            className="aspect-video w-full object-cover"
          />
        </Link>
        {story.categoryName?.[0] && (
          <Badge variant="secondary" className="absolute top-3 right-3">
            {story.categoryName[0].toLocaleUpperCase()}
          </Badge>
        )}
      </div>

      <CardContent className="flex flex-1 flex-col px-5 pt-0 pb-2">
        <Link href={`/stories/${story.urlRewrite}`}>
          <h3
            className={cn(
              "hover:text-primary-200 mb-2 line-clamp-2 text-xl leading-tight font-bold tracking-tight hover:underline",
            )}
          >
            {story.title}
          </h3>
        </Link>

        <p className="mb-4 line-clamp-2 flex-grow text-sm text-muted-foreground">
          {story.description}
        </p>

        <div className="mt-auto flex items-center gap-3">
          <div className="flex items-center -space-x-3">
            {story.authors.map((author) => (
              <UserHoverCard key={author.id} user={author}>
                <span className="cursor-pointer">
                  <Avatar className="h-9 w-9 border-2 border-card">
                    <AvatarImage
                      src={author.avatar}
                      alt={author.fullName}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {author.fullName.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </span>
              </UserHoverCard>
            ))}
          </div>
          <div className="text-sm leading-tight">
            <div className="flex flex-wrap items-center gap-x-1.5 font-medium text-foreground">
              {story.authors.map((author, index) => (
                <UserHoverCard key={author.id} user={author}>
                  <Slottable>
                    <Link
                      href={`/profile/${author.userName}`}
                      className="hover:underline"
                    >
                      {author.userName}
                    </Link>
                  </Slottable>
                  {index < story.authors.length - 1 && <span>,</span>}
                </UserHoverCard>
              ))}
            </div>
            <div className="flex flex-wrap items-center text-xs text-muted-foreground">
              {metaItems.map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                  {index < metaItems.length - 1 && (
                    <span className="mx-1.5 font-bold">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
