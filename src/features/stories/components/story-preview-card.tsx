import React from "react";
import Image from "next/image";
import Link from "next/link";

import { format } from "date-fns";
import { EyeIcon, HeartIcon } from "lucide-react";

import { CatTag } from "@/features/stories/components/cat-tag";
import { Story } from "@/features/stories/schemas";
import { ProfileAvatarV2 } from "@/features/users/components/profile-avatar-api-v2";
import { cn } from "@/lib/utils";
import { chakra } from "@/styles/fonts";

interface StoryPreviewCardProps {
  item: Story;
}

export function StoryPreviewCard({ item }: StoryPreviewCardProps) {
  const { authors } = item;
  const dateTime = item.publishDate || item.publishedAt;

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border-2 border-slate-800 bg-slate-900">
      <div className="relative aspect-video shrink-0 overflow-hidden">
        {item?.coverImageUrl && (
          <Link href={`/stories/${item.urlRewrite}`}>
            <Image
              alt=""
              width={330}
              height={218}
              loading="lazy"
              src={`${item.coverImageUrl}`}
              className="absolute top-0 left-0 size-full object-cover"
            />
          </Link>
        )}
        <div className="absolute top-2 right-2 flex items-center space-x-4">
          {item.categoryName.map((cate, index: number) => (
            <CatTag key={index} name={cate} />
          ))}
        </div>
      </div>
      <div className="shrink-0 px-4 pt-4">
        <Link href={`/article/${item?.urlRewrite}`}>
          <h2
            className={cn(
              "mb-2 text-xl leading-tight font-bold hover:text-pink-300",
              chakra.className,
            )}
          >
            {item?.title}
          </h2>
        </Link>
      </div>

      <p className={cn("line-clamp-2 px-4 text-sm text-slate-300")}>
        {item?.description}
      </p>

      <div className="flex-1 leading-[0]">&nbsp;</div>

      <div className="flex items-center space-x-3 p-4">
        <ProfileAvatarV2 authors={authors} />
        <div className="grow-1">
          <div className="flex items-center space-x-1 leading-none">
            {authors.map((author, index: number) => (
              <Link
                href={`/profile/${author.userName}`}
                className="text-sm font-semibold"
                key={author.userName}
              >
                {author.userName}
                {index < authors.length - 1 && ", "}
              </Link>
            ))}
          </div>
          <div className="flex items-center text-[13px] text-slate-300">
            {dateTime && (
              <time dateTime={dateTime}>
                {format(dateTime, "MMM dd, yyyy")}
              </time>
            )}
            {item.totalViews && (
              <>
                <div className="flex items-center">
                  {item.totalViews && (
                    <div
                      className={cn(
                        "dots line-clamp-2 flex items-center space-x-1 text-sm text-slate-300",
                      )}
                    >
                      <EyeIcon className="size-4" />
                      <div className="text-xs"> {item.totalViews}</div>
                    </div>
                  )}
                  {item.totalLikes && (
                    <div
                      className={cn(
                        "dots line-clamp-2 flex items-center space-x-1 text-sm text-slate-300",
                      )}
                    >
                      <HeartIcon className="size-4" />
                      <div className="text-xs">{item.totalLikes}</div>
                    </div>
                  )}
                </div>
                <style jsx>
                  {`
                    .dots {
                      position: relative;
                    }
                    .dots:before {
                      align-self: center;
                      background-color: rgb(51 65 85);
                      content: "";
                      height: 3px;
                      margin: 0 0.5em;
                      width: 3px;
                    }
                  `}
                </style>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
