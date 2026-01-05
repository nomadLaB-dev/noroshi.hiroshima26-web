
import { Check, Heart, Laptop } from "lucide-react";
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
        <div className="grid md:grid-cols-2 gap-8">
            {/* Requirements Column */}
            <div className="space-y-8">
                <div>
                    <h3 className="text-xl font-heading font-bold text-sanfrecce-gold mb-4 flex items-center gap-2">
                        <Check className="w-6 h-6" /> 必須条件
                    </h3>
                    <ul className="space-y-3">
                        {mandatory.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5 mx-auto w-full">
                                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-sanfrecce-gold" />
                                <span className="text-gray-300">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-heading font-bold text-digital-purple mb-4 flex items-center gap-2">
                        <Heart className="w-6 h-6" /> 歓迎条件
                    </h3>
                    <ul className="space-y-3">
                        {welcome.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5 mx-auto w-full">
                                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-digital-purple" />
                                <span className="text-gray-300">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Equipment Column */}
            <div>
                <h3 className="text-xl font-heading font-bold text-custom-white mb-4 flex items-center gap-2">
                    <Laptop className="w-6 h-6" /> 機材について
                </h3>
                <div className="space-y-4">
                    <Card className="bg-black/40 border-white/10">
                        <CardContent className="p-6">
                            <h4 className="font-bold text-white mb-2">ご自身で持参される場合</h4>
                            <p className="text-gray-400 text-sm">{equipment.bring}</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-digital-purple/20 to-black border-digital-purple/50">
                        <CardContent className="p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 bg-sanfrecce-gold/20 text-sanfrecce-gold text-xs font-bold rounded-bl-lg">
                                RECOMMENDED
                            </div>
                            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                最強PC貸出プラン
                                <span className="text-xs bg-digital-purple px-2 py-0.5 rounded text-white">爆速</span>
                            </h4>
                            <p className="text-gray-300 text-sm mb-3">
                                {equipment.rental}
                            </p>
                            <div className="text-xs text-xs text-gray-500">
                                ※所属事業所への申請サポートも行います。
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
