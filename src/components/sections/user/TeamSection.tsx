
import { PARTICIPANT_CONTENT } from "@/constants/participantData";
import { RoleSelector } from "./RoleSelector";

export function TeamSection() {
    const { team } = PARTICIPANT_CONTENT;

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-digital-purple/10 to-sanfrecce-gold/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        {team.title}
                    </h2>
                    <div className="space-y-4">
                        <p className="text-lg text-gray-300 font-medium">
                            {team.message}
                        </p>
                        <p className="text-gray-400">
                            {team.description}
                        </p>
                    </div>
                </div>

                <RoleSelector />
            </div>
        </section>
    );
}
