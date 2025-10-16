"use client";

import { useRouter } from "next/navigation";

import { ArrowLeftIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => router.back()}
      className={cn(
        "flex cursor-pointer items-center gap-2 px-1 hover:bg-transparent active:bg-transparent",
        className,
      )}
      asChild
    >
      <ArrowLeftIcon className="size-7 text-neutral-500" />
    </Button>
  );
}
