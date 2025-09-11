import { cn } from "@/lib/utils";

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:max-w-2xl md:max-w-3xl md:px-8 lg:max-w-4xl xl:max-w-6xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
