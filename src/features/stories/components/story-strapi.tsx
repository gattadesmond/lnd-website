/* eslint-disable */

"use client";

import { useState } from "react";

import { twMerge } from "tailwind-merge";

import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { Skeleton } from "@/components/ui/skeleton";
import { PostsGroupSubjectStrapi } from "@/features/stories/components/posts-group-subject-strapi";
import { generateDataArticle } from "@/lib/generate-data";
import { cn } from "@/lib/utils";
import { chakra } from "@/styles/fonts";

const SkeletonLoading = () => {
  return (
    <div className="my-6 flex flex-col space-y-3">
      <Skeleton className="relative aspect-video overflow-hidden rounded-xl bg-slate-800" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-slate-800" />
        <Skeleton className="h-4 w-[200px] bg-slate-800" />
      </div>
    </div>
  );
};

export function ArticleStrapi({
  listDataArticle,
  listDataCategoriesFilter,
  responseStory,
}) {
  const [dataStories, setDataStories] = useState({
    dataStorys: listDataArticle,
    hasMore:
      responseStory?.meta?.pagination?.page <
      responseStory?.meta?.pagination?.pageCount,
    page: responseStory?.meta?.pagination?.page,
    pageCount: responseStory?.meta?.pagination?.pageCount,
    total: responseStory?.meta?.pagination?.total,
  });
  const [cateActive, setCateActive] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCate, setIsLoadingCate] = useState(false);

  const handleFilterCate = async ({ categoryName }: any) => {
    try {
      setIsLoadingCate(true);
      let resourceAPI = `https://product.momo.vn:1338/api/story-contents?populate=deep&sort=publishedAt:desc&pagination[pageSize]=6`;
      if (categoryName !== "") {
        resourceAPI += `&filters[tags][name][$eq]=${categoryName}`;
      }
      const dataFilter = await fetch(resourceAPI);
      if (!dataFilter) {
        setIsLoadingCate(false);
        return;
      }
      setIsLoadingCate(false);
      setDataStories({
        dataStorys: generateDataArticle({ data: dataFilter }),
        hasMore:
          dataFilter?.meta?.pagination?.page <
          dataFilter?.meta?.pagination?.pageCount,
        page: dataFilter?.meta?.pagination?.page,
        pageCount: dataFilter?.meta?.pagination?.pageCount,
        total: dataFilter?.meta?.pagination?.total,
      });
    } catch {
      setIsLoadingCate(false);
    }
  };

  const handleLoadmore = async () => {
    try {
      if (!dataStories?.hasMore) return;
      setIsLoading(true);
      const page = dataStories?.page;
      const resourceAPI = `/story-contents?populate=deep&sort=publishedAt:desc&pagination[page]=${
        page + 1
      }&pagination[pageSize]=6`;
      const resourceAPICate = `/story-contents?populate=deep&sort=publishedAt:desc&filters[tags][name][$eq]=${cateActive}&pagination[page]=${
        page + 1
      }&pagination[pageSize]=6`;
      const newData = await fetch(
        cateActive?.length > 0 ? resourceAPICate : resourceAPI,
      );
      if (!newData) {
        setIsLoading(true);
        return;
      }
      setIsLoading(false);
      setDataStories({
        dataStorys: [
          ...dataStories?.dataStorys,
          ...generateDataArticle({ data: newData }),
        ],
        hasMore:
          newData?.meta?.pagination?.page <
          newData?.meta?.pagination?.pageCount,
        page: newData?.meta?.pagination?.page,
        pageCount: newData?.meta?.pagination?.pageCount,
        total: newData?.meta?.pagination?.total,
      });
    } catch {}
  };

  return (
    <>
      <section className="relative mx-auto max-w-3xl px-5 pt-14 pb-5 text-center md:px-5 md:pt-20 md:pb-10">
        <FadeIn delay={0.1}>
          <h1
            className={twMerge(
              "main-text-title relative mb-4 text-4xl font-bold md:text-6xl",
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

      <Container className="py-8 lg:py-10">
        <div className="mb-10 flex max-w-full items-center space-x-4 overflow-x-auto">
          <div
            onClick={() => {
              handleFilterCate({ categoryName: "" });
              setCateActive("");
            }}
            className={cn(
              "shrink-0 cursor-pointer rounded-lg border border-pink-500 p-2 text-center text-sm text-pink-500 transition-all hover:bg-pink-500 hover:text-white/80",
              cateActive == "" && "bg-pink-700 text-white/90",
            )}
          >
            All
          </div>
          {listDataCategoriesFilter?.map((cate, index: number) => (
            <div
              key={index}
              onClick={() => {
                handleFilterCate({ categoryName: cate?.name });
                setCateActive(cate?.name);
              }}
              className={cn(
                "shrink-0 cursor-pointer rounded-lg border border-pink-500 p-2 text-center text-sm text-pink-500 transition-all hover:bg-pink-500 hover:text-white/80",
                cateActive == cate?.name && "bg-pink-700 text-white/90",
              )}
            >
              {cate?.name}
            </div>
          ))}
        </div>
        {isLoadingCate ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2]?.map((number) => (
              <SkeletonLoading key={number} />
            ))}
          </div>
        ) : (
          <PostsGroupSubjectStrapi
            dataStorys={dataStories?.dataStorys}
            heading=""
          />
        )}

        {dataStories?.hasMore && dataStories?.total > 6 && (
          <div className="my-6 flex w-full items-center justify-center">
            <button
              onClick={handleLoadmore}
              className="w-fit cursor-pointer rounded-full border border-pink-500 px-6 py-2 text-pink-500 transition-all hover:bg-pink-700 hover:text-white/90"
            >
              {isLoading ? (
                <svg
                  aria-hidden="true"
                  className="size-6 animate-spin fill-pink-600 text-gray-200"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : (
                "View more"
              )}
            </button>
          </div>
        )}
      </Container>
    </>
  );
}
