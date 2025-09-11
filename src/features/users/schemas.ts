import { z } from "zod";

import { TeamSchema } from "../teams/schemas";

export const UserSchema = z.object({
  id: z.number(),
  avatar: z.url(),
  fullName: z.string(),
  userName: z.string(),
  title: z.string(),
  teamsInfo: TeamSchema.optional(),
});

export type User = z.infer<typeof UserSchema>;
