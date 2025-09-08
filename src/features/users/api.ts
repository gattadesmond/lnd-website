import z from "zod";

import { USERS_ABOUTPAGE } from "@/features/users/mocks";

import { UserSchema } from "./schemas";

export const getUsersAboutPage = z
  .function({ output: z.promise(z.array(UserSchema)) })
  .implementAsync(async () => {
    return new Promise((res) => setTimeout(() => res(USERS_ABOUTPAGE), 500));
  });
