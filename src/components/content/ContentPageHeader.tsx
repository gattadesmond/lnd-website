import { Container } from "@/components/container";

import { CategoryNavigation } from "./CategoryNavigation";

interface BlogCategory {
  slug: string;
  id?: string;
  title: string;
  description?: string;
}

interface ContentPageHeaderProps {
  title: string;
  description: string;
  categories: BlogCategory[] | null;
  basePath: string;
  currentCategory?: string | null;
}

export function ContentPageHeader({
  title,
  description,
  categories,
  basePath,
  currentCategory,
}: ContentPageHeaderProps) {
  return (
    <section className="overflow-hidden border-b border-neutral-200">
      <Container
        isBorderX
        className="relative"
        isGridArea
        borderXClassName="[mask-image:linear-gradient(transparent,black)]"
      >
        <div className="relative pt-16 pb-6 sm:px-12 sm:pb-20">
          <h1 className="mt-5 text-left font-display text-4xl font-medium text-neutral-900 sm:text-5xl sm:leading-[1.15]">
            {title}
          </h1>
          <p className="mt-6 text-lg text-neutral-500 sm:text-xl">
            {description}
          </p>

          <CategoryNavigation
            categories={categories}
            basePath={basePath}
            currentCategory={currentCategory}
          />
        </div>
      </Container>
    </section>
  );
}
