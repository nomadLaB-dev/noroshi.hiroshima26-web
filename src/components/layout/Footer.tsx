import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full py-12 bg-black border-t border-white/10">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">
                    NOROSHI.<span className="text-digital-purple">HIROSHIMA</span>
                </h2>

                <p className="text-gray-400 text-sm mb-8">
                    AI Driven Development Hackathon<br />
                    Hiroshima, Japan
                </p>

                <div className="flex justify-center gap-6 mb-8 text-sm text-gray-400">
                    <Link href="/terms" className="hover:text-sanfrecce-gold transition-colors">
                        参加規約
                    </Link>
                    <span className="text-gray-700">|</span>
                    <Link href="/privacy" className="hover:text-sanfrecce-gold transition-colors pointer-events-none opacity-50">
                        プライバシーポリシー
                    </Link>
                </div>

                <div className="text-xs text-gray-600">
                    © {new Date().getFullYear()} NOROSHI.HIROSHIMA Execution Committee. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
