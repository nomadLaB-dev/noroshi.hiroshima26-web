
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PARTICIPANT_CONTENT } from "@/constants/participantData";

export function RoleSelector() {
    const roles = PARTICIPANT_CONTENT.team.roles;
    const [activeRole, setActiveRole] = useState<string>(roles[0].id);

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* Mobile/Tablet: Stacked Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {roles.map((role) => {
                    const Icon = role.icon;
                    const isActive = activeRole === role.id;

                    return (
                        <button
                            key={role.id}
                            onClick={() => setActiveRole(role.id)}
                            className={cn(
                                "relative flex flex-col items-center p-6 rounded-xl border transition-all duration-500",
                                "focus:outline-none focus:ring-2 focus:ring-digital-purple focus:ring-offset-2 focus:ring-offset-black",
                                isActive
                                    ? "bg-digital-purple/20 border-digital-purple shadow-[0_0_30px_rgba(138,79,255,0.3)] scale-105 z-10"
                                    : "bg-black/40 border-white/10 hover:border-white/30 hover:bg-white/5 opacity-70 hover:opacity-100"
                            )}
                        >
                            <div className={cn(
                                "p-4 rounded-full mb-4 transition-all duration-500",
                                isActive ? "bg-digital-purple text-white rotate-0" : "bg-white/10 text-gray-400 rotate-12"
                            )}>
                                <Icon className="w-8 h-8" />
                            </div>

                            <h3 className={cn(
                                "text-2xl font-heading font-bold mb-1 transition-colors",
                                isActive ? "text-white" : "text-gray-400"
                            )}>
                                {role.role}
                            </h3>

                            <span className="text-sm text-sanfrecce-gold font-bold tracking-widest uppercase mb-4">
                                {role.japanese}
                            </span>

                            <p className={cn(
                                "text-sm text-center leading-relaxed transition-opacity duration-500",
                                isActive ? "opacity-100 text-gray-200" : "opacity-0 h-0 overflow-hidden md:opacity-100 md:h-auto md:text-gray-500"
                            )}>
                                {role.description}
                            </p>

                            {/* Active Indicator (Desktop only usually, but looks good here) */}
                            {isActive && (
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-digital-purple to-transparent blur-[2px]" />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
