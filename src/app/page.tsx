import CoursesSection from "@/components/content/CoursesSection";
import CTASection from "@/components/content/CTASection";
import { LatestContent } from "@/components/content/LatestContent";
import QuestionSection from "@/components/content/QuestionSection";
import ReasonSection from "@/components/content/ReasonSection";
import Hero from "@/components/hero/hero";
import { generatePage } from "@/lib/generatePage";
import POST_TYPE_CONFIG from "@/lib/post-types-config.json";
import { createStaticClient } from "@/lib/supabase/server";

export const revalidate = 60;

const Home = generatePage(async () => {
  // Initialize Supabase client
  const supabase = await createStaticClient();

  // Fetch latest content from all three types
  const [storiesResult, eventsResult, learningResult, coursesResult] =
    await Promise.all([
      supabase
        .from(POST_TYPE_CONFIG.story.api.table)
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(6),
      supabase
        .from(POST_TYPE_CONFIG.event.api.table)
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(6),
      supabase
        .from(POST_TYPE_CONFIG.learning.api.table)
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(6),
      supabase
        .from(POST_TYPE_CONFIG.courses.api.table)
        .select("*")
        .eq("status", "published")
        // .order("published_at", { ascending: false })
        .order("created_at", { ascending: false }),
    ]);

  // Combine all content and sort by published_at to get the latest
  const allContent = [
    ...(storiesResult.data || []).map((item) => ({
      ...item,
      type: "story",
      basePath: POST_TYPE_CONFIG.story.basePath,
    })),
    ...(eventsResult.data || []).map((item) => ({
      ...item,
      type: "event",
      basePath: POST_TYPE_CONFIG.event.basePath,
    })),
    ...(learningResult.data || []).map((item) => ({
      ...item,
      type: "learning",
      basePath: POST_TYPE_CONFIG.learning.basePath,
    })),
  ].sort((a, b) => {
    const dateA = new Date(a.published_at || a.created_at);
    const dateB = new Date(b.published_at || b.created_at);
    return dateB.getTime() - dateA.getTime();
  });

  // Get the latest 6 items from all content types
  const latestContent = allContent.slice(0, 1);

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
      <Hero latestContent={latestContent} />

      <LatestContent sections={sections} />

      <CoursesSection data={coursesResult.data || []} />

      <ReasonSection />

      <QuestionSection />
      <CTASection />

      <div className="h-[1px] w-full bg-neutral-200"></div>
    </>
  );
});

export default Home;
