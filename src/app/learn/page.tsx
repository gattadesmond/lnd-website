import { ArrowRightIcon } from "lucide-react";

import { Container } from "@/components/container";
import CTASection from "@/components/content/CTASection";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Learn = async () => {
  return (
    <>
      <section className="border-b border-neutral-200">
        <Container
          isBorderX
          className="relative"
          isGridArea
          borderXClassName="[mask-image:linear-gradient(transparent,black)]"
        >
          <div className="relative bg-gradient-to-t from-green-500/10 to-transparent pt-16 sm:px-12">
            <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center">
              <div className="relative overflow-hidden rounded-full border border-neutral-200 px-3 py-1.5 text-xs leading-tight font-medium text-neutral-600">
                Content Creators
              </div>
              <h1 className="mt-5 animate-slide-up-fade text-center font-display text-4xl font-medium text-pretty text-neutral-900 [--offset:20px] [animation-delay:100ms] [animation-duration:1s] sm:text-5xl sm:leading-[1.15]">
                Learning & Development
              </h1>

              <p className="mt-5 animate-slide-up-fade text-center text-base text-pretty text-neutral-600 [--offset:20px] [animation-delay:200ms] [animation-duration:1s] sm:text-xl">
                Learning is a constant process of discovery - a process without
                end.
              </p>
              <div className="-mb-12 w-full pt-20 md:pt-32">
                <div className="size-full rounded-xl border border-neutral-200 px-1.5 py-1.5 transition-transform duration-300 sm:rounded-3xl sm:px-2 sm:py-2">
                  <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center justify-center rounded-xl border border-neutral-200 bg-white/90">
                    <img
                      src="https://homepage.momocdn.net/img/momo-amazone-s3-api-251020104006-638965536062223475.png"
                      className="absolute -top-24 left-16 w-32 select-none"
                      alt="MoMo masscot"
                    />

                    <div className="relative -mt-16">
                      <div className="relative flex h-[200px] w-[170px] rounded-l-md rounded-r-sm outline -outline-offset-1 outline-black/5">
                        <div className="h-full w-5 rounded-l-md bg-gradient-to-r from-neutral-500 via-neutral-600 to-neutral-700" />
                        <div className="flex h-full w-full rounded-r-sm bg-gradient-to-br from-white to-pink-100 pr-3 pb-3 select-none">
                          <img
                            src="https://homepage.momocdn.net/img/momo-amazone-s3-api-250821154232-638913877527374430.png"
                            alt="Product Foundation Tranning"
                            className="absolute top-4 right-4 w-1.5"
                          />

                          <img
                            className="absolute right-4 bottom-4 h-7"
                            src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg"
                          />
                        </div>
                      </div>
                      <div className="absolute top-5 right-6 left-[34px]">
                        <p className="text-base leading-tight font-semibold">
                          Product Foundation Tranning
                        </p>
                        <div className="animate-fadeIn">
                          <p className="mt-2 text-xs font-medium text-neutral-500">
                            6 Modules
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto mt-8 max-w-lg px-5 md:px-8">
                      <h2 className="text-center text-xl font-semibold text-balance">
                        Khóa học Product Foundation Training
                      </h2>
                      <p className="mt-2 text-center text-neutral-500">
                        {" "}
                        6 Bài học giúp bạn hiểu sâu hơn về cách MoMo làm sản
                        phẩm.
                      </p>

                      <div className="mt-6 flex w-full max-w-md items-center justify-between gap-2 rounded-full bg-neutral-100 px-6 py-3 text-sm leading-snug">
                        <div className="animate-fadeIn mr-2 flex min-w-0 flex-1 flex-shrink flex-col">
                          <p className="truncate font-medium">
                            Module 1: Introduction to Product development
                          </p>
                          <p className="truncate text-gray-500">
                            Hiểu quy trình phát triển sản phẩm, để bạn phối hợp
                            tốt hơn và tạo ra nhiều giá trị hơn
                          </p>
                        </div>
                        <div className="ml-2"></div>
                      </div>
                    </div>

                    <div className="w-full px-5 py-6 text-center md:px-8">
                      <hr />
                      <Button size="lg" className="mt-6 cursor-pointer">
                        <span className="text-base font-semibold">
                          Start Learning
                        </span>{" "}
                        <ArrowRightIcon className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <CTASection />
    </>
  );
};

export default Learn;
