
import { WELFARE_CONTENT } from "@/constants/welfareData";
import { Card, CardContent } from "@/components/ui/Card";
import { Check } from "lucide-react";

export function BenefitSection() {
    const { benefits } = WELFARE_CONTENT;

    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-16 text-gray-900">
                    {benefits.title}
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                    {benefits.items.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-sanfrecce-gold/50 hover:shadow-lg hover:shadow-sanfrecce-gold/10 transition-all duration-300">
                                <div className="w-16 h-16 rounded-full bg-sanfrecce-gold/10 flex items-center justify-center text-sanfrecce-gold mb-6">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <span className="inline-block bg-digital-purple/10 text-digital-purple px-4 py-2 rounded-lg font-bold text-sm">
                        {benefits.consulting}
                    </span>
                </div>
            </div>
        </section>
    );
}
