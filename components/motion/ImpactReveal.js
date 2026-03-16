"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImpactReveal({ scopeRef }) {
  const ctxRef = useRef(null);

  useEffect(() => {
    const scope = scopeRef?.current;
    if (!scope) return;

    ctxRef.current = gsap.context(() => {
      gsap.fromTo(
        ".impact-metrics-bar",
        {
          y: 70,
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: scope,
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".impact-values-kicker",
        {
          y: 24,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: scope.querySelector(".impact-values-header"),
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".impact-values-title",
        {
          y: 50,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: scope.querySelector(".impact-values-header"),
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".impact-value-card-premium",
        {
          y: 42,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: scope.querySelector(".impact-values-grid-premium"),
            start: "top 82%",
            once: true,
          },
        }
      );
    }, scope);

    return () => {
      try {
        ctxRef.current?.revert();
      } catch {}
      ctxRef.current = null;
    };
  }, [scopeRef]);

  return null;
}