/* eslint-disable */

"use client";

import React, { useRef } from "react";

import parse, { domToReact } from "html-react-parser";
import slugify from "slugify";
import { twMerge } from "tailwind-merge";

import { Container } from "@/components/container";
import { generateDataArticleDetail } from "@/lib/generate-data";
// import TableOfContents from "@/components/table-of-contents";
import { cn } from "@/lib/utils";

// import ArticleAuthorsBigV2 from "@/ui/portal/article-authors-big-v2";
// import PetLive2D from "@/ui/portal/pet-2d-live";
// import PostsGroupSubjectStrapi from "@/ui/portal/posts-group-subject-strapi";
// import SectionComment from "@/ui/portal/section-comment/section-comments";
// import SectionHeaderDetailv2 from "@/ui/portal/section-header-detail-v2";

const TYPE_ARTICLE = 1;

export function ArticleContent({
  responseDetailBySlug,
  listDataArticle,
  responseDetailBE,
}) {
  const dataDetailStories = generateDataArticleDetail({
    data: responseDetailBySlug?.[0],
  });
  const titleBlog = dataDetailStories.title;
  const descBlog = dataDetailStories.description;
  const coverImage = dataDetailStories.coverImageUrl;
  const slug = dataDetailStories.urlRewrite;
  const onFetchLikeComment = useRef(null);
  const category = dataDetailStories.categoryName;
  const totalView = dataDetailStories.totalViews;
  const idPost = responseDetailBE.Data?.Id;
  const publishDate = dataDetailStories.publishDate;
  const content = dataDetailStories.content;
  const authors = dataDetailStories.authors;

  const toc = [];
  const options = {
    replace({
      attribs,
      name,
      children,
    }: {
      attribs: any;
      name: "h4" | "h3" | "h2" | "img";
      children: any;
    }) {
      if (!attribs) {
        return;
      }

      if (name === "img") {
        if (attribs.src.startsWith("https://productledgrowth.vn"))
          return (
            <img
              style={{ aspectRatio: attribs.width / attribs.height }}
              src={attribs.src.replace(
                "https://productledgrowth.vn",
                "https://product.momo.vn",
              )}
              alt={attribs.alt}
              width={attribs.width}
              height={attribs.height}
            />
          );
      }

      if (name === "h3" || name === "h4" || name === "h2") {
        const level = name === "h3" || name === "h2" ? "1" : "2";
        const HeadingTag = `${name}` as const;
        const dataId = children?.[0]?.children?.[0]?.data;
        toc.push({
          id: slugify(dataId || "", {
            lower: true,
            strict: true,
            remove: /[*+~.()'"!:@]/g,
          }),
          title: dataId,
          level: level,
        });
        return (
          <HeadingTag
            id={slugify(dataId || "", {
              lower: true,
              strict: true,
              remove: /[*+~.()'"!:@]/g,
            })}
          >
            {domToReact(children)}
          </HeadingTag>
        );
      }
    },
  };

  if (!dataDetailStories) return null;

  return (
    <>
      {/* <SectionHeaderDetailv2
        idPost={idPost}
        category={category}
        titleBlog={titleBlog}
        descBlog={descBlog}
        authors={authors}
        totalView={totalView}
        coverImage={coverImage}
        onFetchLikeComment={onFetchLikeComment}
        publishDate={publishDate}
      /> */}

      <div className="relative bg-white">
        <Container className="max-w-[1300px] py-8 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-10">
            <div className="lg:col-span-1">
              {/* <Catalog toc={toc} isLight={true} /> */}
              {toc && (
                <>
                  <nav className="no-scrollbars fixed top-0 left-0 z-50 w-full overflow-x-hidden overflow-y-auto md:hidden">
                    {/* <TableOfContents items={toc} /> */}
                  </nav>
                  <nav className="no-scrollbars sticky top-[104px] bottom-10 hidden max-h-[calc(100vh-80px)] overflow-x-hidden overflow-y-auto md:block">
                    {/* <TableOfContents items={toc} /> */}
                  </nav>
                </>
              )}
            </div>
            <div className="lg:col-span-3">
              <article
                className={twMerge(
                  "ck-content relative prose prose-base w-full text-slate-800 prose-slate focus:outline-hidden lg:prose-lg prose-a:text-blue-600 prose-a:hover:text-blue-500",
                )}
                id="main-article"
              >
                {content && parse(content, options)}
              </article>
              {authors && (
                <>
                  <div className={cn("my-5 text-left font-bold text-gray-500")}>
                    ABOUT THE AUTHOR
                  </div>
                  <div className="flex flex-col space-y-4">
                    {authors?.map((author, index) => (
                      <React.Fragment key={index}>
                        {/* <ArticleAuthorsBigV2 authors={author} isLight={true} /> */}
                      </React.Fragment>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-5 hidden overflow-x-hidden lg:block">
                <div className="-mt-6 -ml-10">{/* <PetLive2D /> */}</div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-8 md:mt-10 lg:py-10">
        <></>
        {/* <SectionComment
          idPost={idPost}
          onFetchLikeComment={onFetchLikeComment}
          itemType={TYPE_ARTICLE}
        />
        <PostsGroupSubjectStrapi
          dataStorys={listDataArticle}
          heading="More course like this"
          isPostsPage
          idPost={idPost}
        /> */}
      </Container>

      {/* <img
        src={`https://product.momo.vn:8553/api/trace/notion/${idPost}`}
        className="invisible hidden cursor-none opacity-0 select-none"
      /> */}
    </>
  );
}
