
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PARTICIPANT_CONTENT } from "@/constants/participantData";

export function RoleSelector() {
    const roles = PARTICIPANT_CONTENT.team.roles;
    const [activeRole, setActiveRole] = useState<string>(roles[0].id);

    return (
        <div className="w-full max-w-4xl mx-auto perspective-1000">
            {/* Mobile/Tablet: Stacked Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {roles.map((role, idx) => {
                    const Icon = role.icon;
                    const isActive = activeRole === role.id;

                    return (
                        <div key={role.id} onClick={() => setActiveRole(role.id)} className="cursor-pointer group relative h-full">
                            {/* Cyberpunk Card Container */}
                            <div className={cn(
                                "relative h-full transition-all duration-300 clip-path-cyberpunk p-[1px]",
                                isActive
                                    ? "bg-[#0F0F20] border-transparent shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                                    : "bg-[#0F0F20] border border-white/5 hover:border-cyan-500/50"
                            )}>
                                {/* Corner Decorations */}
                                <div className={cn(
                                    "absolute top-0 left-0 w-8 h-8 border-l border-t transition-colors duration-300",
                                    isActive ? "border-cyan-400" : "border-white/10 group-hover:border-cyan-400"
                                )} />
                                <div className={cn(
                                    "absolute bottom-0 right-0 w-8 h-8 border-r border-b transition-colors duration-300",
                                    isActive ? "border-digital-purple" : "border-white/10 group-hover:border-digital-purple"
                                )} />

                                {/* Inner Content */}
                                <div className={cn(
                                    "relative h-full bg-[#0B0B15] p-8 flex flex-col clip-path-cyberpunk-inner",
                                    isActive ? "bg-[#0B0B15]" : "bg-[#0B0B15]"
                                )}>
                                    {/* Scanline overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_2px,#000_3px)] bg-[size:100%_4px] opacity-20 pointer-events-none" />

                                    {/* Icon */}
                                    <div className="mb-6 relative">
                                        <div className={cn(
                                            "absolute -inset-2 bg-cyan-400/20 blur-xl transition-opacity rounded-full",
                                            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                        )} />
                                        <div className={cn(
                                            "relative w-14 h-14 flex items-center justify-center border rounded-lg transition-all duration-300",
                                            isActive
                                                ? "bg-cyan-950/30 border-cyan-400/50"
                                                : "bg-white/5 border-white/10 group-hover:border-cyan-400/50 group-hover:bg-cyan-950/30"
                                        )}>
                                            <Icon className={cn(
                                                "w-7 h-7 transition-colors",
                                                isActive ? "text-cyan-400" : "text-gray-400 group-hover:text-cyan-400"
                                            )} />
                                        </div>
                                    </div>

                                    {/* Header */}
                                    <div className={cn(
                                        "mb-4 pb-4 border-b transition-colors",
                                        isActive ? "border-cyan-500/30" : "border-white/5 group-hover:border-cyan-500/30"
                                    )}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className={cn(
                                                "text-xs font-mono transition-colors",
                                                isActive ? "text-cyan-400/70" : "text-gray-600 group-hover:text-cyan-400/70"
                                            )}>
                                                0{idx + 1}_MODULE
                                            </span>
                                            {/* Activity Icon or similar decorative element could go here */}
                                        </div>
                                        <h3 className={cn(
                                            "text-xl font-bold transition-colors tracking-wide",
                                            isActive ? "text-cyan-400" : "text-white group-hover:text-cyan-400"
                                        )}>
                                            {role.role}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className={cn(
                                        "text-xs leading-relaxed mt-auto transition-colors whitespace-pre-wrap",
                                        isActive ? "text-gray-300" : "text-gray-400 group-hover:text-gray-300"
                                    )}>
                                        {role.description}
                                    </p>

                                    {/* Tech details at bottom */}
                                    <div className={cn(
                                        "mt-6 pt-4 flex items-center justify-end gap-1 transition-opacity duration-500",
                                        isActive ? "opacity-100" : "opacity-20 group-hover:opacity-100"
                                    )}>
                                        <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                                        <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                                        <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                                        <div className="h-[1px] w-8 bg-cyan-400 ml-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
