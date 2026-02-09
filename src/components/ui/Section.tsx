import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, size = "lg", children, ...props }, ref) => {
    const sizeClasses = {
      sm: "py-12 md:py-16",
      md: "py-16 md:py-20",
      lg: "py-20 md:py-24 lg:py-32",
      xl: "py-24 md:py-32 lg:py-40",
    };

    return (
      <section
        ref={ref}
        className={cn(sizeClasses[size], className)}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };