"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";

import {
  BookOpen,
  Calendar,
  GraduationCap,
  Menu,
  Search,
  X,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function NavigationMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect để thêm/xóa class overflow-hidden trên body
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup khi component unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <div className="fixed top-0 right-0 z-40 flex items-center gap-4 p-2.5 lg:hidden">
      <Button size="sm" className="cursor-pointer" variant="outline">
        <Search className="size-4" /> Tìm kiếm
      </Button>{" "}
      <Button size="sm" className="cursor-pointer">
        Đăng nhập
      </Button>
      <button
        className="z-30 rounded-full p-2 transition-colors duration-200 hover:bg-neutral-200 focus:outline-none active:bg-neutral-300"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="size-5 text-neutral-600" />
        ) : (
          <Menu className="size-5 text-neutral-600" />
        )}
      </button>
      {/* isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none' */}
      <nav
        className={cn(
          "fixed inset-0 z-20 hidden max-h-screen w-full overflow-y-auto bg-white px-5 py-16 lg:hidden",
          isMenuOpen ? "block" : "hidden",
        )}
      >
        <Accordion
          type="single"
          className="w-full"
          defaultValue="item-1"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium">
              Our Contents
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="grid grid-cols-1 gap-4 overflow-hidden">
                <Link className="flex w-full items-center gap-3" href="/links">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-gradient-to-t from-neutral-100">
                    <div className="flex size-5 items-center justify-center rounded bg-orange-400">
                      <BookOpen className="size-3.5 text-orange-900" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-medium text-neutral-900">
                        {" "}
                        LnD Stories
                      </h2>
                    </div>
                    <p className="text-sm text-neutral-500">
                      {" "}
                      Explore our Blog for a wealth of insightful articles and
                      tips
                    </p>
                  </div>
                </Link>
                <Link
                  className="flex w-full items-center gap-3"
                  href="/partners"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-gradient-to-t from-neutral-100">
                    <div className="flex size-5 items-center justify-center rounded bg-violet-400">
                      <GraduationCap className="size-3.5 text-violet-900" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-medium text-neutral-900">
                        {" "}
                        LnD Learning & Development
                      </h2>
                    </div>
                    <p className="text-sm text-neutral-500">
                      Learning is a constant process of discovery - a process
                      without end.
                    </p>
                  </div>
                </Link>
                <Link
                  className="flex w-full items-center gap-3"
                  href="/analytics"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-gradient-to-t from-neutral-100">
                    <div className="flex size-5 items-center justify-center rounded bg-green-400">
                      <Calendar className="size-3.5 text-green-900" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-medium text-neutral-900">
                        {" "}
                        LnD Events
                      </h2>
                    </div>
                    <p className="text-sm text-neutral-500">
                      Working together is success.
                    </p>
                  </div>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <Link
            href="/about"
            className="flex flex-1 items-start justify-between gap-4 border-b py-4 text-left text-lg font-medium transition-all outline-none last:border-b-0 hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Project
          </Link>
          <Link
            href="/feedback"
            className="flex flex-1 items-start justify-between gap-4 border-b py-4 text-left text-lg font-medium transition-all outline-none last:border-b-0 hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180"
            onClick={() => setIsMenuOpen(false)}
          >
            Feedback
          </Link>
        </Accordion>
      </nav>
      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}

export default NavigationMobile;
