"use client";

import type { ComponentPropsWithoutRef } from "react";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Logo } from "./logo";
import styles from "./logo-animation.module.css";
import { LogoWhiteGlow } from "./logo-white-glow";

export function LogoAnimation({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("relative size-10", className)} {...props}>
      <Logo className="size-full" />
      <motion.div
        animate={{
          opacity: [0, 0.5, 0, 0.7, 0, 0.8, 0, 1, 0, 0, 1, 1],
        }}
        transition={{
          delay: 0.5,
          ease: "linear",
          duration: 2.5,
          times: [
            0, 0.03, 0.06, 0.09, 0.12, 0.15, 0.18, 0.21, 0.24, 0.37, 0.38, 1,
          ],
        }}
        className={cn(
          styles["anim-logo"],
          "absolute -top-[42%] -left-[40%] size-[183%]",
        )}
      >
        <LogoWhiteGlow className="size-full" />
      </motion.div>
    </div>
  );
}
