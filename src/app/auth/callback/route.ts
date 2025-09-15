import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const origin = request.nextUrl.origin;
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  // if "next" is in param, use it as the redirect URL
  let next = searchParams.get("next") ?? "/";
  if (!next.startsWith("/")) {
    // if "next" is not a relative URL, use the default
    next = "/";
  }
  const supabase = await createClient();
  if (code) {
    const { error, data } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const { user, session } = data;
      if (
        !("custom_claims" in user.user_metadata) ||
        !("hd" in user.user_metadata.custom_claims) ||
        user.user_metadata.custom_claims.hd !== "mservice.com.vn"
      ) {
        await supabase.auth.admin.signOut(session.access_token);
        await supabase.auth.admin.deleteUser(user.id);
        const decodedNext = (() => {
          try {
            return decodeURIComponent(next);
          } catch {
            return next;
          }
        })();
        const redirectUrl = new URL(decodedNext, origin);
        const cookieStore = await cookies();
        cookieStore.getAll().forEach(({ name }) => {
          if (
            name.startsWith(process.env.NEXT_PUBLIC_SUPABASE_AUTH_STORAGE_KEY!)
          ) {
            cookieStore.delete(name);
          }
        });
        cookieStore.set("auth_error", "domain_mismatch", {
          httpOnly: false,
          maxAge: 10,
          path: "/",
        });
        return NextResponse.redirect(redirectUrl);
      }
      const forwardedHost = request.headers.get("x-forwarded-host"); // original origin before load balancer
      const isLocalEnv = process.env.NODE_ENV === "development";
      if (isLocalEnv) {
        // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
        return NextResponse.redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        return NextResponse.redirect(
          `https://${forwardedHost}${decodeURIComponent(next)}`,
        );
      } else {
        return NextResponse.redirect(`${origin}${decodeURIComponent(next)}`);
      }
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
