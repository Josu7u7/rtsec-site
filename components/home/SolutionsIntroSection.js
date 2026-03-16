"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionsIntroSection() {
  const sectionRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    ctxRef.current = gsap.context(() => {
      const kicker = section.querySelector(".solutions-intro-kicker");
      const lines = gsap.utils.toArray(".solutions-intro-line");
      const support = section.querySelector(".solutions-intro-support");

      gsap.set(kicker, {
        opacity: 0,
        y: 18,
      });

      gsap.set(lines, {
        opacity: 0,
        y: 34,
      });

      gsap.set(support, {
        opacity: 0,
        y: 24,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          end: "top 28%",
          scrub: 0.9,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        kicker,
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
        },
        0
      )
        .to(
          lines,
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "power2.out",
          },
          0.08
        )
        .to(
          support,
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
          },
          0.28
        );
    }, section);

    return () => {
      try {
        ctxRef.current?.revert();
      } catch {}
      ctxRef.current = null;
    };
  }, []);

  return (
    <section ref={sectionRef} className="solutions-intro-section">
      <div className="container-main">
        <div className="solutions-intro-wrap">
          <p className="solutions-intro-kicker">Soluciones empresariales</p>

          <h2 className="solutions-intro-title">
            <span className="solutions-intro-line">Las brechas crecen.</span>
            <span className="solutions-intro-line">La complejidad también.</span>
            <span className="solutions-intro-line">
              Tu arquitectura no puede quedarse atrás.
            </span>
          </h2>

          <p className="solutions-intro-support">
            Soluciones diseñadas para proteger, conectar y sostener entornos
            donde detenerse no es una opción.
          </p>
        </div>
      </div>
    </section>
  );
}