import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AlignLeftIcon } from "lucide-react";

import { InteractionBar } from "@/components/blog/interaction-bar";
import TableOfContent from "@/components/blog/table-of-content";
import { Container } from "@/components/container";
import { AuthorDisplayList } from "@/components/content/AuthorDisplay";
import { EditorContentRenderer } from "@/components/content/EditorContentRenderer";
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
  const { data: learning } = await supabase
    .from("learnings_with_full_details")
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
      .from(POST_TYPE_CONFIG.learning.api.fullDetailsTable)
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !learning) {
      notFound();
    }

    // Fetch related learning from the same category
    const relatedLearning = await useRelatedContent({
      tableName: POST_TYPE_CONFIG.learning.api.table,
      categorySlug: learning.category?.slug || "",
      currentContentId: learning.id,
      limit: 4,
    });

    const listHeadings: { id: string; text: string; level: number }[] = [];
    return (
      <>
        {/* Interaction Bar */}
        <InteractionBar
          likes={learning.reacted_users_count || 0}
          comments={0}
          storyId={learning.id} // You can add comments functionality later
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
                {learning.category && (
                  <Button variant="secondary" size="sm">
                    <Link
                      href={`${POST_TYPE_CONFIG.learning.basePath}/category/${learning.category.slug}`}
                    >
                      {learning.category.title}
                    </Link>
                  </Button>
                )}

                <DateDisplay
                  date={learning.published_at}
                  variant="display"
                  className="text-sm text-neutral-500 transition-colors hover:text-neutral-800"
                />
              </div>
              <h1 className="mt-5 text-left font-display text-4xl font-semibold text-balance text-neutral-900 sm:text-4xl sm:leading-[1.25]">
                {learning.title}
              </h1>

              {learning.description && (
                <p className="sm:text-l mt-5 text-balance text-neutral-500">
                  {learning.description}
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
                  {learning.cover_image_url && (
                    <div className="aspect-[1200/630] overflow-hidden">
                      <Image
                        src={
                          learning.cover_image_url || "/placeholder-blog.jpg"
                        }
                        alt={learning.title || "Learning resource cover"}
                        width={1200}
                        height={630}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  <EditorContentRenderer
                    content={learning.content}
                    onHeadingsChange={(headings) => {
                      listHeadings.length = 0;
                      listHeadings.push(...headings);
                    }}
                  />
                </div>
                {/* Related Learning */}
                {relatedLearning.length > 0 && (
                  <RelatedContent
                    content={relatedLearning}
                    currentContentId={learning.id}
                    title="Learn more"
                    basePath="/learning"
                  />
                )}
              </div>
              <div className="border-grid-border hidden border-l bg-neutral-50 p-10 sm:block">
                <div className="flex flex-col gap-y-4 pb-5">
                  <p className="font-display text-sm text-neutral-500">
                    Written by
                  </p>
                  <AuthorDisplayList
                    authors={learning.authors || []}
                    size="md"
                    showUsername={true}
                  />
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

export default LearningPage;
