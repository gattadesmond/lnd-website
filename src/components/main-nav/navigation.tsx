"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  BookOpenIcon,
  CalendarBlankIcon,
  GraduationCapIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react";

import { SearchCommand, useSearchCommand } from "@/components/search-command";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu-lnd";

import NavigationMobile from "./navigation-mobile";

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { open, setOpen } = useSearchCommand();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    // Throttle scroll event để tối ưu hiệu suất
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  return (
    <>
      <NavigationMobile />
      <div className="sticky inset-x-0 top-0 z-30 w-full transition-all">
        <div
          className={`absolute inset-0 block border-b transition-all ${
            isScrolled
              ? "border-neutral-100 bg-white/75 backdrop-blur-lg"
              : "border-transparent"
          }`}
        />
        <div className="relative mx-auto w-full max-w-screen-lg px-3 lg:px-4 xl:px-0">
          <div className="flex h-14 items-center justify-between">
            <div className="grow basis-0">
              <a className="block w-fit py-2 pr-2" href="/">
                <div className="max-w-fit">
                  <Image src="/LnD.svg" alt="Logo" width={36} height={15} />
                </div>
              </a>
            </div>
            <nav
              aria-label="Main"
              data-orientation="horizontal"
              dir="ltr"
              className="relative hidden lg:block"
            >
              <div style={{ position: "relative" }}>
                <NavigationMenu viewport={true}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        Our Contents
                      </NavigationMenuTrigger>
                      {/* <div className="absolute top-full left-1/2 mt-3 -translate-x-1/2"> */}

                      <NavigationMenuContent>
                        <div className="grid w-[1020px] grid-cols-1 gap-4 p-4">
                          <div className="grid grid-cols-3 gap-4">
                            <Link
                              className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50"
                              data-radix-collection-item
                              href="/stories"
                            >
                              {/* Grid Background */}
                              <div
                                className="absolute inset-0 z-0 [mask-image:linear-gradient(transparent,black,transparent)]"
                                style={{
                                  backgroundImage: `
        linear-gradient(to right, #eee 1px, transparent 1px),
        linear-gradient(to bottom, #eee 1px, transparent 1px)
      `,
                                  backgroundSize: "60px 60px",
                                }}
                              />

                              <div className="relative p-5 pb-0">
                                <div className="flex size-5 items-center justify-center rounded bg-orange-400">
                                  <BookOpenIcon
                                    className="size-3.5 text-orange-900"
                                    weight="fill"
                                  />
                                </div>
                                <span className="mt-3 block text-sm font-medium text-neutral-900">
                                  LnD Stories
                                </span>
                                <p className="mt-2 max-w-56 text-sm text-neutral-500">
                                  Explore our Blog for a wealth of insightful
                                  articles and tips
                                </p>
                              </div>
                              <div className="relative mt-10 h-40 grow">
                                <div className="absolute top-0 left-0 size-full grow overflow-hidden [mask-image:linear-gradient(black_50%,transparent)] px-2">
                                  <Image
                                    src="/fast-food-6.svg"
                                    alt="Stories"
                                    fill
                                  />
                                </div>
                              </div>
                              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,orange,transparent)] opacity-[0.04] transition-opacity duration-150 group-hover:opacity-15" />
                            </Link>

                            <a
                              className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50"
                              data-radix-collection-item
                              href="/analytics"
                            >
                              {/* Grid Background */}
                              <div
                                className="absolute inset-0 z-0 [mask-image:linear-gradient(transparent,black,transparent)]"
                                style={{
                                  backgroundImage: `
        linear-gradient(to right, #eee 1px, transparent 1px),
        linear-gradient(to bottom, #eee 1px, transparent 1px)
      `,
                                  backgroundSize: "60px 60px",
                                }}
                              />
                              <div className="relative p-5 pb-0">
                                <div className="flex size-5 items-center justify-center rounded bg-green-400">
                                  <GraduationCapIcon
                                    className="size-3.5 text-green-900"
                                    weight="fill"
                                  />
                                </div>
                                <span className="mt-3 block text-sm font-medium text-neutral-900">
                                  LnD Learning & Development
                                </span>
                                <p className="/60 mt-2 max-w-56 text-sm text-neutral-500">
                                  Learning is a constant process of discovery -
                                  a process without end.
                                </p>
                              </div>
                              <div className="relative mt-10 h-40 grow">
                                <div className="absolute top-0 left-0 size-full grow overflow-hidden [mask-image:linear-gradient(black_50%,transparent)] px-2">
                                  <Image
                                    src="/book-lover-81.svg"
                                    alt="Stories"
                                    fill
                                  />
                                </div>
                              </div>
                              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,green,transparent)] opacity-[0.04] transition-opacity duration-150 group-hover:opacity-15" />
                            </a>
                            <a
                              className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50"
                              data-radix-collection-item
                              href="/partners"
                            >
                              {/* Grid Background */}
                              <div
                                className="absolute inset-0 z-0 [mask-image:linear-gradient(transparent,black,transparent)]"
                                style={{
                                  backgroundImage: `
        linear-gradient(to right, #eee 1px, transparent 1px),
        linear-gradient(to bottom, #eee 1px, transparent 1px)
      `,
                                  backgroundSize: "60px 60px",
                                }}
                              />
                              <div className="relative p-5 pb-0">
                                <div className="flex size-5 items-center justify-center rounded bg-violet-400">
                                  <CalendarBlankIcon
                                    className="size-3.5 text-violet-900"
                                    weight="fill"
                                  />
                                </div>
                                <span className="mt-3 block text-sm font-medium text-neutral-900">
                                  LnD Events
                                </span>
                                <p className="/60 mt-2 max-w-56 text-sm text-neutral-500">
                                  Working together is success.
                                </p>
                              </div>
                              <div className="relative mt-10 h-40 grow">
                                <div className="absolute top-0 left-0 size-full grow overflow-hidden [mask-image:linear-gradient(black_50%,transparent)] px-2">
                                  <Image
                                    src="/conference-1-39.svg"
                                    alt="Stories"
                                    fill
                                  />
                                </div>
                              </div>
                              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,violet,transparent)] opacity-[0.04] transition-opacity duration-150 group-hover:opacity-15" />
                            </a>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href="/our-project">Our project</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href="/feedback">Feedback</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <div className="absolute top-full left-1/2 mt-3 -translate-x-1/2">
                &nbsp;
              </div>
            </nav>
            <div className="hidden grow basis-0 justify-end gap-2 lg:flex">
              <Button
                size="sm"
                className="cursor-pointer"
                variant="outline"
                onClick={() => setOpen(true)}
              >
                <MagnifyingGlassIcon className="size-4" weight="bold" />
                <kbd className="pointer-events-none inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-sm font-medium text-muted-foreground opacity-100 select-none">
                  <span className="text-sm">⌘</span>K
                </kbd>
              </Button>
              <Button size="sm" className="cursor-pointer">
                Đăng nhập
              </Button>
            </div>
          </div>
        </div>
      </div>
      <SearchCommand open={open} onOpenChange={setOpen} />
    </>
  );
}

export default Navigation;
