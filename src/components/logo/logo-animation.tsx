"use client";

import { useEffect, useState, type ComponentPropsWithoutRef } from "react";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Logo } from "./logo";
import { LogoWhiteGlow } from "./logo-white-glow";

export function LogoAnimation({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  // Khởi tạo state dựa trên sessionStorage ngay từ đầu
  const [hasAnimated, setHasAnimated] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("logo-animation-played");
    }
    return false; // Server-side rendering: mặc định không chạy animation
  });

  useEffect(() => {
    // Chỉ chạy khi component mount lần đầu
    if (hasAnimated && typeof window !== "undefined") {
      // Đánh dấu đã chạy animation trong session này
      sessionStorage.setItem("logo-animation-played", "true");
    }
  }, [hasAnimated]);

  return (
    <div className={cn("relative size-10", className)} {...props}>
      <Logo className="size-full" />
      <motion.div
        animate={
          hasAnimated
            ? {
                opacity: [0, 0.5, 0, 0.7, 0, 0.8, 0, 1, 0, 0, 1, 1],
              }
            : {
                opacity: 1, // Trạng thái cuối cùng của animation
              }
        }
        transition={
          hasAnimated
            ? {
                delay: 0.5,
                ease: "linear",
                duration: 2.5,
                times: [
                  0, 0.03, 0.06, 0.09, 0.12, 0.15, 0.18, 0.21, 0.24, 0.37, 0.38,
                  1,
                ],
              }
            : {
                duration: 0, // Không có transition nếu đã chạy rồi
              }
        }
        className={cn("absolute -top-[42%] -left-[40%] size-[183%]")}
      >
        <LogoWhiteGlow className="size-full" />
      </motion.div>
    </div>
  );
}
