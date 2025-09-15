"use client";

import { ComponentRef, forwardRef, type ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

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
        const supabase = createClient();
        const pathname = window.location.pathname;
        const search = window.location.search;
        const hash = window.location.hash;
        const next = `${pathname}${search}${hash}`;
        supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: `http://localhost:3000/auth/callback?next=${encodeURIComponent(next)}`,
          },
        });
      }}
    >
      Login
    </Button>
  );
});
