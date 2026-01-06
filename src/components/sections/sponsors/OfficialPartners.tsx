"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SPONSOR_CONTENT } from "@/constants/content";
import { motion } from "framer-motion";
import { ExternalLink, Grid, ShieldCheck, Zap } from "lucide-react";
import { PartnerCard } from "./PartnerCard";
import { Marquee } from "@/components/ui/Marquee";

export function OfficialPartners() {
    const { partners, cta } = SPONSOR_CONTENT;

    return (
        <Section fullWidth className="bg-[#050510] text-white py-32 relative z-0 overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#050510] via-transparent to-[#050510] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Partners List */}
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20"
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Grid className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-500 font-mono text-sm tracking-[0.3em] font-bold">ALLIANCE_NETWORK</span>
                        </div>
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a4fff] via-[#c4b5fd] to-white mb-6 drop-shadow-[0_0_15px_rgba(138,79,255,0.4)]">
                            {partners.title}
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent mx-auto mb-6" />
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            {partners.subtitle}
                        </p>
                    </motion.div>

                    <div className="mb-24">
                        <div className="flex items-center justify-center gap-4 mb-10">
                            <div className="h-[1px] w-12 bg-gray-800" />
                            <h3 className="text-xl font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-gold-400" />
                                Platinum Partners
                            </h3>
                            <div className="h-[1px] w-12 bg-gray-800" />
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            {partners.platinum.map((partner, index) => {
                                const hasContent = partner.name !== "" || partner.logo !== "";
                                return (
                                    <PartnerCard key={index} partner={partner} index={index} hasContent={hasContent} />
                                );
                            })}
                        </div>
                    </div>

                    {/* Gold Partners - Carousel */}
                    {partners.gold && partners.gold.length > 0 && (
                        <div className="mb-24">
                            <div className="flex items-center justify-center gap-4 mb-10">
                                <div className="h-[1px] w-12 bg-gray-800" />
                                <h3 className="text-xl font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-sanfrecce-gold" />
                                    Gold Partners
                                </h3>
                                <div className="h-[1px] w-12 bg-gray-800" />
                            </div>

                            <Marquee speed={30} pauseOnHover>
                                {partners.gold.map((partner, index) => {
                                    const hasContent = partner.name !== "" || partner.logo !== "";
                                    return (
                                        <PartnerCard key={index} partner={partner} index={index} hasContent={hasContent} />
                                    );
                                })}
                            </Marquee>
                        </div>
                    )}

                    {/* Silver Partners - Carousel */}
                    {partners.silver && partners.silver.length > 0 && (
                        <div className="mb-12">
                            <div className="flex items-center justify-center gap-4 mb-10">
                                <div className="h-[1px] w-12 bg-gray-800" />
                                <h3 className="text-xl font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-gray-400" />
                                    Silver Partners
                                </h3>
                                <div className="h-[1px] w-12 bg-gray-800" />
                            </div>

                            <Marquee speed={40} direction="right" pauseOnHover>
                                {partners.silver.map((partner, index) => {
                                    const hasContent = partner.name !== "" || partner.logo !== "";
                                    return (
                                        <PartnerCard key={index} partner={partner} index={index} hasContent={hasContent} small />
                                    );
                                })}
                            </Marquee>
                        </div>
                    )}
                </div>

                {/* Final CTA Area */}
                <motion.div
                    className="relative rounded-3xl p-1 md:p-[2px] bg-gradient-to-r from-digital-purple via-cyan-500 to-sanfrecce-gold overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-white/20 blur-xl animate-pulse" />

                    <div className="bg-[#080810] rounded-[22px] px-8 py-20 md:p-24 text-center relative overflow-hidden">
                        {/* Background effects */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute top-[-50%] left-[-20%] w-[150%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1)_0%,transparent_50%)] pointer-events-none" />
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />
                        </div>

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-950/20 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md">
                                <Zap className="w-4 h-4 text-cyan-400" />
                                <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Join the Innovation</span>
                            </div>

                            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight leading-tight">
                                {cta.title}
                            </h2>
                            <p className="text-gray-400 text-lg mb-12 whitespace-pre-line leading-relaxed max-w-2xl mx-auto">
                                {cta.text}
                            </p>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block"
                            >
                                <Button size="lg" className="relative group bg-white text-black hover:bg-cyan-50 hover:text-black font-bold px-16 py-8 text-xl rounded-full overflow-hidden transition-all duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 via-white to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                                    <span className="relative z-10 flex items-center gap-3">
                                        パートナーに応募する
                                        <ExternalLink className="w-5 h-5" />
                                    </span>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
