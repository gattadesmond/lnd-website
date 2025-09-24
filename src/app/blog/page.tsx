import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { generatePage } from "@/lib/generatePage";

export const metadata = {
  title: "Blog | Unkey",
  description: "Latest blog posts and news from the Unkey team.",
  openGraph: {
    title: "Blog | Unkey",
    description: "Latest blog posts and news from the Unkey team.",
    url: "https://unkey.com/blog",
    siteName: "unkey.com",
    images: [
      {
        url: "https://unkey.com/og.png",
        width: 1200,
        height: 675,
      },
    ],
  },
  twitter: {
    title: "Blog | Unkey",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/images/landing/unkey.png",
  },
};

export const revalidate = 60;

const BlogPage = generatePage(async () => {
  return (
    <>
      <section className="overflow-hidden border-b border-neutral-200">
        <Container
          isBorderX
          className="relative"
          isGridArea
          borderXClassName="[mask-image:linear-gradient(transparent,black)]"
        >
          <div className="relative pt-16 pb-6 sm:px-12 sm:pb-20">
            <h1 className="font-display mt-5 text-left text-4xl font-medium text-neutral-900 sm:text-5xl sm:leading-[1.15]">
              Product Stories
            </h1>
            <p className="mt-6 text-lg text-neutral-500 sm:text-xl">
              Explore our Blog for a wealth of insightful articles and tips,
              covering a diverse array of topics. Stay informed, inspired, and
              ahead of the curve with our expertly crafted content.
            </p>
            <nav className="mt-10 hidden w-fit items-center gap-x-2 gap-y-4 sm:flex sm:flex-wrap">
              <Button
                asChild
                className="text-sm font-medium"
                size="sm"
                variant="default"
              >
                <a href="/blog">Overview</a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-sm font-medium"
                size="sm"
              >
                <a href="/blog/category/company">Company News</a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-sm font-medium"
                size="sm"
              >
                <a href="/blog/category/education">Education</a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-sm font-medium"
                size="sm"
              >
                <a href="/blog/category/engineering">Engineering</a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-sm font-medium"
                size="sm"
              >
                <a href="/blog/category/customers">Customer Stories</a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-sm font-medium"
                size="sm"
              >
                <a href="/changelog">Changelog</a>
              </Button>
            </nav>
            <Button
              variant="outline"
              className="mt-10 flex h-10 w-full items-center gap-2 sm:hidden"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-«R2adrninb»"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-list"
              >
                <line x1={8} x2={21} y1={6} y2={6} />
                <line x1={8} x2={21} y1={12} y2={12} />
                <line x1={8} x2={21} y1={18} y2={18} />
                <line x1={3} x2="3.01" y1={6} y2={6} />
                <line x1={3} x2="3.01" y1={12} y2={12} />
                <line x1={3} x2="3.01" y1={18} y2={18} />
              </svg>
              <p>Categories</p>
            </Button>
          </div>
        </Container>
      </section>

      <Container>
        <div className="[&>*]:border-grid-border grid grid-cols-1 md:grid-cols-3 max-md:[&>*]:border-t md:[&>*:not(:nth-child(3n))]:border-r md:[&>*:nth-child(n+4)]:border-t">
          {[1, 2, 3, 4].map((item, idx) => (
            <Link
              key={idx}
              className="flex flex-col transition-all hover:bg-neutral-50"
              href="/blog/introducing-bounties"
            >
              <img
                alt="Introducing Program Bounties"
                width={2400}
                height={1260}
                decoding="async"
                data-nimg={1}
                className="aspect-[1200/630] object-cover blur-[2px]"
                src="https://assets.dub.co/cms/program-bounties.jpg"
              />
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h2 className="font-display line-clamp-2 text-lg font-bold text-neutral-900">
                    Introducing Program Bounties
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm text-neutral-500">
                    Create performance and submission bounties to drive partner
                    engagement for your Dub partner program
                  </p>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <div className="flex items-center -space-x-2">
                    <img
                      alt="Steven Tey"
                      loading="lazy"
                      width={32}
                      height={32}
                      decoding="async"
                      data-nimg={1}
                      className="rounded-full blur-[2px] transition-all group-hover:brightness-90"
                      style={{ color: "transparent" }}
                      src="https://assets.dub.co/author/steventey.jpg"
                    />
                  </div>
                  <time
                    dateTime="2025-09-11T16:00:00.000Z"
                    className="text-sm text-neutral-500"
                  >
                    September 11, 2025
                  </time>
                </div>
              </div>
            </Link>
          ))}

          <div className="hidden size-full md:block"></div>
          <div className="hidden size-full md:block"></div>
        </div>
      </Container>
    </>
  );
});

export default BlogPage;
