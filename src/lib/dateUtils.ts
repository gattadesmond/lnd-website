/**
 * Format date to readable string
 * @param date - Date string or Date object
 * @param options - Formatting options
 * @returns Formatted date string
 */
export function formatDate(
  date: string | Date | null | undefined,
  options: {
    format?: "short" | "long" | "medium";
    fallback?: string;
  } = {},
): string {
  const { format = "long", fallback = "Recently" } = options;

  if (!date) {
    return fallback;
  }

  try {
    const dateObj = typeof date === "string" ? new Date(date) : date;

    if (isNaN(dateObj.getTime())) {
      return fallback;
    }

    const formatOptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month:
        format === "short" ? "short" : format === "medium" ? "short" : "long",
      day: "numeric",
    };

    return dateObj.toLocaleDateString("en-US", formatOptions);
  } catch (error) {
    console.error("Error formatting date:", error);
    return fallback;
  }
}

/**
 * Format date for display in cards and lists
 * @param date - Date string or Date object
 * @returns Formatted date string
 */
export function formatDisplayDate(
  date: string | Date | null | undefined,
): string {
  return formatDate(date, { format: "long", fallback: "Recently" });
}

/**
 * Format date for meta information (shorter format)
 * @param date - Date string or Date object
 * @returns Formatted date string
 */
export function formatMetaDate(date: string | Date | null | undefined): string {
  return formatDate(date, { format: "short", fallback: "Recently" });
}

/**
 * Format date for relative time (e.g., "2 days ago")
 * @param date - Date string or Date object
 * @returns Relative time string
 */
export function formatRelativeDate(
  date: string | Date | null | undefined,
): string {
  if (!date) {
    return "Recently";
  }

  try {
    const dateObj = typeof date === "string" ? new Date(date) : date;

    if (isNaN(dateObj.getTime())) {
      return "Recently";
    }

    const now = new Date();
    const diffInSeconds = Math.floor(
      (now.getTime() - dateObj.getTime()) / 1000,
    );

    if (diffInSeconds < 60) {
      return "Just now";
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    }

    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) {
      return `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} ago`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
      return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
    }

    const diffInYears = Math.floor(diffInDays / 365);
    return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
  } catch (error) {
    console.error("Error formatting relative date:", error);
    return "Recently";
  }
}

/**
 * Get date time attribute for HTML time element
 * @param date - Date string or Date object
 * @returns ISO string for datetime attribute
 */
export function getDateTimeAttribute(
  date: string | Date | null | undefined,
): string {
  if (!date) {
    return new Date().toISOString();
  }

  try {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toISOString();
  } catch (error) {
    console.error("Error getting datetime attribute:", error);
    return new Date().toISOString();
  }
}
