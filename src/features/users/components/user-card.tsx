import Link from "next/link";

import { z } from "zod";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const UserSchema = z.object({
  avatar: z.string().url(),
  fullName: z.string(),
  userName: z.string(),
  title: z.string(),
});
type User = z.infer<typeof UserSchema>;

interface UserProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  user: User;
}

export function UserCard({ user, className, ...props }: UserProfileCardProps) {
  return (
    <Card
      className={cn(
        "flex flex-col items-center gap-2 p-6 text-center",
        className,
      )}
      {...props}
    >
      <Link
        href={`/profile/${user.userName}`}
        aria-label={`View profile of ${user.fullName}`}
      >
        <Avatar className="size-20 border-2 border-background transition-transform hover:scale-105 md:size-32">
          <AvatarImage
            src={user.avatar}
            alt={user.fullName}
            className="object-cover"
          />
          <AvatarFallback>
            {user.fullName.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </Link>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-card-foreground">
          {user.fullName}
        </h3>
        <Link
          href={`/profile/${user.userName}`}
          aria-label={`View profile of ${user.fullName}`}
        >
          <p className="text-sm text-muted-foreground hover:underline">
            @{user.userName}
          </p>
        </Link>
        <p className="mt-2 text-sm text-card-foreground">{user.title}</p>
      </div>
    </Card>
  );
}
