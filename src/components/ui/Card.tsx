import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "relative overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-card-foreground shadow-sm transition-all duration-300",
                    hoverEffect && "hover:border-digital-purple/50 hover:shadow-[0_0_20px_rgba(138,79,255,0.2)] hover:-translate-y-1",
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export { Card };
