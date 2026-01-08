"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { PARTICIPANT_CONTENT } from "@/constants/participantData";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function FAQSection() {
    const { faq } = PARTICIPANT_CONTENT;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleEffect = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto relative z-10">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-white mb-16">
                    FAQ
                </h2>

                <div className="space-y-4 mb-24">
                    {faq.map((item, index) => (
                        <Card
                            key={index}
                            className={cn(
                                "bg-white/5 border-white/10 transition-all duration-300 cursor-pointer overflow-hidden",
                                openIndex === index ? "border-digital-purple/50 bg-white/10" : "hover:border-white/20 hover:bg-white/5"
                            )}
                            onClick={() => toggleEffect(index)}
                        >
                            <CardContent className="p-0">
                                <div className="p-6 md:p-8 flex items-start justify-between gap-4">
                                    <h3 className="text-xl font-bold text-white flex items-start gap-3 select-none">
                                        <span className="text-digital-purple">Q.</span>
                                        {item.q}
                                    </h3>
                                    <div className={cn(
                                        "mt-1 text-digital-purple transition-transform duration-300 shrink-0",
                                        openIndex === index ? "rotate-180" : "rotate-0"
                                    )}>
                                        <ChevronDown className="w-6 h-6" />
                                    </div>
                                </div>

                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                                                <div className="h-[1px] w-full bg-white/10 mb-6" />
                                                <div className="flex gap-3">
                                                    <span className="text-digital-purple font-bold text-xl">A.</span>
                                                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                                        {item.a}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
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
