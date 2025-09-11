import z from "zod";

import { UserSchema } from "@/features/users/schemas";

export const StorySchema = z.object({
  authors: z.array(UserSchema),
  categoryName: z.array(z.string()),
  content: z.string(),
  coverImageUrl: z.url(),
  createdAt: z.iso.datetime().nullable(),
  description: z.string(),
  id: z.number(),
  meta: z.unknown(),
  notionId: z.string().nullable(),
  publishDate: z.iso.datetime().nullable(),
  publishedAt: z.iso.datetime().nullable(),
  teams_product: z.unknown(),
  title: z.string(),
  totalLikes: z.coerce.number().nullable(),
  totalPost: z.coerce.number().nullable(),
  totalViews: z.coerce.number().nullable(),
  updatedAt: z.iso.datetime(),
  urlImage: z.url().nullable(),
  urlRewrite: z.string(),
});

export type Story = z.infer<typeof StorySchema>;
