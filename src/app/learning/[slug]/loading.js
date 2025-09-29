import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="space-y-4 p-4 pt-16 pb-12 sm:px-12">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-4 w-32" />
        </div>
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-6 w-full" />
      </div>

      {/* Content Skeleton */}
      <div className="grid grid-cols-3 border-x border-neutral-200">
        <div className="col-span-3 md:col-span-2">
          <Skeleton className="h-64 w-full" />
          <div className="space-y-4 p-5 sm:px-12">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
        <div className="hidden border-l border-neutral-200 p-10 md:block">
          <Skeleton className="mb-4 h-6 w-24" />
          <Skeleton className="mb-2 h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    </div>
  );
}
