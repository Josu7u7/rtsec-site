"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroImpactTransition() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "+=85%",
          scrub: 1.1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        ".impact-section-clean",
        {
          y: 180,
        },
        {
          y: 0,
          ease: "none",
        },
        0
      )
        .fromTo(
          ".impact-overlap-panel",
          {
            borderTopLeftRadius: 38,
            borderTopRightRadius: 38,
          },
          {
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            ease: "none",
          },
          0
        )
        .fromTo(
          ".hero-stage-media",
          {
            scale: 1,
            y: 0,
          },
          {
            scale: 0.92,
            y: -30,
            ease: "none",
          },
          0
        )
        .fromTo(
          ".hero-vignette",
          {
            opacity: 0.42,
          },
          {
            opacity: 0.76,
            ease: "none",
          },
          0
        )
        .fromTo(
          ".hero-heading-group",
          {
            y: 0,
            opacity: 1,
          },
          {
            y: -38,
            opacity: 0.42,
            ease: "none",
          },
          0
        )
        .fromTo(
          ".site-header",
          {
            background: "rgba(5, 7, 10, 0.45)",
            backdropFilter: "blur(10px)",
          },
          {
            background: "rgba(5, 7, 10, 0.78)",
            backdropFilter: "blur(18px)",
            ease: "none",
          },
          0
        );
    });

    return () => mm.revert();
  }, []);

  return null;
}