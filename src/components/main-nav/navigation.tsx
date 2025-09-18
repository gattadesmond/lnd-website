"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

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
                            <a
                              className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50"
                              data-radix-collection-item
                              href="/links"
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
                                <div className="flex size-4 items-center justify-center rounded bg-orange-400">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={11}
                                    height={10}
                                    fill="none"
                                    viewBox="0 0 11 10"
                                    className="size-2.5 text-orange-900"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeWidth="3.333"
                                      d="M5.5 5.667v-4M5.5 5.667l-3.333 2M5.5 5.667l3.333 2"
                                    />
                                  </svg>
                                </div>
                                <span className="mt-3 block text-sm font-medium text-neutral-900">
                                  LnD Stories
                                </span>
                                <p className="/60 mt-2 max-w-56 text-sm text-neutral-500">
                                  Short links with superpowers for modern
                                  marketing teams.
                                </p>
                              </div>
                              <div className="relative mt-10 h-40 grow">
                                <div className="absolute top-0 left-0 size-full grow overflow-hidden [mask-image:linear-gradient(black_50%,transparent)] px-2">
                                  cewf
                                </div>
                              </div>
                              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,var(--color),transparent)] opacity-[0.07] transition-opacity duration-150 group-hover:opacity-15" />
                            </a>

                            <a
                              className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50"
                              data-radix-collection-item
                              href="/analytics"
                            >
                              <svg
                                className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(transparent,black,transparent)] text-black/10"
                                width="100%"
                                height="100%"
                              >
                                <defs>
                                  <pattern
                                    id="grid-«rbb»"
                                    x={-52}
                                    y={-24}
                                    width={60}
                                    height={60}
                                    patternUnits="userSpaceOnUse"
                                  >
                                    <path
                                      d="M 60 0 L 0 0 0 60"
                                      fill="transparent"
                                      stroke="currentColor"
                                      strokeWidth={1}
                                    />
                                  </pattern>
                                </defs>
                                <rect
                                  fill="url(#grid-«rbb»)"
                                  width="100%"
                                  height="100%"
                                />
                              </svg>
                              <div className="relative p-5 pb-0">
                                <div className="flex size-4 items-center justify-center rounded bg-green-400">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    fill="none"
                                    viewBox="0 0 10 10"
                                    className="size-2.5 text-green-900"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeWidth="3.333"
                                      d="M2.333 6.333v2M7.667 1.667v6.666"
                                    />
                                  </svg>
                                </div>
                                <span className="mt-3 block text-sm font-medium text-neutral-900">
                                  Dub Analytics
                                </span>
                                <p className="/60 mt-2 max-w-56 text-sm text-neutral-500">
                                  Powerful analytics delivered instantly.
                                </p>
                              </div>
                              <div className="relative mt-10 h-40 grow">
                                <div className="absolute top-[unset] bottom-0 left-0 size-full h-[170%] grow overflow-hidden [mask-image:linear-gradient(black_50%,transparent)]">
                                  <div className="relative size-full">
                                    <div className="pointer-events-none absolute bottom-0 left-0 size-full">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 339 168"
                                        className="h-auto w-full [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
                                      >
                                        <path
                                          stroke="#00BBA7"
                                          strokeWidth={2}
                                          d="m345 1-60.533 76.487a8 8 0 0 1-9.732 2.25l-25.53-12.241a8 8 0 0 0-9.214 1.657l-62.736 64.993a8 8 0 0 1-6.695 2.388L67.303 124.331a8 8 0 0 0-5.193 1.17L-3.166 166.5"
                                        />
                                        <circle
                                          cx="259.333"
                                          cy={72}
                                          r={3}
                                          fill="#00BBA7"
                                        />
                                        <circle
                                          cx="259.333"
                                          cy={72}
                                          r={4}
                                          stroke="#3EC5B8"
                                          strokeOpacity="0.3"
                                          strokeWidth={2}
                                        />
                                      </svg>
                                      <div className="absolute bottom-0 left-5 flex items-start gap-2">
                                        <div className="border-border-default bg-bg-default w-[172px] rounded-lg border p-0">
                                          <div className="p-1.5">
                                            <div className="bg-bg-subtle border-border-subtle text-content-default hidden items-center gap-2 rounded border p-2 text-xs leading-none font-medium sm:flex">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentcolor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-link2 size-3 rotate-90"
                                              >
                                                <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                                                <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                                                <line
                                                  x1={8}
                                                  x2={16}
                                                  y1={12}
                                                  y2={12}
                                                />
                                              </svg>
                                              d.to/try
                                            </div>
                                            <div className="text-content-default mt-1 px-1.5 pb-0.5 text-[0.8125rem] font-medium sm:mt-2">
                                              Apr 2025
                                            </div>
                                          </div>
                                          <div className="border-border-default flex flex-col gap-2 border-t p-3">
                                            <div className="flex items-center justify-between gap-2">
                                              <div className="flex items-center gap-2">
                                                <div
                                                  className="size-2 rounded-sm border border-black/20 bg-current opacity-70"
                                                  style={{
                                                    color: "rgb(59, 130, 246)",
                                                  }}
                                                />
                                                <div className="text-content-subtle text-xs leading-none font-medium">
                                                  Clicks
                                                </div>
                                              </div>
                                              <span className="text-content-emphasis text-xs leading-none">
                                                12.5K
                                              </span>
                                            </div>
                                            <div className="flex items-center justify-between gap-2">
                                              <div className="flex items-center gap-2">
                                                <div
                                                  className="size-2 rounded-sm border border-black/20 bg-current opacity-70"
                                                  style={{
                                                    color: "rgb(168, 85, 247)",
                                                  }}
                                                />
                                                <div className="text-content-subtle text-xs leading-none font-medium">
                                                  Leads
                                                </div>
                                              </div>
                                              <span className="text-content-emphasis text-xs leading-none">
                                                8.2K
                                              </span>
                                            </div>
                                            <div className="flex items-center justify-between gap-2">
                                              <div className="flex items-center gap-2">
                                                <div
                                                  className="size-2 rounded-sm border border-black/20 bg-current opacity-70"
                                                  style={{
                                                    color: "rgb(20, 184, 166)",
                                                  }}
                                                />
                                                <div className="text-content-subtle text-xs leading-none font-medium">
                                                  Sales
                                                </div>
                                              </div>
                                              <span className="text-content-emphasis text-xs leading-none">
                                                $$12K
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <div className="border-border-default bg-bg-default absolute top-0 left-0 rounded-lg border py-0.5">
                                            <div className="px-3 py-2.5">
                                              <div className="flex justify-between gap-2">
                                                <div
                                                  className="bg-bg-emphasis size-11 rounded-full"
                                                  style={{
                                                    backgroundImage:
                                                      'url("https://assets.dub.co/home/people.png")',
                                                    backgroundSize: "3600%",
                                                    backgroundPositionX: "800%",
                                                  }}
                                                />
                                                <div className="flex flex-col items-end gap-1">
                                                  <div className="bg-bg-default border-border-subtle text-content-default flex items-center gap-1.5 rounded-full border px-1.5 py-0.5 text-xs">
                                                    <svg
                                                      height={18}
                                                      width={18}
                                                      viewBox="0 0 18 18"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      className="text-content-default size-3.5"
                                                    >
                                                      <g fill="currentColor">
                                                        <path
                                                          d="M8.095,7.778l7.314,2.51c.222,.076,.226,.388,.007,.47l-3.279,1.233c-.067,.025-.121,.079-.146,.146l-1.233,3.279c-.083,.219-.394,.215-.47-.007l-2.51-7.314c-.068-.197,.121-.385,.318-.318Z"
                                                          fill="none"
                                                          stroke="currentColor"
                                                          strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                          strokeWidth="1.5"
                                                        />
                                                        <line
                                                          fill="none"
                                                          stroke="currentColor"
                                                          strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                          strokeWidth="1.5"
                                                          x1="12.031"
                                                          x2="16.243"
                                                          y1="12.031"
                                                          y2="16.243"
                                                        />
                                                        <line
                                                          fill="none"
                                                          stroke="currentColor"
                                                          strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                          strokeWidth="1.5"
                                                          x1="7.75"
                                                          x2="7.75"
                                                          y1="1.75"
                                                          y2="3.75"
                                                        />
                                                        <line
                                                          fill="none"
                                                          stroke="currentColor"
                                                          strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                          strokeWidth="1.5"
                                                          x1="11.993"
                                                          x2="10.578"
                                                          y1="3.507"
                                                          y2="4.922"
                                                        />
                                                        <line
                                                          fill="none"
                                                          stroke="currentColor"
                                                          strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                          strokeWidth="1.5"
                                                          x1="3.507"
                                                          x2="4.922"
                                                          y1="11.993"
                                                          y2="10.578"
                                                        />
                                                        <line
                                                          fill="none"
                                                          stroke="currentColor"
                                                          strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                          strokeWidth="1.5"
                                                          x1="1.75"
                                                          x2="3.75"
                                                          y1="7.75"
                                                          y2="7.75"
                                                        />
                                                        <line
                                                          fill="none"
                                                          stroke="currentColor"
                                                          strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                          strokeWidth="1.5"
                                                          x1="3.507"
                                                          x2="4.922"
                                                          y1="3.507"
                                                          y2="4.922"
                                                        />
                                                      </g>
                                                    </svg>
                                                    dub.sh
                                                  </div>
                                                  <div className="bg-bg-default border-border-subtle text-content-default flex items-center gap-1.5 rounded-full border px-1.5 py-0.5 text-xs">
                                                    <img
                                                      className="relative h-2.5 w-3 rounded-sm"
                                                      src="https://flag.vercel.app/m/US.svg"
                                                      alt="US"
                                                    />
                                                    US
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="text-content-emphasis mt-4 text-[0.8125rem] font-medium">
                                                Danielle Wilson
                                              </div>
                                              <div className="text-content-subtle mt-px text-xs">
                                                danielle@dub.co
                                              </div>
                                            </div>
                                            <div className="border-border-default flex flex-col gap-2.5 border-t px-3 pt-3 pb-2.5">
                                              <div className="relative flex items-center justify-between gap-2 text-xs leading-none">
                                                <span className="text-content-muted truncate font-medium">
                                                  Lifetime value
                                                </span>
                                                <span className="text-content-default">
                                                  $12.5k
                                                </span>
                                              </div>
                                              <div className="relative flex items-center justify-between gap-2 text-xs leading-none">
                                                <span className="text-content-muted truncate font-medium">
                                                  Account
                                                </span>
                                                <span className="text-content-default">
                                                  Pro
                                                </span>
                                              </div>
                                              <div className="relative flex items-center justify-between gap-2 text-xs leading-none">
                                                <span className="text-content-muted truncate font-medium">
                                                  Subscription
                                                </span>
                                                <span className="text-content-default">
                                                  2y 10m
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,var(--color),transparent)] opacity-[0.07] transition-opacity duration-150 group-hover:opacity-15" />
                            </a>
                            <a
                              className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50"
                              data-radix-collection-item
                              href="/partners"
                            >
                              <svg
                                className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(transparent,black,transparent)] text-black/10"
                                width="100%"
                                height="100%"
                              >
                                <defs>
                                  <pattern
                                    id="grid-«rbc»"
                                    x={-52}
                                    y={-24}
                                    width={60}
                                    height={60}
                                    patternUnits="userSpaceOnUse"
                                  >
                                    <path
                                      d="M 60 0 L 0 0 0 60"
                                      fill="transparent"
                                      stroke="currentColor"
                                      strokeWidth={1}
                                    />
                                  </pattern>
                                </defs>
                                <rect
                                  fill="url(#grid-«rbc»)"
                                  width="100%"
                                  height="100%"
                                />
                              </svg>
                              <div className="relative p-5 pb-0">
                                <div className="flex size-4 items-center justify-center rounded bg-violet-400">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={32}
                                    height={32}
                                    fill="none"
                                    viewBox="0 0 32 32"
                                    className="size-2.5 text-violet-900"
                                  >
                                    <circle
                                      cx={27}
                                      cy={16}
                                      r={5}
                                      fill="currentColor"
                                    />
                                    <circle
                                      cx={5}
                                      cy={16}
                                      r={5}
                                      fill="currentColor"
                                    />
                                    <circle
                                      cx={16}
                                      cy={27}
                                      r={5}
                                      fill="currentColor"
                                    />
                                    <circle
                                      cx={16}
                                      cy={5}
                                      r={5}
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                                <span className="mt-3 block text-sm font-medium text-neutral-900">
                                  Dub Partners
                                </span>
                                <p className="/60 mt-2 max-w-56 text-sm text-neutral-500">
                                  Grow your revenue on auto-pilot with
                                  partnerships.
                                </p>
                              </div>
                              <div className="relative mt-10 h-40 grow">
                                <div className="absolute top-0 left-0 size-full grow overflow-hidden [mask-image:linear-gradient(black_50%,transparent)] pl-2">
                                  <div className="relative size-full">
                                    <div
                                      className="pointer-events-none relative size-full"
                                      aria-hidden="true"
                                    >
                                      <div className="absolute top-0 left-0 grid grid-cols-[repeat(2,180px)]">
                                        <div className="h-[60px] w-[180px] p-[3px]">
                                          <div className="border-border-subtle bg-bg-default flex size-full overflow-hidden rounded border select-none">
                                            <div
                                              className="bg-bg-emphasis aspect-square h-full"
                                              style={{
                                                backgroundImage:
                                                  'url("https://assets.dub.co/partners/partner-images.jpg")',
                                                backgroundSize: "1400%",
                                                backgroundPositionX: "1400%",
                                              }}
                                            />
                                            <div className="border-border-subtle flex h-full flex-col justify-between border-l px-2 py-1.5">
                                              <div className="flex items-center gap-1.5">
                                                <img
                                                  alt="US Flag"
                                                  className="h-2.5 w-3 rounded-sm border-[0.5px] border-black/15"
                                                  src="https://flag.vercel.app/m/US.svg"
                                                />
                                                <span className="text-content-default text-[9px] font-medium">
                                                  Lauren Anderson
                                                </span>
                                              </div>
                                              <div className="divide-border-subtle flex divide-x">
                                                <div className="flex flex-col pr-4">
                                                  <span className="text-content-muted text-[6px] font-medium">
                                                    Revenue
                                                  </span>
                                                  <span className="text-content-default text-[9px] font-medium">
                                                    $1.8K
                                                  </span>
                                                </div>
                                                <div className="flex flex-col pl-4">
                                                  <span className="text-content-muted text-[6px] font-medium">
                                                    Payouts
                                                  </span>
                                                  <span className="text-content-default text-[9px] font-medium">
                                                    $550
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="h-[60px] w-[180px] p-[3px]">
                                          <div className="border-border-subtle bg-bg-default flex size-full overflow-hidden rounded border select-none">
                                            <div
                                              className="bg-bg-emphasis aspect-square h-full"
                                              style={{
                                                backgroundImage:
                                                  'url("https://assets.dub.co/partners/partner-images.jpg")',
                                                backgroundSize: "1400%",
                                                backgroundPositionX: "1300%",
                                              }}
                                            />
                                            <div className="border-border-subtle flex h-full flex-col justify-between border-l px-2 py-1.5">
                                              <div className="flex items-center gap-1.5">
                                                <img
                                                  alt="US Flag"
                                                  className="h-2.5 w-3 rounded-sm border-[0.5px] border-black/15"
                                                  src="https://flag.vercel.app/m/US.svg"
                                                />
                                                <span className="text-content-default text-[9px] font-medium">
                                                  Mia Taylor
                                                </span>
                                              </div>
                                              <div className="divide-border-subtle flex divide-x">
                                                <div className="flex flex-col pr-4">
                                                  <span className="text-content-muted text-[6px] font-medium">
                                                    Revenue
                                                  </span>
                                                  <span className="text-content-default text-[9px] font-medium">
                                                    $22.6K
                                                  </span>
                                                </div>
                                                <div className="flex flex-col pl-4">
                                                  <span className="text-content-muted text-[6px] font-medium">
                                                    Payouts
                                                  </span>
                                                  <span className="text-content-default text-[9px] font-medium">
                                                    $6.8K
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="h-[60px] w-[180px] p-[3px]">
                                          <div className="border-border-subtle bg-bg-default flex size-full overflow-hidden rounded border select-none">
                                            <div
                                              className="bg-bg-emphasis aspect-square h-full"
                                              style={{
                                                backgroundImage:
                                                  'url("https://assets.dub.co/partners/partner-images.jpg")',
                                                backgroundSize: "1400%",
                                                backgroundPositionX: "1200%",
                                              }}
                                            />
                                            <div className="border-border-subtle flex h-full flex-col justify-between border-l px-2 py-1.5">
                                              <div className="flex items-center gap-1.5">
                                                <img
                                                  alt="US Flag"
                                                  className="h-2.5 w-3 rounded-sm border-[0.5px] border-black/15"
                                                  src="https://flag.vercel.app/m/CA.svg"
                                                />
                                                <span className="text-content-default text-[9px] font-medium">
                                                  Sophie Laurent
                                                </span>
                                              </div>
                                              <div className="divide-border-subtle flex divide-x">
                                                <div className="flex flex-col pr-4">
                                                  <span className="text-content-muted text-[6px] font-medium">
                                                    Revenue
                                                  </span>
                                                  <span className="text-content-default text-[9px] font-medium">
                                                    $11K
                                                  </span>
                                                </div>
                                                <div className="flex flex-col pl-4">
                                                  <span className="text-content-muted text-[6px] font-medium">
                                                    Payouts
                                                  </span>
                                                  <span className="text-content-default text-[9px] font-medium">
                                                    $3.3K
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="h-[60px] w-[180px] p-[3px]">
                                          <div className="border-border-subtle bg-bg-default flex size-full overflow-hidden rounded border select-none">
                                            <div
                                              className="bg-bg-emphasis aspect-square h-full"
                                              style={{
                                                backgroundImage:
                                                  'url("https://assets.dub.co/partners/partner-images.jpg")',
                                                backgroundSize: "1400%",
                                                backgroundPositionX: "1100%",
                                              }}
                                            />
                                            <div className="border-border-subtle flex h-full flex-col justify-between border-l px-2 py-1.5">
                                              <div className="flex items-center gap-1.5">
                                                <img
                                                  alt="US Flag"
                                                  className="h-2.5 w-3 rounded-sm border-[0.5px] border-black/15"
                                                  src="https://flag.vercel.app/m/JP.svg"
                                                />
                                                <span className="text-content-default text-[9px] font-medium">
                                                  Hiroshi Tanaka
                                                </span>
                                              </div>
                                              <div className="divide-border-subtle flex divide-x">
                                                <div className="flex flex-col pr-4">
                                                  <span className="text-content-muted text-[6px] font-medium">
                                                    Revenue
                                                  </span>
                                                  <span className="text-content-default text-[9px] font-medium">
                                                    $19.2K
                                                  </span>
                                                </div>
                                                <div className="flex flex-col pl-4">
                                                  <span className="text-content-muted text-[6px] font-medium">
                                                    Payouts
                                                  </span>
                                                  <span className="text-content-default text-[9px] font-medium">
                                                    $5.7K
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="h-[60px] w-[180px] p-[3px]">
                                          <div className="border-border-subtle bg-bg-default flex size-full overflow-hidden rounded border select-none">
                                            <div
                                              className="bg-bg-emphasis aspect-square h-full"
                                              style={{
                                                backgroundImage:
                                                  'url("https://assets.dub.co/partners/partner-images.jpg")',
                                                backgroundSize: "1400%",
                                                backgroundPositionX: "1000%",
                                              }}
                                            />
                                            <div className="border-border-subtle flex h-full flex-col justify-between border-l px-2 py-1.5">
                                              <div className="flex items-center gap-1.5">
                                                <img
                                                  alt="US Flag"
                                                  className="h-2.5 w-3 rounded-sm border-[0.5px] border-black/15"
                                                  src="https://flag.vercel.app/m/DE.svg"
                                                />
                                                <span className="text-content-default text-[9px] font-medium">
                                                  Elias Weber
                                                </span>
                                              </div>
                                              <div className="divide-border-subtle flex divide-x">
                                                <div className="flex flex-col pr-4">
                                                  <span className="text-content-muted text-[6px] font-medium">
                                                    Revenue
                                                  </span>
                                                  <span className="text-content-default text-[9px] font-medium">
                                                    $783
                                                  </span>
                                                </div>
                                                <div className="flex flex-col pl-4">
                                                  <span className="text-content-muted text-[6px] font-medium">
                                                    Payouts
                                                  </span>
                                                  <span className="text-content-default text-[9px] font-medium">
                                                    $235
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="h-[60px] w-[180px] p-[3px]">
                                          <div className="border-border-subtle bg-bg-default flex size-full overflow-hidden rounded border select-none">
                                            <div
                                              className="bg-bg-emphasis aspect-square h-full"
                                              style={{
                                                backgroundImage:
                                                  'url("https://assets.dub.co/partners/partner-images.jpg")',
                                                backgroundSize: "1400%",
                                                backgroundPositionX: "900%",
                                              }}
                                            />
                                            <div className="border-border-subtle flex h-full flex-col justify-between border-l px-2 py-1.5">
                                              <div className="flex items-center gap-1.5">
                                                <img
                                                  alt="US Flag"
                                                  className="h-2.5 w-3 rounded-sm border-[0.5px] border-black/15"
                                                  src="https://flag.vercel.app/m/US.svg"
                                                />
                                                <span className="text-content-default text-[9px] font-medium">
                                                  Liam Carter
                                                </span>
                                              </div>
                                              <div className="divide-border-subtle flex divide-x">
                                                <div className="flex flex-col pr-4">
                                                  <span className="text-content-muted text-[6px] font-medium">
                                                    Revenue
                                                  </span>
                                                  <span className="text-content-default text-[9px] font-medium">
                                                    $30K
                                                  </span>
                                                </div>
                                                <div className="flex flex-col pl-4">
                                                  <span className="text-content-muted text-[6px] font-medium">
                                                    Payouts
                                                  </span>
                                                  <span className="text-content-default text-[9px] font-medium">
                                                    $9.2K
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,var(--color),transparent)] opacity-[0.07] transition-opacity duration-150 group-hover:opacity-15" />
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
