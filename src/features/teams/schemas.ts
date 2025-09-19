import { z } from "zod";

export const TeamSchema = z.object({
  teamId: z.number().nullable(),
  teamName: z.string().nullable(),
});

export type Team = z.infer<typeof TeamSchema>;
