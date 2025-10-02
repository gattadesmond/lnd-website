"use client";

import { useEffect, useState } from "react";

import { createClient } from "@/lib/supabase/client";

export const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data }) => {
      setIsLogged(!!data.session);
    });
  }, []);
  return isLogged;
};
