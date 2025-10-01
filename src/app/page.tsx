import { LatestContent } from "@/components/content/LatestContent";
import Hero from "@/components/hero/hero";
import { generatePage } from "@/lib/generatePage";

const Home = generatePage(() => {
  return (
    <>
      <Hero />
      <LatestContent />
    </>
  );
});

export default Home;
