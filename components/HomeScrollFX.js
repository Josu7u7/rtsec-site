"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeScrollFX() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".hero-stage",
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          if (self.progress > 0.08) {
            document.body.classList.add("hero-scrolled");
          } else {
            document.body.classList.remove("hero-scrolled");
          }
        },
      });

      gsap.fromTo(
        ".after-hero-overlap",
        {
          y: 120,
        },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".after-hero-overlap",
            start: "top bottom",
            end: "top 70%",
            scrub: 1.1,
          },
        }
      );

      gsap.fromTo(
        ".hero-bg-image",
        {
          scale: 1.12,
        },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-stage",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        ".hero-copy-clean",
        {
          y: 0,
          opacity: 1,
        },
        {
          y: -70,
          opacity: 0.28,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-stage",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return null;
}