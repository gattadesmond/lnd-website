import React from "react";

function CTASection() {
  return (
    <div className="relative bg-neutral-900 px-4">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30 mix-blend-overlay">
        <div className="absolute -inset-[40px] bg-[conic-gradient(from_-81deg,#3A8BFD_-72deg,#855AFC_33deg,#F00_70deg,#EAB308_136deg,#5CFF80_214deg,#00FFF9_259deg,#3A8BFD_288deg,#855AFC_393deg)] blur-[30px]" />
      </div>
      <div className="max-w-grid-width relative mx-auto">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 border-x border-white/5 [mask-image:linear-gradient(black,transparent)]" />
          <div className="absolute inset-y-0 left-1/2 w-[1200px] -translate-x-1/2">
            <svg
              className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(black,transparent),radial-gradient(black,transparent)] [mask-composite:intersect] text-white/15"
              width="100%"
              height="100%"
            >
              <defs>
                <pattern
                  id="grid-«Rju7ninb»"
                  x={-1}
                  y={-1}
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
              <rect fill="url(#grid-«Rju7ninb»)" width="100%" height="100%" />
            </svg>
          </div>
        </div>
        <div className="relative top-0 z-0 mx-auto mt-0 flex h-16 max-w-[min(700px,calc(100vw-2rem))] -translate-y-px items-start justify-center text-white">
          <svg
            viewBox="0 0 85 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-auto shrink-0 translate-x-px translate-y-px overflow-visible"
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
          <div className="relative z-10 h-[calc(100%+1px)] min-w-0 grow border-t-1 border-current bg-current" />
          <svg
            viewBox="0 0 85 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-auto shrink-0 -translate-x-px translate-y-px -scale-x-100 overflow-visible"
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
        <div className="relative flex flex-col items-center px-4 pt-24 pb-32 text-center">
          <h2 className="max-w-lg font-display text-4xl font-medium text-balance text-neutral-50 sm:text-5xl">
            Supercharge your marketing efforts
          </h2>
          <p className="mt-6 max-w-[560px] text-lg font-medium text-pretty text-neutral-400 sm:text-xl">
            See why Dub is the link attribution platform of choice for modern
            marketing teams.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <a
              className="flex h-10 items-center justify-center rounded-lg border border-neutral-200 bg-white px-5 text-center text-sm font-medium text-neutral-900 ring-white/20 transition-all hover:ring"
              href="https://app.dub.co/register"
            >
              Start for free
            </a>
            <a
              className="flex h-10 items-center justify-center rounded-lg border border-transparent bg-white/20 px-5 text-center text-sm font-medium text-white ring-white/10 backdrop-blur-sm transition-all hover:ring"
              href="/enterprise"
            >
              Get a demo
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <a
              href="https://www.g2.com/products/dub/reviews"
              target="_blank"
              title="G2"
              className="group flex items-center gap-2.5"
            >
              <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 61 63"
                  className="h-3 w-auto text-white"
                >
                  <path
                    fill="currentColor"
                    d="M54.5 18.429h-9.362c.252-1.484 1.162-2.315 3.004-3.257l1.72-.886c3.081-1.595 4.725-3.401 4.725-6.348 0-1.85-.712-3.312-2.126-4.364S49.38 2 47.429 2a7.7 7.7 0 0 0-4.264 1.23c-1.282.797-2.236 1.827-2.828 3.112l2.707 2.747c1.053-2.149 2.577-3.201 4.583-3.201 1.699 0 2.74.886 2.74 2.116 0 1.03-.504 1.883-2.455 2.88l-1.108.543c-2.4 1.23-4.066 2.636-5.031 4.232-.965 1.595-1.436 3.6-1.436 6.026v.665H54.5zm-1.25 8.441h-15.5L30 40.43h15.5L53.25 54 61 40.43z"
                  />
                  <path
                    fill="currentColor"
                    d="M31.472 49.505c-9.914 0-17.989-8.082-17.989-18.005s8.075-18.005 17.989-18.005L37.629.606A31.5 31.5 0 0 0 31.473 0C14.089 0 0 14.102 0 31.5S14.089 63 31.472 63A31.26 31.26 0 0 0 50 56.958l-6.808-11.82a17.93 17.93 0 0 1-11.72 4.367"
                  />
                </svg>
              </div>
              <div className="flex items-center text-white/85">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth={0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star size-4 shrink-0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth={0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star size-4 shrink-0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth={0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star size-4 shrink-0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth={0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star size-4 shrink-0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth={0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star size-4 shrink-0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </a>{" "}
            <a
              href="https://www.producthunt.com/products/dub"
              target="_blank"
              title="Product Hunt"
              className="group flex items-center gap-2.5"
            >
              <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 50 60"
                  className="h-3 w-auto text-white"
                >
                  <path
                    fill="currentColor"
                    d="M29 30H12V12h17a9 9 0 0 1 0 18m0-30H0v60h12V42h17c11.598 0 21-9.402 21-21S40.598 0 29 0"
                  />
                </svg>
              </div>
              <div className="flex items-center text-white/85">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth={0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star size-4 shrink-0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth={0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star size-4 shrink-0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth={0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star size-4 shrink-0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth={0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star size-4 shrink-0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth={0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star size-4 shrink-0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </a>{" "}
            <a
              href="https://www.trustpilot.com/review/dub.co"
              target="_blank"
              title="Trustpilot"
              className="group flex items-center gap-2.5"
            >
              <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 80 76"
                  className="h-3 w-auto text-white"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M49.358 28.99h30.515L55.193 46.87l9.394 28.99-24.679-17.938L15.23 75.86l9.449-28.99L0 28.934l30.515.055L39.964 0zm-9.394 28.933 17.342-4.498-2.112-6.554z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex items-center text-white/85">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth={0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star size-4 shrink-0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth={0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star size-4 shrink-0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth={0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star size-4 shrink-0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth={0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star size-4 shrink-0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth={0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star-half size-4 shrink-0"
                >
                  <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTASection;
