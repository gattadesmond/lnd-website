import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";

import { BlogCard } from "@/components/blog/blog-card";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

interface Section {
  title: string;
  content: unknown[];
  basePath: string;
  viewAllPath: string;
  viewAllText: string;
}

interface LatestContentProps {
  sections: Section[];
}

export function LatestContent({ sections }: LatestContentProps) {
  return (
    <div className="bg-white">
      {sections.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <Container className="relative max-w-[1080px]">
            <div className="pt-16 pb-10">
              <div className="mb-5 text-left sm:px-5">
                <h2 className="font-display text-2xl font-semibold text-neutral-900 md:text-3xl">
                  {section.title}
                </h2>
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
            </div>
          </Container>
        </section>
      ))}
    </div>
  );
}
