import { z } from "zod";

const metaSchema = z.object({
  id: z.number().optional().nullable(),
  MetaTitle: z.string().optional().nullable(),
  MetaDescription: z.string().optional().nullable(),
  MetaKeywords: z.string().optional().nullable(),
  MetaAvatar: z
    .object({
      data: z.any().optional().nullable(),
    })
    .optional()
    .nullable(),
});

export const EventSchema = z.object({
  urlRewrite: z.string(),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
  publishedAt: z.iso.datetime().optional().nullable(),
  title: z.string(),
  description: z.string(),
  notionId: z.any().nullable(),
  content: z.string(),
  urlImage: z.any().nullable(),
  totalViews: z.number().nullable(),
  totalPost: z.number().nullable(),
  totalLikes: z.number().nullable(),
  publishDate: z.any().nullable(),
  location: z.any().nullable(),
  isFeatured: z.boolean(),
  startDateTime: z.iso.datetime().optional().nullable(),
  meta: metaSchema.optional().nullable(),
  categoryName: z.array(z.string()),
  coverImageUrl: z.string().optional().nullable(),
  authors: z.array(z.any()), // The data for authors is an empty array, so `z.any()` is a safe bet.
  id: z.number(),
});

export type Event = z.infer<typeof EventSchema>;
