import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";

import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { getUsersAboutPage } from "@/features/users/api";
import { UserCard } from "@/features/users/components/user-card";
import { generatePage } from "@/lib/generatePage";
import { cn } from "@/lib/utils";
import { chakra } from "@/styles/fonts";

const About = generatePage(async () => {
  const users = await getUsersAboutPage();
  return (
    <>
      <section
        aria-labelledby="project-team"
        className="mx-auto max-w-3xl px-5 pt-14 pb-5 text-center md:pt-20 md:pb-10"
      >
        <FadeIn delay={0.1}>
          <h1
            id="project-team"
            className={cn(
              "mb-4 text-4xl font-bold md:text-6xl",
              chakra.className,
            )}
          >
            Project Team
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 text-foreground/80 md:mt-10 md:text-lg">
            Excited to build a Product Knowledge Hub from zero to something that
            fosters continuous learning and collaboration among our Product
            members
          </p>
        </FadeIn>
      </section>
      <section aria-labelledby="meet-our-team">
        <Container>
          <h2
            id="meet-our-team"
            className={cn(
              "mb-10 text-2xl font-bold text-foreground/90",
              chakra.className,
            )}
          >
            Meet our team
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {users.map((user) => (
              <UserCard key={user.username} {...user} />
            ))}
          </div>
        </Container>
      </section>
      <section
        aria-label="Let&rsquo;s create something awesome"
        className={cn("mt-24 mb-18", chakra.className)}
      >
        <Container>
          <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-t from-primary to-primary/50 py-8 md:mb-20 md:py-10">
            <div className="text-xs md:text-sm">
              Want to contribute to our knowledge hub?
            </div>
            <div className={cn("mt-2 text-2xl md:text-3xl")}>
              Let&rsquo;s create something awesome.
            </div>
            <Link
              href="/feedback"
              className="mt-10 flex items-center rounded-lg bg-primary-foreground px-6 py-2 text-xs text-primary md:text-base"
            >
              Why not? <ArrowRightIcon className="ml-2 size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
});

export default About;
