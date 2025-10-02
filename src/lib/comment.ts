import { Comment } from "@/components/blog/comments-offcanvas";

export type CommentDb = {
  id: number;
  commented_at: string;
  commented_by: {
    id: number;
    full_name: string;
    avatar_url: string;
  };
  parent_id: number | null;
  updated_at: string | null;
  story_id: number;
  strapi_id: string;
  content: string;
};

export const buildComments = (comments: CommentDb[]): Comment[] => {
  // Create a map to store comments by their ID for quick lookup
  const commentMap = new Map<number, Comment>();
  const rootComments: Comment[] = [];

  // First pass: create all comment objects
  comments.forEach((comment) => {
    const commentObj: Comment = {
      id: comment.id.toString(),
      createdAt: comment.commented_at,
      author: {
        name: comment.commented_by.full_name,
        avatar: comment.commented_by.avatar_url,
        isAuthor: false, // You might want to determine this based on story author
      },
      content: comment.content,
      likes: 0, // Add likes count if available in your DB
      isLiked: false, // Determine if current user liked this comment
      replies: [],
    };

    commentMap.set(comment.id, commentObj);
  });

  // Second pass: organize comments into tree structure
  comments.forEach((comment) => {
    const commentObj = commentMap.get(comment.id)!;

    if (comment.parent_id === null) {
      // This is a root comment
      rootComments.push(commentObj);
    } else {
      // This is a reply to another comment
      const parentComment = commentMap.get(comment.parent_id);
      if (parentComment) {
        if (!parentComment.replies) {
          parentComment.replies = [];
        }
        parentComment.replies.push(commentObj);
      }
    }
  });

  // Sort comments by creation date (newest first)
  rootComments.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  // Sort replies within each comment
  rootComments.forEach((comment) => {
    if (comment.replies) {
      comment.replies.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    }
  });

  return rootComments;
};
