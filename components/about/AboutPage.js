"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutHeroBlueprint from "./AboutHeroBlueprint";

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
          duration: 1.05,
          stagger: 0.075,
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
          delay: 0.3,
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
            y: 34,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      /* =====================================================
         APPROACH IMAGE
      ====================================================== */

      gsap.fromTo(
        ".about-approach-image img",
        {
          scale: 1.055,
          yPercent: -1.5,
        },
        {
          scale: 1,
          yPercent: 1.5,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-approach-image",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      /* =====================================================
         MISSION / VISION
         RESTAURAMOS LA ANIMACIÓN ORIGINAL
      ====================================================== */

      gsap.fromTo(
        ".about-direction-line-progress",
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-direction",
            start: "top 78%",
            end: "bottom 48%",
            scrub: 0.8,
          },
        }
      );

      gsap.fromTo(
        ".about-direction-signal",
        {
          left: "0%",
        },
        {
          left: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".about-direction",
            start: "top 78%",
            end: "bottom 48%",
            scrub: 0.8,
          },
        }
      );

      gsap.utils
        .toArray(".about-direction-panel")
        .forEach((panel, index) => {
          const marker = panel.querySelector(
            ".about-direction-panel-marker"
          );

          const label = panel.querySelector(
            ".about-direction-panel-label"
          );

          const title = panel.querySelector(
            ".about-direction-panel-title"
          );

          const body = panel.querySelector(
            ".about-direction-panel-text"
          );

          gsap.fromTo(
            panel,
            {
              opacity: 0,
              y: 38,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: index * 0.09,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 86%",
                once: true,
              },
            }
          );

          gsap.fromTo(
            marker,
            {
              scaleX: 0,
              transformOrigin: "left center",
            },
            {
              scaleX: 1,
              duration: 0.85,
              ease: "power4.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 80%",
                once: true,
              },
            }
          );

          gsap.fromTo(
            label,
            {
              opacity: 0.35,
              x: -8,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.65,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 78%",
                once: true,
              },
            }
          );

          gsap.fromTo(
            title,
            {
              color: "#68758b",
            },
            {
              color: "#f4f6f9",
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top 70%",
                end: "center 48%",
                scrub: 0.8,
              },
            }
          );

          gsap.fromTo(
            body,
            {
              opacity: 0.42,
              y: 8,
            },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top 71%",
                end: "center 49%",
                scrub: 0.8,
              },
            }
          );
        });

      /* =====================================================
         PROCESS
      ====================================================== */

      gsap.fromTo(
        ".about-process-heading",
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-process-heading",
            start: "top 84%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-process-item",
        {
          opacity: 0,
          y: 26,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-process-grid",
            start: "top 84%",
            once: true,
          },
        }
      );

      gsap.utils.toArray(".about-process-item").forEach((item) => {
        const accent = item.querySelector(".about-process-accent");
        const number = item.querySelector(".about-process-number");
        const glow = item.querySelector(".about-process-glow");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 69%",
              end: "bottom 42%",
              toggleActions: "play reverse play reverse",
            },
          })
          .to(
            accent,
            {
              scaleX: 1,
              duration: 0.55,
              ease: "power3.out",
            },
            0
          )
          .to(
            number,
            {
              color: "#438fff",
              textShadow:
                "0 0 24px rgba(42,128,255,.22)",
              duration: 0.4,
            },
            0
          )
          .to(
            glow,
            {
              opacity: 1,
              duration: 0.45,
            },
            0
          );
      });

      /* =====================================================
         CAPABILITIES
      ====================================================== */

      mm.add(
        {
          desktop: "(min-width: 1025px)",
          tablet:
            "(min-width: 769px) and (max-width: 1024px)",
          mobile: "(max-width: 768px)",
        },
        (context) => {
          const { tablet, mobile } = context.conditions;

          let travel = 7;

          if (tablet) travel = 4.2;
          if (mobile) travel = 2.4;

          gsap.utils
            .toArray(".about-capability-row")
            .forEach((row, index) => {
              const left = row.querySelector(
                ".about-capability-left"
              );

              const right = row.querySelector(
                ".about-capability-right"
              );

              const multiplier = index === 0 ? 1 : 0.88;
              const distance = travel * multiplier;

              gsap.fromTo(
                left,
                {
                  x: `-${distance}vw`,
                },
                {
                  x: `${distance * 0.5}vw`,
                  ease: "none",
                  scrollTrigger: {
                    trigger: ".about-capabilities",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: mobile ? 0.7 : 1,
                  },
                }
              );

              gsap.fromTo(
                right,
                {
                  x: `${distance}vw`,
                },
                {
                  x: `-${distance * 0.5}vw`,
                  ease: "none",
                  scrollTrigger: {
                    trigger: ".about-capabilities",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: mobile ? 0.7 : 1,
                  },
                }
              );
            });
        }
      );

      /* =====================================================
         COMPANY
      ====================================================== */

      gsap.fromTo(
        ".about-company-inner",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-company",
            start: "top 86%",
            once: true,
          },
        }
      );

      /* =====================================================
         COMPANY → CTA FLUID BRIDGE
      ====================================================== */

      gsap.fromTo(
        ".about-transition-light",
        {
          yPercent: -25,
          opacity: 0,
          scale: 0.85,
        },
        {
          yPercent: 18,
          opacity: 1,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-company-closing",
            start: "top 75%",
            end: "bottom 45%",
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        ".about-transition-haze",
        {
          yPercent: -15,
          opacity: 0.15,
        },
        {
          yPercent: 18,
          opacity: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-company-closing",
            start: "top 78%",
            end: "bottom 40%",
            scrub: 1,
          },
        }
      );

      /* =====================================================
         CTA
      ====================================================== */

      gsap.fromTo(
        ".about-cta-eyebrow, .about-cta-title, .about-cta-copy",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-cta",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-cta-action",
        {
          opacity: 0,
          x: 28,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-cta",
            start: "top 78%",
            once: true,
          },
        }
      );
    }, page);

    ScrollTrigger.refresh();

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <main ref={pageRef} className="about-page">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="about-hero">
        <AboutHeroBlueprint />

        <div className="container-main about-hero-container">
          <div className="about-hero-content">
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
                Diseñamos infraestructura y seguridad para que las
                operaciones sigan funcionando.
              </p>
            </div>
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
                <span>Después diseñamos.</span>
              </h2>

              <p>
                No empezamos por un fabricante ni por un producto.
                Empezamos por entender qué debe funcionar, qué necesita
                protegerse y qué no puede fallar.
              </p>
            </div>

            <div className="about-approach-media about-reveal">
              <div className="about-approach-image">
                <Image
                  src="/images/about-rtsec-real.jpg"
                  alt="Infraestructura de red y trabajo técnico de RTSEC"
                  width={1200}
                  height={1600}
                  sizes="(max-width: 768px) 92vw, (max-width: 1024px) 48vw, 42vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION / VISION
          ESTRUCTURA ORIGINAL + TEXTO NUEVO
      ====================================================== */}

      <section className="about-direction">
        <div className="container-main">
          <div className="about-direction-head">
            <div>
              <span className="about-eyebrow">
                Nuestra dirección
              </span>

              <p>
                Dos ideas. Una misma forma de avanzar.
              </p>
            </div>

            <span className="about-direction-code">
              RTSEC / 02
            </span>
          </div>

          <div className="about-direction-line">
            <span className="about-direction-line-progress" />
            <span className="about-direction-signal" />
          </div>

          <div className="about-direction-panels">
            <article className="about-direction-panel">
              <span className="about-direction-panel-marker" />

              <div className="about-direction-panel-label">
                Misión
              </div>

              <h2 className="about-direction-panel-title">
                Hacer que lo crítico
                <br />
                funcione mejor.
              </h2>

              <p className="about-direction-panel-text">
                Convertimos necesidades reales en infraestructura y
                seguridad que respondan cuando más importa. Diseñamos
                con criterio, implementamos con orden y pensamos siempre
                en la operación.
              </p>
            </article>

            <article className="about-direction-panel">
              <span className="about-direction-panel-marker" />

              <div className="about-direction-panel-label">
                Visión
              </div>

              <h2 className="about-direction-panel-title">
                Hacer bien
                <br />
                lo difícil.
              </h2>

              <p className="about-direction-panel-text">
                Queremos crecer por la calidad de lo que hacemos:
                conocimiento, cercanía y soluciones que sigan teniendo
                sentido mucho después de la implementación.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="about-process">
        <div className="container-main">
          <div className="about-process-heading">
            <span className="about-eyebrow">
              Nuestro proceso
            </span>

            <h2>
              Cuatro fases.
              <span>Un solo objetivo: que funcione.</span>
            </h2>
          </div>

          <div className="about-process-grid">
            {process.map((item) => (
              <article
                key={item.number}
                className="about-process-item"
              >
                <span className="about-process-glow" />
                <span className="about-process-accent" />

                <span className="about-process-number">
                  {item.number}
                </span>

                <div className="about-process-copy">
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ====================================================== */}

      <section className="about-capabilities">
        <div className="about-capabilities-sticky">
          <div className="about-capabilities-head">
            <span className="about-eyebrow">
              Una visión integrada
            </span>
          </div>

          <div className="about-capabilities-stage">
            <div className="about-capability-row">
              <span className="about-capability about-capability-left">
                Seguridad
              </span>

              <span className="about-capability about-capability-right about-capability-muted">
                Infraestructura
              </span>
            </div>

            <div className="about-capability-row">
              <span className="about-capability about-capability-left">
                Conectividad
              </span>

              <span className="about-capability about-capability-right about-capability-muted">
                Continuidad
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPANY + CTA
          AHORA SON UNA SOLA EXPERIENCIA VISUAL
      ====================================================== */}

      <div className="about-company-closing">
        <span
          className="about-transition-haze"
          aria-hidden="true"
        />

        <span
          className="about-transition-light"
          aria-hidden="true"
        />

        <section className="about-company">
          <div className="container-main">
            <div className="about-company-inner">
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
                  El conocimiento con el que trabajamos se construyó
                  mucho antes que nuestro nombre.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <div className="container-main">
            <div className="about-cta-layout">
              <div className="about-cta-content">
                <span className="about-eyebrow about-cta-eyebrow">
                  El siguiente paso
                </span>

                <h2 className="about-cta-title">
                  ¿Lo vemos
                  <span>juntos?</span>
                </h2>

                <p className="about-cta-copy">
                  Cuéntanos qué tienes entre manos.
                  <br />
                  Lo entendemos contigo.
                </p>
              </div>

              <div className="about-cta-action">
                <Link href="/contacto" className="about-cta-button">
                  <span>Hablemos</span>

                  <span className="about-cta-button-icon">
                    ↗
                  </span>

                  <span className="about-cta-button-line" />
                </Link>

                <span className="about-cta-note">
                  Conversación inicial · sin compromiso
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}