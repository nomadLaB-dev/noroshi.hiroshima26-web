"use client";

import { Section } from "@/components/ui/Section";
import { SPONSOR_CONTENT } from "@/constants/content";
import { Zap, Rocket, Users, Activity, Hexagon } from "lucide-react";
import { motion } from "framer-motion";

export function WhatIs() {
    const { whatIs } = SPONSOR_CONTENT;

    const icons = {
        "01": Zap,
        "02": Rocket,
        "03": Users,
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 50 } }
    };

    return (
        <Section className="bg-[#080816] relative overflow-hidden py-32">
            {/* Tech Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#4f4f4f 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-digital-purple/50 to-transparent"></div>

            <div className="text-center mb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-sm">
                        <span className="text-cyan-400 text-xs font-mono tracking-widest uppercase">Mission_Statement</span>
                    </div>
                    <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight drop-shadow-[0_0_15px_rgba(138,79,255,0.4)]">
                        <span className="relative inline-block">
                            {whatIs.title}
                            {/* Decorative markers */}
                            <span className="absolute -top-4 -right-4 w-2 h-2 border-t border-r border-sanfrecce-gold"></span>
                            <span className="absolute -bottom-4 -left-4 w-2 h-2 border-b border-l border-sanfrecce-gold"></span>
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto whitespace-pre-line leading-relaxed text-lg">
                        {whatIs.description}
                    </p>
                </motion.div>
            </div>

            <motion.div
                className="grid md:grid-cols-3 gap-8 relative z-10"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                {whatIs.cards.map((card, idx) => {
                    const Icon = icons[card.id as keyof typeof icons] || Zap;
                    return (
                        <motion.div key={card.id} variants={item} className="h-full group relative">
                            {/* Cyberpunk Card Container */}
                            <div className="relative h-full bg-[#0F0F20] border border-white/5 hover:border-cyan-500/50 transition-all duration-300 clip-path-cyberpunk p-[1px] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                                {/* Corner Decorations */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-white/10 group-hover:border-cyan-400 transition-colors duration-300" />
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-white/10 group-hover:border-digital-purple transition-colors duration-300" />

                                {/* Inner Content */}
                                <div className="relative h-full bg-[#0B0B15] p-8 flex flex-col clip-path-cyberpunk-inner">
                                    {/* Scanline overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_2px,#000_3px)] bg-[size:100%_4px] opacity-20 pointer-events-none" />

                                    <div className="mb-6 relative">
                                        <div className="absolute -inset-2 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                                        <div className="relative w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg group-hover:border-cyan-400/50 group-hover:bg-cyan-950/30 transition-all duration-300">
                                            <Icon className="w-7 h-7 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                                        </div>
                                    </div>

                                    <div className="mb-4 pb-4 border-b border-white/5 group-hover:border-cyan-500/30 transition-colors">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-mono text-gray-600 group-hover:text-cyan-400/70 transition-colors">0{idx + 1}_MODULE</span>
                                            <Activity className="w-3 h-3 text-gray-700 group-hover:text-cyan-400 transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-wide">
                                            {card.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed mt-auto group-hover:text-gray-300 transition-colors whitespace-pre-line">
                                        {card.text}
                                    </p>

                                    {/* Tech details at bottom */}
                                    <div className="mt-6 pt-4 flex items-center justify-end gap-1 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                                        <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                                        <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                                        <div className="h-[1px] w-8 bg-cyan-400 ml-2" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </Section>
    );
}
