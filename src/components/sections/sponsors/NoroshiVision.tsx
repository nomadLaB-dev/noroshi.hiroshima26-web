import { Section } from "@/components/ui/Section";
import { SPONSOR_CONTENT } from "@/constants/content";
import { cn } from "@/lib/utils";

export function NoroshiVision() {
    const { noroshi } = SPONSOR_CONTENT;

    return (
        <Section className="overflow-hidden py-24">
            <div className="grid lg:grid-cols-12 gap-12">
                {/* Left: Text Context */}
                <div className="lg:col-span-4 space-y-6">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold">
                        NOROSHI.<br />
                        <span className="text-digital-purple">HIROSHIMA</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-sanfrecce-purple to-transparent" />
                    <p className="text-gray-300 leading-relaxed text-lg">
                        {noroshi.description}
                    </p>
                </div>

                {/* Right: Slanted Cards Interaction */}
                <div className="lg:col-span-8 relative min-h-[400px]">
                    {/* Container for the specific slanted layout */}
                    <div className="flex flex-col md:flex-row gap-4 h-full">
                        {noroshi.cards.map((card, index) => (
                            <div
                                key={card.id}
                                className={cn(
                                    "group relative flex-1 min-h-[100px] md:min-h-[400px] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 ease-out cursor-pointer hover:flex-[3] hover:bg-sanfrecce-purple/20",
                                    "md:-skew-x-6 md:hover:skew-x-0" // The slant effect, resets on hover for readability
                                )}
                            >
                                {/* Content Container - Counter-skewing content so it's readable if parent is skewed? 
                    Actually skewing the parent skews content. Usually we skew the container and -skew contents.
                    Simple approach: Use the skew transition for the style but kept content relatively simple.
                */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end md:skew-x-6 md:group-hover:skew-x-0 transition-all duration-500">
                                    {/* Number Background */}
                                    <span className="absolute top-0 right-0 p-4 text-6xl font-heading font-bold text-white/5 group-hover:text-sanfrecce-gold/20 transition-colors duration-500">
                                        0{card.id}
                                    </span>

                                    <h3 className="font-bold text-lg md:text-xl text-white mb-2 group-hover:text-sanfrecce-gold transition-colors line-clamp-2 group-hover:line-clamp-none">
                                        {card.title}
                                    </h3>

                                    {/* Text reveals on hover (or flex expand) */}
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0 h-0 group-hover:h-auto overflow-hidden">
                                        <ul className="list-disc pl-4 space-y-1">
                                            {card.points && card.points.map((point, i) => (
                                                <li key={i} className="text-sm text-gray-300 leading-snug">
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
