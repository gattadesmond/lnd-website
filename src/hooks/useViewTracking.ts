"use client";

import { useEffect, useState } from "react";

import { createClient } from "@/lib/supabase/client";

type ContentType = "stories" | "events" | "learning";

interface ViewTrackingOptions {
  contentId: string;
  contentType: ContentType;
  enabled?: boolean;
}

const CONTENT_TABLE_MAP: Record<ContentType, string> = {
  stories: "story_views",
  events: "event_views",
  learning: "learning_views",
};

const CONTENT_ID_FIELD_MAP: Record<ContentType, string> = {
  stories: "story_id",
  events: "event_id",
  learning: "learning_id",
};

export function useViewTracking({
  contentId,
  contentType,
  enabled = true,
}: ViewTrackingOptions) {
  const [hasTracked, setHasTracked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!enabled || !contentId || hasTracked) return;

    const trackView = async () => {
      try {
        setIsLoading(true);

        // Kiểm tra session storage
        const sessionKey = `viewed_${contentType}_${contentId}`;
        const hasViewed = sessionStorage.getItem(sessionKey);

        if (hasViewed) {
          setHasTracked(true);
          return;
        }

        // Gọi API để tăng view
        const supabase = createClient();
        const tableName = CONTENT_TABLE_MAP[contentType];
        const idField = CONTENT_ID_FIELD_MAP[contentType];

        const { error } = await supabase
          .from(tableName)
          .insert([{ [idField]: contentId }]);

        if (!error) {
          // Lưu vào session storage
          sessionStorage.setItem(sessionKey, "true");
          setHasTracked(true);
        }
      } catch (error) {
        console.error("Error tracking view:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Delay một chút để đảm bảo user thực sự đang xem
    const timer = setTimeout(trackView, 1000);

    return () => clearTimeout(timer);
  }, [contentId, contentType, enabled, hasTracked]);

  return { hasTracked, isLoading };
}
