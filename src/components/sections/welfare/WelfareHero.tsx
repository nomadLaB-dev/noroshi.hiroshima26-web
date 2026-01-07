
import { Button } from "@/components/ui/Button";
import { WELFARE_CONTENT } from "@/constants/welfareData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function WelfareHero() {
    const { hero } = WELFARE_CONTENT;

    return (
        <section className="relative min-h-[80vh] flex items-center justify-center pt-20 pb-10 overflow-hidden text-white">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-sanfrecce-purple/20 via-transparent to-transparent -skew-x-12" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-sanfrecce-gold/10 via-transparent to-transparent rounded-full blur-3xl" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-sanfrecce-purple/20 text-sanfrecce-purple font-bold tracking-wider text-sm border border-sanfrecce-purple/30">
                        For Welfare Providers
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-white leading-tight">
                        {hero.title}
                    </h1>

                    <p className="text-2xl md:text-3xl font-bold text-sanfrecce-purple mb-6">
                        {hero.catchphrase}
                    </p>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                        {hero.subphrase}
                    </p>

                    <div className="flex justify-center">
                        <Button
                            size="lg"
                            className="bg-sanfrecce-purple text-white hover:bg-sanfrecce-purple/90 px-10 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(138,79,255,0.4)] hover:shadow-[0_0_30px_rgba(138,79,255,0.6)] transition-all duration-300"
                        >
                            <span className="flex items-center gap-2">
                                {hero.cta}
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
