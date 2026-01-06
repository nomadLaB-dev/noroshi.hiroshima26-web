"use client";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SPONSOR_CONTENT } from "@/constants/content";
import { Check, Star, Cpu, Lock, Unlock } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function SponsorPlans() {
    const { plans } = SPONSOR_CONTENT;

    return (
        <Section className="bg-[#050510] py-32 relative overflow-hidden">
            {/* Simple decor */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-sanfrecce-gold/5 blur-[80px] pointer-events-none" />

            <motion.h2
                className="font-heading text-3xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#8a4fff] via-[#c4b5fd] to-white drop-shadow-[0_0_15px_rgba(138,79,255,0.4)]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {plans.title}
            </motion.h2>

            {/* Killer Message */}
            {plans.message && (
                <motion.div
                    className="max-w-4xl mx-auto mb-16 relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-digital-purple/20 blur-xl rounded-lg" />
                    <div className="bg-[#0D0D18] border border-digital-purple/50 rounded-lg p-8 text-center backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30" />
                        <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/50" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/50" />

                        <p className="text-white text-lg md:text-xl font-bold leading-relaxed whitespace-pre-line bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300 relative z-10">
                            {plans.message}
                            <span className="block mt-2 text-xs font-mono text-digital-purple tracking-widest opacity-70">/// PRIORITY_TRANSMISSION_RECEIVED ///</span>
                        </p>
                    </div>
                </motion.div>
            )}

            {/* Tabbed Interface for Compactness - Custom implementation to avoid big deps for now */}
            <div className="max-w-5xl mx-auto">
                <PlansTabs plans={plans.items} />
            </div>
        </Section>
    );
}

function PlansTabs({ plans }: { plans: any[] }) {
    const [activeTab, setActiveTab] = React.useState("Platinum");

    // Order: Platinum -> Gold -> Silver
    const activePlan = plans.find(p => p.rank === activeTab) || plans[0];

    return (
        <div className="flex flex-col">
            {/* Tab Triggers */}
            <div className="flex p-1 bg-[#1A1A2E] rounded-t-xl border-x border-t border-white/10 mb-0 overflow-x-auto relative z-10 gap-1 w-fit mx-auto md:w-full md:mx-0 justify-center">
                {plans.map((plan) => (
                    <button
                        key={plan.rank}
                        onClick={() => setActiveTab(plan.rank)}
                        className={cn(
                            "py-3 px-8 rounded-t-lg text-sm font-bold transition-all whitespace-nowrap relative z-10 flex items-center gap-2",
                            activeTab === plan.rank
                                ? "text-white"
                                : "text-gray-500 hover:text-white"
                        )}
                    >
                        <div className={cn("w-2 h-2 rounded-full", activeTab === plan.rank ? "bg-cyan-400 shadow-[0_0_5px_#22d3ee]" : "bg-gray-700")} />
                        {activeTab === plan.rank && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-[#0A0A15] border-t-2 border-x border-cyan-500/50 rounded-t-lg -z-10"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            >
                                <div className="absolute top-0 left-0 w-full h-full bg-cyan-500/5" />
                            </motion.div>
                        )}
                        <span className="font-mono uppercase tracking-wider">{plan.rank}</span>
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="relative group perspective-1000 bg-[#0A0A15] border border-white/10 rounded-b-xl rounded-tr-xl p-1 shadow-2xl">
                {/* Decorative Outline */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/30" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="bg-[#0F0F1A] rounded-lg p-6 md:p-12 relative overflow-hidden">
                            {/* Scanline */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none z-0 opacity-20" />

                            <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
                                {/* Left: Info */}
                                <div className="md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8 w-full relative">
                                    <Badge variant={activePlan.rank === "Platinum" ? "secondary" : "outline"} className="mb-4 bg-white/5 border-white/20 text-gray-300 font-mono">
                                        LIMIT: {activePlan.limit}
                                    </Badge>
                                    <h3 className={`font-heading text-4xl font-bold mb-2 ${activePlan.rank === "Platinum" ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-white drop-shadow-sm" :
                                        activePlan.rank === "Gold" ? "text-sanfrecce-gold" : "text-gray-300"
                                        }`}>
                                        {activePlan.name}
                                    </h3>
                                    <div className="text-5xl font-bold text-white mt-6 tracking-tight font-mono">
                                        {activePlan.price}
                                        <span className="text-lg text-gray-500 ml-2">JPY</span>
                                    </div>
                                    <p className="text-cyan-400 mt-4 font-bold text-sm tracking-widest uppercase border-t border-b border-cyan-500/20 py-2 inline-block">
                                        {activePlan.concept}
                                    </p>
                                    <div className="mt-10">
                                        <Button className="w-full h-12 relative overflow-hidden group/btn bg-transparent border border-cyan-500 text-cyan-400 group-hover/btn:text-black font-bold tracking-widest" variant="ghost">
                                            <div className="absolute inset-0 w-full h-full bg-cyan-400 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300" />
                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                INITIALIZE <Unlock className="w-4 h-4" />
                                            </span>
                                        </Button>
                                    </div>
                                </div>

                                {/* Right: Benefits */}
                                <div className="md:w-2/3 space-y-6 w-full max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                    {activePlan.benefits.map((benefit: any, idx: number) => (
                                        <motion.div
                                            key={idx}
                                            className="group/item relative pl-6 border-l border-white/10 hover:border-cyan-500/50 transition-colors"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                        >
                                            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-[#0F0F1A] border border-white/30 rounded-full group-hover/item:border-cyan-400 group-hover/item:bg-cyan-900 transition-colors" />

                                            <div className="flex items-start gap-4">
                                                <div>
                                                    <strong className="text-white block mb-1 group-hover/item:text-cyan-400 transition-colors tracking-wide text-lg">{benefit.title}</strong>
                                                    {benefit.text && <p className="text-gray-400 text-sm leading-relaxed mb-2">{benefit.text}</p>}
                                                    {benefit.value && (
                                                        <div className="inline-flex items-center gap-2 bg-cyan-950/30 border border-cyan-500/20 px-3 py-1 mt-1 text-xs text-cyan-400 font-mono">
                                                            <Cpu className="w-3 h-3" /> {benefit.value}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
