import Link from "next/link";

import { slug } from "github-slugger";

import { cn } from "@/lib/utils";

interface CatTagProps {
  color?: string;
  name: string;
}

export function CatTag({ color, name }: CatTagProps) {
  const className = cn(
    color === "red" && "bg-red-800 ",
    color === "pink" && "bg-pink-800 ",
    color === "purple" && "bg-purple-800 ",
    color === "blue" && "bg-blue-800 ",
    color === "green" && "bg-green-800 ",
    color === "yellow" && "bg-yellow-800 ",
    color === "orange" && "bg-orange-800 ",
    color === "brow" && "bg-brow-800 ",
    color === "gray" && "bg-slate-500 ",
  );

  return (
    <Link
      href={`/category/${slug(name)}`}
      className={cn(
        `hover:bg-opacity-80 pointer-events-none flex h-5 items-center rounded bg-slate-700 px-1.5 text-xs font-bold tracking-wide uppercase duration-200`,
        className,
      )}
    >
      {name}
    </Link>
  );
}
