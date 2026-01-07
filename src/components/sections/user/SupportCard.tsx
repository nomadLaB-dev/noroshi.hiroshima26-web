
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

interface SupportCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

export function SupportCard({ title, description, icon: Icon }: SupportCardProps) {
    return (
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-custom-white hover:border-digital-purple/50 hover:shadow-[0_0_20px_rgba(138,79,255,0.2)] transition-all duration-300 group">
            <CardHeader className="flex flex-col items-center gap-4 pb-2">
                <div className="p-3 rounded-full bg-digital-purple/10 group-hover:bg-digital-purple/20 transition-colors">
                    <Icon className="w-8 h-8 text-digital-purple group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl font-heading text-center">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-300 text-center leading-relaxed whitespace-pre-wrap">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}
