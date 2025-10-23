import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { generatePage } from "@/lib/generatePage";
import { createStaticClient } from "@/lib/supabase/server";
import { cn } from "@/lib/utils";

export const revalidate = 60;

const CoursePage = generatePage(
  async ({ params }: { params: Promise<{ slug: string[] }> }) => {
    const { slug } = await params;

    // Initialize Supabase client
    const supabase = await createStaticClient();

    // Lấy course slug từ array (phần tử đầu tiên)
    const courseSlug = slug[0];
    const learningSlug = slug[1];
    // Fetch story details
    const { data: course, error } = await supabase
      .from("courses")
      .select("*")
      .eq("slug", courseSlug)
      .eq("status", "published")
      .single();

    if (error || !course) {
      notFound();
    }

    const courseId = course.id;
    // Fetch danh sách bài học đc map
    const { data: learnings, error: learningsError } = await supabase
      .from("course_learnings")
      .select("*, learnings!inner(title, slug)")
      .eq("course_id", courseId)
      .order("position", { ascending: true });

    if (learningsError || !learnings) {
      notFound();
    }

    console.log("🚀 ~ learnings:", learnings);
    console.log("🚀 ~ learningSlug:", learningSlug);

    return (
      <>
        <section className="overflow-hidden border-t border-b border-neutral-200">
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-screen w-full"
          >
            <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
              <div className="flex h-full flex-col bg-neutral-50">
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <Link href={`/courses/${courseSlug}`}>
                        <h2 className="mb-4 cursor-pointer text-[12px] text-muted-foreground transition-colors hover:text-foreground">
                          {course.name}
                        </h2>
                      </Link>
                      <div className="space-y-4">
                        {learnings.map((item) => {
                          console.log("🚀 ~ item:", item.learnings.slug);
                          return (
                            <Link
                              key={item.id}
                              className="group block"
                              href={`/courses/${courseSlug}/${item.learnings.slug}`}
                            >
                              <div className="-m-2 flex items-center space-x-3 rounded px-2 py-1">
                                <div
                                  className={cn(
                                    "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border-2 border-border bg-muted text-muted-foreground",
                                    item.learnings.slug === learningSlug
                                      ? "border-primary bg-primary text-primary-foreground"
                                      : "bg-muted text-muted-foreground",
                                  )}
                                >
                                  <span className="text-xs font-bold">
                                    {item.position}
                                  </span>
                                </div>
                                <span
                                  className={cn(
                                    "text-sm text-foreground transition-colors group-hover:text-primary",
                                    item.learnings.slug === learningSlug
                                      ? "text-primary"
                                      : "text-foreground",
                                  )}
                                >
                                  {item.learnings.title}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={80} minSize={35}>
              <Container>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Content</span>
                </div>
              </Container>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Sidebar</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </section>
      </>
    );
  },
);

export default CoursePage;
