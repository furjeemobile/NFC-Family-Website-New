import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";

import { TrustStrip } from "@/components/sections/TrustStrip";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { UseCasesGrid } from "@/components/sections/UseCasesGrid";
import { VisibilitySection } from "@/components/sections/VisibilitySection";
import { CardLayoutSection } from "@/components/sections/CardLayoutSection";
import { CardStylesSection } from "@/components/sections/CardStylesSection";
import { CalendarSection } from "@/components/sections/CalendarSection";
import { AnalyticsSection } from "@/components/sections/AnalyticsSection";
import { DemoProfiles } from "@/components/sections/DemoProfiles";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { FounderStory } from "@/components/sections/FounderStory";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <DashboardShowcase />
      <UseCasesGrid />
      <DemoProfiles />
      <VisibilitySection />
      <CardLayoutSection />
      <CardStylesSection />
      <CalendarSection />
      <AnalyticsSection />
      <FounderStory />
      <PricingPreview />
      <FaqSection />
      <FinalCta />
    </>
  );
}
