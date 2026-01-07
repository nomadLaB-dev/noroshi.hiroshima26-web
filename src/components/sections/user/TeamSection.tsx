
import { PARTICIPANT_CONTENT } from "@/constants/participantData";
import { RoleSelector } from "./RoleSelector";
import { Section } from "@/components/ui/Section";

export function TeamSection() {
    const { team } = PARTICIPANT_CONTENT;

    return (
        <Section className="py-24 bg-[#050510] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-digital-purple/5 to-sanfrecce-gold/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase block mb-4">Unit_Composition</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                        {team.title}
                    </h2>
                    <div className="space-y-6">
                        <p className="text-xl text-white font-medium drop-shadow-md whitespace-pre-wrap">
                            {team.message}
                        </p>
                        <p className="text-gray-400 font-light leading-relaxed whitespace-pre-wrap">
                            {team.description}
                        </p>
                    </div>
                </div>

                <RoleSelector />
            </div>
        </Section>
    );
}
