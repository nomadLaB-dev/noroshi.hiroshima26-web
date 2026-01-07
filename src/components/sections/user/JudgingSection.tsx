
import { PARTICIPANT_CONTENT } from "@/constants/participantData";
import { Card, CardContent } from "@/components/ui/Card";

export function JudgingSection() {
    const { judging } = PARTICIPANT_CONTENT;

    return (
        <section className="py-24 bg-transparent">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        {judging.title}
                    </h2>
                    <p className="text-lg text-gray-400">
                        {judging.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {judging.criteria.map((item) => (
                        <Card key={item.id} className="bg-white/5 border-white/10 hover:border-digital-purple/50 transition-colors hover:shadow-[0_0_15px_rgba(138,79,255,0.2)]">
                            <CardContent className="p-6 text-center space-y-4 pt-8">
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
