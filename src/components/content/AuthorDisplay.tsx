import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Author {
  id: string;
  full_name: string;
  user_name: string;
  avatar_url: string;
}

interface AuthorDisplayProps {
  author: Author;
  size?: "sm" | "md" | "lg";
  showUsername?: boolean;
  className?: string;
}

export function AuthorDisplay({
  author,
  size = "md",
  showUsername = true,
  className = "",
}: AuthorDisplayProps) {
  const sizeClasses = {
    sm: "size-6",
    md: "size-9",
    lg: "size-12",
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <Link
      className={`group pointer-events-none flex items-center space-x-3 select-none ${className}`}
      href={`/members/${author.id}`}
    >
      <Avatar
        className={`${sizeClasses[size]} transition-all group-hover:brightness-90`}
      >
        <AvatarImage
          src={author?.avatar_url?.trim()}
          alt={author?.full_name || "Author"}
          className="object-cover"
        />
        <AvatarFallback className="bg-neutral-200">
          {author.full_name
            ?.trim()
            .split(" ")
            .map((name) => name[0])
            .join("")
            .toUpperCase()
            .slice(0, 2) || "AU"}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p
          className={`font-display font-semibold whitespace-nowrap text-neutral-700 ${textSizeClasses[size]}`}
        >
          {author.full_name}
        </p>
        {showUsername && (
          <p
            className={`font-display text-neutral-500 ${size === "sm" ? "text-xs" : "text-sm"}`}
          >
            {author.user_name}
          </p>
        )}
      </div>
    </Link>
  );
}

interface AuthorDisplayListProps {
  authors: Author[];
  size?: "sm" | "md" | "lg";
  showUsername?: boolean;
  className?: string;
}

export function AuthorDisplayList({
  authors,
  size = "md",
  showUsername = true,
  className = "",
}: AuthorDisplayListProps) {
  if (!authors || authors.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-col gap-y-4 ${className}`}>
      {authors.map((author) => (
        <AuthorDisplay
          key={author.id}
          author={author}
          size={size}
          showUsername={showUsername}
        />
      ))}
    </div>
  );
}
