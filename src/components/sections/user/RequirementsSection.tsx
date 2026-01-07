
import { PARTICIPANT_CONTENT } from "@/constants/participantData";
import { RequirementList } from "./RequirementList";
import { Section } from "@/components/ui/Section";

export function RequirementsSection() {
    const { requirements } = PARTICIPANT_CONTENT;

    return (
        <Section className="py-32 bg-[#080816] relative border-y border-white/5">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-digital-purple/5 blur-[100px]" />

            <div className="container px-4 md:px-6 max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-gray-500 font-mono text-sm tracking-[0.3em] uppercase block mb-4">System_Requirements</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        {requirements.title}
                    </h2>
                </div>

                <RequirementList
                    mandatory={requirements.mandatory}
                    welcome={requirements.welcome}
                    equipment={requirements.equipment}
                />
            </div>
        </Section>
    );
}
