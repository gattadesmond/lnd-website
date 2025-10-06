import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { cn } from "@/lib/utils";

const Feedback = async () => {
  return (
    <>
      <section
        aria-labelledby="project-team"
        className="mx-auto max-w-3xl px-5 pt-14 pb-5 text-center md:pt-20 md:pb-10"
      >
        <FadeIn delay={0.1}>
          <h1
            id="project-team"
            className={cn("mb-4 text-4xl font-bold md:text-6xl")}
          >
            Feedback
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 text-foreground/80 md:mt-10 md:text-lg">
            Feedback is the compass for greatness. We would love to know your
            experience with our internal learning platform, both good and
            not-so-good things. Let us know what you think, feel, and expect
            from Product Knowledge Hub right here!
          </p>
        </FadeIn>
      </section>
      <section
        aria-label="Let&rsquo;s create something awesome"
        className={cn("mx-auto mt-8 mb-10 max-w-3xl")}
      >
        <Container>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeJ0twh0sOgO_lFJARgeArLn-J1RRp9QHSw7nn90LuETtLb7Q/viewform?embedded=true"
            width="100%"
            height={1100}
            className="mx-auto my-0 border-none"
          >
            Loading…
          </iframe>
        </Container>
      </section>
    </>
  );
};

export default Feedback;
