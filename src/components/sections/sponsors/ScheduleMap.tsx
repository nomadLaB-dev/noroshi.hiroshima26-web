"use client";

import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { SPONSOR_CONTENT } from "@/constants/content";
import { ArrowDown, Cpu, CircleDot } from "lucide-react";
import { motion } from "framer-motion";

export function ScheduleMap() {
    const { schedule } = SPONSOR_CONTENT;

    return (
        <Section className="bg-[#050510] relative overflow-hidden py-32">
            {/* Circuit Background */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <motion.div
                className="relative z-10 text-center mb-24"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded border border-digital-purple/30 bg-digital-purple/10">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-digital-purple font-mono text-xs tracking-widest uppercase">Mission_Timeline_Graph</span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a4fff] via-[#c4b5fd] to-white tracking-tight drop-shadow-[0_0_15px_rgba(138,79,255,0.4)]">
                    {schedule.title}
                </h2>
            </motion.div>

            <div className="relative max-w-5xl mx-auto z-10">
                {/* Vertical Circuit Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block">
                    {/* Data flow animation */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50 animate-[shimmer_3s_infinite] bg-[length:100%_50%]" />
                </div>

                {/* Nodes on the line */}
                <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:flex flex-col justify-between py-12 pointer-events-none">
                    {schedule.steps.map((_, i) => (
                        <div key={i} className="w-4 h-4 rounded-full bg-[#050510] border-2 border-cyan-500 shadow-[0_0_10px_#22d3ee] z-20" style={{ marginTop: i === 0 ? 0 : 'auto' }} />
                    ))}
                </div>

                <div className="space-y-12 md:space-y-0 relative">
                    {schedule.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""} md:py-12`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Connector Line (Horizontal) */}
                            <div className={`hidden md:block absolute top-[50%] ${index % 2 === 0 ? "right-[50%] mr-px w-[80px]" : "left-[50%] ml-px w-[80px]"} h-[2px] bg-cyan-500/30`}>
                                <div className="absolute top-[-3px] w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_#22d3ee]" style={{ [index % 2 === 0 ? 'right' : 'left']: '-5px' }} />
                                <div className="absolute top-[50%] -translate-y-[50%] w-full h-full bg-cyan-400/20" />
                            </div>

                            {/* Content Box */}
                            <div className={`flex-1 w-full md:w-auto ${index % 2 === 0 ? "md:pr-24" : "md:pl-24"}`}>
                                <div className="group relative bg-[#0A0A15]/90 border border-white/10 hover:border-cyan-500/50 p-1 transition-all duration-300">
                                    {/* Tech corners */}
                                    <div className="absolute top-[-1px] left-[-1px] w-4 h-4 border-t border-l border-white/20 group-hover:border-cyan-400 transition-colors" />
                                    <div className="absolute top-[-1px] right-[-1px] w-4 h-4 border-t border-r border-white/20 group-hover:border-cyan-400 transition-colors" />
                                    <div className="absolute bottom-[-1px] left-[-1px] w-4 h-4 border-b border-l border-white/20 group-hover:border-cyan-400 transition-colors" />
                                    <div className="absolute bottom-[-1px] right-[-1px] w-4 h-4 border-b border-r border-white/20 group-hover:border-cyan-400 transition-colors" />

                                    <div className="relative bg-[#0F0F1A] p-6 md:p-8 clip-path-cyberpunk-sm hover:bg-[#131325] transition-colors">
                                        <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                                            <Badge variant="outline" className="border-digital-purple/50 text-digital-purple bg-digital-purple/5 font-mono">
                                                {step.duration}
                                            </Badge>
                                            <div className="flex items-center gap-2 text-cyan-500/40">
                                                <Cpu className="w-4 h-4" />
                                                <span className="font-mono text-xs">NODE_0{index + 1}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors flex items-center gap-3">
                                            <CircleDot className="w-5 h-5 text-cyan-500 hidden group-hover:block animate-pulse" />
                                            {step.title}
                                        </h3>

                                        <p className="text-gray-400 leading-relaxed text-sm md:text-base border-l-2 border-white/5 pl-4 group-hover:border-cyan-500/30 transition-colors whitespace-pre-line">
                                            {step.description}
                                        </p>

                                        {/* Step number watermark */}
                                        <div className="absolute -bottom-4 -right-4 text-8xl font-heading font-bold text-white/[0.03] pointer-events-none group-hover:text-cyan-400/[0.05] transition-colors">
                                            {step.step}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Empty Spacer */}
                            <div className="flex-1 hidden md:block" />

                            {/* Mobile Connector */}
                            <div className="md:hidden flex justify-center w-full my-4">
                                <div className="p-2 rounded-full bg-white/5 border border-white/10">
                                    <ArrowDown className="text-cyan-500 animate-bounce w-5 h-5" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
