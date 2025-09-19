"use client";

import { ComponentRef, forwardRef, type ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

const buildNextParam = (): string => {
  const { pathname, search, hash } = window.location;
  const raw = `${pathname}${search}${hash}`;
  try {
    return encodeURIComponent(raw);
  } catch {
    return "/";
  }
};

const handleLogin = () => {
  const supabase = createClient();

  const next = buildNextParam();
  supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_DOMAIN}${process.env.NEXT_PUBLIC_BASE_PATH}/auth/callback?next=${next}`,
    },
  });
};

export const LoginButton = forwardRef<
  ComponentRef<"button">,
  ComponentProps<typeof Button>
>(function LoginButton(props, ref) {
  return (
    <Button
      {...props}
      ref={ref}
      onClick={(e) => {
        props.onClick?.(e);
        handleLogin();
      }}
    >
      Login
    </Button>
  );
});
