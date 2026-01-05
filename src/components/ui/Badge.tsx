import * as React from "react";

import { cn } from "@/lib/utils";

// I'll manually handle variants again for simplicity without cva dep for now, 
// keeping it consistent with Button.tsx style (though cva is installed, using manual obj map is fine for MVP)
// Wait, I didn't install cva. I'm using manual.

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "outline" | "secondary" | "destructive";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant = "default", ...props }, ref) => {

        const variants = {
            default: "bg-sanfrecce-purple text-white hover:bg-sanfrecce-purple/80",
            secondary: "bg-sanfrecce-gold text-white hover:bg-sanfrecce-gold/80",
            outline: "text-foreground border border-white/20",
            destructive: "bg-red-500 text-white shadow-sm hover:bg-red-500/90",
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    variants[variant],
                    className
                )}
                {...props}
            />
        );
    }
);
Badge.displayName = "Badge";

export { Badge };
