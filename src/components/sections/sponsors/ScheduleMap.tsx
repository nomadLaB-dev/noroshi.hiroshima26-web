import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { SPONSOR_CONTENT } from "@/constants/content";
import { ArrowDown } from "lucide-react";

export function ScheduleMap() {
    const { schedule } = SPONSOR_CONTENT;

    return (
        <Section className="bg-black/80">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-16 text-white border-b border-digital-purple inline-block mx-auto pb-2 px-8">
                {schedule.title}
            </h2>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sanfrecce-purple via-digital-purple to-sanfrecce-gold -translate-x-1/2 hidden md:block" />

                <div className="space-y-12 md:space-y-24">
                    {schedule.steps.map((step, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}>

                            {/* Content Box */}
                            <div className="flex-1 w-full relative group">
                                {/* Connector Dot */}
                                {/* Connector Dot - Removed per request */}
                                {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black border-4 border-digital-purple z-10 hidden md:block group-hover:border-sanfrecce-gold transition-colors duration-300 shadow-[0_0_15px_rgba(138,79,255,0.6)]" /> */}

                                <div className={`
                  bg-white/5 backdrop-blur border border-white/10 p-6 rounded-lg 
                  transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:border-sanfrecce-gold/30
                  ${index % 2 === 0 ? "text-right md:mr-16" : "text-left md:ml-16"}
                `}>
                                    <div className={`flex flex-col gap-2 mb-2 ${index % 2 === 0 ? "items-end" : "items-start"}`}>
                                        <Badge variant="secondary" className="w-fit">{step.duration}</Badge>
                                        <span className="text-4xl font-heading font-bold text-white/20">{step.step}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-sanfrecce-gold mb-2">{step.title}</h3>
                                    <p className="text-gray-300 leading-relaxed text-sm">{step.description}</p>
                                </div>
                            </div>

                            {/* Empty Spacer for alternating layout */}
                            <div className="flex-1 hidden md:block" />

                            {/* Mobile Connector */}
                            <div className="md:hidden flex justify-center">
                                <ArrowDown className="text-gray-600 animate-bounce" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
