
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PARTICIPANT_CONTENT } from "@/constants/participantData";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export function FAQSection() {
    const { faq, hero } = PARTICIPANT_CONTENT; // Re-use hero cta text or similar if needed

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto relative z-10">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-white mb-16">
                    FAQ
                </h2>

                <div className="space-y-6 mb-24">
                    {faq.map((item, index) => (
                        <Card key={index} className="bg-zinc-900/50 border-white/10">
                            <CardContent className="p-6 md:p-8">
                                <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
                                    <span className="text-digital-purple">Q.</span>
                                    {item.q}
                                </h3>
                                <p className="text-gray-300 ml-8 leading-relaxed">
                                    {item.a}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="text-center space-y-8 animate-fade-in-up">
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white">
                        君の挑戦を待っている。
                    </h2>
                    <div className="flex justify-center">
                        <Button
                            size="lg"
                            className="bg-sanfrecce-gold hover:bg-sanfrecce-gold/90 text-black px-12 py-8 text-xl rounded-full font-bold shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:shadow-[0_0_50px_rgba(255,215,0,0.6)] hover:scale-105 transition-all duration-300"
                        >
                            <span className="flex items-center gap-2">
                                エントリーはこちら
                                <ArrowRight className="w-6 h-6" />
                            </span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Footer background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-t from-digital-purple/20 to-transparent pointer-events-none blur-3xl" />
        </section>
    );
}
