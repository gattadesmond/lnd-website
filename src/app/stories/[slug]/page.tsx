import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import EditorJsHtml from "editorjs-html";
import { AlignLeftIcon } from "lucide-react";
import slugify from "slugify";

import { InteractionBar } from "@/components/blog/interaction-bar";
import TableOfContent from "@/components/blog/table-of-content";
import { Container } from "@/components/container";
import { RelatedContent } from "@/components/content/RelatedContent";
import { Button } from "@/components/ui/button";
import { DateDisplay } from "@/components/ui/DateDisplay";
import { useRelatedContent } from "@/hooks/useRelatedContent";
import { generatePage } from "@/lib/generatePage";
import POST_TYPE_CONFIG from "@/lib/post-types-config.json";
import { createClient } from "@/lib/supabase/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const supabase = await createClient();
  const { data: story } = await supabase
    .from("stories_with_full_details")
    .select("title, description, coverImageUrl")
    .eq("urlRewrite", slug)
    .single();

  if (!story) {
    return {
      title: "Story Not Found",
      description: "The requested story could not be found.",
    };
  }

  return {
    title: `${story.title} | LnD Hub`,
    description: story.description || "Read this story on LnD Hub",
    openGraph: {
      title: `${story.title} | LnD Hub`,
      description: story.description || "Read this story on LnD Hub",
      url: `https://product.momo.vn/stories/${slug}`,
      siteName: "LnD Hub",
      images: story.coverImageUrl
        ? [
            {
              url: story.coverImageUrl,
              width: 1200,
              height: 675,
            },
          ]
        : [],
    },
    twitter: {
      title: `${story.title} | LnD Hub`,
      card: "summary_large_image",
    },
  };
}

export const revalidate = 60;

const StoryPage = generatePage(
  async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    // Initialize Supabase client
    const supabase = await createClient();

    // Fetch story details
    const { data: story, error } = await supabase
      .from(POST_TYPE_CONFIG.story.api.fullDetailsTable)
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !story) {
      notFound();
    }

    // Fetch related stories from the same category
    const relatedStories = await useRelatedContent({
      tableName: POST_TYPE_CONFIG.story.api.table,
      categorySlug: story.category?.slug || "",
      currentContentId: story.id,
      limit: 4,
    });

    const listHeadings: { id: string; text: string; level: number }[] = [];
    return (
      <>
        {/* Interaction Bar */}
        <InteractionBar
          likes={story.reacted_users_count || 0}
          comments={0}
          storyId={story.id} // You can add comments functionality later
        />

        {/* Header */}

        <section className="overflow-hidden border-b border-neutral-200">
          <Container
            isBorderX
            className="relative"
            isGridArea
            borderXClassName="[mask-image:linear-gradient(transparent,black)]"
          >
            <div className="border-grid-border relative z-0 px-4 pt-16 pb-12 sm:px-12">
              <div className="flex items-center space-x-4">
                {story.category && (
                  <Button variant="secondary" size="sm">
                    <Link
                      href={`${POST_TYPE_CONFIG.story.basePath}/category/${story.category.slug}`}
                    >
                      {story.category.title}
                    </Link>
                  </Button>
                )}

                <DateDisplay
                  date={story.published_at}
                  variant="display"
                  className="text-sm text-neutral-500 transition-colors hover:text-neutral-800"
                />
              </div>
              <h1 className="mt-5 text-left font-display text-4xl font-semibold text-balance text-neutral-900 sm:text-4xl sm:leading-[1.25]">
                {story.title}
              </h1>

              {story.description && (
                <p className="sm:text-l mt-5 text-balance text-neutral-500">
                  {story.description}
                </p>
              )}
            </div>
          </Container>
        </section>
        <section className="border-b border-neutral-200">
          <Container isBorderX className="relative">
            <div className="relative z-auto grid grid-cols-3 border-x border-neutral-200">
              <div className="relative col-span-3 md:col-span-2">
                <div className="bg-white">
                  {/* Cover Image */}
                  {story.cover_image_url && (
                    <div className="aspect-[1200/630] overflow-hidden">
                      <Image
                        src={story.cover_image_url || "/placeholder-blog.jpg"}
                        alt={story.title || "Story cover"}
                        width={1200}
                        height={630}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  <div className="prose prose-base max-w-none px-5 py-8 text-neutral-800 prose-neutral sm:px-12 prose-headings:scroll-mt-20 prose-headings:font-display prose-headings:text-neutral-900 prose-a:font-medium prose-a:text-black prose-a:underline-offset-4 prose-a:hover:text-neutral-700 prose-strong:text-neutral-900">
                    {story.content && typeof story.content === "string" ? (
                      (() => {
                        try {
                          const editorData = JSON.parse(story.content);

                          const edjsParser = EditorJsHtml({
                            header: ({ data }) => {
                              // Custom header renderer with class
                              const level = data.level || 2;
                              const text = data.text;
                              const id = slugify(data.text || "", {
                                lower: true,
                                strict: false,
                                remove: /[*+~.()'"!:@]/g,
                                replacement: "-",
                                locale: "vi",
                              });

                              if (level === 2) {
                                listHeadings.push({ id, text, level });
                                return `<h2 id="${id}" class="group">
                                  <a href="#${id}" class="group flex items-start gap-x-2  !text-neutral-800 ">
                                    ${text}
                                    <div class="rounded-lg border border-neutral-200 bg-white p-1.5 opacity-0 transition-all hover:border-neutral-300 hover:shadow group-hover:opacity-100">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link2 size-4 text-neutral-600" aria-label="Link to section">
                                        <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                                        <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                                        <line x1="8" x2="16" y1="12" y2="12" />
                                      </svg>
                                    </div>
                                  </a>
                                </h2>`;
                              }

                              if (level === 3) {
                                listHeadings.push({ id, text, level });
                                return `<h3 id="${id}" class="group">
                                  <a href="#${id}" class="group flex items-start gap-x-2  !text-neutral-800 ">
                                    ${text}
                                  </a>
                                </h2>`;
                              }

                              return `<h${level}>${text}</h${level}>`;
                            },
                            table: (data: { content?: unknown[][] }) => {
                              // Custom table renderer
                              if (!data.content || !Array.isArray(data.content))
                                return "";
                              const rows = data.content
                                .map(
                                  (row: unknown[]) =>
                                    `<tr>${row.map((cell) => `<td>${cell || ""}</td>`).join("")}</tr>`,
                                )
                                .join("");
                              return `<table class="border-collapse border border-neutral-300 w-full my-4"><tbody>${rows}</tbody></table>`;
                            },
                            simpleImage: ({ data }) => {
                              // Handle different data structures
                              const imageUrl = data.url || data.file?.url;
                              if (!imageUrl) {
                                return "";
                              }
                              const caption = data.caption
                                ? `<figcaption class="text-sm text-neutral-500 mt-2 text-center">${data.caption}</figcaption>`
                                : "";

                              const html = `<figure ><img src="${imageUrl}" alt="${data.caption || "Image"}" class="rounded-lg border border-neutral-200 w-full" />${caption}</figure>`;
                              return html;
                            },
                            code: ({ data }) => {
                              console.log("🚀 ~ data:", data);
                              // Handle code blocks with proper semantic HTML
                              const code = data.code || "";
                              const language = data.language || "";
                              const caption = data.caption
                                ? `<figcaption class="text-sm text-neutral-500 mt-2 text-center">${data.caption}</figcaption>`
                                : "";

                              const html = `<figure class="my-6">
                                <code class="language-${language}">${code}</code>
                                ${caption}
                              </figure>`;
                              return html;
                            },
                          });
                          const html = edjsParser.parse(editorData);

                          return (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: Array.isArray(html)
                                  ? html.join("")
                                  : html,
                              }}
                            />
                          );
                        } catch {
                          // Fallback for non-JSON content
                          return (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: story.content,
                              }}
                            />
                          );
                        }
                      })()
                    ) : (
                      <div className="text-neutral-500">
                        No content available
                      </div>
                    )}
                  </div>
                </div>
                {/* Related Stories */}
                {relatedStories.length > 0 && (
                  <RelatedContent
                    content={relatedStories}
                    currentContentId={story.id}
                    title="Read more"
                    basePath="/stories"
                  />
                )}
              </div>
              <div className="border-grid-border hidden border-l bg-neutral-50 p-10 sm:block">
                <div className="flex flex-col gap-y-4 pb-5">
                  <p className="font-display text-sm text-neutral-500">
                    Written by
                  </p>
                  {story.authors &&
                    story.authors.length > 0 &&
                    story.authors.map(
                      (author: {
                        id: string;
                        full_name: string;
                        user_name: string;
                        avatar_url: string;
                      }) => (
                        <Link
                          className="group pointer-events-none flex items-center space-x-3 select-none"
                          href={`/members/${author.id}`}
                          key={author.id}
                        >
                          <Image
                            alt={author.full_name}
                            loading="lazy"
                            width={36}
                            height={36}
                            className="blur-0 size-9 rounded-full bg-neutral-200 object-cover transition-all group-hover:brightness-90"
                            src={author.avatar_url}
                            style={{ color: "transparent" }}
                          />
                          <div className="flex flex-col">
                            <p className="font-display text-sm font-semibold whitespace-nowrap text-neutral-700">
                              {author.full_name}
                            </p>
                            <p className="font-display text-sm text-neutral-500">
                              {author.user_name}
                            </p>
                          </div>
                        </Link>
                      ),
                    )}
                </div>
                <div className="sticky top-16 pt-4 pb-8">
                  <div className="max-h-[58vh] overflow-y-auto pr-4 pb-8">
                    <div>
                      <p className="-ml-0.5 flex items-center gap-1.5 text-sm text-gray-500">
                        <AlignLeftIcon className="h-4 w-4" />
                        On this page
                      </p>

                      <TableOfContent listHeadings={listHeadings} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </>
    );
  },
);

export default StoryPage;
