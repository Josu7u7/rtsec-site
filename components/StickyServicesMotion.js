"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StickyServicesMotion({ children }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const grid = gridRef.current;

    if (!section || !heading || !grid) return;

    const cards = grid.querySelectorAll(".sticky-service-card");

    const ctx = gsap.context(() => {
      gsap.set(heading, { y: 40, opacity: 0 });
      gsap.set(grid, { width: "100%" });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=1800",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress <= 0.18) {
            const headerProgress = gsap.utils.mapRange(0, 0.18, 0, 1, progress);
            gsap.set(heading, {
              y: gsap.utils.interpolate(40, 0, headerProgress),
              opacity: headerProgress,
            });
          } else {
            gsap.set(heading, { y: 0, opacity: 1 });
          }

          if (progress <= 0.22) {
            const widthProgress = gsap.utils.mapRange(0, 0.22, 1, 0, progress);
            const widthValue = gsap.utils.interpolate(100, 88, 1 - widthProgress);
            gsap.set(grid, { width: `${widthValue}%` });
          } else {
            gsap.set(grid, { width: "88%" });
          }

          if (progress > 0.28) {
            const gapProgress = gsap.utils.clamp(
              0,
              1,
              gsap.utils.mapRange(0.28, 0.55, 0, 1, progress)
            );

            const gapValue = gsap.utils.interpolate(18, 34, gapProgress);
            gsap.set(grid, { gap: `${gapValue}px` });

            cards.forEach((card, index) => {
              const offsets = [-18, -6, 6, 18];
              gsap.set(card, {
                y: offsets[index] * gapProgress,
              });
            });
          } else {
            gsap.set(grid, { gap: "18px" });
            cards.forEach((card) => gsap.set(card, { y: 0 }));
          }

          if (progress > 0.62) {
            const scaleProgress = gsap.utils.clamp(
              0,
              1,
              gsap.utils.mapRange(0.62, 0.9, 0, 1, progress)
            );

            cards.forEach((card, index) => {
              const scales = [0.96, 0.985, 0.985, 0.96];
              const scaleTarget = scales[index];
              gsap.set(card, {
                scale: gsap.utils.interpolate(1, scaleTarget, scaleProgress),
              });
            });
          } else {
            cards.forEach((card) => gsap.set(card, { scale: 1 }));
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="sticky-services-motion-wrap">
      <div ref={headingRef}>{children.heading}</div>
      <div
        ref={gridRef}
        style={{
          margin: "0 auto",
        }}
      >
        {children.grid}
      </div>
    </section>
  );
}