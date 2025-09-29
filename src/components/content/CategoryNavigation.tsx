import Link from "next/link";

import { Button } from "@/components/ui/button";

interface BlogCategory {
  slug: string;
  id?: string;
  title: string;
}

interface CategoryNavigationProps {
  categories: BlogCategory[] | null;
  basePath: string; // "/stories", "/events", "/learning"
  currentCategory?: string | null; // slug của category hiện tại
}

export function CategoryNavigation({
  categories,
  basePath,
  currentCategory,
}: CategoryNavigationProps) {
  return (
    <nav className="mt-10 flex w-fit flex-wrap items-center gap-x-2 gap-y-4">
      {/* Overview Button */}
      <Button
        asChild
        className="text-sm font-medium"
        size="sm"
        variant={!currentCategory ? "default" : "ghost"}
      >
        <Link href={basePath}>Overview</Link>
      </Button>

      {/* Category Buttons */}
      {categories &&
        categories.length > 0 &&
        categories.map((category: BlogCategory) => {
          const isActive = currentCategory === category.slug;

          return (
            <Button
              key={category.title}
              asChild
              variant={isActive ? "default" : "ghost"}
              className="text-sm font-medium"
              size="sm"
            >
              <Link href={`${basePath}/category/${category?.slug}`}>
                {category.title}
              </Link>
            </Button>
          );
        })}
    </nav>
  );
}
