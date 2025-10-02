"use client";

import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";

interface ProfileButtonProps extends React.ComponentProps<typeof Button> {
  user: { full_name?: string; email?: string; avatar_url?: string };
}

export function ProfileButton({
  user,
  className,
  ...rest
}: ProfileButtonProps) {
  const router = useRouter();

  const name = (user.full_name as string) || "User";
  const avatarUrl = (user.avatar_url as string) || "";
  const initial = name.charAt(0)?.toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          {...rest}
          type="button"
          size="icon"
          className={cn(
            "relative h-10 w-10 overflow-hidden rounded-full p-0",
            className,
          )}
          variant="outline"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatarUrl || undefined} alt={name} />
            <AvatarFallback className="text-sm font-medium">
              {initial}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-60"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <DropdownMenuLabel className="flex flex-col">
          <span className="line-clamp-2 text-sm leading-snug font-semibold">
            {name}
          </span>
          <span className="truncate text-xs font-normal text-muted-foreground">
            {user.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            disabled
            onSelect={(e) => {
              e.preventDefault();
              router.push("/profile");
            }}
            className="cursor-pointer"
          >
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled
            className="cursor-not-allowed opacity-80"
            onSelect={(e) => e.preventDefault()}
          >
            Notifications (soon)
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={(e) => {
            e.preventDefault();
            const supabase = createClient();
            supabase.auth.signOut();
          }}
          className="cursor-pointer text-destructive focus:text-destructive"
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
