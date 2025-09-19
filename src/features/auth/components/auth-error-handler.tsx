"use client";

import { useEffect } from "react";

import { toast } from "sonner";

export function AuthErrorHandler() {
  useEffect(() => {
    const error = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth_error="))
      ?.split("=")[1];

    if (error === "domain_mismatch") {
      toast.error("Access denied. Please use your @mservice.com.vn account.", {
        duration: 5000,
        position: "top-center",
        richColors: true,
      });
      // Remove the cookie
      document.cookie =
        "auth_error=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }, []);

  return null;
}
