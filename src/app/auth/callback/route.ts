import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

const testCk = [
  // {
  //   name: "sb_auth_token.0",
  //   value: `base64-eyJhY2Nlc3NfdG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0ltdHBaQ0k2SW5nMlltOHJiMUpPVEhwVWJGUXhkbXNpTENKMGVYQWlPaUpLVjFRaWZRLmV5SnBjM01pT2lKb2RIUndjem92TDJKblpYQnBhRzlrYkdOcGRXcHdZWEZtY0hCNExuTjFjR0ZpWVhObExtTnZMMkYxZEdndmRqRWlMQ0p6ZFdJaU9pSmhOelJtWVdWaFl5MWtNelEzTFRRMk9EVXRPRFk1TlMweVkySmtNVGd6TWpjeFlUTWlMQ0poZFdRaU9pSmhkWFJvWlc1MGFXTmhkR1ZrSWl3aVpYaHdJam94TnpVNE56a3hPVGcyTENKcFlYUWlPakUzTlRnM09EZ3pPRFlzSW1WdFlXbHNJam9pYkc5akxteGxORUJ0YzJWeWRtbGpaUzVqYjIwdWRtNGlMQ0p3YUc5dVpTSTZJaUlzSW1Gd2NGOXRaWFJoWkdGMFlTSTZleUp3Y205MmFXUmxjaUk2SW1kdmIyZHNaU0lzSW5CeWIzWnBaR1Z5Y3lJNld5Sm5iMjluYkdVaVhYMHNJblZ6WlhKZmJXVjBZV1JoZEdFaU9uc2lZWFpoZEdGeVgzVnliQ0k2SW1oMGRIQnpPaTh2YkdnekxtZHZiMmRzWlhWelpYSmpiMjUwWlc1MExtTnZiUzloTDBGRFp6aHZZMGxCZWt4clVWcDBYMHhNZDNod1VXTjRjbEZHUzNVd1F6Um5jRk5pVDBwaVduVlhiMEZIWlRoSlpHODNiVFoxT1VrOWN6azJMV01pTENKamRYTjBiMjFmWTJ4aGFXMXpJanA3SW1oa0lqb2liWE5sY25acFkyVXVZMjl0TG5adUluMHNJbVZ0WVdsc0lqb2liRzlqTG14bE5FQnRjMlZ5ZG1salpTNWpiMjB1ZG00aUxDSmxiV0ZwYkY5MlpYSnBabWxsWkNJNmRISjFaU3dpWm5Wc2JGOXVZVzFsSWpvaVRNT0tZXNoX3Rva2VuIjoibzYzZDZpdnpheXp3IiwidXNlciI6eyJpZCI6ImE3NGZhZWFjLWQzNJTVNReElKT1J5Qk00YnVZUXlBdElFMUVVeUF0SUZObGJtbHZjaUF0SUZOdlpuUjNZWEpsSUVWdVoybHVaV1Z5SWl3aWFYTnpJam9pYUhSMGNITTZMeTloWTJOdmRXNTBjeTVuYjI5bmJHVXVZMjl0SWl3aWJtRnRaU0k2SWt6RGlpREVrTVNDVGtjZ1RPRzdtRU1nTFNCTlJGTWdMU0JUWlc1cGIzSWdMU0JUYjJaMGQyRnlaU0JGYm1kcGJtVmxjaUlzSW5Cb2IyNWxYM1psY21sbWFXVmtJanBtWVd4elpTd2ljR2xqZEhWeVpTSTZJbWgwZEhCek9pOHZiR2d6TG1kdmIyZHNaWFZ6WlhKamIyNTBaVzUwTG1OdmJTOWhMMEZEWnpodlkwbEJla3hyVVZwMFgweE1kM2h3VVdONGNsRkdTM1V3UXpSbmNGTmlUMHBpV25WWGIwRkhaVGhKWkc4M2JUWjFPVWs5Y3prMkxXTWlMQ0p3Y205MmFXUmxjbDlwWkNJNklqRXdOemt5TXpVMk5USTNPVEF4TVRZNE1EWXhNU0lzSW5OMVlpSTZJakV3TnpreU16VTJOVEkzT1RBeE1UWTRNRFl4TVNKOUxDSnliMnhsSWpvaVlYVjBhR1Z1ZEdsallYUmxaQ0lzSW1GaGJDSTZJbUZoYkRFaUxDSmhiWElpT2x0N0ltMWxkR2h2WkNJNkltOWhkWFJvSWl3aWRHbHRaWE4wWVcxd0lqb3hOelU0TnpnNE16ZzJmVjBzSW5ObGMzTnBiMjVmYVdRaU9pSTJaVGswTWpKbU9TMHhaamhrTFRRNE5tVXRZV1kyTWkwMlpqSmhORE0zWmpka05XVWlMQ0pwYzE5aGJtOXVlVzF2ZFhNaU9tWmhiSE5sZlEuTVRiMmtLdXIxcjNJZl9lRW9wOXlNbTRQR3pLLV8ycG9KUlZRQWg1aGxLZyIsInRva2VuX3R5cGUiOiJiZWFyZXIiLCJleHBpcmVzX2luIjozNjAwLCJleHBpcmVzX2F0IjoxNzU4NzkxOTg2LCJyZWZyDctNDY4NS04Njk1LTJjYmQxODMyNzFhMyIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImVtYWlsIjoibG9jLmxlNEBtc2VydmljZS5jb20udm4iLCJlbWFpbF9jb25maXJtZWRfYXQiOiIyMDI1LTA5LTI1VDA2OjU0OjMyLjI4NTgzMloiLCJwaG9uZSI6IiIsImNvbmZpcm1lZF9hdCI6IjIwMjUtMDktMjVUMDY6NTQ6MzIuMjg1ODMyWiIsImxhc3Rfc2lnbl9pbl9hdCI6IjIwMjUtMDktMjVUMDg6MTk6NDYuNzU2NDcwOTY1WiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6Imdvb2dsZSIsInByb3ZpZGVycyI6WyJnb29nbGUiXX0sInVzZXJfbWV0YWRhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lBekxrUVp0X0xMd3hwUWN4clFGS3UwQzRncFNiT0piWnVXb0FHZThJZG83bTZ1OUk9czk2LWMiLCJjdXN0b21fY2xhaW1zIjp7ImhkIjoibXNlcnZpY2UuY29tLnZuIn0sImVtYWlsIjoibG9jLmxlNEBtc2VydmljZS5jb20udm4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZnVsbF9uYW1lIjoiTMOKIMSQxIJORyBM4buYQyAtIE1EUyAtIFNlbmlvciAtIFNvZnR3YXJlIEVuZ2luZWVyIiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwibmFtZSI6IkzDiiDEkMSCTkcgTOG7mEMgLSBNRFMgLSBTZW5pb3IgLSBTb2Z0d2FyZSBFbmdpbmVlciIsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb`,
  // },
  {
    name: "sb_auth_token.1",
    value: `250ZW50LmNvbS9hL0FDZzhvY0lBekxrUVp0X0xMd3hwUWN4clFGS3UwQzRncFNiT0piWnVXb0FHZThJZG83bTZ1OUk9czk2LWMiLCJwcm92aWRlcl9pZCI6IjEwNzkyMzU2NTI3OTAxMTY4MDYxMSIsInN1YiI6IjEwNzkyMzU2NTI3OTAxMTY4MDYxMSJ9LCJpZGVudGl0aWVzIjpbeyJpZGVudGl0eV9pZCI6IjVjODc0Y2NiLWRjZDAtNGVmNS04MTg0LTQxM2JmMDJiZGYwNiIsImlkIjoiMTA3OTIzNTY1Mjc5MDExNjgwNjExIiwidXNlcl9pZCI6ImE3NGZhZWFjLWQzNDctNDY4NS04Njk1LTJjYmQxODMyNzFhMyIsImlkZW50aXR5X2RhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lBekxrUVp0X0xMd3hwUWN4clFGS3UwQzRncFNiT0piWnVXb0FHZThJZG83bTZ1OUk9czk2LWMiLCJjdXN0b21fY2xhaW1zIjp7ImhkIjoibXNlcnZpY2UuY29tLnZuIn0siZnVsbF9uYW1lIjoiTMOKIMSQxIJORyBM4buYQyAtIE1EUyAtIFNlbmlvciAtIFNvZnR3YXJlIEVuZ2luZWVyIiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwibmFtZSI6IkzDiiDEkMSCTkcgTOG7mEMgLSBNRFMgLSBTZW5pb3IgLSBTb2Z0d2FyZSBFbmdpbmVlciIsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lBekxrUVp0X0xMd3hwUWN4clFGS3UwQzRncFNiT0piWnVXb0FHZThJZG83bTZ1OUk9czk2LWMiLCJwcm92aWRlcl9pZCI6IjEwNzkyMzU2NTI3OTAxMTY4MDYxMSIsInN1YiI6IjEwNzkyMzU2NTI3OTAxMTY4MDYxMSJ9LCJwcm92aWRlciI6Imdvb2dsZSIsImxhc3Rfc2lnbl9pbl9hdCI6IjIwMjUtMDktMjVUMDY6NTQ6MzIuMjc1MzgxWiIsImNyZWF0ZWRfYXQiOiIyMDI1LTA5LTI1VDA2OjU0OjMyLjI3NTk2OFoiLCJ1ImVtYWlsIjoibG9jLmxlNEBtc2VydmljZS5jb20udm4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwcGRhdGVkX2F0IjoiMjAyNS0wOS0yNVQwODoxOTo0Ni4wNTIyMTJaIiwiZW1haWwiOiJsb2MubGU0QG1zZXJ2aWNlLmNvbS52biJ9XSwiY3JlYXRlZF9hdCI6IjIwMjUtMDktMjVUMDY6NTQ6MzIuMjU5MDk0WiIsInVwZGF0ZWRfYXQiOiIyMDI1LTA5LTI1VDA4OjE5OjQ2Ljc1ODEzMloiLCJpc19hbm9ueW1vdXMiOmZhbHNlfSwicHJvdmlkZXJfdG9rZW4iOiJ5YTI5LmEwQVFRX0JEUWxhUk1DT21hNmFkNUtmLVYxX2s4QWY4N0s2NWRISTEyR202S19iQjkySHRFSUlKZHFMa2Y3ZTllRTdDdlJ1TW1XUXFaMUFpZGVJdjh6Tk9VWFRrQkZLWWNYVWM1WDlUS09xU2xLM29LakVHcGdDbmh3c3BYdFBIbFlBMVUyM0NUR2ppVjZ0azNOcE9VNmtSVlpIU0hYdHNLX2pRR1pKdDFaNkxpbVU4Qkd6azZiZHUyNzNjd05uS2tING91Yk8wVTZhQ2dZS0FjUVNBUlFTRlFIR1gyTWlGR3dJczZEOGtHejF5RVZPS1dEZU1RMDIwNyJ9`,
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
