"use client";

import { useEffect } from "react";
import Hero from "../components/home/Hero";
import ImpactSection from "../components/home/ImpactSection";
import SolutionsIntroSection from "../components/home/SolutionsIntroSection";
import SolutionsSliderSection from "../components/home/SolutionsSliderSection";
import ServicesPreviewSection from "../components/home/ServicesPreviewSection";
import HomeInsightSection from "../components/home/HomeInsightSection";
import HomeProtectionFlowSection from "../components/home/HomeProtectionFlowSection";
import HomePartnersSection from "../components/home/HomePartnersSection";
import HomeFinalCTASection from "../components/home/HomeFinalCTASection";

export default function HomePage() {
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