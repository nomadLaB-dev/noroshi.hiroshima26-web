
import { WELFARE_CONTENT } from "@/constants/welfareData";

export function WelfareMessage() {
    const { message } = WELFARE_CONTENT;

    return (
        <section className="py-24 bg-transparent">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
                <div className="w-16 h-1 bg-sanfrecce-purple mx-auto mb-8 shadow-[0_0_10px_rgba(138,79,255,0.5)]" />

                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-white">
                    {message.title}
                </h2>

                <p className="text-lg md:text-xl text-gray-300 leading-looose whitespace-pre-line">
                    {message.text}
                </p>

                <div className="mt-12 flex items-center justify-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 hover:opacity-100">
                    {/* Placeholder for logos if needed, using text for now */}
                    <span className="font-bold text-gray-500 hover:text-white transition-colors">Nomad LaB</span>
                    <span className="w-px h-6 bg-gray-700" />
                    <span className="font-bold text-gray-500 hover:text-white transition-colors">CodeFox</span>
                </div>
            </div>
        </section>
    );
}
