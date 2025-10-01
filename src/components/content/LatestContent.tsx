import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";

import { BlogCard } from "@/components/blog/blog-card";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import POST_TYPE_CONFIG from "@/lib/post-types-config.json";
import { createStaticClient } from "@/lib/supabase/server";

export async function LatestContent() {
  // Initialize Supabase client
  const supabase = await createStaticClient();

  // Fetch latest content from all three types
  const [storiesResult, eventsResult, learningResult] = await Promise.all([
    supabase
      .from(POST_TYPE_CONFIG.story.api.table)
      .select("*")
      .order("published_at", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(6),
    supabase
      .from(POST_TYPE_CONFIG.event.api.table)
      .select("*")
      .order("published_at", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(6),
    supabase
      .from(POST_TYPE_CONFIG.learning.api.table)
      .select("*")
      .order("published_at", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(6),
  ]);

  const sections = [
    {
      title: "Latest Stories",
      description: "Discover our latest product stories and insights",
      content: storiesResult.data || [],
      basePath: POST_TYPE_CONFIG.story.basePath,
      viewAllPath: "/stories",
      viewAllText: "View All Stories",
    },
    {
      title: "Latest Events",
      description: "Stay updated with our upcoming and recent events",
      content: eventsResult.data || [],
      basePath: POST_TYPE_CONFIG.event.basePath,
      viewAllPath: "/events",
      viewAllText: "View All Events",
    },
    {
      title: "Latest Learning",
      description: "Explore our newest learning resources and materials",
      content: learningResult.data || [],
      basePath: POST_TYPE_CONFIG.learning.basePath,
      viewAllPath: "/learning",
      viewAllText: "View All Learning",
    },
  ];

  return (
    <div className="bg-white">
      {sections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="py-16">
          <Container className="relative max-w-[1080px]">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-display text-3xl font-semibold text-neutral-900">
                {section.title}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                {section.description}
              </p>
            </div>

            <div className="[&>*]:border-grid-border grid grid-cols-1 gap-0 border-x border-y border-neutral-200 md:grid-cols-3 max-md:[&>*]:border-t md:[&>*:not(:nth-child(3n))]:border-r md:[&>*:nth-child(n+4)]:border-t">
              {section.content.map((content, index) => (
                <BlogCard
                  key={content.id || index}
                  story={content}
                  index={index}
                  basePath={section.basePath}
                />
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button asChild variant="outline" size="lg">
                <Link href={section.viewAllPath}>
                  {section.viewAllText}
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>
      ))}
    </div>
  );
}
