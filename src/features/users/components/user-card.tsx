import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { User } from "../schemas";

export const UserCard = (user: User) => {
  const { avatar, userName, fullName, title } = user;
  return (
    <Link
      href={`/profile/${userName}`}
      className="flex h-full flex-col items-center rounded-lg border border-slate-700 bg-slate-900/60 px-2 py-4 break-words hover:bg-slate-800 md:px-4 md:py-6"
    >
      {avatar && (
        <Image
          src={avatar}
          width={64}
          height={64}
          alt={`portrait of ${fullName}`}
          className="border/30 aspect-square size-16 shrink-0 rounded-full border-2 border-white bg-slate-700 object-cover md:size-28"
        />
      )}
      {!avatar && (
        <div className="border/30 flex size-16 shrink-0 items-center justify-center rounded-full border border-white bg-slate-700 text-2xl md:size-28 md:text-5xl">
          {userName[0].toLocaleUpperCase()}
        </div>
      )}
      <div
        className={cn(
          "mt-6 shrink-0 text-center font-bold text-white/80 uppercase md:text-lg",
        )}
      >
        {fullName}
      </div>

      <div className="mb-2 text-sm text-slate-500">@{userName}</div>
      <div className="text-center text-xs text-white md:text-sm">{title}</div>
    </Link>
  );
};
