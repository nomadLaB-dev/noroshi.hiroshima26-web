import Link from "next/link";
import { Button } from "@/components/ui/Button"; // Adjust path if needed

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-heading font-bold text-xl tracking-wider">
                    NOROSHI.<span className="text-digital-purple">HIROSHIMA</span>
                </Link>

                {/* Nav (Desktop) */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium hover:text-digital-purple transition-colors">
                        TOP
                    </Link>
                    <Link href="/sponsors" className="text-sm font-medium hover:text-digital-purple transition-colors">
                        SPONSORS
                    </Link>
                    <Link href="/welfare" className="text-sm font-medium hover:text-digital-purple transition-colors">
                        WELFARE
                    </Link>
                </nav>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    {/* Mobile menu placeholder if needed later */}
                    <Button variant="outline" size="sm" className="hidden md:inline-flex">
                        Partner Entry
                    </Button>
                </div>
            </div>
        </header>
    );
}
