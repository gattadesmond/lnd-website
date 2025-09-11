import type { ReactNode } from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { User } from "../schemas";
import { UserCard } from "./user-card";

interface UserHoverCardProps {
  children: ReactNode;
  user: User;
}

export function UserHoverCard({ children, user }: UserHoverCardProps) {
  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent asChild className="w-64">
        <UserCard user={user} />
      </HoverCardContent>
    </HoverCard>
  );
}
