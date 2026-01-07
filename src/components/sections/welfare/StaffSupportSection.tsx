
import { WELFARE_CONTENT } from "@/constants/welfareData";
import { CheckCircle2 } from "lucide-react";

export function StaffSupportSection() {
    const { staffSupport } = WELFARE_CONTENT;

    return (
        <section className="py-24 bg-sanfrecce-purple/5 border-y border-white/5">
            <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">
                        {staffSupport.title}
                    </h2>
                    <p className="text-lg text-gray-400 font-medium">
                        {staffSupport.subtitle}
                    </p>
                </div>

                <div className="bg-white/5 rounded-2xl shadow-xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
                    <div className="grid md:grid-cols-1 gap-8">
                        {staffSupport.features.map((feature, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <div className="mt-1 flex-shrink-0 text-sanfrecce-purple relative">
                                    <div className="absolute inset-0 bg-sanfrecce-purple/20 blur-lg rounded-full" />
                                    <CheckCircle2 className="w-6 h-6 text-sanfrecce-purple relative z-10" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {feature.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
