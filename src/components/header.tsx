import { LogoAnimation } from "@/components/logo";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuNextLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const NAVIGATION_MENUS = [
  { title: "Home", href: "/" },
  {
    title: "Our Content",
    items: [
      { title: "Stories", href: "/stories" },
      { title: "Learning", href: "/learning" },
      { title: "Events", href: "/events" },
    ],
  },
  {
    title: "About",
    items: [
      { title: "Our Project", href: "/about" },
      { title: "Feedback", href: "/feedback" },
    ],
  },
];

export function Header() {
  return (
    <header className="relative flex items-center">
      <NavigationMenu viewport={false} className="font-mono">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuNextLink href="/">
              <span className="sr-only">MoMo Product home page</span>
              <LogoAnimation />
            </NavigationMenuNextLink>
          </NavigationMenuItem>
          {NAVIGATION_MENUS.map((item) => {
            if (!("items" in item)) {
              return (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuNextLink
                    href={item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.title}
                  </NavigationMenuNextLink>
                </NavigationMenuItem>
              );
            }
            return (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-max sm:w-28">
                    {item.items?.map((subItem) => {
                      return (
                        <li key={subItem.title}>
                          <NavigationMenuNextLink href={subItem.href}>
                            {subItem.title}
                          </NavigationMenuNextLink>
                        </li>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
