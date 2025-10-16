"use client";

import { useViewTracking } from "@/hooks/useViewTracking";

type ContentType = "stories" | "events" | "learning";

interface ViewTrackerProps {
  contentId: string;
  contentType: ContentType;
  enabled?: boolean;
}

// Main ViewTracker component
export function ViewTracker({
  contentId,
  contentType,
  enabled = true,
}: ViewTrackerProps) {
  useViewTracking({ contentId, contentType, enabled });

  // Component không render gì, chỉ để track view
  return null;
}

// Helper components cho từng loại content
export function StoryViewTracker({
  contentId,
  enabled = true,
}: {
  contentId: string;
  enabled?: boolean;
}) {
  return (
    <ViewTracker
      contentId={contentId}
      contentType="stories"
      enabled={enabled}
    />
  );
}

export function EventViewTracker({
  contentId,
  enabled = true,
}: {
  contentId: string;
  enabled?: boolean;
}) {
  return (
    <ViewTracker contentId={contentId} contentType="events" enabled={enabled} />
  );
}

export function LearningViewTracker({
  contentId,
  enabled = true,
}: {
  contentId: string;
  enabled?: boolean;
}) {
  return (
    <ViewTracker
      contentId={contentId}
      contentType="learning"
      enabled={enabled}
    />
  );
}
