

import { Trophy, Building2, User, Sparkles } from "lucide-react";
import { PARTICIPANT_CONTENT } from "@/constants/participantData";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export function ChallengeRoute() {
    const { challenges } = PARTICIPANT_CONTENT;

    return (
        <section className="py-32 bg-[#080816] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-digital-purple/10 rounded-full blur-[120px] -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-digital-purple font-mono text-sm tracking-[0.3em] uppercase block mb-4">Select_Your_Path</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        {challenges.title}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20 perspective-1000">
                    {/* Route A */}
                    <div className="group relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-sanfrecce-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl" />
                        <div className="relative h-full bg-[#0D0714]/80 backdrop-blur-sm border border-sanfrecce-gold/30 rounded-xl overflow-hidden p-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Building2 className="w-32 h-32 text-sanfrecce-gold" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2 h-8 bg-sanfrecce-gold" />
                                    <span className="text-sanfrecce-gold font-bold tracking-widest text-lg">ROUTE A</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-sanfrecce-gold transition-colors"> Platinum Challenge</h3>

                                <p className="text-gray-300 mb-8 font-light text-lg leading-relaxed whitespace-pre-wrap">
                                    {challenges.routes[0].description}
                                </p>

                                <div className="inline-flex items-center gap-2 text-sanfrecce-gold bg-sanfrecce-gold/10 px-4 py-3 rounded border border-sanfrecce-gold/20 font-mono">
                                    <Trophy className="w-5 h-5" />
                                    <span className="font-bold">{challenges.routes[0].prize}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Route B */}
                    <div className="group relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-digital-purple/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl" />
                        <div className="relative h-full bg-[#0D0714]/80 backdrop-blur-sm border border-digital-purple/30 rounded-xl overflow-hidden p-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(138,79,255,0.2)]">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <User className="w-32 h-32 text-digital-purple" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2 h-8 bg-digital-purple" />
                                    <span className="text-digital-purple font-bold tracking-widest text-lg">ROUTE B</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-digital-purple transition-colors">Personal Challenge</h3>

                                <p className="text-gray-300 mb-8 font-light text-lg leading-relaxed whitespace-pre-wrap">
                                    {challenges.routes[1].description}
                                </p>

                                <div className="inline-flex items-center gap-2 text-digital-purple bg-digital-purple/10 px-4 py-3 rounded border border-digital-purple/20 font-mono">
                                    <Trophy className="w-5 h-5" />
                                    <span className="font-bold">{challenges.routes[1].prize}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grand Prize */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sanfrecce-gold/10 to-transparent blur-3xl" />
                    <div className="relative bg-[#0A0A0A] border border-sanfrecce-gold/30 rounded-2xl p-8 md:p-12 text-center overflow-hidden group">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]" />

                        <Trophy className="w-16 h-16 text-sanfrecce-gold mx-auto mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.6)] animate-pulse" />

                        {/* <div className="inline-block px-4 py-1 mb-6 border border-sanfrecce-gold/50 text-sanfrecce-gold rounded-full text-sm font-bold tracking-wider bg-sanfrecce-gold/10">
                            SPECIAL REWARD
                        </div> */}

                        <h3 className="text-3xl font-heading font-bold text-white mb-4">Grand Prize</h3>
                        <p className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-sanfrecce-gold to-[#8B7500] font-black tracking-tight drop-shadow-sm whitespace-pre-wrap">
                            {challenges.grandPrize}
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
                            <Sparkles className="w-4 h-4 text-sanfrecce-gold" />
                            <span>Only the best code survives.</span>
                            <Sparkles className="w-4 h-4 text-sanfrecce-gold" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

