import { Container } from "@/components/container";
import CTASection from "@/components/content/CTASection";
import { cn } from "@/lib/utils";

const Feedback = async () => {
  return (
    <>
      <section className="overflow-hidden border-b border-neutral-200">
        <Container
          isBorderX
          className="relative"
          isGridArea
          borderXClassName="[mask-image:linear-gradient(transparent,black)]"
        >
          <div className="relative pt-16 pb-6 sm:px-12 sm:pb-20">
            <h1 className="mt-5 text-left font-display text-4xl font-medium text-neutral-900 sm:text-5xl sm:leading-[1.15]">
              Feedback
            </h1>
            <p className="mt-6 text-lg text-neutral-500 sm:text-xl">
              Feedback is the compass for greatness. We would love to know your
              experience with our internal learning platform, both good and
              not-so-good things. Let us know what you think, feel, and expect
              from Product Knowledge Hub right here!
            </p>
          </div>
        </Container>
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
      <CTASection />
    </>
  );
};

export default Feedback;
