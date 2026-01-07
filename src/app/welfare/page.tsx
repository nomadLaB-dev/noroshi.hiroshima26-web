import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WelfareHero } from "@/components/sections/welfare/WelfareHero";
import { MissionSection } from "@/components/sections/welfare/MissionSection";
import { BenefitSection } from "@/components/sections/welfare/BenefitSection";
import { StaffSupportSection } from "@/components/sections/welfare/StaffSupportSection";
import { EquipmentSection } from "@/components/sections/welfare/EquipmentSection";
import { WelfareMessage } from "@/components/sections/welfare/WelfareMessage";
import { WelfareCTA } from "@/components/sections/welfare/WelfareCTA";

export default function WelfarePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-16">
                <WelfareHero />
                <MissionSection />
                <BenefitSection />
                <StaffSupportSection />
                <EquipmentSection />
                <WelfareMessage />
                <WelfareCTA />
            </main>
            <Footer />
        </>
    );
}
