"use client";

import { useEffect } from "react";
import Hero from "./Hero";
import ImpactSection from "./ImpactSection";
import SolutionsIntroSection from "./SolutionsIntroSection";
import SolutionsSliderSection from "./SolutionsSliderSection";
import ServicesPreviewSection from "./ServicesPreviewSection";
import HomeInsightSection from "./HomeInsightSection";
import HomeProtectionFlowSection from "./HomeProtectionFlowSection";
import HomePartnersSection from "./HomePartnersSection";
import HomeFinalCTASection from "./HomeFinalCTASection";

export default function HomePageClient() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    const id = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    let scrollTimer;

    const handleScrollState = () => {
      document.body.classList.add("is-scrolling");

      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        document.body.classList.remove("is-scrolling");
      }, 140);
    };

    window.addEventListener("scroll", handleScrollState, { passive: true });
    window.addEventListener("wheel", handleScrollState, { passive: true });
    window.addEventListener("touchmove", handleScrollState, { passive: true });

    return () => {
      window.cancelAnimationFrame(id);
      window.clearTimeout(scrollTimer);
      window.removeEventListener("scroll", handleScrollState);
      window.removeEventListener("wheel", handleScrollState);
      window.removeEventListener("touchmove", handleScrollState);
      document.body.classList.remove("is-scrolling");
    };
  }, []);

  return (
    <>
      <Hero />
      <ImpactSection />
      <SolutionsIntroSection />
      <SolutionsSliderSection />
      <ServicesPreviewSection />
      <HomeInsightSection />
      <HomeProtectionFlowSection />
      <HomePartnersSection />
      <HomeFinalCTASection />
    </>
  );
}