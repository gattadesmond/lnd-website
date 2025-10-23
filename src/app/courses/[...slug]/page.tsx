import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { EditorContentRenderer } from "@/components/content/EditorContentRenderer";
import { CourseNextStep } from "@/components/course";
import { Quiz } from "@/components/quiz";
import { generatePage } from "@/lib/generatePage";
import POST_TYPE_CONFIG from "@/lib/post-types-config.json";
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
    let learningSlug = slug[1];
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
      .select("*, learnings!inner(title, slug, description)")
      .eq("course_id", courseId)
      .order("position", { ascending: true });

    if (learningsError || !learnings) {
      notFound();
    }

    if (learningSlug == undefined) {
      learningSlug = learnings[0].learnings.slug;
    }

    const learning = learnings.find(
      (item) => item.learnings.slug === learningSlug,
    );
    if (!learning) {
      notFound();
    }
    // Fetch learning details
    const { data: learningDetail, error: learningDetailError } = await supabase
      .from(POST_TYPE_CONFIG.learning.api.fullDetailsTable)
      .select("*")
      .eq("slug", learningSlug)
      .eq("status", "published")
      .single();

    if (learningDetailError || !learningDetail) {
      notFound();
    }

    const quizId = learning.quiz_id;

    return (
      <>
        <section className="border-t border-b border-neutral-200 bg-background">
          <div className="grid grid-cols-[300px_1fr_300px]">
            <div className="flex h-full flex-col border-r border-neutral-200 bg-neutral-50">
              <div className="sticky top-14 p-6">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Link href={`/courses/${courseSlug}`}>
                      <h2 className="mb-4 cursor-pointer text-[12px] text-muted-foreground transition-colors hover:text-foreground">
                        {course.name}
                      </h2>
                    </Link>
                    <div className="space-y-4">
                      {learnings.map((item) => {
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
            <div className="h-full bg-background">
              <div className="mx-auto max-w-3xl px-6">
                {learningDetail.cover_image_url && (
                  <div className="mt-5 aspect-[1200/630] overflow-hidden">
                    <Image
                      src={
                        learningDetail.cover_image_url ||
                        "/placeholder-blog.jpg"
                      }
                      alt={learningDetail.title || "Learning resource cover"}
                      width={1200}
                      height={630}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}

                <div className="relative z-0 px-5 pt-10 sm:px-12">
                  <h1 className="text-left font-display text-xl font-semibold text-neutral-900 sm:text-2xl sm:leading-[1.25]">
                    {learningDetail.title}
                  </h1>

                  {learningDetail.description && (
                    <p className="mt-3 text-neutral-500">
                      {learningDetail.description}
                    </p>
                  )}
                </div>
                <EditorContentRenderer
                  content={learningDetail.content}
                  classNames="mt-0 pt-0 prose-sm"
                />

                {/* Quiz Section */}
                {quizId && (
                  <div className="mt-8 mb-10">
                    <Quiz quizId={quizId} />
                  </div>
                )}

                {/* Course Next Step Section */}
                {(() => {
                  const nextLearning = learnings.find(
                    (item) => item.position === learning.position + 1,
                  );
                  if (nextLearning) {
                    return (
                      <div className="mt-20 mb-12">
                        <CourseNextStep
                          nextChapter={nextLearning.position}
                          nextTitle={nextLearning.learnings.title}
                          nextDescription={nextLearning.learnings.description}
                          nextChapterUrl={`/courses/${courseSlug}/${nextLearning.learnings.slug}`}
                        />
                      </div>
                    );
                  }
                  return null;
                })()}
              </div>
            </div>
            <div className="flex h-full border-l border-neutral-200 bg-neutral-50 p-6">
              <span className="font-semibold">Sidebar</span>
            </div>
          </div>
        </section>
      </>
    );
  },
);

export default CoursePage;
