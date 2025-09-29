import Hero from "@/components/hero/hero";
import { generatePage } from "@/lib/generatePage";

const Home = generatePage(() => {
  return <Hero />;
});

export default Home;
