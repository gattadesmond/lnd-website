import { z } from "zod";

export const UserSchema = z.object({
  avatar: z.url(),
  fullName: z.string(),
  userName: z.string(),
  title: z.string(),
});

export type User = z.infer<typeof UserSchema>;
