import Image from "next/image";
import Link from "next/link";

import { format } from "date-fns";
import { StarIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { Event } from "../schemas";

interface EventPreviewCardProps {
  event: Event;
}

export function EventPreviewCard({ event }: EventPreviewCardProps) {
  const bannerText = event.categoryName[0]?.toLocaleUpperCase() || "EVENT";

  return (
    <Card
      className={cn(
        "flex h-full w-full flex-col overflow-hidden border-border bg-card pt-0 pb-2 text-card-foreground shadow-lg",
        "transition-transform duration-300 hover:-translate-y-1",
      )}
    >
      {/* Image and Header Section */}
      <div className="relative bg-muted">
        {event.coverImageUrl && (
          <Link href={`/events/${event.urlRewrite}`} aria-label={event.title}>
            <Image
              src={event.coverImageUrl}
              alt={event.title}
              width={400}
              height={150}
              className="w-full object-cover"
            />
          </Link>
        )}
        <Badge variant={"secondary"} className="absolute top-2 right-2">
          {bannerText}
        </Badge>
      </div>

      {/* Content Section */}
      <CardContent className="flex flex-1 flex-col px-2">
        <Link href={`/events/${event.urlRewrite}`} className="mx-2 block">
          <h3
            className={cn(
              "hover:text-primary-200 mb-2 text-xl leading-tight font-bold tracking-tight hover:underline",
            )}
          >
            {event.title}
          </h3>
        </Link>

        <p className="mx-2 mb-4 line-clamp-2 flex-grow text-sm text-muted-foreground">
          {event.description}
        </p>

        {/* Meta info: Featured status and Date */}
        <div className="mx-2 mb-6 flex items-center gap-2 text-sm font-medium text-green-600">
          {event.isFeatured && (
            <>
              <StarIcon className="h-4 w-4" />
              <span>Featured</span>
            </>
          )}
          {event.isFeatured && event.publishedAt && (
            <span className="text-muted-foreground">•</span>
          )}
          {event.publishedAt && (
            <time dateTime={event.publishedAt} className="text-red-500">
              {format(new Date(event.publishedAt), "MMM d, yyyy")}
            </time>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <Button asChild variant="secondary" className="w-full">
            <Link href={event.urlRewrite}>Quan tâm</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
