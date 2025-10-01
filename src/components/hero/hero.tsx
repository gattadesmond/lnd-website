import React from "react";
import Link from "next/link";

import { ArrowUpRightIcon, BookOpenIcon, FileTextIcon } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="overflow-hidden border-b border-neutral-200">
      <Container
        isBorderX
        className="relative py-20"
        isGridArea
        borderXClassName="[mask-image:linear-gradient(transparent,black)]"
      >
        <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center text-center">
          <a
            className="group motion-reduce:animate-fade-in flex animate-slide-up-fade divide-neutral-300 rounded-full border border-neutral-300 bg-white text-left text-xs font-medium drop-shadow-sm transition-colors duration-75 [--offset:10px] [animation-delay:0ms] [animation-duration:1s] [animation-fill-mode:both] hover:bg-neutral-50 sm:divide-x"
            href="/"
          >
            <span className="flex items-center gap-2 py-1.5 pl-4 text-neutral-800 sm:pr-2.5">
              <div className="relative">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                <div className="absolute inset-0 h-2 w-2 animate-ping rounded-full bg-green-500 opacity-75"></div>
              </div>
              <div className="line-clamp-1">
                {" "}
                Designing for Value: Product Strategy, Business Model &
                Monetization
              </div>
            </span>
            <span className="flex items-center gap-1.5 p-1.5 pl-2.5 text-neutral-500">
              <span className="hidden sm:block">Read more</span>
              <div className="rounded-full bg-neutral-100 p-0.5">
                <ArrowUpRightIcon className="size-2.5 transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px" />
              </div>
            </span>
          </a>

          <h1 className="mt-5 animate-slide-up-fade text-center font-display text-4xl font-medium text-pretty text-neutral-900 [--offset:20px] [animation-delay:100ms] [animation-duration:1s] sm:text-5xl sm:leading-[1.15]">
            Product-Led Growth Hub
          </h1>
          <p className="mt-5 animate-slide-up-fade text-base text-pretty text-neutral-600 [--offset:20px] [animation-delay:200ms] [animation-duration:1s] sm:text-xl">
            Welcome to the LnD Hub – a special space designed just for our
            product team! Here, we come together to soak in crucial knowledge
            and information, fueling the rocket of our product&apos;s growth 🚀
          </p>
        </div>
        <div className="relative mx-auto mt-10 flex max-w-fit animate-slide-up-fade gap-4 [--offset:20px] [animation-delay:300ms] [animation-duration:1s]">
          <Button asChild className="mx-auto max-w-fit">
            <Link href="/learning">
              <BookOpenIcon className="h-4 w-4" />
              Start Learning
            </Link>
          </Button>
          <Button asChild variant="outline" className="mx-auto max-w-fit">
            <Link href="/stories/huong-dan-dong-gop-product-stories">
              <FileTextIcon className="h-4 w-4" />
              Contribution Guides
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
