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
      <body className={`${orbitron.variable} ${noto.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
