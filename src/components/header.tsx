import React from "react";
import Link from "next/link";

import {
  Car,
  FileText,
  Hammer,
  Menu,
  Phone,
  Shield,
  Target,
  Users,
} from "lucide-react";

import { Container } from "@/components/container";
import { LogoAnimation } from "@/components/logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AuthButtons } from "@/features/auth/components/auth-buttons";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

const menu: MenuItem[] = [
  { title: "Home", url: "/", icon: <Car className="size-5 shrink-0" /> },
  {
    title: "Our Content",
    url: "/",
    items: [
      {
        title: "Stories",
        description: "Product Stories",
        icon: <FileText className="size-5 shrink-0" />,
        url: "/stories",
      },
      {
        title: "Learning",
        description: "Learning & Development",
        icon: <Users className="size-5 shrink-0" />,
        url: "/learning",
      },
      {
        title: "Events",
        description: "Coming together is the beginning",
        icon: <Target className="size-5 shrink-0" />,
        url: "/events",
      },
    ],
  },
  {
    title: "About",
    url: "/",
    items: [
      {
        title: "Our Project",
        description: "Tesst 1",
        icon: <Shield className="size-5 shrink-0" />,
        url: "/about",
      },
      {
        title: "Feedback",
        description: "Tesst 2",
        icon: <Hammer className="size-5 shrink-0" />,
        url: "/feedback",
      },
    ],
  },

  {
    title: "Contact",
    url: "/contact",
    icon: <Phone className="size-5 shrink-0" />,
  },
];

export function Header({ className }: HeaderProps) {
  return (
    <Container asChild>
      <header
        className={cn(
          "flex items-center bg-transparent py-3 backdrop-blur-sm",
          className,
        )}
      >
        {/* Desktop Menu */}
        <NavigationMenu
          viewport={false}
          className="hidden max-w-none justify-start *:w-full lg:flex"
        >
          <NavigationMenuList className="justify-start">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">
                  <LogoAnimation />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {menu.map((item) => (
              <RenderMenuItem key={item.title} item={item} />
            ))}
            {/* <NavigationMenuItem className="ms-auto">
              <NavigationMenuLink asChild>
              <Button asChild size="sm">
              <Link href={auth.login.url}>{auth.login.title}</Link>
              </Button>
              </NavigationMenuLink>
              </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
        <AuthButtons className="hidden lg:block" />

        {/* Mobile Menu */}
        <div className="block flex-1 lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <LogoAnimation />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center gap-2">
                      <LogoAnimation />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <AuthButtons />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </Container>
  );
}

const RenderMenuItem = ({ item }: { item: MenuItem }) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="bg-transparent">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul>
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <NavigationMenuLink asChild>
                  <SubMenuLink item={subItem} />
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="flex w-[240px] flex-row space-x-3 rounded px-3 py-2 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground"
      href={item.url}
    >
      <div className="mt-0.5 text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-xs leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};
