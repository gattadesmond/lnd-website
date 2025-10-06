import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  isBorderX?: boolean;
  borderXClassName?: string;
  isGridArea?: boolean;
  gridAreaClassName?: string;
}

export function Container({
  children,
  className,
  asChild,
  isBorderX = false,
  isGridArea = false,
  gridAreaClassName = "",
  borderXClassName = "",
  ...props
}: ContainerProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      className={cn(
        "relative mx-auto w-full max-w-screen-lg px-5 lg:px-5 xl:px-0",
        isBorderX && "max-w-[1080px]",
        className,
      )}
      {...props}
    >
      {/* Border left and right */}
      {isBorderX && (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 border-x border-neutral-200",
            borderXClassName,
          )}
        />
      )}

      {isGridArea && (
        <>
          <div
            className={cn(
              "pointer-events-none absolute inset-0 z-0 [mask-image:linear-gradient(transparent,black)] bg-bottom-left [mask-composite:intersect]",
              gridAreaClassName,
            )}
            style={{
              backgroundImage: `
        linear-gradient(to right, #eee 1px, transparent 1px),
        linear-gradient(to bottom, #eee 1px, transparent 1px)
      `,
              backgroundSize: "60px 60px",
            }}
          />

          <div
            className="pointer-events-none absolute inset-[unset] inset-y-0 right-full bottom-0 w-[360px] [mask-image:radial-gradient(100%_80%_at_100%_100%,black,transparent)] bg-bottom-right [mask-composite:intersect] opacity-100"
            style={{
              backgroundImage: `
        linear-gradient(to right, #eee 1px, transparent 1px),
        linear-gradient(to bottom, #eee 1px, transparent 1px)
      `,
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="pointer-events-none absolute inset-[unset] inset-y-0 bottom-0 left-full -ml-[1px] w-[360px] [mask-image:radial-gradient(100%_80%_at_0%_100%,black,transparent)] bg-bottom-left [mask-composite:intersect] opacity-100"
            style={{
              backgroundImage: `
        linear-gradient(to right, #eee 1px, transparent 1px),
        linear-gradient(to bottom, #eee 1px, transparent 1px)
      `,
              backgroundSize: "60px 60px",
            }}
          />
        </>
      )}

      {children}
    </Comp>
  );
}
