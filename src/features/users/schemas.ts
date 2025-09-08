import { z } from "zod";

export const UserSchema = z.object({
  avatar: z.url(),
  fullname: z.string(),
  username: z.string(),
  title: z.string(),
  link: z.string(),
});

export type User = z.infer<typeof UserSchema>;
