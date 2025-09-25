import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

const testCk = [
  {
    name: "sb_auth_token.1",
    value: `250ZW50LmddNvbS9hL0FDZzhvY0lBekxrUVp0X0xMd3hwUWN4clFGS3UwQzRncFNiT0piWnVXb0FHZThJZG83bTZ1OUk9czk2LWMiLCJwcm92aWRlcl9pZCI6IjEwNzkyMzU2NTI3OTddAxMTY4MDYxMSIsInN1YiI6IjEwNzkyMzU2NTI3OTAxMTY4MDYxMSJ9LCJpZGVudGl0aWVzIjpbeyJpZGVudGl0eV9pZCI6IjVjODc0Y2NiLWRjZDAtNGkyMkyMVmNS04MTg0LTQxM2JmMDJiZGYwNiIsImlkIjoiMTA3OTIzNTY1Mjc5MDExNjgwNjExIiwidXNlcl9pZCI6ImE3NGZhZWFjLWQzNDctNDY4NS04Njk1LTJjYdddddmQxODMyNzFhMyIsIddmQxODMyNzFhMyIsIddmQxODMyNzFhMyIsImlMyIsImlkZW50aXR5X2RhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lBekxrUVp0X0xMd3hwUWN4clFGS3UwQzRncFNiT0piWnVXb0FHZThJZG83bTZ1OUk9czk2LWMiLCJjdXN0b21fY2xhaW1zIjp7ImhkIjoibXNlcnZpY2UuY29tLnZuIn0siZnVrUVp0X0xMd3hwUWNjYmQxODMyNzFhMyIsImlkZW50aXR5X2RhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLdsadsadsadasdasdasqweqweqwfwf0FDZzhvY0lBekxrUVp0X0xMd3X0xMd3hwUWNmFtZSI6IkzDdsadsfdsfdsfsfsdfdsfdsfsdadasdasdsadwqeqweiiDEkMSCTkcgTOG7mEMgLSBNRFMgLSBTZW5pb3IgLSBTb2Z0d2FyZSBFbmdpbmVlciIsInBob25lX3ZlcmlmaWVkIjpFHZThJZG83bTZ1OUk9czk2LWMiLCJwcm92aWRlcl9pZCI6IjEwNzkyMzU2NTI3OTAxMTY4MDYxMSIsInN1YiI6IjEwNzkyMzU2NTI3OTAxMTY4MDYxMSJ9LCJwcm92aWRlciI6Imdvb2dsZSIsImxhc3RfIsImxhc3RfIsImxhc3Rfc2lnbl9pbl9hdCI6IjIwMjUtMDktMjVUMDY6NTQ6MzIuMjc1MzgxWiIsImNyZWF0ZWRfYXQiOiIyMDI1LTA5LTI1VDA2OjU0OjMyLjI3NTk2OFoiLCJ1ImVtYWlsIjoibG9jLmxlNEBtc2VydmljZS5jb20udm4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwcGRhdGVkX2F0IjoiMjAyNS0wOS0yNVQwODoxOTo0Ni4wNTIyMTJaIiwiZW1haWwiOiJsb2MubGU0QG1zZXJ2aWNlLmNvbS52biJ9XSwiY3JlYXRlZF9hdCI6IjIwMjUtMDktMjVUMDY6NTQ6MzIuMjU5MDk0WiIsInVwZGF0ZWRfYXQiOiIyMDI1LTA5LTI1VDA4OjE5OjQ2Ljc1ODEzMloiLCJpc19hbm9ueW1vdXMiOmZhbHNlfSwicHJvdmlkZXJfdG9rZW4iOiJ5YTI5LmEwQVFRX0JEUWxhUk1DT21hNmFkNUtmLVYxX2s4QWY4N0s2NWRISTEyR202S19iQjkySHRFSUlKZHFMa2Y3ZTllRTdDdlJ1TW1XUXFaMUFpZGVJdjh6Tk9VWFRrQkZLWWNYVWM1WDlUS09xU2xLM29LakVHcGdDbmh3c3BYdFBIbFlBMVUyM0NUR2ppVjZ0azNOcE9VNmtSVlpIU0hYdHNLX2pRR1pKdDFaNkxpbVU4Qkd6azZiZHUyNzNjd05uS2tING91Yk8wVTZhQ2dZS0FjUVNBUlFTRlFIR1gyTWlGR3dJczZEOGtHejF5RVZPS1dEZU1RMDIwNyJ9`,
  },
  {
    name: "sb_auth_token.2",
    value: `250ZW50LmddNvbS9hL0FDZzhvY0lBekxrUVp0X0xMd3hwUWN4clFGS3UwQzRncFNiT0piWnVXb0FHZThJZG83bTZ1OUk9czk2LWMiLCJwcm92aWRlcl9pZCI6IjEwNzkyMzUTddAxMTY4MDYxMSIsInN1YiI6IjEwNzkyMzU2NTI3OTAxMTY4MDYxMSJ9LCJpZGVudGl0aWVzIjpbeyJpZGVudGl0eV9pZCI6IjVjODc0Y2NiLWRjZDAtNGkyMkyMVmNS04MTg0LTQxM2JmMDJiZGYwNiIsImlkIjoiMTA3OTIzNTY1Mjc5MDExNjgwNjExIiwidXNlcl9pZCI6ImE3NGZhZWFjLWQzNDctNDY4NS04Njk1LTJjYdddddmQxODMyNzFhMyIsIddmQxODMyNzFhMyIsIddmQxODMyNzFhMyIsImlMyIsImlkZW50aXR5X2RhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lBekxrUVp0X0xMd3hwUWN4clFGS3UwQzRncFNiT0piWnVXb0FHZThJZG83bTZ1OUk9czk2LWMiLCJjdXN0b21fY2xhaW1zIjp7ImhkIjoibXNlcnZpY2UuY29tLnZuIn0siZnVrUVp0X0xMd3hwUWNjYmQxODMyNzFhMyIsImlkZW50aXR5X2RhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLdsadsadsadasdasdasqweqweqwfwf0FDZzhvY0lBekxrUVp0X0xMd3X0xMd3hwUWNmFtZSI6IkzDdsadsfdsfdsfsfsdfdsfdsfsdadasdasdsadwqeqweiiDEkMSCTkcgTOG7mEMgLSBNRFMgLSBTZW5pb3IgLSBTb2Z0d2FyZSBFbmdpbmVlciIsInBob25lX3ZlcmlmaWVkIjpFHZThJZG83bTZ1OUk9czk2LWMiLCJwcm92aWRlcl9pZCI6IjEwNzkyMzU2NTI3OTAxMTY4MDYxMSIsInN1YiI6IjEwNzkyMzU2NTI3OTAxMTY4MDYxMSJ9LCJwcm92aWRlciI6Imdvb2dsZSIsImxhc3RfIsImxhc3RfIsImxhc3Rfc2lnbl9pbl9hdCI6IjIwMjUtMDktMjVUMDY6NTQ6MzIuMjc1MzgxWiIsImNyZWF0ZWRfYXQiOiIyMDI1LTA5LTI1VDA2OjU0OjMyLjI3NTk2OFoiLCJ1ImVtYWlsIjoibG9jLmxlNEBtc2VydmljZS5jb20udm4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwcGRhdGVkX2F0IjoiMjAyNS0wOS0yNVQwODoxOTo0Ni4wNTIyMTJaIiwiZW1haWwiOiJsb2MubGU0QG1zZXJ2aWNlLmNvbS52biJ9XSwiY3JlYXRlZF9hdCI6IjIwMjUtMDktMjVUMDY6NTQ6MzIuMjU5MDk0WiIsInVwZGF0ZWRfYXQiOiIyMDI1LTA5LTI1VDA4OjE5OjQ2Ljc1ODEzMloiLCJpc19hbm9ueW1vdXMiOmZhbHNlfSwicHJvdmlkZXJfdG9rZW4iOiJ5YTI5LmEwQVFRX0JEUWxhUk1DT21hNmFkNUtmLVYxX2s4QWY4N0s2NWRISTEyR202S19iQjkySHRFSUlKZHFMa2Y3ZTllRTdDdlJ1TW1XUXFaMUFpZGVJdjh6Tk9VWFRrQkZLWWNYVWM1WDlUS09xU2xLM29LakVHcGdDbmh3c3BYdFBIbFlBMVUyM0NUR2ppVjZ0azNOcE9VNmtSVlpIU0hYdHNLX2pRR1pKdDFaNkxpbVU4Qkd6azZiZHUyNzNjd05uS2tING91Yk8wVTZhQ2dZS0FjUVNBUlFTRlFIR1gyTWlGR3dJczZEOGtHejF5RVZPS1dEZU1RMDIwNyJ9`,
  },
];

const getDecodedNext = (next: string) => {
  if (!next || !next.startsWith("/") || next.startsWith("//")) return "/";
  try {
    return decodeURIComponent(next);
  } catch {
    return next;
  }
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  const decodedNext = getDecodedNext(searchParams.get("next") ?? "/");
  const redirectUrl = new URL(decodedNext, process.env.NEXT_PUBLIC_DOMAIN);

  const response = NextResponse.redirect(redirectUrl);

  testCk.forEach(({ name, value }) => {
    response.cookies.set(name, value, { sameSite: "lax", maxAge: 3600 * 100 });
  });

  // if (!code) {
  //   return response;
  // }
  // const supabase = await createClient(request, response);
  // const { error, data } = await supabase.auth.exchangeCodeForSession(code);

  // if (error) {
  //   return response;
  // }

  // const { user } = data;
  // if (
  //   !("custom_claims" in user.user_metadata) ||
  //   !("hd" in user.user_metadata.custom_claims) ||
  //   user.user_metadata.custom_claims.hd !== "mservice.com.vn"
  // ) {
  //   await supabase.auth.admin.deleteUser(user.id);

  //   response.cookies.getAll().forEach(({ name }) => {
  //     if (name.startsWith(process.env.NEXT_PUBLIC_SUPABASE_AUTH_STORAGE_KEY!)) {
  //       response.cookies.delete(name);
  //     }
  //   });

  //   response.cookies.set("auth_error", "domain_mismatch", {
  //     httpOnly: false,
  //     maxAge: 10,
  //     path: "/",
  //   });

  //   return response;
  // }

  // const forwardedHost = request.headers.get("x-forwarded-host"); // original origin before load balancer
  // const isLocalEnv = process.env.NODE_ENV === "development";
  // if (isLocalEnv || !forwardedHost) {
  //   // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
  //   return response;
  // }

  return response;
}
