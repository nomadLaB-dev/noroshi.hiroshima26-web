"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SPONSOR_CONTENT } from "@/constants/content";
import { Database, FileText, Bot, Layers, Fingerprint } from "lucide-react";
import { motion } from "framer-motion";

export function PocChallenges() {
    const { poc } = SPONSOR_CONTENT;

    const icons = {
        1: Database,
        2: FileText,
        3: Bot,
    };

    return (
        <Section className="bg-[#080816] py-32 relative overflow-hidden">
            {/* Abstract Data Flow Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -left-[10%] top-[20%] w-[50%] h-[30%] bg-digital-purple/5 blur-[80px] rotate-[-15deg] pointer-events-none" />
                <div className="absolute -right-[10%] bottom-[20%] w-[50%] h-[30%] bg-cyan-500/5 blur-[80px] rotate-[15deg] pointer-events-none" />
            </div>

            <div className="text-center mb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Layers className="w-5 h-5 text-digital-purple animate-pulse" />
                        <span className="text-digital-purple font-mono text-sm tracking-[0.3em] font-bold">CASE_ARCHIVE</span>
                    </div>
                    <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-white tracking-tighter drop-shadow-[0_0_20px_rgba(138,79,255,0.3)]">
                        POC <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a4fff] via-[#c4b5fd] to-white">CHALLENGES</span>
                    </h2>
                    <p className="text-sanfrecce-gold tracking-widest font-bold text-lg uppercase bg-sanfrecce-gold/10 inline-block px-4 py-1 rounded border border-sanfrecce-gold/30">
                        {poc.subtitle}
                    </p>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10 perspective-1000">
                {poc.cases.map((item, index) => {
                    const Icon = icons[item.id as keyof typeof icons];
                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50, rotateX: 10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group"
                        >
                            {/* Holographic Card */}
                            <div className="group relative h-full bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md rounded-xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-digital-purple/50 hover:shadow-[0_0_40px_rgba(138,79,255,0.2)] hover:-translate-y-2">
                                {/* Hologram Shine */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform translate-y-full group-hover:translate-y-[-100%] transition-transform duration-1000 ease-in-out" />

                                {/* Corner Accents */}
                                <div className="absolute top-0 right-0 p-3 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <Fingerprint className="w-8 h-8 text-white/10 group-hover:text-digital-purple/30 transition-colors" />
                                </div>

                                <div className="p-8 h-full flex flex-col relative z-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="relative">
                                            <div className="absolute -inset-2 bg-digital-purple/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="relative p-4 bg-[#0A0A15] rounded-xl border border-white/10 group-hover:border-digital-purple transition-colors">
                                                <Icon className="w-8 h-8 text-gray-400 group-hover:text-digital-purple transition-colors" />
                                            </div>
                                        </div>
                                        <Badge variant="outline" className="border-digital-purple/40 text-digital-purple bg-digital-purple/5 tracking-wider font-mono text-xs py-1">
                                            {item.lang}
                                        </Badge>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sanfrecce-gold transition-colors tracking-tight">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow whitespace-pre-line">
                                        {item.desc}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" />
                                            <span className="text-green-400">VERIFIED</span>
                                        </div>
                                        <span className="group-hover:text-digital-purple transition-colors">ID: POC_{item.id.toString().padStart(3, '0')}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
}
