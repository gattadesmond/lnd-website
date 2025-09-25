import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { generatePage } from "@/lib/generatePage";
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
    title: `${story.title} | PLG Hub`,
    description: story.description || "Read this story on PLG Hub",
    openGraph: {
      title: `${story.title} | PLG Hub`,
      description: story.description || "Read this story on PLG Hub",
      url: `https://plg-hub.com/stories/${slug}`,
      siteName: "PLG Hub",
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
      title: `${story.title} | PLG Hub`,
      card: "summary_large_image",
    },
  };
}

export const revalidate = 60;

const StoryPage = generatePage(
  async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    console.log("🚀 ~ slug:", slug);

    // Initialize Supabase client
    const supabase = await createClient();

    // Fetch story details
    const { data: story, error } = await supabase
      .from("stories_with_full_details")
      .select("*")
      .eq("slug", slug)
      .single();
    console.log("🚀 ~ story:", story);

    if (error || !story) {
      notFound();
    }

    return (
      <>
        {/* Header */}
        <section className="overflow-hidden border-b border-neutral-200">
          <Container className="relative max-w-4xl">
            <div className="pt-16 pb-8 sm:pt-20 sm:pb-12">
              {/* Back Button */}
              <Button asChild variant="ghost" size="sm" className="mb-6">
                <Link href="/stories">← Back to Stories</Link>
              </Button>

              {/* Title */}
              <h1 className="font-display text-4xl font-bold text-neutral-900 sm:text-5xl sm:leading-tight">
                {story.title}
              </h1>

              {/* Description */}
              {story.description && (
                <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
                  {story.description}
                </p>
              )}

              {/* Meta Info */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-neutral-500">
                {/* Author */}
                {story.authors && story.authors.length > 0 && (
                  <div className="flex items-center space-x-2">
                    <span>By {story.authors[0].full_name}</span>
                  </div>
                )}

                {/* Published Date */}
                {story.created_at && (
                  <time dateTime={story.created_at}>
                    {new Date(story.publiscreated_athedAt).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </time>
                )}

                {/* Category */}
                {/* {story.categoryName && story.categoryName.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span>in {story.categoryName[0]}</span>
                </div>
              )} */}

                {/* Stats */}
                {/* <div className="flex items-center space-x-4">
                {story.totalViews && (
                  <span>{story.totalViews.toLocaleString()} views</span>
                )}
                {story.totalLikes && (
                  <span>{story.totalLikes.toLocaleString()} likes</span>
                )}
              </div> */}
              </div>
            </div>
          </Container>
        </section>

        {/* Cover Image */}
        {story.cover_image_url && (
          <Container className="relative max-w-4xl">
            <div className="aspect-video overflow-hidden rounded-lg">
              <Image
                src={story.cover_image_url}
                alt={story.title || "Story cover"}
                width={1200}
                height={675}
                className="h-full w-full object-cover"
              />
            </div>
          </Container>
        )}

        {/* Content */}
        <Container className="relative max-w-4xl">
          <div className="py-12">
            <div
              className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-a:text-blue-600 prose-strong:text-neutral-900"
              dangerouslySetInnerHTML={{ __html: story.content || "" }}
            />
          </div>
        </Container>

        {/* Footer */}
        <div className="border-t border-neutral-200">
          <Container className="relative max-w-4xl">
            <div className="py-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/stories">← Back to All Stories</Link>
              </Button>
            </div>
          </Container>
        </div>
      </>
    );
  },
);

export default StoryPage;
