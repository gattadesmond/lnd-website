"use client";

import { useCallback } from "react";

import { toast } from "sonner";

interface ShareOptions {
  title?: string;
  text?: string;
  url?: string;
}

export function useShare() {
  const isMobile =
    typeof window !== "undefined" &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );

  const canUseNativeShare =
    typeof window !== "undefined" &&
    typeof navigator.share === "function" &&
    isMobile;

  const share = useCallback(
    async (options: ShareOptions = {}) => {
      const shareData = {
        title: options.title || document.title,
        text: options.text || "",
        url: options.url || window.location.href,
      };

      try {
        if (canUseNativeShare) {
          // Use native share on mobile
          await navigator.share(shareData);
          toast.success("Shared successfully!");
        } else {
          // Fallback for desktop - copy to clipboard
          await navigator.clipboard.writeText(shareData.url);
          toast.success("Link copied to clipboard!");
        }
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          // User cancelled the share
          return;
        }

        // Fallback to clipboard if native share fails
        try {
          await navigator.clipboard.writeText(shareData.url);
          toast.success("Link copied to clipboard!");
        } catch (clipboardError) {
          console.error("Failed to share:", clipboardError);
          toast.error("Failed to share. Please try again.");
        }
      }
    },
    [canUseNativeShare],
  );

  return {
    share,
    canUseNativeShare,
    isMobile,
  };
}
