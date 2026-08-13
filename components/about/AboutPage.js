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
  const closingRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    const closing = closingRef.current;

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
         REVEALS
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
            start: "top 76%",
            end: "bottom 45%",
            scrub: 1,
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
            start: "top 76%",
            end: "bottom 45%",
            scrub: 1,
          },
        }
      );

      gsap.utils
        .toArray(".about-direction-panel")
        .forEach((panel, index) => {
          const marker = panel.querySelector(
            ".about-direction-panel-marker"
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
              y: 28,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              delay: index * 0.08,
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
              duration: 0.8,
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
              color: "#738096",
            },
            {
              color: "#f4f6f9",
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top 70%",
                end: "center 50%",
                scrub: 0.7,
              },
            }
          );

          gsap.fromTo(
            body,
            {
              opacity: 0.55,
            },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top 72%",
                end: "center 50%",
                scrub: 0.7,
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
              start: "top 68%",
              end: "bottom 44%",
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
              color: "#398cff",
              duration: 0.4,
              ease: "power2.out",
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
          const { desktop, tablet, mobile } = context.conditions;

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

          /* ===============================================
             POINTER DEPTH — DESKTOP ONLY
          ================================================ */

          if (desktop && closing) {
            const handlePointerMove = (event) => {
              const rect = closing.getBoundingClientRect();

              const px =
                ((event.clientX - rect.left) / rect.width) * 100;

              const py =
                ((event.clientY - rect.top) / rect.height) * 100;

              closing.style.setProperty(
                "--closing-pointer-x",
                `${px}%`
              );

              closing.style.setProperty(
                "--closing-pointer-y",
                `${py}%`
              );
            };

            const handlePointerLeave = () => {
              closing.style.setProperty(
                "--closing-pointer-x",
                "72%"
              );

              closing.style.setProperty(
                "--closing-pointer-y",
                "48%"
              );
            };

            closing.addEventListener(
              "pointermove",
              handlePointerMove
            );

            closing.addEventListener(
              "pointerleave",
              handlePointerLeave
            );

            return () => {
              closing.removeEventListener(
                "pointermove",
                handlePointerMove
              );

              closing.removeEventListener(
                "pointerleave",
                handlePointerLeave
              );
            };
          }
        }
      );

      /* =====================================================
         COMPANY → CLOSING TRANSITION
      ====================================================== */

      gsap.fromTo(
        ".about-company-transition-energy",
        {
          scaleX: 0.15,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 0.65,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-company",
            start: "bottom 85%",
            end: "bottom 25%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".about-company-transition-glow",
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-company",
            start: "bottom 90%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );

      /* =====================================================
         CLOSING SYSTEM APPEARANCE
      ====================================================== */

      gsap.fromTo(
        ".about-closing-system",
        {
          opacity: 0,
          scale: 0.88,
        },
        {
          opacity: 0.78,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-company",
            start: "bottom 72%",
            end: ".about-closing top 12%",
            scrub: 1.15,
          },
        }
      );

      gsap.fromTo(
        ".about-closing-copy",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: ".about-closing",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-closing-intro",
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-closing",
            start: "top 72%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-closing-title-mask h2",
        {
          yPercent: 112,
          rotate: 1.5,
        },
        {
          yPercent: 0,
          rotate: 0,
          duration: 1.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".about-closing",
            start: "top 68%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-closing-link",
        {
          opacity: 0,
          y: 22,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-closing",
            start: "top 66%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-closing-top",
        {
          opacity: 0,
          y: 14,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-closing",
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-closing-footer > span",
        {
          opacity: 0,
          y: 12,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.07,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-closing-footer",
            start: "top 92%",
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
    <main
      ref={pageRef}
      className="about-page"
    >
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
                <span>
                  Después diseñamos.
                </span>
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

              <div className="about-direction-panel-top">
                <span>01</span>
                <span>Misión</span>
              </div>

              <h2 className="about-direction-panel-title">
                Hacer que lo crítico
                <br />
                funcione mejor.
              </h2>

              <p className="about-direction-panel-text">
                Diseñamos y protegemos entornos tecnológicos pensando
                en la operación real.
              </p>
            </article>

            <article className="about-direction-panel">
              <span className="about-direction-panel-marker" />

              <div className="about-direction-panel-top">
                <span>02</span>
                <span>Visión</span>
              </div>

              <h2 className="about-direction-panel-title">
                Elevar el estándar
                <br />
                con cada proyecto.
              </h2>

              <p className="about-direction-panel-text">
                Crecer por conocimiento, criterio técnico y resultados
                que se puedan sostener.
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
                <span className="about-process-glow" />
                <span className="about-process-accent" />

                <span className="about-process-number">
                  {item.number}
                </span>

                <div className="about-process-copy">
                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>
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
          COMPANY
      ====================================================== */}

      <section className="about-company">
        <div className="container-main">
          <div className="about-company-inner about-reveal">
            <div className="about-company-meta">
              <span>
                RTSEC / Perú
              </span>

              <span>
                Equipo técnico
              </span>
            </div>

            <div className="about-company-grid">
              <h2>
                Somos una
                <br />
                empresa joven.
              </h2>

              <p>
                El conocimiento con el que trabajamos se construyó mucho
                antes que nuestro nombre.
              </p>
            </div>
          </div>
        </div>

        <div
          className="about-company-transition"
          aria-hidden="true"
        >
          <span className="about-company-transition-glow" />
          <span className="about-company-transition-energy" />
        </div>
      </section>

      {/* =====================================================
          CLOSING EXPERIENCE
      ====================================================== */}

      <section
        ref={closingRef}
        className="about-closing"
      >
        <div
          className="about-closing-ambient"
          aria-hidden="true"
        >
          <div className="about-closing-grid" />

          <div className="about-closing-beam about-closing-beam-a" />
          <div className="about-closing-beam about-closing-beam-b" />

          <span className="about-closing-glow" />

          <svg
            className="about-closing-system"
            viewBox="0 0 1400 900"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* RINGS */}

            <circle
              cx="965"
              cy="460"
              r="315"
              className="closing-ring closing-ring-01"
            />

            <circle
              cx="965"
              cy="460"
              r="226"
              className="closing-ring closing-ring-02"
            />

            <circle
              cx="965"
              cy="460"
              r="118"
              className="closing-ring closing-ring-03"
            />

            {/* ORBITS */}

            <ellipse
              cx="965"
              cy="460"
              rx="450"
              ry="170"
              className="closing-orbit closing-orbit-a"
            />

            <ellipse
              cx="965"
              cy="460"
              rx="400"
              ry="135"
              transform="rotate(42 965 460)"
              className="closing-orbit closing-orbit-b"
            />

            {/* ROUTES */}

            <path
              d="M180 460H850"
              className="closing-route"
            />

            <path
              d="M1080 460H1325"
              className="closing-route"
            />

            <path
              d="M965 75V342"
              className="closing-route"
            />

            <path
              d="M965 578V830"
              className="closing-route"
            />

            <path
              d="M640 220L880 382"
              className="closing-route closing-route-soft"
            />

            <path
              d="M1110 538L1285 690"
              className="closing-route closing-route-soft"
            />

            {/* NODES */}

            <circle
              cx="490"
              cy="460"
              r="4"
              className="closing-node closing-node-a"
            />

            <circle
              cx="730"
              cy="460"
              r="4"
              className="closing-node closing-node-b"
            />

            <circle
              cx="1215"
              cy="460"
              r="4"
              className="closing-node closing-node-c"
            />

            <circle
              cx="965"
              cy="190"
              r="4"
              className="closing-node closing-node-d"
            />

            <circle
              cx="965"
              cy="730"
              r="4"
              className="closing-node closing-node-e"
            />

            {/* CORE */}

            <circle
              cx="965"
              cy="460"
              r="48"
              className="closing-core"
            />

            <circle
              cx="965"
              cy="460"
              r="13"
              className="closing-core-dot"
            />

            <circle
              cx="965"
              cy="460"
              r="13"
              className="closing-core-pulse"
            />
          </svg>

          <div className="about-closing-scan" />
        </div>

        <div className="container-main about-closing-container">
          <div className="about-closing-top">
            <span className="about-eyebrow">
              Próximo paso
            </span>

            <div className="about-closing-system-state">
              <span />
              Disponible para nuevos proyectos
            </div>
          </div>

          <div className="about-closing-main">
            <div className="about-closing-copy">
              <p className="about-closing-intro">
                Si hay algo que mejorar,
                <br />
                proteger o rediseñar,
                <br />
                queremos entenderlo.
              </p>

              <div className="about-closing-title-mask">
                <h2>
                  Hablemos.
                </h2>
              </div>

              <Link
                href="/contacto"
                className="about-closing-link"
              >
                <span>
                  Cuéntanos qué necesitas
                </span>

                <span className="about-closing-link-arrow">
                  ↗
                </span>

                <span className="about-closing-link-track">
                  <i />
                </span>
              </Link>
            </div>

            <div
              className="about-closing-side"
              aria-hidden="true"
            >
              <span className="about-closing-side-number">
                04
              </span>

              <span>
                RTSEC / SYSTEM
              </span>
            </div>
          </div>

          <div className="about-closing-footer">
            <span>
              Ciberseguridad
            </span>

            <span>
              Infraestructura
            </span>

            <span>
              Conectividad
            </span>

            <span>
              Continuidad
            </span>

            <span className="about-closing-footer-location">
              Lima · Perú
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}