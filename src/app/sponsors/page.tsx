import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SponsorHero } from "@/components/sections/sponsors/SponsorHero";
import { WhatIs } from "@/components/sections/sponsors/WhatIs";
import { NoroshiVision } from "@/components/sections/sponsors/NoroshiVision";
import { ScheduleMap } from "@/components/sections/sponsors/ScheduleMap";
import { PocChallenges } from "@/components/sections/sponsors/PocChallenges";
import { SponsorPlans } from "@/components/sections/sponsors/SponsorPlans";
import { OfficialPartners } from "@/components/sections/sponsors/OfficialPartners";

export default function SponsorsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-16">
                <SponsorHero />
                <WhatIs />
                <NoroshiVision />
                <ScheduleMap />
                <PocChallenges />
                <SponsorPlans />
                <OfficialPartners />
            </main>
            <Footer />
        </>
    );
}
