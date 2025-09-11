/* eslint-disable */

import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";

import { StoryPreviewCard } from "@/features/stories/components/story-preview-card";
import { cn } from "@/lib/utils";
import { chakra } from "@/styles/fonts";

export function PostsGroupSubjectStrapi({
  heading,
  isPostsPage = false,
  dataStorys,
  idPost,
}: {
  heading: string;
  moreUrl?: string;
  isPostsPage?: boolean;
  dataStorys: any;
  idPost?: number;
}) {
  if (!dataStorys || dataStorys?.length === 0) {
    return <p className="mt-4 text-slate-400">No data available.</p>;
  }

  const filteredData = dataStorys
    .filter((post) => post?.id !== idPost)
    .slice(0, 6);

  const dataStories = isPostsPage ? filteredData : dataStorys;

  return (
    <>
      {heading && (
        <div className="mb-6 flex items-center space-x-5 md:mb-8">
          <h2
            className={cn(
              "shrink-0 text-2xl font-bold md:text-3xl",
              chakra.className,
            )}
          >
            {heading}
          </h2>
          <Link
            className="flex shrink-0 cursor-pointer items-center pt-2 font-mono text-sm text-pink-500 hover:underline md:ml-8"
            href={`/article`}
          >
            View all <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      )}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dataStories?.map((post: any, index: number) => {
          return <StoryPreviewCard story={post} key={post.id} />;
        })}
      </div>
    </>
  );
}
