import {
  formatDisplayDate,
  formatMetaDate,
  formatRelativeDate,
  getDateTimeAttribute,
} from "@/lib/dateUtils";

interface DateDisplayProps {
  date: string | Date | null | undefined;
  variant?: "display" | "meta" | "relative";
  className?: string;
  fallback?: string;
}

export function DateDisplay({
  date,
  variant = "display",
  className = "text-xs text-neutral-400",
}: DateDisplayProps) {
  const getFormattedDate = () => {
    switch (variant) {
      case "meta":
        return formatMetaDate(date);
      case "relative":
        return formatRelativeDate(date);
      case "display":
      default:
        return formatDisplayDate(date);
    }
  };

  return (
    <time dateTime={getDateTimeAttribute(date)} className={className}>
      {getFormattedDate()}
    </time>
  );
}
