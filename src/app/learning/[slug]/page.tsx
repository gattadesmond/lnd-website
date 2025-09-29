import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import EditorJsHtml from "editorjs-html";

import { Container } from "@/components/container";
import { RelatedContent } from "@/components/content/RelatedContent";
import { Button } from "@/components/ui/button";
import { useRelatedContent } from "@/hooks/useRelatedContent";
import { formatDisplayDate, getDateTimeAttribute } from "@/lib/dateUtils";
import { generatePage } from "@/lib/generatePage";
import { createClient } from "@/lib/supabase/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const supabase = await createClient();
  const { data: learning } = await supabase
    .from("learning_with_full_details")
    .select("title, description, coverImageUrl")
    .eq("urlRewrite", slug)
    .single();

  if (!learning) {
    return {
      title: "Learning Resource Not Found",
      description: "The requested learning resource could not be found.",
    };
  }

  return {
    title: `${learning.title} | LnD Hub`,
    description:
      learning.description || "Read this learning resource on LnD Hub",
    openGraph: {
      title: `${learning.title} | LnD Hub`,
      description:
        learning.description || "Read this learning resource on LnD Hub",
      url: `https://product.momo.vn/learning/${slug}`,
      siteName: "LnD Hub",
      images: learning.coverImageUrl
        ? [
            {
              url: learning.coverImageUrl,
              width: 1200,
              height: 675,
            },
          ]
        : [],
    },
    twitter: {
      title: `${learning.title} | LnD Hub`,
      card: "summary_large_image",
    },
  };
}

export const revalidate = 60;

const LearningPage = generatePage(
  async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    // Initialize Supabase client
    const supabase = await createClient();

    // Fetch learning details
    const { data: learning, error } = await supabase
      .from("learning_with_full_details")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !learning) {
      notFound();
    }
    console.log("🚀 ~ learning:", learning);

    // Fetch related learning from the same category
    const relatedLearning = await useRelatedContent({
      tableName: "learning_overview",
      categorySlug: learning.category?.slug || "",
      currentContentId: learning.id,
      limit: 4,
    });

    return (
      <>
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
                {learning.category && (
                  <Button variant="secondary" size="sm">
                    <Link href={`/learning/category/${learning.category.slug}`}>
                      {learning.category.title}
                    </Link>
                  </Button>
                )}

                <time
                  dateTime={getDateTimeAttribute(learning.published_at)}
                  className="text-sm text-neutral-500 transition-colors hover:text-neutral-800"
                >
                  {formatDisplayDate(learning.published_at)}
                </time>
              </div>
              <h1 className="mt-5 text-left font-display text-4xl font-medium text-neutral-900 sm:text-4xl sm:leading-[1.25]">
                {learning.title}
              </h1>

              {learning.description && (
                <p className="mt-5 text-neutral-500 sm:text-lg">
                  {learning.description}
                </p>
              )}
            </div>
          </Container>
        </section>

        <section>
          <Container isBorderX className="relative">
            <div className="relative z-auto grid grid-cols-3 border-x border-neutral-200">
              <div className="relative col-span-3 md:col-span-2">
                <div className="bg-white">
                  {/* Cover Image */}
                  {learning.cover_image_url && (
                    <div className="aspect-[1200/630] overflow-hidden">
                      <Image
                        src={learning.cover_image_url}
                        alt={learning.title || "Learning cover"}
                        width={1200}
                        height={630}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  <div className="prose prose-base max-w-none px-5 py-10 prose-neutral sm:px-12 prose-headings:scroll-mt-20 prose-headings:font-display prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-a:text-blue-600 prose-strong:text-neutral-900">
                    {learning.content &&
                    typeof learning.content === "string" ? (
                      (() => {
                        try {
                          const blocks = JSON.parse(learning.content);
                          return EditorJsHtml().parse(blocks);
                        } catch (error) {
                          console.error("Error parsing content:", error);
                          return (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: learning.content,
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

                {/* Related Learning */}
                {relatedLearning.length > 0 && (
                  <RelatedContent
                    content={relatedLearning}
                    currentContentId={learning.id}
                    title="Read more"
                    basePath="/learning"
                  />
                )}
              </div>
              <div className="border-grid-border hidden border-l bg-neutral-50 p-10 sm:block">
                <div className="flex flex-col gap-y-4 pb-5">
                  <p className="text-sm text-neutral-500">Learning details</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-neutral-700">
                      {learning.title}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {learning.description}
                    </p>
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

export default LearningPage;
