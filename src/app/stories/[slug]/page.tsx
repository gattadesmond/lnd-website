import { ResolvingMetadata } from "next";

import { ArticleContent } from "@/features/stories/components/story-content";
import axios from "@/lib/axios";
import axiosStrapi from "@/lib/axiosStrapi";
import {
  generateDataArticle,
  generateDataArticleDetail,
} from "@/lib/generate-data";
import { generatePageMetadata } from "@/lib/generate-page-metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async (
  pageProps: PageProps,
  parent: ResolvingMetadata,
) => {
  const { slug } = await pageProps.params;

  const resourceDetailBySlug = `/story-contents/?populate=deep&filters[urlRewrite][$eq]=${slug}`;
  const responseDetailBySlug = await axiosStrapi.get(
    resourceDetailBySlug,
    null,
    true,
  );
  const dataDetailStories = generateDataArticleDetail({
    data: responseDetailBySlug?.data?.[0],
  });

  // if (isEmpty(responseDetailBySlug?.data)) {
  //   return {
  //     notFound: true,
  //     revalidate: 20,
  //   };
  // }
  // return {
  //   props: {
  //     responseDetailBySlug: responseDetailBySlug?.data,
  //     listDataArticle,
  //     responseDetailBE,
  //   },
  //   revalidate: 20,
  // };
  return generatePageMetadata({
    description: dataDetailStories?.description,
    title: dataDetailStories?.title,
    socialImageUrl: dataDetailStories?.coverImageUrl,
    url: `https://product.momo.vn/article/${slug}`,
  })(pageProps, parent);
};

export default async function ArticleContentPage({ params }: PageProps) {
  const { slug } = await params;

  const resourceDetailBySlug = `/story-contents/?populate=deep&filters[urlRewrite][$eq]=${slug}`;
  const responseDetailBySlug = await axiosStrapi.get(
    resourceDetailBySlug,
    null,
    true,
  );
  const resourceStory = `/story-contents?populate=deep&sort=publishDate:desc&pagination[page]=1&pagination[pageSize]=7`;
  const responseDetailBE = await axios.get(
    `/notion/detail-by-slug?urlRewrite=${slug}`,
    null,
    true,
  );

  const responseStory = await axiosStrapi.get(resourceStory, null, true);

  const listDataArticle = generateDataArticle({ data: responseStory });

  return (
    <ArticleContent
      responseDetailBySlug={responseDetailBySlug?.data}
      listDataArticle={listDataArticle}
      responseDetailBE={responseDetailBE}
    />
  );
}

// export const getStaticProps = async (context) => {
//   if (isEmpty(responseDetailBySlug?.data)) {
//     return {
//       notFound: true,
//       revalidate: 20,
//     };
//   }
//   return {
//     props: {
//       responseDetailBySlug: responseDetailBySlug?.data,
//       listDataArticle,
//       responseDetailBE,
//     },
//     revalidate: 20,
//   };
// };
