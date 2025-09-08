import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { getUsersAboutPage } from "@/features/users/api";
import { UserCard } from "@/features/users/components/user-card";
import { cn } from "@/lib/utils";
import { chakra } from "@/styles/fonts";

export default async function About() {
  const users = await getUsersAboutPage();
  return (
    <>
      <section className="relative mx-auto max-w-3xl px-5 pt-14 pb-5 text-center md:px-5 md:pt-20 md:pb-10">
        <FadeIn delay={0.1}>
          <h1
            className={cn(
              "main-text-title relative mb-4 text-4xl font-bold md:text-6xl",
              chakra.className,
            )}
          >
            Project Team
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 text-white/80 md:mt-10 md:text-lg">
            Excited to build a Product Knowledge Hub from zero to something that
            fosters continuous learning and collaboration among our Product
            members
          </p>
        </FadeIn>
      </section>
      <section className="">
        <h3
          className={cn(
            "mb-10 text-2xl font-bold text-white/90",
            chakra.className,
          )}
        >
          Meet our team
        </h3>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.username} {...user} />
          ))}
        </div>
      </section>
      <section
        className={cn(
          "bg-cta mt-24 mb-18 flex flex-col items-center justify-center rounded-xl py-8 text-center md:mt-24 md:mb-20 md:py-10",
          chakra.className,
        )}
      >
        <div className="text-xs text-white md:text-sm">
          Want to contribute to our knowledge hub?
        </div>
        <div className={cn("mt-2 text-2xl text-white md:text-3xl")}>
          Let’s create something awesome.
        </div>
        <Link
          href="/feedback"
          className="mt-10 flex items-center rounded-lg bg-white px-6 py-2 text-xs text-pink-700 md:text-base"
        >
          Why not? <ArrowRightIcon className="ml-2 size-4" />
        </Link>
      </section>
    </>
  );
}
