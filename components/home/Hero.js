"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    ctxRef.current = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-stage-media",
        { scale: 1.08, opacity: 0.65, filter: "blur(8px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.4 }
      )
        .fromTo(
          ".hero-vignette",
          { opacity: 0 },
          { opacity: 0.82, duration: 1.2 },
          0
        )
        .fromTo(
          ".hero-grid-glow",
          { opacity: 0, scale: 1.08 },
          { opacity: 0.42, scale: 1, duration: 1.3 },
          0.1
        )
        .fromTo(
          ".hero-kicker",
          { y: 18, opacity: 0, filter: "blur(6px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.75 },
          0.35
        )
        .fromTo(
          ".hero-line",
          { yPercent: 110, opacity: 0, filter: "blur(10px)" },
          {
            yPercent: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.12,
          },
          0.45
        )
        .fromTo(
          ".hero-subtitle",
          { y: 22, opacity: 0, filter: "blur(6px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 },
          1.05
        );
    }, hero);

    return () => {
      try {
        ctxRef.current?.revert();
      } catch {}
      ctxRef.current = null;
    };
  }, []);

  return (
    <section id="inicio" className="hero-section" ref={heroRef}>
      <div className="hero-stage-media">
        <img
          src="/images/hero-rtsec.jpg"
          alt="RTSEC Hero"
          className="hero-bg-image"
        />
        <div className="hero-vignette" />
        <div className="hero-grid-glow" />
      </div>

      <div className="container-main hero-content-wrap">
        <div className="hero-heading-group">
          <p className="hero-kicker">
            Arquitectura crítica · Ciberseguridad · Continuidad operativa
          </p>

          <h1 className="hero-title">
            <span className="hero-line-wrap">
              <span className="hero-line">Lo importante no</span>
            </span>
            <span className="hero-line-wrap">
              <span className="hero-line">es si pasará algo.</span>
            </span>
            <span className="hero-line-wrap">
              <span className="hero-line">Es qué tan preparado</span>
            </span>
            <span className="hero-line-wrap">
              <span className="hero-line">estás</span>
            </span>
            <span className="hero-line-wrap">
              <span className="hero-line hero-line-accent">cuando pase.</span>
            </span>
          </h1>

          <p className="hero-subtitle">
            Redes que fluyen. Seguridad que resiste.
          </p>
        </div>
      </div>
    </section>
  );
}