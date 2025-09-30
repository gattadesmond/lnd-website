import "server-only";

import { createServerClient } from "@supabase/ssr";

import { SUPABASE_AUTH_STORAGE_KEY } from "@/features/auth/constants";

export async function createServerPage() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!,
    {
      cookies: {
        getAll() {
          return [];
        },
      },
      auth: {
        storageKey: SUPABASE_AUTH_STORAGE_KEY,
      },
    },
  );
}
