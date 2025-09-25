/**https://supabase.com/docs/guides/auth/server-side/nextjs */

import "server-only";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { createServerClient } from "@supabase/ssr";

import { SUPABASE_AUTH_STORAGE_KEY } from "@/features/auth/constants";

export async function createClient(response: NextResponse) {
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
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options),
            );
          } catch (error) {
            console.log("Error:  cookieStore.set", error);
          }
        },
      },
      auth: {
        storageKey: SUPABASE_AUTH_STORAGE_KEY,
      },
    },
  );
}
