import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SPONSOR_CONTENT } from "@/constants/content";
import Link from "next/link";

export function OfficialPartners() {
    const { partners, cta } = SPONSOR_CONTENT;

    return (
        <Section fullWidth className="bg-white text-black py-24">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Partners List */}
                <div className="text-center mb-24">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-4">
                        {partners.title}
                    </h2>
                    <p className="text-gray-600 mb-12">
                        {partners.subtitle}
                    </p>

                    <div className="mb-12">
                        <h3 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-widest">Platinum Partners</h3>
                        <div className="flex flex-wrap justify-center gap-8">
                            {partners.platinum.map((partner) => (
                                <a
                                    key={partner.name}
                                    href={partner.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-64 h-32 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors grayscale hover:grayscale-0"
                                >
                                    <span className="font-bold text-xl text-gray-800">{partner.name}</span>
                                    {/* Ideally replace text with Image tag using partner.logo */}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-widest">Gold / Silver Partners</h3>
                        <div className="p-8 bg-gray-50 border border-dashed border-gray-300 rounded-lg max-w-2xl mx-auto">
                            <span className="text-gray-400 font-bold text-lg">TBA</span>
                            <p className="text-sm text-gray-500 mt-2">More partners joining soon...</p>
                        </div>
                    </div>
                </div>

                {/* Final CTA Area (Dark again for contrast) */}
                <div className="bg-black rounded-3xl p-12 text-center text-white relative overflow-hidden">
                    {/* Decorative Glint */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-sanfrecce-purple/50 blur-[100px] rounded-full" />

                    <div className="relative z-10">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
                            {cta.title}
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 whitespace-pre-line">
                            {cta.text}
                        </p>
                        <Button size="lg" variant="secondary" className="font-bold px-12">
                            パートナーに応募する
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
