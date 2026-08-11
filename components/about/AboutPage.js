"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const process = [
  {
    number: "01",
    title: "Entender",
    text: "Contexto, operación y restricciones.",
  },
  {
    number: "02",
    title: "Diseñar",
    text: "Arquitectura antes que producto.",
  },
  {
    number: "03",
    title: "Implementar",
    text: "Cambios controlados, pruebas y validación.",
  },
  {
    number: "04",
    title: "Acompañar",
    text: "Seguimiento después de la entrega.",
  },
];

const capabilities = [
  "Seguridad",
  "Infraestructura",
  "Conectividad",
  "Continuidad",
];

export default function AboutPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      /* =====================================================
         HERO
      ====================================================== */

      gsap.fromTo(
        ".about-hero-line > span",
        {
          yPercent: 115,
        },
        {
          yPercent: 0,
          duration: 1.1,
          stagger: 0.08,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        ".about-hero-fade",
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          delay: 0.45,
          ease: "power3.out",
        }
      );

      /* =====================================================
         GENERIC REVEALS
      ====================================================== */

      gsap.utils.toArray(".about-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          }
        );
      });

      /* =====================================================
         PHOTO PARALLAX
      ====================================================== */

      gsap.fromTo(
        ".about-approach-image img",
        {
          scale: 1.06,
          yPercent: -2,
        },
        {
          scale: 1,
          yPercent: 2,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-approach-media",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        }
      );

      /* =====================================================
         PROCESS
      ====================================================== */

      gsap.fromTo(
        ".about-process-item",
        {
          opacity: 0,
          y: 34,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.11,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-process-grid",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.utils.toArray(".about-process-item").forEach((item) => {
        const number = item.querySelector(".about-process-number");

        gsap.to(number, {
          color: "#2a80ff",
          scrollTrigger: {
            trigger: item,
            start: "top 68%",
            end: "bottom 48%",
            scrub: true,
          },
        });
      });

      /* =====================================================
         RESPONSIVE INTERLACED MOTION
      ====================================================== */

      mm.add(
        {
          desktop: "(min-width: 1025px)",
          tablet: "(min-width: 769px) and (max-width: 1024px)",
          mobile: "(max-width: 768px)",
        },
        (context) => {
          const { desktop, tablet, mobile } = context.conditions;

          let movement = 180;

          if (tablet) movement = 95;
          if (mobile) movement = 42;

          gsap.utils.toArray(".about-capability").forEach((item, index) => {
            const startX =
              index % 2 === 0
                ? -movement
                : movement;

            const endX =
              index % 2 === 0
                ? movement
                : -movement;

            gsap.fromTo(
              item,
              {
                x: startX,
              },
              {
                x: endX,
                ease: "none",
                scrollTrigger: {
                  trigger: ".about-capabilities",
                  start: "top bottom",
                  end: "bottom top",
                  scrub: desktop ? 1.25 : 1,
                },
              }
            );
          });
        }
      );
    }, page);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <main
      ref={pageRef}
      className="about-page"
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="about-hero">
        <div className="container-main">
          <span className="about-eyebrow about-hero-fade">
            Nosotros
          </span>

          <h1 className="about-hero-title">
            <span className="about-hero-line">
              <span>Somos técnicos.</span>
            </span>

            <span className="about-hero-line">
              <span>Nos gusta resolver</span>
            </span>

            <span className="about-hero-line about-hero-line-muted">
              <span>problemas difíciles.</span>
            </span>
          </h1>

          <div className="about-hero-copy about-hero-fade">
            <p>
              Diseñamos infraestructura y seguridad para que las operaciones
              sigan funcionando.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPROACH
      ====================================================== */}

      <section className="about-approach">
        <div className="container-main">
          <div className="about-approach-grid">
            <div className="about-approach-copy about-reveal">
              <span className="about-eyebrow">
                Cómo trabajamos
              </span>

              <h2>
                Primero entendemos.
                <span>
                  Después diseñamos.
                </span>
              </h2>

              <p>
                No empezamos por un fabricante ni por un producto. Empezamos por
                entender qué debe funcionar, qué necesita protegerse y qué no
                puede fallar.
              </p>
            </div>

            <div className="about-approach-media about-reveal">
              <div className="about-approach-image">
                <Image
                  src="/images/about-rtsec-real.jpg"
                  alt="Infraestructura de red y trabajo técnico de RTSEC"
                  width={1200}
                  height={1600}
                  sizes="(max-width: 768px) 88vw, (max-width: 1024px) 48vw, 42vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="about-process">
        <div className="container-main">
          <div className="about-process-heading about-reveal">
            <span className="about-eyebrow">
              Nuestro proceso
            </span>

            <h2>
              Cuatro fases.
              <span>
                Un solo objetivo: que funcione.
              </span>
            </h2>
          </div>

          <div className="about-process-grid">
            {process.map((item) => (
              <article
                key={item.number}
                className="about-process-item"
              >
                <span className="about-process-number">
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERLACED MOTION
      ====================================================== */}

      <section className="about-capabilities">
        <div className="about-capabilities-sticky">
          <div className="about-capabilities-head">
            <span className="about-eyebrow">
              Una visión integrada
            </span>

            <p>
              Nada funciona aislado.
            </p>
          </div>

          <div className="about-capabilities-list">
            {capabilities.map((item) => (
              <div
                className="about-capability"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="about-capabilities-end">
            <h2>
              Nada funciona aislado.
              <span>
                Diseñamos cada componente pensando en el sistema completo.
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPANY
      ====================================================== */}

      <section className="about-company">
        <div className="container-main">
          <div className="about-company-inner about-reveal">
            <div className="about-company-meta">
              <span>RTSEC / Perú</span>
              <span>Equipo técnico</span>
            </div>

            <div className="about-company-grid">
              <h2>
                Somos una
                <br />
                empresa joven.
              </h2>

              <p>
                El conocimiento con el que trabajamos se construyó mucho antes
                que nuestro nombre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="about-cta">
        <div className="container-main">
          <div className="about-cta-inner about-reveal">
            <span className="about-eyebrow">
              Hablemos
            </span>

            <div className="about-cta-content">
              <h2>
                ¿Tienes un reto técnico?
              </h2>

              <Link
                href="/contacto"
                className="about-cta-link"
              >
                <span>Cuéntanoslo</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}