"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface MarqueeProps {
    children: React.ReactNode;
    className?: string;
    direction?: "left" | "right";
    speed?: number;
    pauseOnHover?: boolean;
}

export function Marquee({
    children,
    className,
    direction = "left",
    speed = 40,
    pauseOnHover = true,
}: MarqueeProps) {
    const [containerWidth, setContainerWidth] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
        }
        if (contentRef.current) {
            setContentWidth(contentRef.current.scrollWidth);
        }
    }, [children]);

    // Duplicate children to ensure seamless loop
    // We need enough duplicates to fill the screen width + buffer
    // For simplicity in this v1, we just duplicate enough times to definitely cover typical screens

    return (
        <div
            ref={containerRef}
            className={cn("group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]", className)}
            style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)"
            }}
        >
            <div
                ref={contentRef}
                className={cn("flex shrink-0 justify-around [gap:var(--gap)] min-w-full", {
                    "animate-marquee": direction === "left",
                    "animate-marquee-reverse": direction === "right",
                    "group-hover:[animation-play-state:paused]": pauseOnHover,
                })}
                style={{
                    animationDuration: `${speed}s`,
                }}
            >
                {children}
            </div>
            {/* Duplicate for seamless loop */}
            <div
                className={cn("flex shrink-0 justify-around [gap:var(--gap)] min-w-full", {
                    "animate-marquee": direction === "left",
                    "animate-marquee-reverse": direction === "right",
                    "group-hover:[animation-play-state:paused]": pauseOnHover,
                })}
                style={{
                    animationDuration: `${speed}s`,
                }}
            >
                {children}
            </div>
        </div>
    );
}
