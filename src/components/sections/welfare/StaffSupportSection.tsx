
import { WELFARE_CONTENT } from "@/constants/welfareData";
import { CheckCircle2 } from "lucide-react";

export function StaffSupportSection() {
    const { staffSupport } = WELFARE_CONTENT;

    return (
        <section className="py-24 bg-sanfrecce-purple/5 border-y border-sanfrecce-purple/10">
            <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-gray-900">
                        {staffSupport.title}
                    </h2>
                    <p className="text-lg text-gray-600 font-medium">
                        {staffSupport.subtitle}
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                    <div className="grid md:grid-cols-1 gap-8">
                        {staffSupport.features.map((feature, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <div className="mt-1 flex-shrink-0 text-sanfrecce-purple">
                                    <CheckCircle2 className="w-6 h-6" fill="currentColor" className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
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
