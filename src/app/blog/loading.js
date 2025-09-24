import { Container } from "@/components/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLoading() {
  return (
    <>
      {/* Header Section Skeleton */}
      <section className="overflow-hidden border-b border-neutral-200">
        <Container
          isBorderX
          className="relative"
          isGridArea
          borderXClassName="[mask-image:linear-gradient(transparent,black)]"
        >
          <div className="relative pt-16 pb-6 sm:px-12 sm:pb-20">
            <Skeleton className="mb-6 h-12 w-64" />
            <Skeleton className="mb-4 h-6 w-96" />
            <Skeleton className="mb-10 h-6 w-80" />

            {/* Navigation Skeleton */}
            <div className="mb-10 hidden gap-2 sm:flex">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-8 w-28" />
              <Skeleton className="h-8 w-32" />
            </div>

            {/* Mobile Button Skeleton */}
            <Skeleton className="h-10 w-full sm:hidden" />
          </div>
        </Container>
      </section>

      {/* Blog Grid Skeleton */}
      <Container isBorderX>
        <div className="[&>*]:border-grid-border grid grid-cols-1 gap-0 md:grid-cols-3 max-md:[&>*]:border-t md:[&>*:not(:nth-child(3n))]:border-r md:[&>*:nth-child(n+4)]:border-t">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="flex flex-col">
              <Skeleton className="aspect-[1200/630] w-full" />
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <Skeleton className="mb-2 h-6 w-full" />
                  <Skeleton className="mb-2 h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
