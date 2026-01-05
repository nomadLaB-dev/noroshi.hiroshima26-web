import * as React from "react";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

// Note: I'm not installing cva yet, I'll use simple props first to avoid extra deps if not needed, 
// but actually cva is cleaner. I'll stick to manual implementation for now to keep it simple effectively
// unless I install cva. Let's just use manual cn logic for now to reduce overhead.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center rounded transition-all duration-300 font-bold focus:outline-none focus:ring-2 focus:ring-digital-purple/50 disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-sanfrecce-purple text-white hover:bg-digital-purple hover:shadow-[0_0_15px_rgba(138,79,255,0.4)] border border-transparent",
            secondary: "bg-sanfrecce-gold text-white hover:bg-yellow-500 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] border border-transparent",
            outline: "bg-transparent border border-digital-purple text-white hover:bg-digital-purple/20",
            ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-white/5",
            link: "text-digital-purple underline-offset-4 hover:underline",
        };

        const sizes = {
            sm: "h-9 px-3 text-sm",
            md: "h-11 px-8 text-base",
            lg: "h-14 px-10 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
