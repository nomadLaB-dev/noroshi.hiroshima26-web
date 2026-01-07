
import { WELFARE_CONTENT } from "@/constants/welfareData";
import { Laptop, ChevronDown } from "lucide-react";

export function EquipmentSection() {
    const { equipment } = WELFARE_CONTENT;

    return (
        <section className="py-24 bg-transparent text-white">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left: Spec Card */}
                    <div>
                        <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 md:p-12 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-3 bg-sanfrecce-gold text-black font-bold text-xs uppercase tracking-wider">
                                High Spec
                            </div>

                            <Laptop className="w-16 h-16 text-sanfrecce-gold mb-6 group-hover:scale-110 transition-transform duration-500" />

                            <h2 className="text-3xl font-heading font-bold mb-4">
                                {equipment.title}
                            </h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                {equipment.description}
                            </p>

                            <div className="space-y-4 border-t border-white/10 pt-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Spec</span>
                                    <span className="font-bold">{equipment.specs}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Price</span>
                                    <span className="text-2xl font-bold text-sanfrecce-gold">{equipment.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Steps */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sanfrecce-purple text-white text-sm font-bold shadow-[0_0_15px_rgba(138,79,255,0.4)]">
                                flow
                            </span>
                            導入までの流れ
                        </h3>

                        <div className="space-y-6">
                            {equipment.steps.map((step, index) => (
                                <div key={index} className="relative pl-8">
                                    {/* Line */}
                                    {index !== equipment.steps.length - 1 && (
                                        <div className="absolute left-[11px] top-6 bottom-[-24px] w-0.5 bg-white/20" />
                                    )}

                                    {/* Dot */}
                                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-black bg-sanfrecce-purple shadow-[0_0_10px_rgba(138,79,255,0.4)]" />

                                    <p className="text-lg font-medium text-gray-300 pt-1">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
