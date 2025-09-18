"use client";

import * as React from "react";
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
              <a className="block w-fit py-2 pr-2" href="/home">
                <div className="max-w-fit">
                  <svg
                    width={46}
                    height={24}
                    viewBox="0 0 46 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-auto text-black"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11 2H14V13.9332L14.0003 13.9731L14.0003 14C14.0003 14.0223 14.0002 14.0445 14 14.0668V21H11V19.7455C9.86619 20.5362 8.48733 21 7.00016 21C3.13408 21 0 17.866 0 14C0 10.134 3.13408 7 7.00016 7C8.48733 7 9.86619 7.46375 11 8.25452V2ZM7 17.9998C9.20914 17.9998 11 16.209 11 13.9999C11 11.7908 9.20914 10 7 10C4.79086 10 3 11.7908 3 13.9999C3 16.209 4.79086 17.9998 7 17.9998ZM32 2H35V8.25474C36.1339 7.46383 37.5128 7 39.0002 7C42.8662 7 46.0003 10.134 46.0003 14C46.0003 17.866 42.8662 21 39.0002 21C35.1341 21 32 17.866 32 14V2ZM39 17.9998C41.2091 17.9998 43 16.209 43 13.9999C43 11.7908 41.2091 10 39 10C36.7909 10 35 11.7908 35 13.9999C35 16.209 36.7909 17.9998 39 17.9998ZM19 7H16V14C16 14.9192 16.1811 15.8295 16.5329 16.6788C16.8846 17.5281 17.4003 18.2997 18.0503 18.9497C18.7003 19.5997 19.472 20.1154 20.3213 20.4671C21.1706 20.8189 22.0809 21 23.0002 21C23.9194 21 24.8297 20.8189 25.679 20.4671C26.5283 20.1154 27.3 19.5997 27.95 18.9497C28.6 18.2997 29.1157 17.5281 29.4675 16.6788C29.8192 15.8295 30.0003 14.9192 30.0003 14H30V7H27V14C27 15.0608 26.5785 16.0782 25.8284 16.8283C25.0783 17.5784 24.0609 17.9998 23 17.9998C21.9391 17.9998 20.9217 17.5784 20.1716 16.8283C19.4215 16.0782 19 15.0608 19 14V7Z"
                      fill="currentColor"
                    />
                  </svg>
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
                              className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 dark:border-white/20 dark:bg-white/10"
                              data-radix-collection-item
                              href="/links"
                            >
                              <svg
                                className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(transparent,black,transparent)] text-black/10 dark:text-white/5"
                                width="100%"
                                height="100%"
                              >
                                <defs>
                                  <pattern
                                    id="grid-«rb9»"
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
                                  fill="url(#grid-«rb9»)"
                                  width="100%"
                                  height="100%"
                                />
                              </svg>
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
                                <span className="mt-3 block text-sm font-medium text-neutral-900 dark:text-white">
                                  Dub Links
                                </span>
                                <p className="mt-2 max-w-56 text-sm text-neutral-500 dark:text-white/60">
                                  Short links with superpowers for modern
                                  marketing teams.
                                </p>
                              </div>
                              <div className="relative mt-10 h-40 grow">
                                <div className="absolute top-0 left-0 size-full grow overflow-hidden [mask-image:linear-gradient(black_50%,transparent)] px-2">
                                  <div className="relative size-full">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      width={300}
                                      height={180}
                                      fill="none"
                                      viewBox="0 0 300 180"
                                      className="pointer-events-none absolute top-0 left-0 h-auto w-full text-[var(--fg)] [--bg:white] [--border:#e5e5e5] [--fg:#171717] [--muted:#404040] dark:[--bg:black] dark:[--border:#fff3] dark:[--fg:#fffa] dark:[--muted:#fff7]"
                                    >
                                      <defs>
                                        <path
                                          id="«rba»-m"
                                          className="fill-[var(--bg)]"
                                          d="M0 0h10.24v10.24H0z"
                                        />
                                        <path
                                          id="«rba»-n"
                                          className="fill-[var(--bg)]"
                                          d="M0 0h8.05v8.05H0z"
                                        />
                                        <path
                                          id="«rba»-o"
                                          className="fill-[var(--bg)]"
                                          d="M0 0h11.71v11.71H0z"
                                        />
                                      </defs>
                                      <rect
                                        width={292}
                                        height={52}
                                        x={4}
                                        y={4}
                                        rx="8.78"
                                        className="fill-[var(--bg)]"
                                      />
                                      <rect
                                        width={292}
                                        height={52}
                                        x={4}
                                        y={4}
                                        className="stroke-[var(--border)]"
                                        strokeWidth="0.73"
                                        rx="8.78"
                                      />
                                      <rect
                                        width="24.88"
                                        height="24.88"
                                        x="17.17"
                                        y="17.56"
                                        fill="url(#«rba»-a)"
                                        rx="12.44"
                                      />
                                      <rect
                                        width="25.61"
                                        height="25.61"
                                        x="16.8"
                                        y="17.2"
                                        className="stroke-[var(--border)]"
                                        strokeWidth="0.73"
                                        rx="12.8"
                                      />
                                      <path
                                        className="fill-[var(--fg)]"
                                        d="M29.61 23c.6 0 1.19.08 1.75.22v3.75a3.5 3.5 0 1 0 0 6.06v.47h1.75v-9.56a7 7 0 1 1-3.5-.94m2.29.39"
                                      />
                                      <text
                                        xmlSpace="preserve"
                                        className="fill-[var(--fg)]"
                                        fontSize="10.24"
                                        fontWeight={600}
                                        style={{ whiteSpace: "pre" }}
                                      >
                                        <tspan x="50.83" y="25.49">
                                          d.to
                                        </tspan>
                                      </text>
                                      <g
                                        className="stroke-[var(--fg)]"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.1"
                                        clipPath="url(#«rba»-b)"
                                      >
                                        <path d="M84.47 26.08h3.98c.63 0 1.14-.51 1.14-1.14v-3.98c0-.63-.51-1.14-1.14-1.14h-3.98c-.63 0-1.14.5-1.14 1.14v3.98c0 .63.5 1.14 1.14 1.14" />
                                        <path d="M82.05 24a1.14 1.14 0 0 1-.71-1.05v-3.99c0-.63.5-1.13 1.14-1.13h3.98c.48 0 .89.29 1.05.7" />
                                      </g>
                                      <path
                                        className="stroke-[var(--fg)]"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.1"
                                        d="M106.87 23.66h-1.29a.85.85 0 0 0-.85.85v1.28m-1.71-5.97v1.28a.85.85 0 0 1-.85.85h-1.28m3.84.01h.43m-2.14 3.83v-.42m-3.41-7.26h1.28c.24 0 .43.2.43.43v1.28c0 .23-.2.42-.43.42h-1.28a.43.43 0 0 1-.43-.42v-1.28c0-.24.2-.43.43-.43m5.55 0h1.28c.23 0 .43.2.43.43v1.28c0 .23-.2.42-.43.42h-1.28a.43.43 0 0 1-.43-.42v-1.28c0-.24.2-.43.43-.43m-5.55 5.55h1.28c.24 0 .43.19.43.43v1.28c0 .23-.2.42-.43.42h-1.28a.43.43 0 0 1-.43-.42v-1.28c0-.24.2-.43.43-.43"
                                      />
                                      <g
                                        stroke="#A1A1A1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.1"
                                        clipPath="url(#«rba»-c)"
                                      >
                                        <path d="M59.11 38.38h-4.7a.9.9 0 0 1-.89-.89V35.7" />
                                        <path d="m57.21 36.48 1.9 1.9-1.9 1.9" />
                                      </g>
                                      <text
                                        xmlSpace="preserve"
                                        fill="#737373"
                                        fontSize="10.24"
                                        fontWeight={500}
                                        style={{ whiteSpace: "pre" }}
                                      >
                                        <tspan x="63.27" y="41.59">
                                          dub.co
                                        </tspan>
                                      </text>
                                      <path
                                        className="fill-[var(--bg)]"
                                        d="M205.12 19.4h69.22c1.24 0 2.14 0 2.86.05.62.05 1.07.14 1.44.3l.16.08c.66.34 1.22.85 1.6 1.48l.16.28c.21.4.32.9.38 1.6.06.72.06 1.62.06 2.86v7.9c0 1.24 0 2.14-.06 2.85a4.6 4.6 0 0 1-.3 1.45l-.08.16a4 4 0 0 1-1.48 1.6l-.28.16c-.4.2-.9.32-1.6.38-.72.06-1.62.06-2.86.06h-69.22c-1.23 0-2.14 0-2.85-.06a4.6 4.6 0 0 1-1.45-.3l-.16-.08a4 4 0 0 1-1.6-1.48l-.16-.28c-.2-.4-.32-.9-.38-1.6-.06-.72-.06-1.62-.06-2.86v-7.9c0-1.24 0-2.14.06-2.85s.17-1.2.38-1.61c.39-.76 1-1.38 1.76-1.76.41-.2.9-.32 1.6-.38.72-.06 1.63-.06 2.86-.06Z"
                                      />
                                      <path
                                        className="stroke-[var(--border)]"
                                        strokeWidth="0.73"
                                        d="M205.12 19.4h69.22c1.24 0 2.14 0 2.86.05.62.05 1.07.14 1.44.3l.16.08c.66.34 1.22.85 1.6 1.48l.16.28c.21.4.32.9.38 1.6.06.72.06 1.62.06 2.86v7.9c0 1.24 0 2.14-.06 2.85a4.6 4.6 0 0 1-.3 1.45l-.08.16a4 4 0 0 1-1.48 1.6l-.28.16c-.4.2-.9.32-1.6.38-.72.06-1.62.06-2.86.06h-69.22c-1.23 0-2.14 0-2.85-.06a4.6 4.6 0 0 1-1.45-.3l-.16-.08a4 4 0 0 1-1.6-1.48l-.16-.28c-.2-.4-.32-.9-.38-1.6-.06-.72-.06-1.62-.06-2.86v-7.9c0-1.24 0-2.14.06-2.85s.17-1.2.38-1.61c.39-.76 1-1.38 1.76-1.76.41-.2.9-.32 1.6-.38.72-.06 1.63-.06 2.86-.06Z"
                                      />
                                      <g
                                        className="stroke-[var(--muted)]"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.1"
                                        clipPath="url(#«rba»-d)"
                                      >
                                        <path d="m209.95 29.2 4.75 1.64c.15.05.15.25 0 .3l-2.13.8a.16.16 0 0 0-.09.1l-.8 2.13a.16.16 0 0 1-.3 0l-1.64-4.76a.16.16 0 0 1 .2-.2h0Zm2.55 2.77 2.75 2.74m-5.53-9.43v1.3m2.76-.15-.92.92m-4.6 4.6.92-.92m-2.06-1.84h1.3m-.16-2.76.92.92" />
                                      </g>
                                      <text
                                        xmlSpace="preserve"
                                        className="fill-[var(--muted)]"
                                        fontSize="8.78"
                                        fontWeight={500}
                                        style={{ whiteSpace: "pre" }}
                                      >
                                        <tspan x="220.78" y="33.19">
                                          151.8K clicks
                                        </tspan>
                                      </text>
                                      <rect
                                        width={292}
                                        height={52}
                                        x={4}
                                        y={64}
                                        rx="8.78"
                                        className="fill-[var(--bg)]"
                                      />
                                      <rect
                                        width={292}
                                        height={52}
                                        x={4}
                                        y={64}
                                        className="stroke-[var(--border)]"
                                        strokeWidth="0.73"
                                        rx="8.78"
                                      />
                                      <rect
                                        width="24.88"
                                        height="24.88"
                                        x="17.17"
                                        y="77.56"
                                        fill="url(#«rba»-e)"
                                        rx="12.44"
                                      />
                                      <rect
                                        width="25.61"
                                        height="25.61"
                                        x="16.8"
                                        y="77.19"
                                        className="stroke-[var(--border)]"
                                        strokeWidth="0.73"
                                        rx="12.8"
                                      />
                                      <path
                                        className="fill-[var(--fg)]"
                                        d="M29.61 83c.6 0 1.19.08 1.75.22v3.75a3.5 3.5 0 1 0 0 6.06v.47h1.75v-9.56a7 7 0 1 1-3.5-.94m2.29.39"
                                      />
                                      <text
                                        xmlSpace="preserve"
                                        className="fill-[var(--fg)]"
                                        fontSize="10.24"
                                        fontWeight={600}
                                        style={{ whiteSpace: "pre" }}
                                      >
                                        <tspan x="50.83" y="85.49">
                                          d.to/register
                                        </tspan>
                                      </text>
                                      <g
                                        className="stroke-[var(--fg)]"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.1"
                                        clipPath="url(#«rba»-f)"
                                      >
                                        <path d="M126.47 86.08h3.98c.63 0 1.14-.51 1.14-1.14v-3.98c0-.63-.51-1.14-1.14-1.14h-3.98c-.63 0-1.14.5-1.14 1.14v3.98c0 .63.5 1.14 1.14 1.14" />
                                        <path d="M124.05 84a1.14 1.14 0 0 1-.71-1.05v-3.99c0-.63.5-1.13 1.13-1.13h3.99c.48 0 .89.29 1.05.7" />
                                      </g>
                                      <path
                                        className="stroke-[var(--fg)]"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.1"
                                        d="M148.87 83.66h-1.28a.85.85 0 0 0-.86.85v1.28m-1.71-5.97v1.28a.85.85 0 0 1-.85.85h-1.28m3.84.01h.43m-2.14 3.83v-.42m-3.41-7.26h1.28c.24 0 .43.2.43.43v1.28c0 .23-.2.42-.43.42h-1.28a.43.43 0 0 1-.43-.42v-1.28c0-.24.2-.43.43-.43m5.55 0h1.28c.24 0 .43.2.43.43v1.28c0 .23-.2.42-.43.42h-1.28a.43.43 0 0 1-.43-.42v-1.28c0-.24.2-.43.43-.43m-5.55 5.55h1.28c.24 0 .43.19.43.43v1.28c0 .23-.2.42-.43.42h-1.28a.43.43 0 0 1-.43-.42v-1.28c0-.24.2-.43.43-.43"
                                      />
                                      <g
                                        stroke="#A1A1A1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.1"
                                        clipPath="url(#«rba»-g)"
                                      >
                                        <path d="M59.11 98.38h-4.7a.9.9 0 0 1-.89-.89V95.7" />
                                        <path d="m57.21 96.48 1.9 1.9-1.9 1.9" />
                                      </g>
                                      <text
                                        xmlSpace="preserve"
                                        fill="#737373"
                                        fontSize="10.24"
                                        fontWeight={500}
                                        style={{ whiteSpace: "pre" }}
                                      >
                                        <tspan x="63.27" y="101.59">
                                          app.dub.co/register
                                        </tspan>
                                      </text>
                                      <path
                                        className="fill-[var(--bg)]"
                                        d="M211.12 79.4h63.22c1.24 0 2.14 0 2.86.05.62.05 1.07.14 1.44.3l.16.08c.66.34 1.22.85 1.6 1.48l.16.28c.21.4.32.9.38 1.6.06.72.06 1.62.06 2.86v7.9c0 1.24 0 2.14-.06 2.85a4.6 4.6 0 0 1-.3 1.45l-.08.16a4.03 4.03 0 0 1-1.48 1.6l-.28.16c-.4.2-.9.32-1.6.38-.72.06-1.62.06-2.86.06h-63.22c-1.23 0-2.14 0-2.85-.06a4.6 4.6 0 0 1-1.45-.3l-.16-.08a4 4 0 0 1-1.6-1.48l-.16-.28c-.2-.4-.32-.9-.38-1.6-.06-.72-.06-1.62-.06-2.86v-7.9c0-1.24 0-2.14.06-2.85s.17-1.2.38-1.61c.39-.76 1-1.38 1.76-1.76.41-.2.9-.32 1.6-.38.72-.06 1.63-.06 2.86-.06Z"
                                      />
                                      <path
                                        className="stroke-[var(--border)]"
                                        strokeWidth="0.73"
                                        d="M211.12 79.4h63.22c1.24 0 2.14 0 2.86.05.62.05 1.07.14 1.44.3l.16.08c.66.34 1.22.85 1.6 1.48l.16.28c.21.4.32.9.38 1.6.06.72.06 1.62.06 2.86v7.9c0 1.24 0 2.14-.06 2.85a4.6 4.6 0 0 1-.3 1.45l-.08.16a4.03 4.03 0 0 1-1.48 1.6l-.28.16c-.4.2-.9.32-1.6.38-.72.06-1.62.06-2.86.06h-63.22c-1.23 0-2.14 0-2.85-.06a4.6 4.6 0 0 1-1.45-.3l-.16-.08a4 4 0 0 1-1.6-1.48l-.16-.28c-.2-.4-.32-.9-.38-1.6-.06-.72-.06-1.62-.06-2.86v-7.9c0-1.24 0-2.14.06-2.85s.17-1.2.38-1.61c.39-.76 1-1.38 1.76-1.76.41-.2.9-.32 1.6-.38.72-.06 1.63-.06 2.86-.06Z"
                                      />
                                      <g
                                        className="stroke-[var(--muted)]"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.1"
                                        clipPath="url(#«rba»-h)"
                                      >
                                        <path d="m215.95 89.2 4.75 1.64c.15.05.15.25 0 .3l-2.13.8a.16.16 0 0 0-.09.1l-.8 2.13a.16.16 0 0 1-.3 0l-1.64-4.76a.16.16 0 0 1 .2-.2h0Zm2.55 2.77 2.75 2.74m-5.53-9.43v1.3m2.76-.15-.92.92m-4.6 4.6.92-.92m-2.06-1.84h1.3m-.16-2.76.92.92" />
                                      </g>
                                      <text
                                        xmlSpace="preserve"
                                        className="fill-[var(--muted)]"
                                        fontSize="8.78"
                                        fontWeight={500}
                                        style={{ whiteSpace: "pre" }}
                                      >
                                        <tspan x="226.78" y="93.19">
                                          100K clicks
                                        </tspan>
                                      </text>
                                      <path
                                        className="fill-[var(--bg)]"
                                        d="M4 138.05c0-4.92 0-7.38.96-9.26a8.7 8.7 0 0 1 3.83-3.83c1.88-.96 4.34-.96 9.26-.96h263.9c4.92 0 7.38 0 9.26.96a8.7 8.7 0 0 1 3.83 3.83c.96 1.88.96 4.34.96 9.26v23.9c0 4.92 0 7.38-.96 9.26a8.78 8.78 0 0 1-3.83 3.83c-1.88.96-4.34.96-9.26.96H18.05c-4.92 0-7.38 0-9.26-.96a8.78 8.78 0 0 1-3.83-3.83C4 169.33 4 166.87 4 161.95z"
                                      />
                                      <path
                                        className="stroke-[var(--border)]"
                                        strokeWidth="0.73"
                                        d="M4 138.05c0-4.92 0-7.38.96-9.26a8.7 8.7 0 0 1 3.83-3.83c1.88-.96 4.34-.96 9.26-.96h263.9c4.92 0 7.38 0 9.26.96a8.7 8.7 0 0 1 3.83 3.83c.96 1.88.96 4.34.96 9.26v23.9c0 4.92 0 7.38-.96 9.26a8.78 8.78 0 0 1-3.83 3.83c-1.88.96-4.34.96-9.26.96H18.05c-4.92 0-7.38 0-9.26-.96a8.78 8.78 0 0 1-3.83-3.83C4 169.33 4 166.87 4 161.95z"
                                      />
                                      <rect
                                        width="24.88"
                                        height="24.88"
                                        x="17.17"
                                        y="137.56"
                                        fill="url(#«rba»-i)"
                                        rx="12.44"
                                      />
                                      <rect
                                        width="25.61"
                                        height="25.61"
                                        x="16.8"
                                        y="137.19"
                                        className="stroke-[var(--border)]"
                                        strokeWidth="0.73"
                                        rx="12.8"
                                      />
                                      <path
                                        className="fill-[var(--fg)]"
                                        d="M29.61 143c.6 0 1.19.08 1.75.22v3.75a3.5 3.5 0 1 0 0 6.06v.47h1.75v-9.56a7 7 0 1 1-3.5-.94m2.29.39"
                                      />
                                      <text
                                        xmlSpace="preserve"
                                        className="fill-[var(--fg)]"
                                        fontSize="10.24"
                                        fontWeight={600}
                                        style={{ whiteSpace: "pre" }}
                                      >
                                        <tspan x="50.83" y="145.49">
                                          d.to/try
                                        </tspan>
                                      </text>
                                      <g
                                        className="stroke-[var(--fg)]"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.1"
                                        clipPath="url(#«rba»-j)"
                                      >
                                        <path d="M102.47 146.08h3.98c.63 0 1.14-.51 1.14-1.14v-3.98c0-.63-.51-1.14-1.14-1.14h-3.98c-.63 0-1.14.5-1.14 1.14v3.98c0 .63.5 1.14 1.14 1.14" />
                                        <path d="M100.05 144a1.14 1.14 0 0 1-.71-1.05v-3.99c0-.63.5-1.14 1.13-1.14h3.99c.48 0 .89.3 1.06.72" />
                                      </g>
                                      <path
                                        className="stroke-[var(--fg)]"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.1"
                                        d="M124.87 143.66h-1.29a.85.85 0 0 0-.85.85v1.28m-1.71-5.97v1.28a.85.85 0 0 1-.85.85h-1.28m3.84.01h.43m-2.14 3.83v-.42m-3.41-7.26h1.28c.24 0 .43.2.43.43v1.28c0 .23-.2.42-.43.42h-1.28a.43.43 0 0 1-.43-.42v-1.28c0-.24.2-.43.43-.43m5.55 0h1.28c.23 0 .43.2.43.43v1.28c0 .23-.2.42-.43.42h-1.28a.43.43 0 0 1-.43-.42v-1.28c0-.24.2-.43.43-.43m-5.55 5.55h1.28c.24 0 .43.19.43.43v1.28c0 .23-.2.42-.43.42h-1.28a.43.43 0 0 1-.43-.42v-1.28c0-.24.2-.43.43-.43"
                                      />
                                      <g
                                        stroke="#A1A1A1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.1"
                                        clipPath="url(#«rba»-k)"
                                      >
                                        <path d="M59.11 158.38h-4.7a.9.9 0 0 1-.89-.89v-1.79" />
                                        <path d="m57.21 156.48 1.9 1.9-1.9 1.9" />
                                      </g>
                                      <text
                                        xmlSpace="preserve"
                                        fill="#737373"
                                        fontSize="10.24"
                                        fontWeight={500}
                                        style={{ whiteSpace: "pre" }}
                                      >
                                        <tspan x="63.27" y="161.59">
                                          app.dub.co/register
                                        </tspan>
                                      </text>
                                      <path
                                        className="fill-[var(--bg)]"
                                        d="M208.12 139.4h66.22c1.24 0 2.14 0 2.86.05.62.05 1.07.14 1.44.3l.16.08c.66.34 1.22.85 1.6 1.48l.16.28c.21.4.32.9.38 1.6.06.72.06 1.62.06 2.86v7.9c0 1.24 0 2.14-.06 2.86a4.6 4.6 0 0 1-.3 1.44l-.08.16a4 4 0 0 1-1.48 1.6l-.28.16c-.4.2-.9.32-1.6.38-.72.06-1.62.06-2.86.06h-66.22c-1.23 0-2.14 0-2.85-.06a4.6 4.6 0 0 1-1.45-.3l-.16-.08a4 4 0 0 1-1.6-1.48l-.16-.28c-.2-.4-.32-.9-.38-1.6-.06-.72-.06-1.62-.06-2.86v-7.9c0-1.24 0-2.14.06-2.86.06-.7.17-1.2.38-1.6.39-.76 1-1.38 1.76-1.76.41-.2.9-.32 1.6-.38.72-.06 1.63-.06 2.86-.06Z"
                                      />
                                      <path
                                        className="stroke-[var(--border)]"
                                        strokeWidth="0.73"
                                        d="M208.12 139.4h66.22c1.24 0 2.14 0 2.86.05.62.05 1.07.14 1.44.3l.16.08c.66.34 1.22.85 1.6 1.48l.16.28c.21.4.32.9.38 1.6.06.72.06 1.62.06 2.86v7.9c0 1.24 0 2.14-.06 2.86a4.6 4.6 0 0 1-.3 1.44l-.08.16a4 4 0 0 1-1.48 1.6l-.28.16c-.4.2-.9.32-1.6.38-.72.06-1.62.06-2.86.06h-66.22c-1.23 0-2.14 0-2.85-.06a4.6 4.6 0 0 1-1.45-.3l-.16-.08a4 4 0 0 1-1.6-1.48l-.16-.28c-.2-.4-.32-.9-.38-1.6-.06-.72-.06-1.62-.06-2.86v-7.9c0-1.24 0-2.14.06-2.86.06-.7.17-1.2.38-1.6.39-.76 1-1.38 1.76-1.76.41-.2.9-.32 1.6-.38.72-.06 1.63-.06 2.86-.06Z"
                                      />
                                      <g
                                        className="stroke-[var(--muted)]"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.1"
                                        clipPath="url(#«rba»-l)"
                                      >
                                        <path d="m212.95 149.2 4.75 1.64c.15.05.15.25 0 .3l-2.13.8a.17.17 0 0 0-.09.1l-.8 2.13a.16.16 0 0 1-.3 0l-1.64-4.76a.16.16 0 0 1 .2-.2h0Zm2.55 2.77 2.75 2.74m-5.53-9.43v1.3m2.76-.15-.92.92m-4.6 4.6.92-.92m-2.06-1.84h1.3m-.16-2.76.92.92" />
                                      </g>
                                      <text
                                        xmlSpace="preserve"
                                        className="fill-[var(--muted)]"
                                        fontSize="8.78"
                                        fontWeight={500}
                                        style={{ whiteSpace: "pre" }}
                                      >
                                        <tspan x="223.78" y="153.19">
                                          65.8K clicks
                                        </tspan>
                                      </text>
                                      <defs>
                                        <clipPath id="«rba»-b">
                                          <use
                                            xlinkHref="#«rba»-m"
                                            transform="translate(80.34 16.83)"
                                          />
                                        </clipPath>
                                        <clipPath id="«rba»-c">
                                          <use
                                            xlinkHref="#«rba»-n"
                                            transform="translate(52.3 34.02)"
                                          />
                                        </clipPath>
                                        <clipPath id="«rba»-d">
                                          <use
                                            xlinkHref="#«rba»-o"
                                            transform="translate(204.68 24.15)"
                                          />
                                        </clipPath>
                                        <clipPath id="«rba»-f">
                                          <use
                                            xlinkHref="#«rba»-m"
                                            transform="translate(122.34 76.83)"
                                          />
                                        </clipPath>
                                        <clipPath id="«rba»-g">
                                          <use
                                            xlinkHref="#«rba»-n"
                                            transform="translate(52.3 94.02)"
                                          />
                                        </clipPath>
                                        <clipPath id="«rba»-h">
                                          <use
                                            xlinkHref="#«rba»-o"
                                            transform="translate(210.68 84.15)"
                                          />
                                        </clipPath>
                                        <clipPath id="«rba»-j">
                                          <use
                                            xlinkHref="#«rba»-m"
                                            transform="translate(98.34 136.83)"
                                          />
                                        </clipPath>
                                        <clipPath id="«rba»-k">
                                          <use
                                            xlinkHref="#«rba»-n"
                                            transform="translate(52.3 154.02)"
                                          />
                                        </clipPath>
                                        <clipPath id="«rba»-l">
                                          <use
                                            xlinkHref="#«rba»-o"
                                            transform="translate(207.68 144.15)"
                                          />
                                        </clipPath>
                                        <linearGradient
                                          id="«rba»-a"
                                          x1="29.61"
                                          x2="29.61"
                                          y1="17.56"
                                          y2="42.44"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop
                                            stopColor="#030712"
                                            stopOpacity={0}
                                          />
                                          <stop
                                            offset={1}
                                            stopColor="#030712"
                                            stopOpacity="0.05"
                                          />
                                        </linearGradient>
                                        <linearGradient
                                          id="«rba»-e"
                                          x1="29.61"
                                          x2="29.61"
                                          y1="77.56"
                                          y2="102.44"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop
                                            stopColor="#030712"
                                            stopOpacity={0}
                                          />
                                          <stop
                                            offset={1}
                                            stopColor="#030712"
                                            stopOpacity="0.05"
                                          />
                                        </linearGradient>
                                        <linearGradient
                                          id="«rba»-i"
                                          x1="29.61"
                                          x2="29.61"
                                          y1="137.56"
                                          y2="162.44"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop
                                            stopColor="#030712"
                                            stopOpacity={0}
                                          />
                                          <stop
                                            offset={1}
                                            stopColor="#030712"
                                            stopOpacity="0.05"
                                          />
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,var(--color),transparent)] opacity-[0.07] transition-opacity duration-150 group-hover:opacity-15" />
                            </a>
                            <a
                              className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 dark:border-white/20 dark:bg-white/10"
                              data-radix-collection-item
                              href="/analytics"
                            >
                              <svg
                                className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(transparent,black,transparent)] text-black/10 dark:text-white/5"
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
                                <span className="mt-3 block text-sm font-medium text-neutral-900 dark:text-white">
                                  Dub Analytics
                                </span>
                                <p className="mt-2 max-w-56 text-sm text-neutral-500 dark:text-white/60">
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
                              className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 dark:border-white/20 dark:bg-white/10"
                              data-radix-collection-item
                              href="/partners"
                            >
                              <svg
                                className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(transparent,black,transparent)] text-black/10 dark:text-white/5"
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
                                <span className="mt-3 block text-sm font-medium text-neutral-900 dark:text-white">
                                  Dub Partners
                                </span>
                                <p className="mt-2 max-w-56 text-sm text-neutral-500 dark:text-white/60">
                                  Grow your revenue on auto-pilot with
                                  partnerships.
                                </p>
                              </div>
                              <div className="relative mt-10 h-40 grow">
                                <div className="absolute top-0 left-0 size-full grow overflow-hidden [mask-image:linear-gradient(black_50%,transparent)] pl-2">
                                  <div className="relative size-full">
                                    <div
                                      className="pointer-events-none relative size-full dark:opacity-80"
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
