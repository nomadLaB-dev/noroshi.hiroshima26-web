
import { cn } from "@/lib/utils";

interface Step {
    step: string;
    duration?: string;
    title: string;
    description: string;
}

interface ChallengeRoadmapProps {
    steps: Step[];
}

export function ChallengeRoadmap({ steps }: ChallengeRoadmapProps) {
    return (
        <div className="relative py-10">
            {/* Central Line (Desktop) / Left Line (Mobile) */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-digital-purple/0 via-digital-purple/50 to-digital-purple/0" />

            <div className="space-y-12">
                {steps.map((step, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className={cn(
                                "relative flex items-center md:justify-between",
                                isEven ? "flex-row" : "flex-row md:flex-row-reverse"
                            )}
                        >
                            {/* Spacer for Timeline Layout */}
                            <div className="hidden md:block w-1/2" />

                            {/* Timeline Node */}
                            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-digital-purple shadow-[0_0_10px_rgba(138,79,255,0.8)] z-10" />

                            {/* Content Card */}
                            <div className={cn(
                                "w-full md:w-[calc(50%-40px)] ml-12 md:ml-0",
                                isEven ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"
                            )}>
                                <div className="bg-black/40 border border-white/10 p-6 rounded-xl hover:border-digital-purple/50 transition-colors duration-300">
                                    <div className={cn(
                                        "flex flex-col gap-1 mb-2",
                                        isEven ? "md:items-end" : "md:items-start"
                                    )}>
                                        <span className="text-digital-purple font-heading font-bold text-lg">
                                            {step.step}
                                        </span>
                                        {step.duration && (
                                            <span className="text-xs text-sanfrecce-gold uppercase tracking-wider font-bold">
                                                {step.duration}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
