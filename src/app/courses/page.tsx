import Link from "next/link";

import { ArrowRightIcon, NotebookPenIcon, UserStarIcon } from "lucide-react";

import { Container } from "@/components/container";
import CTASection from "@/components/content/CTASection";
import { Button } from "@/components/ui/button";
import { generatePage } from "@/lib/generatePage";

// Feature card data
const features = [
  {
    image:
      "https://homepage.momocdn.net/img/momo-amazone-s3-api-251020141343-638965664233041742.png",
    title: "Your progress will be synced as you complete chapters",
    description:
      "Your progress is saved automatically, so you can pick up right where you left off",
    aspectRatio: "aspect-video",
  },
  {
    image:
      "https://homepage.momocdn.net/img/momo-amazone-s3-api-251020141355-638965664359810417.png",
    title: "Test your knowledge during each chapter",
    description:
      "Check your understanding with quick quizzes and exercises as you learn.",
    aspectRatio: "aspect-video",
  },
  {
    image:
      "https://homepage.momocdn.net/img/momo-amazone-s3-api-251020141327-638965664077868530.png",
    title: "Go from beginner to expert by learning",
    description: "Learn step by step with lessons created by industry experts",
    aspectRatio: "aspect-[16/9]",
  },
];

const FeatureCard = ({
  image,
  title,
  description,
  aspectRatio,
}: {
  image: string;
  title: string;
  description: string;
  aspectRatio: string;
}) => (
  <div className="flex flex-col gap-8 p-5">
    <div className={`relative ${aspectRatio} overflow-hidden`}>
      <img src={image} alt={title} className="h-full w-full object-contain" />
    </div>
    <div className="relative flex grow flex-col gap-1 text-base sm:pr-1 sm:pb-3 sm:pl-2.5">
      <h3 className="font-semibold text-neutral-700">{title}</h3>
      <div className="text-sm text-neutral-500">
        <p>{description}</p>
      </div>
    </div>
  </div>
);

// Leader section types and components
type LeaderStatType = "rise" | "sales" | "partner" | "audience";

interface LeaderStat {
  type: LeaderStatType;
  label: string;
}

interface LeaderData {
  image: string;
  name: string;
  handle: string;
  elevate?: boolean;
  stats: LeaderStat[];
}

const LeaderCard = ({ leader }: { leader: LeaderData }) => (
  <div
    className={`flex w-[172px] flex-col items-center rounded-xl border border-neutral-200 bg-neutral-100 p-3 pt-2 shadow-[0_10px_10px_0_#00000009,inset_0_0_4px_#fff] ${leader.elevate ? "-translate-y-7" : ""}`}
  >
    <div
      className="relative mt-4 aspect-square size-20 rounded-full bg-neutral-300 bg-cover"
      style={{ backgroundImage: `url(${leader.image})` }}
    >
      <div className="absolute inset-0 rounded-full [mask-image:linear-gradient(transparent,black)] shadow-[inset_0_0_8px_#fff]" />
    </div>
    <div className="mt-3 flex flex-col items-center gap-1.5">
      <span className="text-content-emphasis font-display text-sm font-bold">
        {leader.name}
      </span>
      <div className="flex items-center gap-1">
        <span className="text-[0.625rem] font-medium text-neutral-600">
          {leader.handle}
        </span>
      </div>
    </div>
    <div className="mt-4 flex w-full flex-col gap-2">
      <div className="grid grid-cols-2 rounded-lg bg-white px-2 py-3">
        {leader.stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1 text-sm text-neutral-800"
          >
            {s.type == "rise" && <UserStarIcon className="size-4" />}
            {s.type == "sales" && <NotebookPenIcon className="size-4" />}
            <span className="text-center text-[0.5rem] leading-normal font-semibold text-neutral-600">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const leaders: LeaderData[] = [
  {
    image:
      "https://static.momocdn.net/app/media/product_townhall/member_profile/vp_cong_vu.png",
    name: "Vũ Thành Công",
    handle: "@cong.vu",
    stats: [
      { type: "rise", label: "Top author" },
      { type: "sales", label: "3 posts" },
    ],
  },
  {
    image:
      "https://static.momocdn.net/app/media/product_townhall/member_profile/finance_tuan_truong_png.png",
    name: "Trương Viết Tuấn",
    handle: "@tuan.truong",
    elevate: true,
    stats: [
      { type: "rise", label: "Top author" },
      { type: "sales", label: "4 posts" },
    ],
  },
  {
    image:
      "https://homepage.momocdn.net/img/momo-amazone-s3-api-251020150642-638965696023212711.png",
    name: "Nguyễn Khánh Toàn",
    handle: "@toan.nguyen8",
    stats: [
      { type: "rise", label: "Top author" },
      { type: "sales", label: "5 posts" },
    ],
  },
];

export const revalidate = 60;

const Courses = generatePage(async () => {
  return (
    <>
      <section className="overflow-hidden pb-16">
        <Container
          isBorderX
          className="relative"
          isGridArea
          borderXClassName="[mask-image:linear-gradient(transparent,black)]"
        >
          <div
            className="relative bg-gradient-to-t from-green-500/10 to-transparent pt-16 sm:px-12"
            style={{
              backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 70%, rgba(255, 182, 193, 0.4), transparent 60%)`,
            }}
          >
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
                      <Button size="lg" className="mt-6 cursor-pointer" asChild>
                        <Link
                          href="/courses/khoa-hoc-product-foundation-training"
                          className="block"
                        >
                          <span className="text-base font-semibold">
                            Start Learning
                          </span>{" "}
                          <ArrowRightIcon className="size-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="-mt-16 border-b border-neutral-200">
        <Container className="relative max-w-[1080px]">
          <div className="border-x border-neutral-200 pt-32">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-display text-3xl font-medium text-neutral-900 sm:text-4xl sm:leading-[1.15]">
                Explore Our Courses
              </h2>
              <p className="sm:text-md mt-5 text-neutral-500">
                Enhance research skills with courses covering User Immersion,
                Quantitative, Qualitative, Desk Research, and Research Tool.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 border-t border-neutral-200 md:grid-cols-3">
              <div className="contents divide-neutral-200 max-md:divide-y md:divide-x">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="overflow-hidden">
        <Container
          isBorderX
          isGridArea
          gridAreaClassName="[mask-composite:intersect] [mask-image:linear-gradient(transparent,black),radial-gradient(130%_50%_at_50%_100%,transparent,black)]"
        >
          <div className="max-w-grid-width border-grid-border relative z-0 mx-auto border-x py-24">
            <div className="relative flex w-full justify-center overflow-hidden py-12">
              <div className="flex w-max gap-8 sm:gap-16">
                {leaders.map((leader, i) => (
                  <LeaderCard key={i} leader={leader} />
                ))}
              </div>
            </div>
            <div className="relative mx-auto mt-12 w-full max-w-[640px] px-4 text-center">
              <h2 className="font-display text-3xl font-medium text-neutral-900 sm:text-4xl sm:leading-[1.15]">
                Learn from real product leaders
              </h2>
              <p className="sm:text-md mt-5 text-neutral-500">
                Gain insights directly from product directors who build and lead
                real projects every day. Learn practical skills, not just
                theory.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
});

export default Courses;
