import Hero from "../components/home/Hero";
import ImpactSection from "../components/home/ImpactSection";
import SolutionsIntroSection from "../components/home/SolutionsIntroSection";
import SolutionsSliderSection from "../components/home/SolutionsSliderSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactSection />
      <SolutionsIntroSection />
      <SolutionsSliderSection />
    </>
  );
}