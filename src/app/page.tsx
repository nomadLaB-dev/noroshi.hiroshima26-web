import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/user/Hero";
import { Introduction } from "@/components/sections/user/Introduction";
import { SupportSection } from "@/components/sections/user/SupportSection";
import { ChallengeRoute } from "@/components/sections/user/ChallengeRoute";
import { TeamSection } from "@/components/sections/user/TeamSection";
import { RequirementsSection } from "@/components/sections/user/RequirementsSection";
import { ScheduleSection } from "@/components/sections/user/ScheduleSection";
import { JudgingSection } from "@/components/sections/user/JudgingSection";
import { FAQSection } from "@/components/sections/user/FAQSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <Hero />
        <Introduction />
        <SupportSection />
        <ChallengeRoute />
        <TeamSection />
        <RequirementsSection />
        <ScheduleSection />
        <JudgingSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
