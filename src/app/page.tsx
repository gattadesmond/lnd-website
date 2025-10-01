import { LatestContent } from "@/components/content/LatestContent";
import Hero from "@/components/hero/hero";
import { generatePage } from "@/lib/generatePage";
import POST_TYPE_CONFIG from "@/lib/post-types-config.json";
import { createStaticClient } from "@/lib/supabase/server";

export const revalidate = 60;

const Home = generatePage(async () => {
  // Initialize Supabase client
  const supabase = await createStaticClient();

  // Fetch latest content from all three types
  const [storiesResult, eventsResult, learningResult] = await Promise.all([
    supabase
      .from(POST_TYPE_CONFIG.story.api.table)
      .select("*")
      .order("published_at", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(6),
    supabase
      .from(POST_TYPE_CONFIG.event.api.table)
      .select("*")
      .order("published_at", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(6),
    supabase
      .from(POST_TYPE_CONFIG.learning.api.table)
      .select("*")
      .order("published_at", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(6),
  ]);

  const sections = [
    {
      title: "Latest Stories",
      content: storiesResult.data || [],
      basePath: POST_TYPE_CONFIG.story.basePath,
      viewAllPath: "/stories",
      viewAllText: "View All Stories",
    },
    {
      title: "Latest Events",
      content: eventsResult.data || [],
      basePath: POST_TYPE_CONFIG.event.basePath,
      viewAllPath: "/events",
      viewAllText: "View All Events",
    },
    {
      title: "Latest Learning",
      content: learningResult.data || [],
      basePath: POST_TYPE_CONFIG.learning.basePath,
      viewAllPath: "/learning",
      viewAllText: "View All Learning",
    },
  ];

  return (
    <>
      <Hero />
      <LatestContent sections={sections} />
      <div className="h-[1px] w-full bg-neutral-200"></div>
    </>
  );
});

export default Home;
