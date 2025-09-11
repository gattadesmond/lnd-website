import { FadeIn } from "@/components/fade-in";
import { StoriesSection } from "@/features/stories/components/stories-section";
import { STORIES } from "@/features/stories/mocks";
import { generatePageMetadata } from "@/lib/generate-page-metadata";
import { cn } from "@/lib/utils";
import { chakra } from "@/styles/fonts";

const pageDescription =
  "Explore our Blog for a wealth of insightful articles and tips, covering a diverse array of topics. Stay informed, inspired, and ahead of the curve with our expertly crafted content.";
const pageTitle = "Product Stories";
const pageUrl = "https://product.momo.vn/article";

export const generateMetadata = generatePageMetadata({
  description: pageDescription,
  title: pageTitle,
  url: pageUrl,
});

const mockCategories = [
  "All",
  "Product Management",
  "Career",
  "Kỹ năng làm việc",
  "Product Culture",
];

export default async function ArticlePage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 pt-14 pb-5 text-center md:px-5 md:pt-20 md:pb-10">
        <FadeIn delay={0.1}>
          <h1
            className={cn(
              "mb-4 text-4xl font-bold md:text-6xl",
              chakra.className,
            )}
          >
            Product Stories
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 text-white/80 md:mt-10 md:text-lg">
            Explore our Blog for a wealth of insightful articles and tips,
            covering a diverse array of topics. Stay informed, inspired, and
            ahead of the curve with our expertly crafted content.
          </p>
        </FadeIn>
      </section>
      <StoriesSection stories={STORIES} categories={mockCategories} />;
    </>
  );
}
