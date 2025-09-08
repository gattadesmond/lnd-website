"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import { NavigationMenuLink } from ".";

export function NavigationMenuNextLink({
  active,
  className,
  href,
  onSelect,
  ...props
}: Omit<React.ComponentProps<typeof NavigationMenuLink>, "asChild"> &
  LinkProps) {
  const pathname = usePathname();
  const isActive = href === pathname || active;
  return (
    <NavigationMenuLink
      asChild
      active={isActive}
      onSelect={onSelect}
      className={className}
    >
      <Link href={href} {...props} />
    </NavigationMenuLink>
  );
}
