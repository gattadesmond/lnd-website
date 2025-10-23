import { notFound } from "next/navigation";

import { generatePage } from "@/lib/generatePage";
import { createStaticClient } from "@/lib/supabase/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const supabase = await createStaticClient();
  const { data: story } = await supabase
    .from("events_with_full_details")
    .select("title, description, coverImageUrl")
    .eq("urlRewrite", slug)
    .eq("status", "published")
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

const CoursePage = generatePage(
  async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    // Initialize Supabase client
    const supabase = await createStaticClient();

    // Fetch story details
    const { data: courses, error } = await supabase
      .from("courses")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .single();
    console.log("🚀 ~ courses:", courses);

    if (error || !courses) {
      console.log("fewfew");
      notFound();
    }

    return (
      <>
        {/* View Tracker */}

        {/* <section className="overflow-hidden border-b border-neutral-200">
          <Container
            isBorderX
            className="relative"
            isGridArea
            borderXClassName="[mask-image:linear-gradient(transparent,black)]"
          >
            <div className="border-grid-border relative z-0 px-4 pt-16 pb-12 sm:px-12">
              <div className="relative flex items-center space-x-4">
                <BackButton className="absolute top-0 -left-10 max-sm:hidden" />
                {event.category && (
                  <Button variant="secondary" size="sm" asChild>
                    <Link
                      href={`${POST_TYPE_CONFIG.event.basePath}/category/${event.category.slug}`}
                    >
                      {event.category.title}
                    </Link>
                  </Button>
                )}

                <DateDisplay
                  date={event.published_at}
                  variant="display"
                  className="text-sm text-neutral-500 transition-colors hover:text-neutral-800"
                />
              </div>
              <h1 className="mt-5 text-left font-display text-4xl font-semibold text-balance text-neutral-900 sm:text-4xl sm:leading-[1.25]">
                {event.title}
              </h1>

              {event.description && (
                <p className="sm:text-l mt-5 text-balance text-neutral-500">
                  {event.description}
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
                  {event.cover_image_url && (
                    <div className="aspect-[1200/630] overflow-hidden">
                      <Image
                        src={event.cover_image_url || "/placeholder-blog.jpg"}
                        alt={event.title || "Story cover"}
                        width={1200}
                        height={630}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  <EditorContentRenderer
                    content={event.content}
                    onHeadingsChange={(headings) => {
                      listHeadings.length = 0;
                      listHeadings.push(...headings);
                    }}
                  />
                </div>
                {relatedStories.length > 0 && (
                  <RelatedContent
                    content={relatedStories}
                    currentContentId={event.id}
                    title="Read more"
                    basePath="/events"
                  />
                )}
              </div>
              <div className="border-grid-border hidden border-l bg-neutral-50 p-10 sm:block">
                <div className="flex flex-col gap-y-4 pb-5">
                  <p className="font-display text-sm text-neutral-500">
                    Written by
                  </p>
                  <AuthorDisplayList
                    authors={event.authors || []}
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
        </section> */}
      </>
    );
  },
);

export default CoursePage;
