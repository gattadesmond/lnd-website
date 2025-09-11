import { FadeIn } from "@/components/fade-in";
import { EventsSection } from "@/features/events/components/events-section";
import { EVENTS } from "@/features/events/mocks";
import { generatePageMetadata } from "@/lib/generate-page-metadata";
import { cn } from "@/lib/utils";
import { chakra } from "@/styles/fonts";

const pageDescription =
  "Coming together is the beginning. Keeping together is progress. Working together is success.";
const pageTitle = "Product Events";
const pageUrl = "https://product.momo.vn/events";

export const generateMetadata = generatePageMetadata({
  description: pageDescription,
  title: pageTitle,
  url: pageUrl,
});

const mockCategories = ["All", "Seminar"];

export default async function EventPage() {
  return (
    <>
      <section className="mx-auto px-5 pt-14 pb-5 text-center text-balance md:px-5 md:pt-20 md:pb-10">
        <FadeIn delay={0.1}>
          <h1
            className={cn(
              "mb-4 text-4xl font-bold md:text-6xl",
              chakra.className,
            )}
          >
            Events
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 text-foreground/80 md:mt-10 md:text-lg">
            “Coming together is the beginning. Keeping together is progress.
            Working together is success.”
          </p>
          <p
            className={cn(
              chakra.className,
              "mt-5 text-xl font-bold text-foreground/90",
            )}
          >
            Henry Ford
          </p>
        </FadeIn>
      </section>
      <EventsSection events={EVENTS} categories={mockCategories} />;
    </>
  );
}
