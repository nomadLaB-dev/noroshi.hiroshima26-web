import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { SPONSOR_CONTENT } from "@/constants/content";
import { Zap, Rocket, Users } from "lucide-react";

export function WhatIs() {
    const { whatIs } = SPONSOR_CONTENT;

    const icons = {
        "01": Zap,
        "02": Rocket,
        "03": Users,
    };

    return (
        <Section className="bg-black/40">
            <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sanfrecce-gold to-yellow-500">
                    {whatIs.title}
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
                    {whatIs.description}
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {whatIs.cards.map((card) => {
                    const Icon = icons[card.id as keyof typeof icons] || Zap;
                    return (
                        <Card key={card.id} hoverEffect className="group p-6">
                            <div className="flex flex-col h-full bg-gradient-to-b from-white/5 to-transparent">
                                <div className="mb-4 p-3 bg-sanfrecce-purple/20 w-fit rounded-lg group-hover:bg-sanfrecce-purple/40 transition-colors border border-sanfrecce-purple/30">
                                    <Icon className="w-8 h-8 text-digital-purple group-hover:text-white transition-colors" />
                                </div>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-heading font-bold text-white/10 group-hover:text-sanfrecce-gold/20 transition-colors">
                                        {card.id}
                                    </span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-sanfrecce-gold transition-colors">
                                        {card.title}
                                    </h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mt-auto">
                                    {card.text}
                                </p>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </Section>
    );
}
