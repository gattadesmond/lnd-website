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

export const revalidate = 60;

const CoursePage = generatePage(
  async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    // Initialize Supabase client
    const supabase = await createStaticClient();

    // Fetch story details
    const { data: course, error } = await supabase
      .from("courses")
      .select("*")
      .eq("slug", slug)
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
                      <Link href={`/courses/${slug}`}>
                        <h2 className="mb-4 cursor-pointer text-[12px] tracking-wider text-muted-foreground transition-colors hover:text-foreground">
                          AI Foundations
                        </h2>
                      </Link>
                      <div className="space-y-4">
                        {learnings.map((learning) => (
                          <Link
                            key={learning.id}
                            className="group block"
                            href={`/courses/${slug}/${learning.learnings.slug}`}
                          >
                            <div className="-m-2 flex items-center space-x-3 rounded px-2 py-1">
                              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border-2 border-border bg-muted text-muted-foreground">
                                <span className="text-xs font-medium">
                                  {learning.position}
                                </span>
                              </div>
                              <span className="text-sm text-foreground transition-colors group-hover:text-primary">
                                {learning.learnings.title}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={80}>
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
