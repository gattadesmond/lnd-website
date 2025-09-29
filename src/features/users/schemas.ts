import { z } from "zod";

export const UserSchema = z.object({
  id: z.uuid(),
  avatar_url: z.url(),
  full_name: z.string(),
  user_name: z.string(),
  title: z.string(),
  department: z.string(),
});

export type User = z.infer<typeof UserSchema>;
