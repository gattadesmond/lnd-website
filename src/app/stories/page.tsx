import { StoriesSection } from "@/features/stories/components/stories-section";
import { STORIES } from "@/features/stories/mocks";
import { generatePageMetadata } from "@/lib/generate-page-metadata";

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
  return <StoriesSection stories={STORIES} categories={mockCategories} />;
}
