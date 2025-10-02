"use client";

import { useEffect, useState } from "react";

import { jwtDecode } from "jwt-decode";

import { createClient } from "@/lib/supabase/client";

import { LoginButton } from "./login-button";
import { ProfileButton } from "./profile-button";

interface AuthButtonsProps {
  className?: string;
}

export function AuthButtons({ className }: AuthButtonsProps) {
  const [user, setUser] = useState<{
    full_name?: string;
    email?: string;
    avatar_url?: string;
  } | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        setUser(null);
      } else {
        const accessToken = data.session.access_token;
        const decodedAccessToken = jwtDecode<{
          user_metadata: {
            full_name?: string;
            email?: string;
            avatar_url?: string;
          };
        }>(accessToken);
        setUser(decodedAccessToken.user_metadata);
      }
      setLoaded(true);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const accessToken = session?.access_token;
      if (!accessToken) {
        setUser(null);
      } else {
        const decodedAccessToken = jwtDecode<{
          user_metadata: {
            full_name?: string;
            email?: string;
            avatar_url?: string;
          };
        }>(accessToken);
        setUser(decodedAccessToken.user_metadata);
      }
      setLoaded(true);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (!loaded) {
    return null;
  }

  return user ? (
    <ProfileButton user={user} className={className} />
  ) : (
    <LoginButton size={"sm"} className={className} />
  );
}
