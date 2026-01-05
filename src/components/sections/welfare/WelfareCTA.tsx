
import { WELFARE_CONTENT } from "@/constants/welfareData";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function WelfareCTA() {
    const { hero } = WELFARE_CONTENT; // Reuse hero CTA text

    return (
        <section className="py-24 bg-gray-900 text-white text-center">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-10">
                    まずは、お気軽にご相談ください。
                </h2>

                <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                    カリキュラムの詳細、PCレンタル、スタッフの方の関わり方など、<br />
                    オンラインで個別にご説明させていただきます。
                </p>

                <Button
                    size="lg"
                    className="bg-sanfrecce-gold text-black hover:bg-sanfrecce-gold/90 px-12 py-8 text-xl rounded-full font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                    <span className="flex items-center gap-2">
                        {hero.cta}
                        <ArrowRight className="w-6 h-6" />
                    </span>
                </Button>
            </div>
        </section>
    );
}
