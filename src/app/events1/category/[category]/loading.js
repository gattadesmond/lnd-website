import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-12 w-64" />
        <Skeleton className="h-6 w-96" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-28" />
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 gap-0 border-x border-neutral-200 md:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="border-b border-neutral-200 p-6">
            <Skeleton className="mb-4 h-48 w-full" />
            <Skeleton className="mb-2 h-6 w-3/4" />
            <Skeleton className="mb-2 h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
}
