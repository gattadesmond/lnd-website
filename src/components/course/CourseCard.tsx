import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CourseCardProps {
  course: {
    id: string | number;
    name: string;
    description: string;
    slug: string;
    thumbnail_url?: string;
  };
}

export function CourseCard({ course }: CourseCardProps) {
  // Get first letter of course name for the icon
  const initial = course.name.charAt(0).toUpperCase();

  return (
    <div className="flex w-full flex-col items-center justify-between rounded-[12px] bg-white p-4 text-sm shadow-(--box-shadow-small) md:flex-row md:px-6">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="relative flex h-[60px] w-[52px] shrink-0">
          <div className="h-full w-2 shrink-0 rounded-l-[4px] bg-linear-to-r from-[#2e2e2e] via-[#3e3e3e] to-[#2e2e2e]" />
          <div className="flex h-full w-full items-center justify-center rounded-r-[2px] bg-linear-to-br from-gray-300 to-gray-500">
            <div className="flex aspect-square size-[28px] items-center justify-center rounded-full bg-black/50 p-1.5 text-white [box-shadow:0_0.5_rgba(255,255,255,0.15)]">
              {initial}
            </div>
          </div>
        </div>
        <div className="mt-2 text-center md:mt-0 md:ml-6 md:space-y-0 md:text-left">
          <p className="mb-2 text-[16px] leading-[24px] font-medium md:mb-0">
            {course.name}
          </p>
          <div className="mt-2 mb-4 md:mb-0">
            <p className="text-copy-14 text-gray-900">{course.description}</p>
          </div>
        </div>
      </div>
      <div>
        <Button variant="outline" className="cursor-pointer" asChild>
          <Link href={`/courses/${course.slug}`} className="block">
            <span className="font-semibold">Start</span>{" "}
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
