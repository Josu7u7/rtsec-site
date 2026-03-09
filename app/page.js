import Header from "../components/Header";
import Hero from "../components/Hero";
import ImpactSection from "../components/ImpactSection";
import HeroImpactTransition from "../components/HeroImpactTransition";

import SolutionsSection from "../components/SolutionsSection";
import StickyServicesSection from "../components/StickyServicesSection";
import AlertSection from "../components/AlertSection";
import ProcessSection from "../components/ProcessSection";
import PartnersSection from "../components/PartnersSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <ImpactSection />
      <HeroImpactTransition />

      <SolutionsSection />
      <StickyServicesSection />
      <AlertSection />
      <ProcessSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </>
  );
}