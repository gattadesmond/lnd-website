/**https://supabase.com/docs/guides/auth/server-side/nextjs */

import "server-only";

import { cookies } from "next/headers";

import { createServerClient } from "@supabase/ssr";

import { SUPABASE_AUTH_STORAGE_KEY } from "@/features/auth/constants";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          // try {
          //   cookiesToSet.forEach(({ name, value, options }) =>
          //     cookieStore.set(name, value, options),
          //   );
          // } catch {
          //   // The `setAll` method was called from a Server Component.
          //   // This can be ignored if you have middleware refreshing
          //   // user sessions.
          // }
        },
      },
      auth: {
        storageKey: SUPABASE_AUTH_STORAGE_KEY,
      },
    },
  );
}
