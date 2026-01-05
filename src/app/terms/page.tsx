import { TERMS_CONTENT } from "@/constants/terms";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export default function TermsPage() {
    const { title, lastUpdated, organizer, intro, sections, contact } = TERMS_CONTENT;

    return (
        <div className="min-h-screen bg-black text-white selection:bg-digital-purple selection:text-white font-body">
            <Header />

            <main className="pt-20">
                <Section className="py-24 max-w-4xl mx-auto">
                    {/* Header Area */}
                    <div className="mb-16 text-center">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            {title}
                        </h1>
                        <div className="flex flex-col items-center gap-4">
                            <Badge variant="outline" className="text-gray-400 border-gray-700">
                                {lastUpdated}
                            </Badge>
                            <p className="text-sm md:text-base text-gray-300 font-bold">
                                {organizer}
                            </p>
                        </div>
                    </div>

                    {/* Intro */}
                    {intro && (
                        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-12 backdrop-blur-sm">
                            <p className="text-gray-300 leading-relaxed">
                                {intro}
                            </p>
                        </div>
                    )}

                    {/* Terms Content */}
                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <div key={index} className="scroll-mt-24" id={`section-${index + 1}`}>
                                <h2 className="font-heading text-2xl font-bold text-sanfrecce-gold mb-6 border-b border-white/10 pb-2 inline-block">
                                    {section.title}
                                </h2>
                                <div className="space-y-4">
                                    {section.content.map((paragraph, pIndex) => (
                                        <div key={pIndex} className="flex gap-4">
                                            <div className="min-w-1.5 h-1.5 mt-2.5 rounded-full bg-digital-purple" />
                                            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                                {paragraph}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact */}
                    <div className="mt-24 pt-12 border-t border-white/10 text-center">
                        <p className="text-gray-400 mb-2">{contact.text}</p>
                        <a href={`mailto:${contact.email}`} className="text-digital-purple hover:text-sanfrecce-gold transition-colors font-bold">
                            {contact.email}
                        </a>
                    </div>

                </Section>
            </main>

            <Footer />
        </div>
    );
}
