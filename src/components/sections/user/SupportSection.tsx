
import { PARTICIPANT_CONTENT } from "@/constants/participantData";
import { SupportCard } from "./SupportCard";

export function SupportSection() {
    const { support } = PARTICIPANT_CONTENT;

    return (
        <section className="py-24 bg-gradient-to-b from-transparent to-black/40 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-digital-purple/5 -skew-x-12 blur-3xl" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        {support.title}
                    </h2>
                    <p className="text-lg text-gray-400 whitespace-pre-wrap">
                        {support.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {support.items.map((item) => (
                        <SupportCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
