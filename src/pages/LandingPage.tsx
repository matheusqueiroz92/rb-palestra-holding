import { useRevealOnScroll } from "@/presentation/hooks/useRevealOnScroll";
import { AboutSection } from "@/presentation/components/sections/AboutSection";
import { AgendaSection } from "@/presentation/components/sections/AgendaSection";
import { FloatingCta } from "@/presentation/components/sections/FloatingCta";
import { GoldDivider } from "@/presentation/components/sections/GoldDivider";
import { HeroSection } from "@/presentation/components/sections/HeroSection";
import { InvestmentSection } from "@/presentation/components/sections/InvestmentSection";
import { NavBar } from "@/presentation/components/sections/NavBar";
import { SiteFooter } from "@/presentation/components/sections/SiteFooter";
import { SpeakerSection } from "@/presentation/components/sections/SpeakerSection";
import { UrgencyBar } from "@/presentation/components/sections/UrgencyBar";
import { WhomSection } from "@/presentation/components/sections/WhomSection";

export function LandingPage() {
  useRevealOnScroll();

  return (
    <>
      <NavBar />
      <HeroSection />
      <UrgencyBar />
      <AboutSection />
      <GoldDivider />
      <AgendaSection />
      <WhomSection />
      <SpeakerSection />
      <GoldDivider />
      <InvestmentSection />
      <SiteFooter />
      <FloatingCta />
    </>
  );
}
