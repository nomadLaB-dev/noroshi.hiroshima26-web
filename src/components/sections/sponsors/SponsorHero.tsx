import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SPONSOR_CONTENT } from "@/constants/content";
import { ArrowRight, Terminal } from "lucide-react";

export function SponsorHero() {
    const { hero } = SPONSOR_CONTENT;

    return (
        <Section className="min-h-[80vh] flex items-center justify-center pt-32 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-sanfrecce-purple/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                {/* Left: Text */}
                <div className="space-y-8 z-10">
                    <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 whitespace-nowrap">
                            {hero.title}
                        </span>
                        <span className="block text-digital-purple drop-shadow-[0_0_15px_rgba(138,79,255,0.6)] whitespace-nowrap">
                            {hero.subtitle}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed border-l-4 border-sanfrecce-gold pl-4">
                        {hero.description}
                    </p>

                    <Button size="lg" className="group">
                        {hero.buttonText}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                {/* Right: Visual (Mock Terminal/Hacker Interface) */}
                <div className="relative z-10 hidden lg:block">
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        {/* Decorative Circles */}
                        <div className="absolute inset-0 border border-digital-purple/30 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 border border-sanfrecce-gold/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                        {/* Center Content */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-[#0D0714]/90 backdrop-blur-xl border border-white/20 rounded-xl w-3/4 shadow-[0_0_50px_rgba(138,79,255,0.3)] overflow-hidden">
                                {/* Terminal Header */}
                                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Terminal className="w-3 h-3 text-gray-400" />
                                        <span className="text-xs text-gray-400 font-mono">noroshi-system — bash</span>
                                    </div>
                                    <div className="w-8" /> {/* Spacer for centering */}
                                </div>

                                {/* Terminal Body */}
                                <div className="p-6 font-mono text-sm space-y-3 relative">
                                    {/* Line Numbers & Content */}
                                    <div className="absolute left-4 top-6 bottom-6 w-px bg-white/5 hidden sm:block" />

                                    <div className="flex gap-4">
                                        <span className="text-gray-600 select-none hidden sm:block">01</span>
                                        <p className="text-green-400">$ init <span className="text-white">hackathon_procedure</span></p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-gray-600 select-none hidden sm:block">02</span>
                                        <p className="text-gray-300 element-[loading]">&gt; Loading modules... <span className="animate-pulse text-sanfrecce-gold">Done</span></p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-gray-600 select-none hidden sm:block">03</span>
                                        <p className="text-gray-300">&gt; Target: <span className="text-digital-purple font-bold">Social_Innovation</span></p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-gray-600 select-none hidden sm:block">04</span>
                                        <p className="text-gray-300">&gt; Status: <span className="text-sanfrecce-gold font-bold glow-gold">Ready_to_Launch</span></p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-gray-600 select-none hidden sm:block">05</span>
                                        <p className="text-green-400 animate-pulse">_</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
