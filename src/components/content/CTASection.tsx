import React from "react";

function CTASection() {
  return (
    <div className="relative bg-neutral-900 px-4">
      {/* <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30 mix-blend-overlay">
        <div className="absolute -inset-[40px] bg-[conic-gradient(from_-81deg,#3A8BFD_-72deg,#855AFC_33deg,#F00_70deg,#EAB308_136deg,#5CFF80_214deg,#00FFF9_259deg,#3A8BFD_288deg,#855AFC_393deg)] blur-[30px]" />
      </div> */}
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(236, 72, 153, 0.25), transparent 70%), #000000",
        }}
      /> */}

      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000
        `,
        }}
      />
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(236,72,153,0.4), transparent)`,
        }}
      /> */}
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
          <h2 className="max-w-xl font-display text-4xl font-medium text-neutral-50 sm:text-5xl">
            Want to contribute to our knowledge hub?
          </h2>
          <p className="mt-6 max-w-[560px] text-lg font-medium text-pretty text-neutral-400 sm:text-xl">
            Let&rsquo;s create something awesome.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <a
              className="flex h-10 items-center justify-center rounded-lg border border-neutral-200 bg-white px-5 text-center text-sm font-semibold text-neutral-900 ring-white/20 transition-all hover:ring"
              href="/learning"
            >
              Start Learning
            </a>
            <a
              className="flex h-10 items-center justify-center rounded-lg border border-transparent bg-white/20 px-5 text-center text-sm font-semibold text-white ring-white/10 backdrop-blur-sm transition-all hover:ring"
              href="/stories/huong-dan-dong-gop-product-stories"
            >
              Contribution Guides
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTASection;
