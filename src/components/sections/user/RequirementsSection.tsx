
import { PARTICIPANT_CONTENT } from "@/constants/participantData";
import { RequirementList } from "./RequirementList";

export function RequirementsSection() {
    const { requirements } = PARTICIPANT_CONTENT;

    return (
        <section className="py-24 bg-zinc-900 border-y border-white/5">
            <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-white mb-16">
                    {requirements.title}
                </h2>

                <RequirementList
                    mandatory={requirements.mandatory}
                    welcome={requirements.welcome}
                    equipment={requirements.equipment}
                />
            </div>
        </section>
    );
}
