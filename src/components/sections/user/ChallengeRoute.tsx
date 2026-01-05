
import { Trophy, Building2, User } from "lucide-react";
import { PARTICIPANT_CONTENT } from "@/constants/participantData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export function ChallengeRoute() {
    const { challenges } = PARTICIPANT_CONTENT;

    return (
        <section className="py-24 bg-zinc-900 relative">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-white mb-16">
                    {challenges.title}
                </h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {/* Route A */}
                    <Card className="bg-gradient-to-br from-zinc-800 to-black border-l-4 border-l-sanfrecce-gold border-y-zinc-700 border-r-zinc-700 overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Building2 className="w-40 h-40 text-sanfrecce-gold" />
                        </div>
                        <CardHeader>
                            <div className="text-sanfrecce-gold font-bold tracking-wider mb-2">ROUTE A</div>
                            <CardTitle className="text-2xl font-bold text-white">Platinum Challenge</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-gray-300 mb-6 font-medium">
                                {challenges.routes[0].description}
                            </p>
                            <div className="flex items-center gap-2 text-sanfrecce-gold bg-sanfrecce-gold/10 px-4 py-2 rounded-lg w-fit">
                                <Trophy className="w-5 h-5" />
                                <span className="font-bold">{challenges.routes[0].prize}</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Route B */}
                    <Card className="bg-gradient-to-br from-zinc-800 to-black border-l-4 border-l-digital-purple border-y-zinc-700 border-r-zinc-700 overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <User className="w-40 h-40 text-digital-purple" />
                        </div>
                        <CardHeader>
                            <div className="text-digital-purple font-bold tracking-wider mb-2">ROUTE B</div>
                            <CardTitle className="text-2xl font-bold text-white">Personal Challenge</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-gray-300 mb-6 font-medium">
                                {challenges.routes[1].description}
                            </p>
                            <div className="flex items-center gap-2 text-digital-purple bg-digital-purple/10 px-4 py-2 rounded-lg w-fit">
                                <Trophy className="w-5 h-5" />
                                <span className="font-bold">{challenges.routes[1].prize}</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Grand Prize */}
                <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-transparent via-yellow-900/20 to-transparent p-8 rounded-2xl border border-yellow-500/20">
                    <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold text-white mb-2">Grand Prize</h3>
                    <p className="text-xl text-yellow-500 font-bold">
                        {challenges.grandPrize}
                    </p>
                </div>
            </div>
        </section>
    );
}
