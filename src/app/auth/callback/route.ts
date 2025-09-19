import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

const getDecodedNext = (next: string) => {
  if (!next || !next.startsWith("/") || next.startsWith("//")) return "/";
  try {
    return decodeURIComponent(next);
  } catch {
    return next;
  }
};

export async function GET(request: NextRequest) {
  console.log("🚀 ~ GET ~ GETGETGETGETGETGETGETGETGETGETGETGETGETGETGET:");
  const origin = request.nextUrl.origin;
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  console.log("🚀 ~ GET ~ code:", code);
  const decodedNext = getDecodedNext(searchParams.get("next") ?? "/");
  console.log("🚀 ~ GET ~ decodedNext:", decodedNext);
  const redirectUrl = new URL(decodedNext, origin);
  console.log("🚀 ~ GET ~ redirectUrl:", redirectUrl);
  if (!code) {
    return NextResponse.redirect(redirectUrl);
  }
  const supabase = await createClient();
  const { error, data } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    return NextResponse.redirect(redirectUrl);
  }
  const { user } = data;
  if (
    !("custom_claims" in user.user_metadata) ||
    !("hd" in user.user_metadata.custom_claims) ||
    user.user_metadata.custom_claims.hd !== "mservice.com.vn"
  ) {
    await supabase.auth.admin.deleteUser(user.id);
    const cookieStore = await cookies();
    cookieStore.getAll().forEach(({ name }) => {
      if (name.startsWith(process.env.NEXT_PUBLIC_SUPABASE_AUTH_STORAGE_KEY!)) {
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
  console.log("🚀 ~ GET ~ request.headers:", request.headers);
  console.log("🚀 ~ GET ~ forwardedHost:", forwardedHost);
  const isLocalEnv = process.env.NODE_ENV === "development";
  if (isLocalEnv || !forwardedHost) {
    // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
    return NextResponse.redirect(redirectUrl);
  }
  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_DOMAIN}${process.env.NEXT_PUBLIC_BASE_PATH}${decodedNext}`,
  );
}
