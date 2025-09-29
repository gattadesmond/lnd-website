"use client";

import { useState } from "react";

import { Heart, List, MessageCircle, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { CommentsOffcanvas } from "./comments-offcanvas";

interface InteractionBarProps {
  likes?: number;
  comments?: number;
  onLike?: () => void;
  onComment?: () => void;
  isLiked?: boolean;
  storyId?: number;
}

export function InteractionBar({
  likes = 0,
  comments = 0,
  onLike,
  onComment,
  isLiked = false,
  storyId,
}: InteractionBarProps) {
  const [liked, setLiked] = useState(isLiked);
  const [commentsOpen, setCommentsOpen] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    onLike?.();
  };

  const handleComment = () => {
    setCommentsOpen(true);
    onComment?.();
  };

  // Mock comments data - replace with real data from your API
  const mockComments = [
    {
      id: "1",
      author: {
        name: "NISARG THAKKAR",
        avatar: "",
        isAuthor: false,
      },
      content:
        "Great Work both of you. Loved the extension. And Best of luck folks 🙌\n\n**Features I loved:**\n- Easy integration\n- Clean UI\n- Fast performance",
      createdAt: "2024-02-03",
      likes: 2,
      isLiked: false,
    },
    {
      id: "2",
      author: {
        name: "Vipin Chaudhary",
        avatar: "",
        isAuthor: false,
      },
      content:
        "Incredible integration effortlessly uniting *Figma* and **Hashnode** for amazing user experience 🚀\n\nCheck out this [demo link](https://example.com) for more details!",
      createdAt: "2024-02-03",
      likes: 2,
      isLiked: false,
    },
    {
      id: "3",
      author: {
        name: "Omezibe Obioha",
        avatar: "",
        isAuthor: false,
      },
      content:
        "This is an interesting, out-of-the-box idea! It's nice seeing the lengths people went with this hackathon. Good luck. ✌️",
      createdAt: "2024-02-05",
      likes: 2,
      isLiked: false,
      replies: [
        {
          id: "3-1",
          author: {
            name: "Nabhag Motivaras",
            avatar: "",
            isAuthor: true,
          },
          content: "Thanks! 🙏\n\n*Really appreciate the feedback*",
          createdAt: "2024-02-05",
          likes: 0,
          isLiked: false,
        },
      ],
    },
  ];

  const handleAddComment = (content: string) => {
    console.log("Adding comment:", content);
    // Implement your comment submission logic here
  };

  const handleLikeComment = (commentId: string) => {
    console.log("Liking comment:", commentId);
    // Implement your comment like logic here
  };

  const handleReplyComment = (commentId: string, content: string) => {
    console.log("Replying to comment:", commentId, content);
    // Implement your reply logic here
  };

  return (
    <div className="fixed right-0 bottom-7 left-0 z-50 flex h-12 w-full flex-wrap justify-center 2xl:h-14">
      <div className="relative mx-auto flex h-12 shrink flex-nowrap items-center justify-center space-x-2 rounded-full border border-neutral-200 bg-white px-5 py-1 text-sm text-neutral-800 shadow-xl">
        {/* Like Button */}

        <div className="relative flex items-center">
          <Button
            variant="ghost"
            size="sm"
            className="size-9 cursor-pointer rounded-full"
            onClick={handleLike}
          >
            <Heart
              className={`size-5 transition-colors ${
                liked ? "fill-red-500 text-red-500" : "text-neutral-700"
              }`}
            />
          </Button>
          <Button
            variant="link"
            size="sm"
            className="cursor-pointer px-1"
            onClick={handleLike}
          >
            {likes}
          </Button>
        </div>

        <div className="h-5 w-[1px] shrink-0 bg-neutral-200" />

        <div className="relative flex items-center">
          <Button
            variant="ghost"
            size="sm"
            className="h-9 cursor-pointer rounded-xl"
            onClick={handleComment}
          >
            <MessageCircle className="size-5 text-neutral-700" />
            <span className="text-sm font-medium text-neutral-800">
              {comments}
            </span>
          </Button>
        </div>

        <div className="h-5 w-[1px] shrink-0 bg-neutral-200" />

        <div className="relative flex items-center">
          <Button
            variant="ghost"
            size="sm"
            className="size-9 cursor-pointer rounded-full"
          >
            <List
              className={`size-5 transition-colors ${"text-neutral-700"}`}
            />
          </Button>
        </div>

        <div className="h-5 w-[1px] shrink-0 bg-neutral-200" />

        <div className="relative flex items-center">
          <Button
            variant="ghost"
            size="sm"
            className="size-9 cursor-pointer rounded-full"
          >
            <Share2
              className={`size-5 transition-colors ${"text-neutral-700"}`}
            />
          </Button>
        </div>
      </div>

      {/* Comments Offcanvas */}
      <CommentsOffcanvas
        isOpen={commentsOpen}
        onClose={() => setCommentsOpen(false)}
        comments={mockComments}
        onAddComment={handleAddComment}
        onLikeComment={handleLikeComment}
        onReplyComment={handleReplyComment}
      />
    </div>
  );
}
