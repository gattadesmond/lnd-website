"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Award,
  Building2,
  Car,
  CarFront,
  Cog,
  FileText,
  Hammer,
  Menu,
  MessageSquare,
  Package,
  Phone,
  Shield,
  ShoppingCart,
  Star,
  Target,
  User,
  Users,
  Wrench,
} from "lucide-react";

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

export default function Header({ className = "" }: HeaderProps) {
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
      title: "Liên hệ",
      url: "/contact",
      icon: <Phone className="size-5 shrink-0" />,
    },
  ];

  const auth = {
    login: { title: "Đăng nhập", url: "/login" },
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="mx-auto max-w-screen-xl px-5 py-3 xl:px-20">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}

            <Link href="/" className="flex items-start gap-2">
              <LogoAnimation />
            </Link>
            <div className="flex items-center">
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild size="sm">
              <Link href={auth.login.url}>{auth.login.title}</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
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
                      <div className="relative h-8 w-24">
                        <Image
                          src="/images/igara-logo.png"
                          alt="IGARA Logo"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
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
                    <Button asChild variant="outline">
                      <Link href={auth.login.url}>{auth.login.title}</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title}>
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
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
      className="flex w-[240px] flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};
