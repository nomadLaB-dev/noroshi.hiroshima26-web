import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sanfrecce-purple/20 via-transparent to-transparent pointer-events-none" />

      <h1 className="text-4xl md:text-6xl font-heading font-bold text-center mb-8 drop-shadow-[0_0_15px_rgba(138,79,255,0.5)]">
        NOROSHI.<span className="text-digital-purple">HIROSHIMA</span>
      </h1>

      <p className="text-xl mb-12 text-gray-300">
        AI Driven Development Hackathon
      </p>

      <div className="flex gap-4">
        <Link
          href="/sponsors"
          className="group flex items-center gap-2 px-8 py-4 bg-transparent border border-digital-purple text-white rounded hover:bg-digital-purple hover:shadow-[0_0_20px_rgba(138,79,255,0.4)] transition-all duration-300"
        >
          <span className="font-heading">Sponsors Page</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </main>
  );
}
