import Image from "next/image";

import { BookOpen, Calendar, GraduationCap, Search } from "lucide-react";

import { Container } from "./container";

export const FooterContent = [
  { name: "MoMo Website", url: "https://momo.vn" },
  {
    name: "MoMo Developer",
    url: "https://developers.momo.vn/v3/docs/payment/guides/home",
  },
  { name: "MoMo Business", url: "https://business.momo.vn/" },
  { name: "MoMo Careers", url: "https://momo.careers/" },
];

export function Footer() {
  return (
    <Container className="relative z-10 overflow-hidden border-0 bg-transparent py-16 backdrop-blur-lg md:rounded-t-2xl">
      <footer>
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col gap-6">
            <div className="grow">
              <a className="block max-w-fit" href="/">
                <span className="sr-only">
                  https://product.momo.vn/{/* */}
                  Lnd
                </span>
                <div className="max-w-fit">
                  <Image src="/LnD.svg" alt="Logo" width={48} height={20} />
                </div>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 lg:col-span-3 lg:mt-0">
            <div className="grid gap-8">
              <div>
                <h3 className="text-sm font-medium text-neutral-900">
                  Our contents
                </h3>
                <ul role="list" className="mt-2.5 flex flex-col gap-3.5">
                  <li>
                    <a
                      className="flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-75 hover:text-neutral-700"
                      href="/"
                    >
                      <div className="flex size-4 items-center justify-center rounded bg-orange-400">
                        <BookOpen className="size-3 text-orange-900" />
                      </div>
                      LnD Stories
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-75 hover:text-neutral-700"
                      href="/"
                    >
                      <div className="flex size-4 items-center justify-center rounded bg-green-400">
                        <GraduationCap className="size-3 text-green-900" />
                      </div>
                      LnD Learning & Development
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-75 hover:text-neutral-700"
                      href="/analytics"
                    >
                      <div className="flex size-4 items-center justify-center rounded bg-violet-400">
                        <Calendar className="size-3 text-violet-900" />
                      </div>
                      LnD Events
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <h3 className="text-sm font-medium text-neutral-900">
                Resources
              </h3>
              <ul role="list" className="mt-2.5 flex flex-col gap-3.5">
                {FooterContent.map((item, index) => (
                  <li key={index}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-neutral-500 transition-colors duration-75 hover:text-neutral-700"
                      href={item.url}
                    >
                      {item.name}
                      <svg
                        height={18}
                        width={18}
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-3.5"
                      >
                        <g fill="currentColor">
                          <path
                            d="M2.75,10.75v2.5c0,1.105,.895,2,2,2H15.25"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M15,6h-4c-2.347,0-4.25,1.903-4.25,4.25h0"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <polyline
                            fill="none"
                            points="12 2.75 15.25 6 12 9.25"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </g>
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-8">
              <div>
                <h3 className="text-sm font-medium text-neutral-900">Info</h3>
                <ul role="list" className="mt-2.5 flex flex-col gap-3.5">
                  <li>
                    <a
                      className="flex items-center gap-1 text-sm text-neutral-500 transition-colors duration-75 hover:text-neutral-700"
                      href="/our-projects"
                    >
                      Our Projects
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-1 text-sm text-neutral-500 transition-colors duration-75 hover:text-neutral-700"
                      href="/feedback"
                    >
                      Feedback
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
}
