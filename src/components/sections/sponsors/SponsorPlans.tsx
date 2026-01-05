"use client";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SPONSOR_CONTENT } from "@/constants/content";
import { Check, Star } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

export function SponsorPlans() {
    const { plans } = SPONSOR_CONTENT;

    return (
        <Section className="bg-black py-24">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-16 text-white">
                {plans.title}
            </h2>

            {/* Killer Message */}
            {plans.message && (
                <div className="max-w-4xl mx-auto mb-16 p-1 bg-gradient-to-r from-sanfrecce-purple via-sanfrecce-gold to-digital-purple rounded-xl">
                    <div className="bg-black/90 rounded-lg p-8 text-center">
                        <p className="text-white text-lg md:text-xl font-bold leading-relaxed whitespace-pre-line">
                            {plans.message}
                        </p>
                    </div>
                </div>
            )}

            {/* Tabbed Interface for Compactness - Custom implementation to avoid big deps for now */}
            <div className="max-w-4xl mx-auto">
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
            <div className="flex p-1 bg-white/5 rounded-xl border border-white/10 mb-8 overflow-x-auto">
                {plans.map((plan) => (
                    <button
                        key={plan.rank}
                        onClick={() => setActiveTab(plan.rank)}
                        className={cn(
                            "flex-1 py-3 px-6 rounded-lg text-sm font-bold transition-all whitespace-nowrap",
                            activeTab === plan.rank
                                ? "bg-digital-purple text-white shadow-[0_0_15px_rgba(138,79,255,0.4)]"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        {plan.rank}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="relative group">
                {activePlan.rank === "Platinum" && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-sanfrecce-purple via-digital-purple to-sanfrecce-gold rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                )}

                <Card className="p-8 border-white/10 bg-white/5 backdrop-blur-md relative z-10">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Left: Info */}
                        <div className="md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6 w-full">
                            <Badge variant={activePlan.rank === "Platinum" ? "secondary" : "outline"} className="mb-4">
                                {activePlan.limit}
                            </Badge>
                            <h3 className={`font-heading text-3xl font-bold mb-2 ${activePlan.rank === "Platinum" ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-gold-400 text-white" :
                                activePlan.rank === "Gold" ? "text-sanfrecce-gold" : "text-gray-300"
                                }`}>
                                {activePlan.name}
                            </h3>
                            <div className="text-4xl font-bold text-white mt-4">
                                {activePlan.price}
                            </div>
                            <p className="text-digital-purple mt-2 font-bold text-sm">
                                {activePlan.concept}
                            </p>
                            <div className="mt-8">
                                <Button className="w-full" variant={activePlan.rank === "Platinum" ? "secondary" : "primary"}>
                                    申し込む
                                </Button>
                            </div>
                        </div>

                        {/* Right: Benefits */}
                        <div className="md:w-2/3 space-y-6 w-full max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                            {activePlan.benefits.map((benefit: any, idx: number) => (
                                <div key={idx} className="group/item">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 bg-sanfrecce-purple/20 p-1 rounded-full flex-shrink-0">
                                            {activePlan.rank === "Platinum" ? <Star className="w-4 h-4 text-sanfrecce-gold" fill="currentColor" /> : <Check className="w-4 h-4 text-digital-purple" />}
                                        </div>
                                        <div>
                                            <strong className="text-white block mb-1 group-hover/item:text-sanfrecce-gold transition-colors">{benefit.title}</strong>
                                            {benefit.text && <p className="text-gray-400 text-sm leading-relaxed mb-2">{benefit.text}</p>}
                                            {benefit.value && (
                                                <div className="bg-digital-purple/10 border-l-2 border-digital-purple pl-3 py-1 mt-1 text-xs text-digital-purple italic">
                                                    💡 {benefit.value}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
