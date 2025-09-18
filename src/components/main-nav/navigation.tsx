"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  BookOpenIcon,
  CalendarBlankIcon,
  GraduationCapIcon,
} from "@phosphor-icons/react";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

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

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function Navigation() {
  return (
    <>
      <div className="fixed top-0 right-0 z-40 flex items-center gap-4 p-2.5 lg:hidden">
        <button className="z-30 rounded-full p-2 transition-colors duration-200 hover:bg-neutral-200 focus:outline-none active:bg-neutral-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu h-5 w-5 text-neutral-600"
          >
            <line x1={4} x2={20} y1={12} y2={12} />
            <line x1={4} x2={20} y1={6} y2={6} />
            <line x1={4} x2={20} y1={18} y2={18} />
          </svg>
        </button>
        <nav className="fixed inset-0 z-20 hidden max-h-screen w-full overflow-y-auto bg-white px-5 py-16 lg:hidden">
          <ul className="grid divide-y divide-neutral-200">
            <li className="py-3">
              <div className="overflow-hidden">
                <div className="h-max">
                  <button className="flex w-full justify-between">
                    <p className="font-semibold">Product</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down h-5 w-5 text-neutral-500 transition-all"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
            <li className="py-3">
              <div className="overflow-hidden">
                <div className="h-max">
                  <button className="flex w-full justify-between">
                    <p className="font-semibold">Solutions</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down h-5 w-5 text-neutral-500 transition-all"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
            <li className="py-3">
              <div className="overflow-hidden">
                <div className="h-max">
                  <button className="flex w-full justify-between">
                    <p className="font-semibold">Resources</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down h-5 w-5 text-neutral-500 transition-all"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
            <li className="py-3">
              <a
                className="flex w-full font-semibold capitalize"
                href="/enterprise"
              >
                Enterprise
              </a>
            </li>
            <li className="py-3">
              <a
                className="flex w-full font-semibold capitalize"
                href="/customers"
              >
                Customers
              </a>
            </li>
            <li className="py-3">
              <a
                className="flex w-full font-semibold capitalize"
                href="/pricing"
              >
                Pricing
              </a>
            </li>
            <li className="py-3 min-[281px]:hidden">
              <a
                className="flex w-full font-semibold capitalize"
                href="https://app.dub.co/login"
              >
                Log in
              </a>
            </li>
            <li className="py-3 min-[281px]:hidden">
              <a
                className="flex w-full font-semibold capitalize"
                href="https://app.dub.co/register"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sticky inset-x-0 top-0 z-30 w-full transition-all">
        <div className="absolute inset-0 block border-b border-transparent transition-all" />
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
              {" "}
              <Button size="sm" variant="outline">
                Đăng nhập
              </Button>{" "}
              <Button size="sm">Đăng nhập</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
