"use client";

import { Section } from "@/components/ui/Section";
import { SPONSOR_CONTENT } from "@/constants/content";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function NoroshiVision() {
    const { noroshi } = SPONSOR_CONTENT;
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <Section className="overflow-hidden py-32 relative bg-[#050510]">
            {/* Background HUD Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 right-[-100px] -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full z-0 opacity-20"></div>
                <div className="absolute top-1/2 right-[-100px] -translate-y-1/2 w-[400px] h-[400px] border border-dashed border-cyan-500/20 rounded-full z-0 animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute top-1/2 right-[-100px] -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full z-0 opacity-10"></div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 relative z-10">
                {/* Left: Text Context */}
                <motion.div
                    className="lg:col-span-4 space-y-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-sm animate-pulse" />
                        <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">Visualizing_Future</span>
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold">
                        NOROSHI.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a4fff] via-[#c4b5fd] to-white drop-shadow-[0_0_15px_rgba(138,79,255,0.4)]">
                            HIROSHIMA
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-digital-purple to-cyan-400" />
                    <p className="text-gray-300 leading-relaxed text-lg border-l border-white/10 pl-4 relative whitespace-pre-line">
                        {noroshi.description}
                        <span className="absolute left-[-1px] top-0 h-4 w-[1px] bg-cyan-400" />
                    </p>
                </motion.div>

                {/* Right: Data Panel Cards */}
                <motion.div
                    className="lg:col-span-8 relative min-h-[400px]"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    {/* Tech Frame */}
                    <div className="absolute -inset-4 border border-white/5 rounded-2xl bg-white/[0.02] -z-10" />
                    <div className="absolute top-[-16px] right-0 flex gap-1">
                        <div className="w-8 h-2 bg-white/10" />
                        <div className="w-4 h-2 bg-cyan-500/50" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full relative">
                        {noroshi.cards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                className={cn(
                                    "group relative flex-1 min-h-[120px] md:min-h-[160px] border-r border-[#fff] bg-[#0A0A15]/80 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out cursor-pointer hover:bg-white/5",
                                    "first:rounded-l-xl last:rounded-r-xl border-y border-[#fff] md:border-y-0",
                                    hoveredId === card.id ? "opacity-100" : (hoveredId !== null ? "opacity-30" : "opacity-100")
                                )}
                                onMouseEnter={() => setHoveredId(card.id)}
                            >
                                {/* Active Glow Line at top */}
                                <div className={cn(
                                    "absolute top-0 left-0 w-full h-[2px] transition-colors duration-300 shadow-[0_0_10px_#22d3ee] md:shadow-none",
                                    hoveredId === card.id ? "bg-cyan-400 md:shadow-[0_0_10px_#22d3ee]" : "bg-transparent"
                                )} />

                                {/* Content Container */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    {/* Number */}
                                    <span className={cn(
                                        "absolute top-4 right-4 text-4xl font-mono font-bold transition-colors duration-500",
                                        "text-[#8a4fff]"
                                    )}>
                                        0{card.id}
                                    </span>

                                    <h3 className={cn(
                                        "font-bold text-lg md:text-xl mb-2 transition-colors relative z-10 flex items-center gap-2",
                                        hoveredId === card.id ? "text-cyan-400" : "text-white"
                                    )}>
                                        <span className={cn(
                                            "w-1 h-4 transition-colors duration-300",
                                            hoveredId === card.id ? "bg-cyan-400" : "bg-digital-purple"
                                        )} />
                                        {card.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}

                        {/* Modal Overlay */}
                        <AnimatePresence>
                            {hoveredId !== null && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute inset-0 z-20 flex items-center justify-center p-4 pointer-events-none"
                                >
                                    {noroshi.cards.filter(c => c.id === hoveredId).map(card => (
                                        <div key={card.id} className="w-full h-full bg-[#0A0A15]/95 rounded-xl border border-cyan-500/30 backdrop-blur-xl p-8 shadow-[0_0_50px_rgba(34,211,238,0.1)] relative overflow-hidden flex flex-col justify-center">
                                            {/* Background Effects */}
                                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,rgba(34,211,238,0.05))] z-0" />
                                            <div className="absolute top-0 right-0 p-4 opacity-50">
                                                <div className="text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent">
                                                    0{card.id}
                                                </div>
                                            </div>

                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.1 }}
                                                className="relative z-10"
                                            >
                                                <div className="flex items-center gap-2 mb-4">
                                                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                                    <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Detail_Analysis</span>
                                                </div>

                                                <h3 className="text-3xl font-bold text-white mb-6">
                                                    {card.title}
                                                </h3>

                                                <div className="h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent mb-6" />

                                                <ul className="space-y-4">
                                                    {card.points && card.points.map((point: string, i: number) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ x: -20, opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                                            className="text-gray-300 flex items-start gap-3 text-lg"
                                                        >
                                                            <span className="text-cyan-400 mt-1">▶</span>
                                                            <span>{point}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
