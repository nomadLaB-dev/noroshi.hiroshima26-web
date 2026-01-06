"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SPONSOR_CONTENT } from "@/constants/content";
import { ArrowRight, Terminal, Cpu, Network } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function SponsorHero() {
    const { hero } = SPONSOR_CONTENT;
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <Section className="min-h-[90vh] flex items-center justify-center pt-32 overflow-hidden relative bg-[#050510]">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

            {/* Animated Grid Horizon */}
            <motion.div
                style={{ opacity: 0.2 }}
                className="absolute bottom-0 w-[200%] h-1/2 left-[-50%] bg-gradient-to-t from-digital-purple to-transparent blur-[100px] pointer-events-none"
            />

            <motion.div
                className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-sanfrecce-purple/10 via-transparent to-transparent blur-[120px] pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            />

            <div className="grid lg:grid-cols-2 gap-12 items-center w-full z-10">
                {/* Left: Text */}
                <div className="space-y-8 relative">
                    {/* Decorative Tech Lines */}
                    <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-digital-purple/50 to-transparent hidden md:block" />

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-[1px] w-8 bg-digital-purple"></span>
                            <span className="text-digital-purple/80 text-xs font-mono tracking-[0.2em] uppercase">System_Initialize_Sequence</span>
                        </div>
                        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
                            <span className="block text-white whitespace-nowrap drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                                {hero.title}
                            </span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8a4fff] via-[#c4b5fd] to-white drop-shadow-[0_0_25px_rgba(138,79,255,0.4)] whitespace-nowrap">
                                {hero.subtitle}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed relative pl-6 border-l-2 border-digital-purple/30 whitespace-pre-line"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                        {hero.description}
                        <span className="absolute left-[-2px] top-0 h-1/3 w-[2px] bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <Button size="lg" className="group relative overflow-hidden bg-transparent border border-digital-purple text-white hover:text-white transition-all duration-300">
                            <div className="absolute inset-0 w-full h-full bg-digital-purple/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out skew-x-12" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400" />
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400" />
                            <span className="relative z-10 flex items-center font-mono tracking-wider">
                                {hero.buttonText}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform text-cyan-400" />
                            </span>
                        </Button>
                    </motion.div>
                </div>

                {/* Right: Visual (Holographic Terminal) */}
                <motion.div
                    className="relative z-10 hidden lg:block"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto perspective-1000">
                        {/* 3D Float Effect Container */}
                        <motion.div
                            animate={{ y: [0, -20, 0], rotateY: [0, 5, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full h-full"
                        >
                            {/* Rotating Rings */}
                            <div className="absolute inset-[-10%] border border-digital-purple/20 rounded-full animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-[-5%] border border-cyan-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed" />

                            {/* Center Hologram Container */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-[#0D0714]/80 backdrop-blur-sm border border-digital-purple/30 rounded-lg w-full shadow-[0_0_50px_rgba(138,79,255,0.15)] overflow-hidden relative">
                                    {/* Scanline Effect */}
                                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20 z-20" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-digital-purple/10 to-transparent pointer-events-none animate-pulse z-20" />

                                    {/* Terminal Header */}
                                    <div className="flex items-center justify-between px-4 py-2 bg-digital-purple/10 border-b border-digital-purple/30 backdrop-blur-md">
                                        <div className="flex gap-2 items-center">
                                            <Cpu className="w-4 h-4 text-cyan-400" />
                                            <span className="text-xs text-cyan-400/80 font-mono tracking-widest uppercase">Kernel_Core.v2.4</span>
                                        </div>

                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-digital-purple/50 rounded-sm" />
                                            <div className="w-2 h-2 bg-digital-purple/50 rounded-sm" />
                                            <div className="w-2 h-2 bg-cyan-400 rounded-sm animate-pulse" />
                                        </div>
                                    </div>

                                    {/* Terminal Body */}
                                    <div className="p-6 font-mono text-sm space-y-3 relative min-h-[300px] flex flex-col font-light">
                                        <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-digital-purple/10 hidden sm:block" />

                                        {[
                                            { cmd: "SYSTEM_BOOT...", delay: 0.5, color: "text-gray-400" },
                                            { cmd: "LOADING_ASSETS...", delay: 1.2, color: "text-gray-400" },
                                            { cmd: "CONNECTING_TO_GRID...", delay: 1.8, color: "text-gray-400" },
                                            { cmd: "ACCESS_GRANTED", delay: 2.5, color: "text-green-400", bold: true },
                                            { cmd: "INIT_PROTOCOL: SOCIAL_INNOVATION", delay: 3.2, highlight: true },
                                            { cmd: "TARGET_LOCKED: NOROSHI", delay: 4.0, color: "text-cyan-400 font-bold glow-cyan" }
                                        ].map((line, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex gap-3 items-center"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: line.delay, duration: 0.2 }}
                                            >
                                                <span className="text-digital-purple/50 text-[10px] select-none hidden sm:block w-4">{(i + 1).toString().padStart(2, '0')}</span>
                                                <p className={`${line.color || "text-gray-300"} ${line.bold ? "font-bold" : ""} ${line.highlight ? "bg-digital-purple/20 text-white px-1" : ""}`}>
                                                    {i === 4 && <span className="mr-2 text-digital-purple">❯</span>}
                                                    {line.cmd}
                                                </p>
                                            </motion.div>
                                        ))}

                                        <motion.div
                                            className="flex gap-3 items-center mt-auto pt-4 border-t border-white/5"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 5 }}
                                        >
                                            <span className="text-cyan-400 animate-pulse">▋</span>
                                            <span className="text-xs text-gray-500 uppercase tracking-widest">Awaiting Input...</span>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
