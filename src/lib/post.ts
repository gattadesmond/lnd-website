export type PostType = "stories" | "events" | "learnings";

export const getPostTypeSingular = (postType: PostType) => {
  switch (postType) {
    case "stories":
      return "story";
    case "events":
      return "event";
    case "learnings":
      return "learning";
    default:
      throw new Error(`Unknown post type: ${postType}`);
  }
};
