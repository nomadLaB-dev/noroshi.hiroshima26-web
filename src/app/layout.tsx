import type { Metadata } from "next";
import { Orbitron, Noto_Sans_JP } from "next/font/google"; // Updated font imports
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NOROSHI.HIROSHIMA | AI駆動開発で、狼煙を上げろ。",
  description: "広島から世界を変える。AI駆動開発ハッカソン。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${orbitron.variable} ${noto.variable} font-body antialiased bg-[#0D0714] text-white selection:bg-digital-purple selection:text-white`}>
        {/* Global Fixed Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Base Grad */}
          <div className="absolute inset-0 bg-[#0D0714]" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

          {/* Ambient Glows */}
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-digital-purple/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-sanfrecce-gold/5 rounded-full blur-[120px]" />
        </div>

        {children}
      </body>
    </html>
  );
}
