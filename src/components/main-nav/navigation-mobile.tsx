"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";

import {
  BookOpenIcon,
  CalendarBlankIcon,
  GraduationCapIcon,
  ListIcon,
  MagnifyingGlassIcon,
  XIcon,
} from "@phosphor-icons/react";

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
        <MagnifyingGlassIcon className="size-4" weight="bold" /> Tìm kiếm
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
          <XIcon className="size-5 text-neutral-600" weight="bold" />
        ) : (
          <ListIcon className="size-5 text-neutral-600" weight="bold" />
        )}
      </button>
      {/* isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none' */}
      <nav
        className={cn(
          "fixed inset-0 z-20 hidden max-h-screen w-full overflow-y-auto bg-white px-5 py-16 lg:hidden",
          isMenuOpen ? "block" : "hidden",
        )}
      >
        <ul className="grid divide-y divide-neutral-200">
          <li className="py-3">
            <div className="overflow-hidden">
              <div className="h-max">
                <button className="flex w-full justify-between">
                  <p className="font-semibold">Product</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down h-5 w-5 text-neutral-500 transition-all"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </li>
          <li className="py-3">
            <div className="overflow-hidden">
              <div className="h-max">
                <button className="flex w-full justify-between">
                  <p className="font-semibold">Solutions</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down h-5 w-5 text-neutral-500 transition-all"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </li>
          <li className="py-3">
            <div className="overflow-hidden">
              <div className="h-max">
                <button className="flex w-full justify-between">
                  <p className="font-semibold">Resources</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down h-5 w-5 text-neutral-500 transition-all"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </li>
          <li className="py-3">
            <a
              className="flex w-full font-semibold capitalize"
              href="/enterprise"
            >
              Enterprise
            </a>
          </li>
          <li className="py-3">
            <a
              className="flex w-full font-semibold capitalize"
              href="/customers"
            >
              Customers
            </a>
          </li>
          <li className="py-3">
            <a className="flex w-full font-semibold capitalize" href="/pricing">
              Pricing
            </a>
          </li>
          <li className="py-3 min-[281px]:hidden">
            <a
              className="flex w-full font-semibold capitalize"
              href="https://app.dub.co/login"
            >
              Log in
            </a>
          </li>
          <li className="py-3 min-[281px]:hidden">
            <a
              className="flex w-full font-semibold capitalize"
              href="https://app.dub.co/register"
            >
              Sign Up
            </a>
          </li>
        </ul>
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
