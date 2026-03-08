import Header from "../components/Header";
import Hero from "../components/Hero";
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