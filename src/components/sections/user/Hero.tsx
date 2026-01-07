

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PARTICIPANT_CONTENT } from "@/constants/participantData";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
    const { hero } = PARTICIPANT_CONTENT;

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-10 bg-[#050510]">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 w-[200%] h-1/2 left-[-50%] bg-gradient-to-t from-digital-purple to-transparent blur-[100px] opacity-20" />
                <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-sanfrecce-purple/10 via-transparent to-transparent blur-[120px] opacity-30" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 text-center">
                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {hero.tags.map((tag, i) => (
                        <div
                            key={i}
                            className="px-3 py-1 bg-digital-purple/10 border border-digital-purple/30 text-digital-purple text-xs font-mono tracking-[0.2em] uppercase backdrop-blur-sm"
                        >
                            {tag}
                        </div>
                    ))}
                </div>

                {/* Main Title */}
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-black mb-6 tracking-tight relative z-10">
                    <span className="block text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        {hero.title.split('.')[0]}.
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8a4fff] via-[#c4b5fd] to-white drop-shadow-[0_0_30px_rgba(138,79,255,0.4)]">
                        {hero.title.split('.')[1]}
                    </span>
                </h1>

                {/* Catchphrase */}
                <p className="text-2xl md:text-4xl font-bold text-white mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    {hero.catchphrase}
                </p>

                {/* Subphrase */}
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    {hero.subphrase}
                </p>

                {/* CTA Button */}
                <div className="flex flex-col items-center gap-6">
                    <Button
                        size="lg"
                        className="group relative overflow-hidden bg-transparent border border-digital-purple text-white hover:text-white transition-all duration-300 px-10 py-8"
                    >
                        <div className="absolute inset-0 w-full h-full bg-digital-purple/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out skew-x-12" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400" />
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400" />

                        <span className="relative z-10 flex items-center gap-2 font-mono tracking-wider text-lg">
                            {hero.cta}
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform text-cyan-400" />
                        </span>
                    </Button>

                    <div className="flex items-center gap-2 text-sm text-cyan-400 font-mono tracking-widest animate-pulse">
                        <Sparkles className="w-4 h-4" />
                        <span>ENTRY_CLOSING_SOON</span>
                    </div>
                </div>
            </div>

            {/* Decorative Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050510] to-transparent" />
        </section>
    );
}

