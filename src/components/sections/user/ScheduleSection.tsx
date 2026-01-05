
import { PARTICIPANT_CONTENT } from "@/constants/participantData";
import { ChallengeRoadmap } from "./ChallengeRoadmap";

export function ScheduleSection() {
    const { schedule } = PARTICIPANT_CONTENT;

    return (
        <section className="py-24 bg-black relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-digital-purple/20 via-black to-black" />

            <div className="container px-4 md:px-6 relative z-10 max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-white mb-6">
                    {schedule.title}
                </h2>

                <ChallengeRoadmap steps={schedule.steps} />
            </div>
        </section>
    );
}
