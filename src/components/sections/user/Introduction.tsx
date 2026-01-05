
import { PARTICIPANT_CONTENT } from "@/constants/participantData";

export function Introduction() {
    const { introduction } = PARTICIPANT_CONTENT;

    return (
        <section className="py-20 bg-black relative">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-white">
                    {introduction.title}
                </h2>
                <div className="prose prose-invert lg:prose-xl mx-auto">
                    <p className="text-gray-300 whitespace-pre-line leading-loose text-lg md:text-xl">
                        {introduction.message}
                    </p>
                </div>
            </div>
        </section>
    );
}
