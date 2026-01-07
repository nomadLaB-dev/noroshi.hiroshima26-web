
import { PARTICIPANT_CONTENT } from "@/constants/participantData";
import { ChallengeRoadmap } from "./ChallengeRoadmap";
import { Section } from "@/components/ui/Section";

export function ScheduleSection() {
    const { schedule } = PARTICIPANT_CONTENT;

    return (
        <Section className="py-24 bg-[#050510] relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-digital-purple/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-digital-purple font-mono text-sm tracking-[0.3em] uppercase block mb-4">Timeline_Protocol</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        {schedule.title}
                    </h2>
                </div>

                <ChallengeRoadmap steps={schedule.steps} />
            </div>
        </Section>
    );
}
