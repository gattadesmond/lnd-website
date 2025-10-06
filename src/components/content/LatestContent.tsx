import Link from "next/link";

import {
  ArrowRightIcon,
  BookOpen,
  Calendar,
  GraduationCap,
} from "lucide-react";

import { BlogCard } from "@/components/blog/blog-card";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BlogStory {
  id?: string;
  slug?: string;
  title?: string;
  excerpt?: string;
  description?: string;
  cover_image_url?: string;
  author_name?: string;
  author_avatar?: string;
  published_at?: string;
  category?: {
    slug: string;
    title: string;
  };
  view_count?: number;
  reacted_users_count?: number;
  basePath?: string;
  authors?: Array<{
    user_name: React.ReactNode;
    full_name: string;
    avatar_url: string;
  }>;
}

interface Section {
  title: string;
  content: BlogStory[];
  basePath: string;
  viewAllPath: string;
  viewAllText: string;
}

interface LatestContentProps {
  sections: Section[];
}

export function LatestContent({ sections }: LatestContentProps) {
  return (
    <div className="relative bg-neutral-50">
      <Tabs defaultValue="stories">
        <Container className="relative z-10 max-w-[1080px] pb-16" isBorderX>
          <div className="relative top-0 z-[2] mx-auto mt-0 flex h-16 max-w-[min(700px,calc(100vw-2rem))] -translate-y-px items-start justify-center text-white max-md:h-auto max-md:[&>svg]:w-4">
            <svg
              viewBox="0 0 85 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-auto shrink-0 translate-x-px translate-y-px overflow-visible max-sm:hidden"
            >
              <rect
                x={0}
                y={0}
                width={85}
                height={1}
                fill="currentColor"
                transform="translate(0, -1)"
              />
              <path
                d="M50 45C57.3095 56.6952 71.2084 63.9997 85 64V0H0C13.7915 0 26.6905 7.30481 34 19L50 45Z"
                fill="currentColor"
              />
            </svg>
            <div className="relative z-10 h-[calc(100%+1px)] min-w-0 grow border-current sm:border-t-1 sm:bg-current">
              <TabsList className="flex size-full flex-wrap items-center justify-center gap-3 bg-transparent max-md:pt-4">
                <TabsTrigger
                  value="stories"
                  className="h-auto flex-[0] cursor-pointer border border-neutral-200 bg-neutral-100 px-3 py-1.5 shadow-none data-[state=active]:border data-[state=active]:border-neutral-200 data-[state=active]:bg-white data-[state=active]:shadow-none sm:flex-1"
                >
                  <div className="flex size-5 items-center justify-center rounded bg-orange-400">
                    <BookOpen className="size-3.5 text-orange-900" />
                  </div>
                  <span className="text-sm leading-none font-medium">
                    Stories
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="learning"
                  className="h-auto flex-[0] cursor-pointer border border-neutral-200 bg-neutral-100 px-3 py-1.5 shadow-none data-[state=active]:border data-[state=active]:border-neutral-200 data-[state=active]:bg-white data-[state=active]:shadow-none sm:flex-1"
                >
                  <div className="flex size-5 items-center justify-center rounded bg-violet-400">
                    <GraduationCap className="size-3.5 text-violet-900" />
                  </div>
                  <span className="text-sm leading-none font-medium">
                    Learning & Development
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="events"
                  className="h-auto flex-[0] cursor-pointer border border-neutral-200 bg-neutral-100 px-3 py-1.5 shadow-none data-[state=active]:border data-[state=active]:border-neutral-200 data-[state=active]:bg-white data-[state=active]:shadow-none sm:flex-1"
                >
                  <div className="flex size-5 items-center justify-center rounded bg-green-400">
                    <Calendar className="size-3.5 text-green-900" />
                  </div>
                  <span className="text-sm leading-none font-medium">
                    Events
                  </span>
                </TabsTrigger>
              </TabsList>
            </div>
            <svg
              viewBox="0 0 85 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-auto shrink-0 -translate-x-px translate-y-px -scale-x-100 overflow-visible max-sm:hidden"
            >
              <rect
                x={0}
                y={0}
                width={85}
                height={1}
                fill="currentColor"
                transform="translate(0, -1)"
              />
              <path
                d="M50 45C57.3095 56.6952 71.2084 63.9997 85 64V0H0C13.7915 0 26.6905 7.30481 34 19L50 45Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="mt-5 size-full border-neutral-200 transition-transform duration-300 sm:border-x sm:border-t sm:px-3 sm:pt-3 md:px-1.5 md:pt-1.5">
            <TabsContent value="stories">
              {sections
                .filter((section) => section.title === "Latest Stories")
                .map((section, sectionIndex) => (
                  <section key={sectionIndex}>
                    <div className="[&>*]:border-grid-border grid grid-cols-1 gap-0 border-x border-y border-neutral-200 md:grid-cols-3 max-md:[&>*]:border-t md:[&>*:not(:nth-child(3n))]:border-r md:[&>*:nth-child(n+4)]:border-t">
                      {section.content.map((content, index) => (
                        <BlogCard
                          key={content.id || index}
                          story={content}
                          index={index}
                          basePath={content.basePath || section.basePath}
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
                  </section>
                ))}
            </TabsContent>
            <TabsContent value="learning">
              {sections
                .filter((section) => section.title === "Latest Learning")
                .map((section, sectionIndex) => (
                  <section key={sectionIndex}>
                    <div className="[&>*]:border-grid-border grid grid-cols-1 gap-0 border-x border-y border-neutral-200 md:grid-cols-3 max-md:[&>*]:border-t md:[&>*:not(:nth-child(3n))]:border-r md:[&>*:nth-child(n+4)]:border-t">
                      {section.content.map((content, index) => (
                        <BlogCard
                          key={content.id || index}
                          story={content}
                          index={index}
                          basePath={content.basePath || section.basePath}
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
                  </section>
                ))}
            </TabsContent>
            <TabsContent value="events">
              {sections
                .filter((section) => section.title === "Latest Events")
                .map((section, sectionIndex) => (
                  <section key={sectionIndex}>
                    <div className="[&>*]:border-grid-border grid grid-cols-1 gap-0 border-x border-y border-neutral-200 md:grid-cols-3 max-md:[&>*]:border-t md:[&>*:not(:nth-child(3n))]:border-r md:[&>*:nth-child(n+4)]:border-t">
                      {section.content.map((content, index) => (
                        <BlogCard
                          key={content.id || index}
                          story={content}
                          index={index}
                          basePath={content.basePath || section.basePath}
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
                  </section>
                ))}
            </TabsContent>
          </div>
        </Container>
      </Tabs>
      {/* <div className="h-[200px]">few</div> */}

      <div
        className="pointer-events-none absolute inset-0 z-0 select-none"
        style={{
          backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.55), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
        }}
      />
    </div>
  );
}
