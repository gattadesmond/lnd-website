import React from "react";

function MainNav() {
  return (
    <>
      <div className="fixed top-0 right-0 z-40 flex items-center gap-4 p-2.5 lg:hidden">
        <button className="z-30 rounded-full p-2 transition-colors duration-200 hover:bg-neutral-200 focus:outline-none active:bg-neutral-300 dark:hover:bg-white/20 dark:active:bg-white/30">
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
            className="lucide lucide-menu h-5 w-5 text-neutral-600 dark:text-white/70"
          >
            <line x1={4} x2={20} y1={12} y2={12} />
            <line x1={4} x2={20} y1={6} y2={6} />
            <line x1={4} x2={20} y1={18} y2={18} />
          </svg>
        </button>
        <nav className="fixed inset-0 z-20 hidden max-h-screen w-full overflow-y-auto bg-white px-5 py-16 lg:hidden dark:bg-black dark:text-white/70">
          <ul className="grid divide-y divide-neutral-200 dark:divide-white/[0.15]">
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
                      className="lucide lucide-chevron-down h-5 w-5 text-neutral-500 transition-all dark:text-white/50"
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
                      className="lucide lucide-chevron-down h-5 w-5 text-neutral-500 transition-all dark:text-white/50"
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
                      className="lucide lucide-chevron-down h-5 w-5 text-neutral-500 transition-all dark:text-white/50"
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
                    className="h-6 w-auto text-black dark:text-white"
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
                <ul
                  data-orientation="horizontal"
                  className="group relative z-0 flex"
                  dir="ltr"
                >
                  <li>
                    <button
                      className="group/item relative flex items-center rounded-lg px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-900/5 hover:text-neutral-900 data-[active=true]:bg-neutral-900/5 dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white dark:data-[active=true]:bg-white/10 group-has-[:hover]:data-[active=true]:[&:not(:hover)]:bg-transparent"
                      data-active="false"
                      id="radix-«R2mfinb»-trigger-radix-«R1emfinb»"
                      data-state="closed"
                      aria-expanded="false"
                      aria-controls="radix-«R2mfinb»-content-radix-«R1emfinb»"
                      data-radix-collection-item=""
                    >
                      Product
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={9}
                        height={9}
                        fill="none"
                        viewBox="0 0 9 9"
                        className="ml-1.5 size-2.5 text-neutral-700"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M7.278 3.389 4.5 6.167 1.722 3.389"
                          className="[transform-origin:center] transition-transform duration-150 [transform-box:view-box] [vector-effect:non-scaling-stroke] group-data-[state=open]/item:-scale-y-100"
                        />
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button
                      className="group/item relative flex items-center rounded-lg px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-900/5 hover:text-neutral-900 data-[active=true]:bg-neutral-900/5 dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white dark:data-[active=true]:bg-white/10 group-has-[:hover]:data-[active=true]:[&:not(:hover)]:bg-transparent"
                      data-active="false"
                      id="radix-«R2mfinb»-trigger-radix-«R2emfinb»"
                      data-state="closed"
                      aria-expanded="false"
                      aria-controls="radix-«R2mfinb»-content-radix-«R2emfinb»"
                      data-radix-collection-item=""
                    >
                      Solutions
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={9}
                        height={9}
                        fill="none"
                        viewBox="0 0 9 9"
                        className="ml-1.5 size-2.5 text-neutral-700"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M7.278 3.389 4.5 6.167 1.722 3.389"
                          className="[transform-origin:center] transition-transform duration-150 [transform-box:view-box] [vector-effect:non-scaling-stroke] group-data-[state=open]/item:-scale-y-100"
                        />
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button
                      className="group/item relative flex items-center rounded-lg px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-900/5 hover:text-neutral-900 data-[active=true]:bg-neutral-900/5 dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white dark:data-[active=true]:bg-white/10 group-has-[:hover]:data-[active=true]:[&:not(:hover)]:bg-transparent"
                      data-active="false"
                      id="radix-«R2mfinb»-trigger-radix-«R3emfinb»"
                      data-state="closed"
                      aria-expanded="false"
                      aria-controls="radix-«R2mfinb»-content-radix-«R3emfinb»"
                      data-radix-collection-item=""
                    >
                      Resources
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={9}
                        height={9}
                        fill="none"
                        viewBox="0 0 9 9"
                        className="ml-1.5 size-2.5 text-neutral-700"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M7.278 3.389 4.5 6.167 1.722 3.389"
                          className="[transform-origin:center] transition-transform duration-150 [transform-box:view-box] [vector-effect:non-scaling-stroke] group-data-[state=open]/item:-scale-y-100"
                        />
                      </svg>
                    </button>
                  </li>
                  <li>
                    <a
                      id="nav-/enterprise"
                      className="group/item relative flex items-center rounded-lg px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-900/5 hover:text-neutral-900 data-[active=true]:bg-neutral-900/5 dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white dark:data-[active=true]:bg-white/10 group-has-[:hover]:data-[active=true]:[&:not(:hover)]:bg-transparent"
                      data-active="false"
                      href="/enterprise"
                    >
                      Enterprise
                    </a>
                  </li>
                  <li>
                    <a
                      id="nav-/customers"
                      className="group/item relative flex items-center rounded-lg px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-900/5 hover:text-neutral-900 data-[active=true]:bg-neutral-900/5 dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white dark:data-[active=true]:bg-white/10 group-has-[:hover]:data-[active=true]:[&:not(:hover)]:bg-transparent"
                      data-active="false"
                      href="/customers"
                    >
                      Customers
                    </a>
                  </li>
                  <li>
                    <a
                      id="nav-/pricing"
                      className="group/item relative flex items-center rounded-lg px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-900/5 hover:text-neutral-900 data-[active=true]:bg-neutral-900/5 dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white dark:data-[active=true]:bg-white/10 group-has-[:hover]:data-[active=true]:[&:not(:hover)]:bg-transparent"
                      data-active="false"
                      href="/pricing"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="absolute top-full left-1/2 mt-3 -translate-x-1/2" />
            </nav>
            <div className="hidden grow basis-0 justify-end gap-2 lg:flex" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainNav;
