
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
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-digital-purple/0 via-cyan-500/30 to-digital-purple/0" />

            <div className="space-y-16">
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
                            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                                <div className="w-8 h-8 rounded bg-[#080816] border border-cyan-400 rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                                    <div className="w-2 h-2 bg-cyan-400" />
                                </div>
                                {/* Connecting line to card */}
                                <div className={cn(
                                    "absolute top-1/2 -translate-y-1/2 w-12 h-[1px] bg-cyan-500/50 hidden md:block",
                                    isEven ? "left-full" : "right-full"
                                )} />
                            </div>

                            {/* Content Card */}
                            <div className={cn(
                                "w-full md:w-[calc(50%-60px)] ml-16 md:ml-0 group",
                                isEven ? "md:mr-auto" : "md:ml-auto"
                            )}>
                                {/* Cyberpunk Card Container */}
                                <div className="relative transition-all duration-300 clip-path-cyberpunk p-[1px] bg-[#0F0F20] border border-white/5 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                                    {/* Corner Decorations */}
                                    <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-white/10 group-hover:border-cyan-400 transition-colors duration-300" />
                                    <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-white/10 group-hover:border-digital-purple transition-colors duration-300" />

                                    {/* Inner Content */}
                                    <div className="relative bg-[#0B0B15] p-6 clip-path-cyberpunk-inner">
                                        {/* Header Row */}
                                        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4 group-hover:border-cyan-500/20 transition-colors">
                                            {/* Duration Pill */}
                                            {step.duration && (
                                                <span className="inline-block px-3 py-1 rounded-full border border-digital-purple/50 bg-digital-purple/10 text-digital-purple text-xs font-mono font-bold tracking-wider shadow-[0_0_10px_rgba(138,79,255,0.2)]">
                                                    {step.duration}
                                                </span>
                                            )}
                                            {/* Tech Label */}
                                            <div className="flex items-center gap-2 text-xs font-mono text-cyan-500/50 group-hover:text-cyan-400 transition-colors">
                                                <div className="w-4 h-4 rounded-sm border border-current flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-current opacity-50" />
                                                </div>
                                                NODE_0{index + 1}
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-wrap group-hover:text-gray-300 transition-colors">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Background Decoration */}
                                        <div className="absolute bottom-4 right-4 text-[40px] font-black text-white/[0.02] font-heading select-none pointer-events-none group-hover:text-cyan-400/[0.05] transition-colors">
                                            0{index + 1}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
