import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SPONSOR_CONTENT } from "@/constants/content";
import { Database, FileText, Bot } from "lucide-react";

export function PocChallenges() {
    const { poc } = SPONSOR_CONTENT;

    const icons = {
        1: Database,
        2: FileText,
        3: Bot,
    };

    return (
        <Section className="bg-gradient-to-b from-black to-sanfrecce-purple/10">
            <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                    POC CHALLENGES
                </h2>
                <p className="text-sanfrecce-gold tracking-wide">
                    {poc.subtitle}
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {poc.cases.map((item) => {
                    const Icon = icons[item.id as keyof typeof icons];
                    return (
                        <Card key={item.id} hoverEffect className="group border-digital-purple/20 bg-black/40 p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-digital-purple transition-colors">
                                    <Icon className="w-6 h-6 text-digital-purple" />
                                </div>
                                <Badge variant="outline" className="border-digital-purple text-digital-purple">
                                    {item.lang}
                                </Badge>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sanfrecce-gold transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>

                            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-gray-500">
                                <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded">Success</span>
                                <span>ROI Verified</span>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </Section>
    );
}
