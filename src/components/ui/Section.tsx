import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    fullWidth?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, fullWidth = false, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    "w-full py-16 md:py-24 relative",
                    className
                )}
                {...props}
            >
                <div className={cn(
                    "mx-auto px-4 md:px-6",
                    !fullWidth && "max-w-7xl"
                )}>
                    {children}
                </div>
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
