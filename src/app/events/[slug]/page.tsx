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
  const { data: event } = await supabase
    .from("events_with_full_details")
    .select("title, description, coverImageUrl")
    .eq("urlRewrite", slug)
    .single();

  if (!event) {
    return {
      title: "Event Not Found",
      description: "The requested event could not be found.",
    };
  }

  return {
    title: `${event.title} | PLG Hub`,
    description: event.description || "Read this event on PLG Hub",
    openGraph: {
      title: `${event.title} | PLG Hub`,
      description: event.description || "Read this event on PLG Hub",
      url: `https://plg-hub.com/events/${slug}`,
      siteName: "PLG Hub",
      images: event.coverImageUrl
        ? [
            {
              url: event.coverImageUrl,
              width: 1200,
              height: 675,
            },
          ]
        : [],
    },
    twitter: {
      title: `${event.title} | PLG Hub`,
      card: "summary_large_image",
    },
  };
}

export const revalidate = 60;

const EventPage = generatePage(
  async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    // Initialize Supabase client
    const supabase = await createClient();

    // Fetch event details
    const { data: event, error } = await supabase
      .from("events_with_full_details")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !event) {
      notFound();
    }
    console.log("🚀 ~ event:", event);

    // Fetch related events from the same category
    const relatedEvents = await useRelatedContent({
      tableName: "events_overview",
      categorySlug: event.category?.slug || "",
      currentContentId: event.id,
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
                {event.category && (
                  <Button variant="secondary" size="sm">
                    <Link href={`/events/category/${event.category.slug}`}>
                      {event.category.title}
                    </Link>
                  </Button>
                )}

                <time
                  dateTime={getDateTimeAttribute(event.published_at)}
                  className="text-sm text-neutral-500 transition-colors hover:text-neutral-800"
                >
                  {formatDisplayDate(event.published_at)}
                </time>
              </div>
              <h1 className="mt-5 text-left font-display text-4xl font-medium text-neutral-900 sm:text-4xl sm:leading-[1.25]">
                {event.title}
              </h1>

              {event.description && (
                <p className="mt-5 text-neutral-500 sm:text-lg">
                  {event.description}
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
                  {event.cover_image_url && (
                    <div className="aspect-[1200/630] overflow-hidden">
                      <Image
                        src={event.cover_image_url}
                        alt={event.title || "Event cover"}
                        width={1200}
                        height={630}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  <div className="prose prose-base max-w-none px-5 py-10 prose-neutral sm:px-12 prose-headings:scroll-mt-20 prose-headings:font-display prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-a:text-blue-600 prose-strong:text-neutral-900">
                    {event.content && typeof event.content === "string" ? (
                      (() => {
                        try {
                          const blocks = JSON.parse(event.content);
                          return EditorJsHtml().parse(blocks);
                        } catch (error) {
                          console.error("Error parsing content:", error);
                          return (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: event.content,
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

                {/* Related Events */}
                {relatedEvents.length > 0 && (
                  <RelatedContent
                    content={relatedEvents}
                    currentContentId={event.id}
                    title="Read more"
                    basePath="/events"
                  />
                )}
              </div>
              <div className="border-grid-border hidden border-l bg-neutral-50 p-10 sm:block">
                <div className="flex flex-col gap-y-4 pb-5">
                  <p className="text-sm text-neutral-500">Event details</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-neutral-700">
                      {event.title}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {event.description}
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

export default EventPage;
