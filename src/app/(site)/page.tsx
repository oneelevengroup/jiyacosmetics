import Hero from "@/components/home/Hero";
import IntroBand from "@/components/home/IntroBand";
import CredibilityStrip from "@/components/home/CredibilityStrip";
import SurgeonsIntro from "@/components/home/SurgeonsIntro";
import ServicesOverview from "@/components/home/ServicesOverview";
import Highlights from "@/components/home/Highlights";
import ResultsTeaser from "@/components/home/ResultsTeaser";
import Testimonials from "@/components/home/Testimonials";
import YouTubePromo from "@/components/home/YouTubePromo";
import ConsultCTA from "@/components/home/ConsultCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroBand />
      <CredibilityStrip />
      <SurgeonsIntro />
      <ServicesOverview />
      <Highlights />
      <ResultsTeaser />
      <Testimonials />
      <YouTubePromo />
      <ConsultCTA />
    </>
  );
}
