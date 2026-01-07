
import { PARTICIPANT_CONTENT } from "@/constants/participantData";
import { Section } from "@/components/ui/Section";

export function Introduction() {
    const { introduction } = PARTICIPANT_CONTENT;

    return (
        <Section className="py-32 bg-[#050510] relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-digital-purple/50 to-transparent" />

            <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center relative z-10">
                <div className="inline-block mb-6">
                    <span className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase">Mission_Statement</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    {introduction.title}
                </h2>

                <div className="relative">
                    {/* Side lines */}
                    <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-digital-purple/30 to-transparent hidden md:block" />
                    <div className="absolute -right-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-digital-purple/30 to-transparent hidden md:block" />

                    <div className="prose prose-invert lg:prose-xl mx-auto">
                        <p className="text-gray-300 whitespace-pre-wrap leading-loose text-lg md:text-xl font-light">
                            {introduction.message}
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
