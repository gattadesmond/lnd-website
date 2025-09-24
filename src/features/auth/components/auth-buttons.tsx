"use client";

import { useEffect, useState } from "react";

import type { User } from "@supabase/supabase-js";

import { createClient } from "@/lib/supabase/client";

import { LoginButton } from "./login-button";
import { ProfileButton } from "./profile-button";

interface AuthButtonsProps {
  className?: string;
}

export function AuthButtons({ className }: AuthButtonsProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   const supabase = createClient();
  //   supabase.auth.getUser().then(({ data }) => {
  //     setUser(data.user);
  //     setLoaded(true);
  //   });
  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setUser(session?.user ?? null);
  //     setLoaded(true);
  //   });
  //   return () => subscription.unsubscribe();
  // }, []);

  // if (!loaded) {
  //   return null;
  // }

  return <LoginButton className={className} />;
}
