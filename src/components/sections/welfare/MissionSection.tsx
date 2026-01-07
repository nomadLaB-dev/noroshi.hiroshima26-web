
import { WELFARE_CONTENT } from "@/constants/welfareData";
import { Card, CardContent } from "@/components/ui/Card";

export function MissionSection() {
    const { mission } = WELFARE_CONTENT;

    return (
        <section className="py-24 bg-transparent text-white">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-sanfrecce-purple">
                        {mission.title}
                    </h2>
                    <p className="text-lg text-gray-300">
                        {mission.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {mission.points.map((point, index) => {
                        const Icon = point.icon;
                        return (
                            <Card key={index} className="bg-white/5 border-white/10 hover:border-sanfrecce-purple/50 shadow-none hover:shadow-[0_0_20px_rgba(138,79,255,0.2)] transition-all duration-300 group">
                                <CardContent className="p-8 flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-sanfrecce-purple/10 text-sanfrecce-purple group-hover:bg-sanfrecce-purple/20 transition-colors">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-sanfrecce-purple transition-colors">
                                            {point.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {point.text}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
