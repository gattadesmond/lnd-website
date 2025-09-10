import { ArticleStrapi } from "@/features/stories/components/story-strapi";
import { generateDataArticle, generateDataCate } from "@/lib/generate-data";
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

const resourceStory = `https://product.momo.vn:1338/api/story-contents?populate=deep&sort=publishedAt:desc&pagination[page]=1&pagination[pageSize]=6`;
const resourceCategory = `https://product.momo.vn:1338/api/category-tags?populate=deep&filters[types]=STORY`;

export default async function ArticlePage() {
  const responseStory = await fetch(resourceStory).then(
    async (res) => await res.json(),
  );
  const responseListCategory = await fetch(resourceCategory).then(
    async (res) => await res.json(),
  );

  if (!responseStory || !responseListCategory) {
    return {
      notFound: true,
      revalidate: 60 * 2,
    };
  }

  const listDataCategoriesFilter = generateDataCate({
    data: responseListCategory,
  });

  const listDataArticle = generateDataArticle({ data: responseStory });

  return (
    <ArticleStrapi
      listDataArticle={listDataArticle}
      listDataCategoriesFilter={listDataCategoriesFilter}
      responseStory={responseStory}
    />
  );
}
