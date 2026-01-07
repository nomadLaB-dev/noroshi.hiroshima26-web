

import { Check, Heart, Laptop, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

interface RequirementsProps {
    mandatory: string[];
    welcome: string[];
    equipment: {
        bring: string;
        rental: string;
    };
}

export function RequirementList({ mandatory, welcome, equipment }: RequirementsProps) {
    return (
        <div className="grid md:grid-cols-2 gap-12">
            {/* Requirements Column */}
            <div className="space-y-10">
                <div>
                    <h3 className="text-xl font-heading font-bold text-sanfrecce-gold mb-6 flex items-center gap-3 border-b border-sanfrecce-gold/20 pb-2">
                        <Check className="w-5 h-5" />
                        <span className="tracking-wider">MANDATORY</span>
                        <span className="text-xs text-gray-500 font-bold ml-auto">必須条件</span>
                    </h3>
                    <ul className="space-y-4">
                        {mandatory.map((item, i) => (
                            <li key={i} className="group flex items-start gap-4 bg-[#0D0714] p-4 rounded-lg border border-white/5 hover:border-sanfrecce-gold/30 transition-colors duration-300 relative overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-sanfrecce-gold/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-sm bg-sanfrecce-gold/50 rotate-45 group-hover:bg-sanfrecce-gold transition-colors" />
                                <span className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors whitespace-pre-wrap">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-heading font-bold text-digital-purple mb-6 flex items-center gap-3 border-b border-digital-purple/20 pb-2">
                        <Heart className="w-5 h-5" />
                        <span className="tracking-wider">WELCOME</span>
                        <span className="text-xs text-gray-500 font-bold ml-auto">歓迎条件</span>
                    </h3>
                    <ul className="space-y-4">
                        {welcome.map((item, i) => (
                            <li key={i} className="group flex items-start gap-4 bg-[#0D0714] p-4 rounded-lg border border-white/5 hover:border-digital-purple/30 transition-colors duration-300 relative overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-digital-purple/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-sm bg-digital-purple/50 rotate-45 group-hover:bg-digital-purple transition-colors" />
                                <span className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors whitespace-pre-wrap">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Equipment Column */}
            <div>
                <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-2">
                    <Laptop className="w-5 h-5 text-cyan-400" />
                    <span className="tracking-wider">EQUIPMENT</span>
                    <span className="text-xs text-gray-500 font-bold ml-auto">機材について</span>
                </h3>
                <div className="space-y-6">
                    <div className="bg-[#0D0714] border border-white/10 rounded-xl p-6 relative group overflow-hidden hover:border-white/20 transition-colors">
                        <div className="absolute top-0 right-0 p-3 opacity-10">
                            <Laptop className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="font-bold text-white mb-3 text-lg">Bring Your Own Device</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{equipment.bring}</p>
                    </div>

                    <div className="relative group rounded-xl p-[1px] bg-gradient-to-br from-digital-purple to-cyan-400">
                        <div className="absolute inset-0 bg-digital-purple/20 blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
                        <div className="bg-[#080816] rounded-xl p-6 relative h-full overflow-hidden">
                            {/* Scanline */}
                            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-10" />

                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <h4 className="font-heading font-bold text-white text-lg flex items-center gap-2">
                                    RENTAL_PLAN
                                    <Zap className="w-4 h-4 text-sanfrecce-gold fill-sanfrecce-gold animate-pulse" />
                                </h4>
                                <span className="bg-digital-purple text-white text-[10px] font-bold px-2 py-1 rounded tracking-widest border border-white/20">
                                    RECOMMENDED
                                </span>
                            </div>

                            <p className="text-white font-bold mb-2">最強PC貸出プラン <span className="text-cyan-400 text-xs ml-2 font-mono">// HIGH_PERFORMANCE</span></p>

                            <p className="text-gray-300 text-sm mb-4 leading-relaxed font-light whitespace-pre-wrap">
                                {equipment.rental}
                            </p>

                            <div className="text-[10px] font-mono text-gray-500 border-t border-white/10 pt-3">
                                * SUPPORT_INCLUDED: APPLICATION_ASSISTANCE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

