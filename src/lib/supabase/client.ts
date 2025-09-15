/**https://supabase.com/docs/guides/auth/server-side/nextjs */

import "client-only";

import { createBrowserClient } from "@supabase/ssr";

import { SUPABASE_AUTH_STORAGE_KEY } from "@/features/auth/constants";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      auth: {
        storageKey: SUPABASE_AUTH_STORAGE_KEY,
      },
    },
  );
}
