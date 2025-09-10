/* eslint-disable */

import React from "react";
import Link from "next/link";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function ProfileAvatarV2({ authors }: any) {
  return (
    <div className="flex -space-x-4">
      {authors?.map((author) => {
        return (
          <HoverCard key={author.id} openDelay={200} closeDelay={200}>
            <HoverCardTrigger className="shrink-0 cursor-pointer">
              <div className="authors-avatar flex shrink-0 items-center">
                {author && (
                  <div>
                    {author?.avatar ? (
                      <img
                        src={author?.avatar}
                        width={40}
                        height={40}
                        alt=""
                        loading="lazy"
                        className="border-opacity-30 size-10 rounded-full border border-white bg-slate-700 object-cover"
                      />
                    ) : (
                      <div className="border-opacity-30 flex size-10 items-center justify-center rounded-full border border-white bg-slate-700 text-xl">
                        {author?.userName?.[0]?.toUpperCase()}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="rounded-lg border border-white/20 bg-slate-900 p-2 opacity-0 md:opacity-100">
              <div className="bg-slate-900">
                <div className="p-3">
                  <div className="flex items-center justify-between space-x-4">
                    {author?.avatar ? (
                      <Link href={`/profile/${author?.userName}`}>
                        <img
                          src={author?.avatar}
                          alt=""
                          width={40}
                          height={40}
                          className="border-opacity-30 size-10 rounded-full border border-white bg-slate-700 object-cover"
                        />
                      </Link>
                    ) : (
                      <div className="border-opacity-30 flex size-10 items-center justify-center rounded-full border border-white bg-slate-700 text-xl">
                        {author?.userName?.[0]?.toUpperCase()}
                      </div>
                    )}
                    <Link href={`/profile/${author?.userName}`}>
                      <button
                        type="button"
                        className="rounded-lg bg-pink-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-pink-500 focus:ring-4 focus:ring-slate-300 focus:outline-hidden"
                      >
                        View Profile
                      </button>
                    </Link>
                  </div>
                  <hr className="my-3 h-[2px] bg-white/20" />
                  <div className="mb-1 text-sm leading-none font-semibold text-white">
                    {author?.fullName}
                  </div>
                  <div className="mb-3 text-xs font-normal text-white/60">
                    @{author?.userName}
                  </div>
                  {/* <div className="w-fit rounded-md border border-pink-700 px-3 py-1 text-xs text-white">
                    {author?.teamsInfo?.teamName}
                  </div> */}
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        );
      })}
    </div>
  );
}
