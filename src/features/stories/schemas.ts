import z from "zod";

import { UserSchema } from "@/features/users/schemas";

export const StorySchema = z.object({
  categoryName: z.array(z.string()),
  content: z.string(),
  coverImageUrl: z.url(),
  description: z.string(),
  publishedAt: z.iso.datetime().optional(),
  publishDate: z.iso.datetime().optional(),
  title: z.string(),
  totalLikes: z.coerce.number(),
  totalPost: z.coerce.number(),
  totalViews: z.coerce.number(),
  updatedAt: z.iso.datetime(),
  urlImage: z.url(),
  urlRewrite: z.string(),
  authors: z.array(UserSchema),
});

export type Story = z.infer<typeof StorySchema>;
