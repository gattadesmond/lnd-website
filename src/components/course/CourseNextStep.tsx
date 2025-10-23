import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CourseNextStepProps {
  nextTitle: string;
  nextDescription: string;
  nextChapterUrl: string;
  className?: string;
}

export function CourseNextStep({
  nextTitle,
  nextDescription,
  nextChapterUrl,
  className,
}: CourseNextStepProps) {
  return (
    <div className={cn("mx-auto max-w-3xl space-y-8", className)}>
      {/* Chapter Completion Section */}

      {/* Next Chapter Card */}
      <Card className="border-gray-200 bg-white shadow-sm">
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-sm font-medium tracking-wide text-gray-500 uppercase">
              Next Up
            </div>
            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              {nextTitle}
            </h3>
            <p className="mt-1 text-sm text-balance text-gray-600">
              {nextDescription}
            </p>
          </div>

          <div className="flex justify-center pt-2">
            <Button asChild className="px-6 py-3">
              <Link href={nextChapterUrl} className="flex items-center gap-2">
                Bắt đầu
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
