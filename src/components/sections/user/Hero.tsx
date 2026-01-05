
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PARTICIPANT_CONTENT } from "@/constants/participantData";
import { Button } from "@/components/ui/Button";

export function Hero() {
    const { hero } = PARTICIPANT_CONTENT;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-black">
                {/* Digital Grid - CSS approximation */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                {/* Purple/Gold Glows */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-digital-purple/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sanfrecce-gold/10 rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 text-center">
                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up">
                    {hero.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 rounded-full border border-digital-purple/30 bg-digital-purple/10 text-digital-purple text-sm font-bold tracking-wider uppercase backdrop-blur-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Main Title */}
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 mb-6 drop-shadow-[0_0_30px_rgba(138,79,255,0.3)] tracking-tight">
                    {hero.title}
                </h1>

                {/* Catchphrase */}
                <p className="text-2xl md:text-4xl font-bold text-white mb-6 animate-pulse-slow">
                    {hero.catchphrase}
                </p>

                {/* Subphrase */}
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    {hero.subphrase}
                </p>

                {/* CTA Button */}
                <div className="flex flex-col items-center gap-4">
                    <Button
                        size="lg"
                        className="group relative bg-digital-purple hover:bg-digital-purple/90 text-white px-10 py-8 text-xl rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(138,79,255,0.5)] hover:shadow-[0_0_40px_rgba(138,79,255,0.7)] hover:scale-105"
                    >
                        <span className="relative z-10 flex items-center gap-2 font-bold tracking-wide">
                            {hero.cta}
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Button>
                    <div className="flex items-center gap-2 text-sm text-sanfrecce-gold animate-bounce">
                        <Sparkles className="w-4 h-4" />
                        <span className="font-bold">Entry Closing Soon</span>
                    </div>
                </div>
            </div>

            {/* Decorative Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
}
