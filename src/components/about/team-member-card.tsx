import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  username: string;
  role: string;
  avatar: string;
  profileUrl: string;
}

export function TeamMemberCard({
  name,
  username,
  role,
  avatar,
  profileUrl,
}: TeamMemberCardProps) {
  return (
    <Link href={profileUrl} className="pointer-events-none h-full">
      <Card className="h-full border-slate-200 bg-white shadow-none transition-colors hover:bg-slate-50">
        <CardContent className="flex h-full flex-col items-center p-4 md:p-6">
          <div className="relative">
            <Image
              src={avatar}
              alt={name}
              width={140}
              height={140}
              className="aspect-square h-16 w-16 shrink-0 rounded-full border-2 border-slate-200 bg-slate-100 object-cover md:h-28 md:w-28"
            />
          </div>

          <div className="mt-6 shrink-0 text-center">
            <h3 className="font-bold text-slate-900 uppercase md:text-lg">
              {name}
            </h3>
            <p className="mb-2 text-sm text-slate-500">@{username}</p>
            <p className="text-center text-xs text-slate-700 md:text-sm">
              {role}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
