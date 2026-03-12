"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionsIntroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".solutions-intro-line");
      const support = section.querySelector(".solutions-intro-support");
      const overlay = section.querySelector(".solutions-intro-overlay");

      gsap.set(lines, {
        opacity: 0.14,
        y: 36,
      });

      gsap.set(support, {
        opacity: 0,
        y: 24,
      });

      lines.forEach((line, index) => {
        gsap.to(line, {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: `top+=${index * 120} 82%`,
            end: `top+=${index * 120 + 220} 52%`,
            scrub: 1.2,
          },
        });
      });

      gsap.to(support, {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 40%",
          end: "top 10%",
          scrub: 1,
        },
      });

      gsap.to(overlay, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="solutions-intro-section">
      <div className="solutions-intro-overlay" />

      <div className="container-main">
        <div className="solutions-intro-wrap">
          <p className="solutions-intro-kicker">Soluciones empresariales</p>

          <h2 className="solutions-intro-title">
            <span className="solutions-intro-line">
              No se trata solo de implementar tecnología.
            </span>
            <span className="solutions-intro-line">
              Se trata de construir capacidades que protejan,
            </span>
            <span className="solutions-intro-line">
              conecten y sostengan la operación con criterio.
            </span>
            <span className="solutions-intro-line">
              Cada solución debe responder a un riesgo real,
            </span>
            <span className="solutions-intro-line">
              a una necesidad operativa y a una visión de crecimiento.
            </span>
          </h2>

          <p className="solutions-intro-support">
            Arquitecturas pensadas para proteger acceso, datos, continuidad y
            evolución operativa.
          </p>
        </div>
      </div>
    </section>
  );
}