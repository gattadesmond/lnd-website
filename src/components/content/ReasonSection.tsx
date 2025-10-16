import React from "react";

import { cn } from "@/lib/utils";

import { Container } from "../container";

const reasons = [
  {
    number: 1,
    title: "Constant Learning",
    description:
      "From product development to essential knowledge and skills that are applicable widely across Product roles",
    image:
      "https://homepage.momocdn.net/fileuploads/svg/momo-file-231031171138.svg",
    imageAlt: "momo-file-231031171138",
    imageClass:
      "absolute bottom-[-10%] left-auto right-0 top-auto z-10 rotate-90 lg:bottom-auto lg:top-[4%] lg:translate-x-[55%] lg:rotate-0",
    href: "/#",
    className: "z-[3] rotate-2",
  },
  {
    number: 2,
    title: "Keep Updated",
    description:
      "Find upcoming trainings, workshops, self-learn resources at ONE place",
    image:
      "https://homepage.momocdn.net/fileuploads/svg/momo-file-231101174306.svg",
    imageAlt: "momo-file-231101174306",
    imageClass:
      "absolute inset-x-0 bottom-[-2%] top-auto z-10 rotate-90 lg:bottom-[4%] lg:left-auto lg:translate-x-[55%] lg:rotate-0",
    href: "/#",
    className: "z-[2] -rotate-2",
  },
  {
    number: 3,
    title: "Add Values",
    description:
      "By freely giving us your feedback and learning recommendation",
    image: "",
    imageAlt: "",
    imageClass: "",
    href: "/feedback",
    className: "z-[1] rotate-2",
  },
];

function ReasonSection() {
  return (
    <Container isBorderX className="py-16">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-3xl font-medium text-neutral-900 sm:text-4xl sm:leading-[1.15]">
          Why Product Knowledge Hub?
        </h2>
        <p className="sm:text-md mt-5 text-neutral-500">
          A learning space for Product members to grow ourselves and grow
          others, so that continuous improvement is enabled in everything that
          we think, do and deliver
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 p-8 py-10 lg:grid-cols-3">
        {reasons.map((reason) => (
          <a
            key={reason.number}
            target="_blank"
            className={cn(
              "bg-opacity-5 hover:bg-opacity-20 relative mx-auto aspect-[392/400] max-w-sm cursor-pointer rounded-xl border border-neutral-200 bg-white p-6 transition-all md:p-8",
              reason.className,
            )}
            href={reason.href}
          >
            {reason.image && (
              <img
                src={reason.image}
                alt={reason.imageAlt}
                className={reason.imageClass}
                width={100}
              />
            )}
            <div className="mb-8 text-4xl">{reason.number}</div>
            <div className="text-2xl font-medium">{reason.title}</div>
            <div className="mt-4 text-neutral-500">{reason.description}</div>

            <div
              className="absolute inset-0 -z-10 rounded-xl"
              style={{
                background: "#ffffff",
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.15) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />
            {/* Your Content/Components */}
          </a>
        ))}
      </div>
    </Container>
  );
}

export default ReasonSection;
