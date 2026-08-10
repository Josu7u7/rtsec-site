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
    text: "Antes de proponer tecnología, entendemos cómo funciona la operación.",
  },
  {
    number: "02",
    title: "Diseñar",
    text: "La arquitectura viene primero. La marca y el producto vienen después.",
  },
  {
    number: "03",
    title: "Acompañar",
    text: "Implementamos pensando también en lo que ocurrirá después del proyecto.",
  },
];

const capabilities = [
  "Seguridad",
  "Infraestructura",
  "Redes",
  "Continuidad",
  "Visibilidad",
];

export default function AboutPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const ctx = gsap.context(() => {
      /* =====================================================
         HERO
      ====================================================== */

      gsap.fromTo(
        ".about-new-hero-line > span",
        {
          yPercent: 110,
        },
        {
          yPercent: 0,
          duration: 1.15,
          stagger: 0.08,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        ".about-new-hero-intro",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.5,
          ease: "power3.out",
        }
      );

      /* =====================================================
         GENERIC REVEALS
      ====================================================== */

      gsap.utils.toArray(".about-new-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 45,
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
        ".about-new-photo img",
        {
          scale: 1.08,
          yPercent: -2,
        },
        {
          scale: 1,
          yPercent: 2,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-new-photo",
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
        ".about-new-process-item",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-new-process-list",
            start: "top 82%",
            once: true,
          },
        }
      );

      /* =====================================================
         INTERLACED CAPABILITIES
      ====================================================== */

      gsap.utils.toArray(".about-new-capability").forEach((item, index) => {
        const startX = index % 2 === 0 ? -160 : 160;
        const endX = index % 2 === 0 ? 160 : -160;

        gsap.fromTo(
          item,
          {
            x: startX,
          },
          {
            x: endX,
            ease: "none",
            scrollTrigger: {
              trigger: ".about-new-capabilities",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.35,
            },
          }
        );
      });

      /* =====================================================
         CULTURE WORDS
      ====================================================== */

      gsap.fromTo(
        ".about-new-culture-word",
        {
          opacity: 0.15,
        },
        {
          opacity: 1,
          stagger: 0.12,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-new-culture-title",
            start: "top 78%",
            end: "center 45%",
            scrub: 1,
          },
        }
      );
    }, page);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="about-new">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="about-new-hero">
        <div className="container-main">
          <div className="about-new-hero-intro">
            <span className="about-new-label">Nosotros / RTSEC</span>
          </div>

          <h1 className="about-new-hero-title">
            <span className="about-new-hero-line">
              <span>Somos técnicos.</span>
            </span>

            <span className="about-new-hero-line">
              <span>Nos gusta resolver</span>
            </span>

            <span className="about-new-hero-line about-new-hero-line-muted">
              <span>problemas difíciles.</span>
            </span>
          </h1>

          <div className="about-new-hero-description about-new-hero-intro">
            <p>
              Diseñamos, implementamos y protegemos la infraestructura sobre la
              que operan las empresas.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PHOTO + APPROACH
      ====================================================== */}

      <section className="about-new-intro">
        <div className="container-main">
          <div className="about-new-intro-grid">
            <div className="about-new-photo about-new-reveal">
              <Image
                src="/images/about-rtsec-real.jpg"
                alt="Trabajo técnico sobre infraestructura de red"
                width={1200}
                height={1600}
                sizes="(max-width: 1024px) 100vw, 68vw"
                className="about-new-photo-image"
              />

              <span className="about-new-photo-caption">
                Trabajo de campo / RTSEC
              </span>
            </div>

            <div className="about-new-intro-copy about-new-reveal">
              <span className="about-new-label">Cómo trabajamos</span>

              <h2>
                Primero entendemos.
                <br />
                Después diseñamos.
              </h2>

              <p>
                No empezamos por un fabricante ni por un producto. Empezamos
                entendiendo qué debe funcionar, qué necesita protegerse y qué
                no puede fallar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="about-new-process">
        <div className="container-main">
          <div className="about-new-process-head about-new-reveal">
            <span className="about-new-label">Nuestra forma de trabajar</span>

            <h2>
              Menos discurso.
              <br />
              Más criterio.
            </h2>
          </div>

          <div className="about-new-process-list">
            {process.map((item) => (
              <article
                className="about-new-process-item"
                key={item.number}
              >
                <span className="about-new-process-number">
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
          INTERLACED CAPABILITIES
      ====================================================== */}

      <section className="about-new-capabilities">
        <div className="about-new-capabilities-sticky">
          <div className="about-new-capabilities-heading">
            <span className="about-new-label">Una visión integrada</span>

            <p>
              La infraestructura, la conectividad y la seguridad no funcionan
              por separado.
            </p>
          </div>

          <div className="about-new-capabilities-list">
            {capabilities.map((item) => (
              <div
                className="about-new-capability"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="about-new-capabilities-footer">
            <h2>
              Todo está conectado.
              <span>Nosotros diseñamos cómo.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* =====================================================
          CULTURE
      ====================================================== */}

      <section className="about-new-culture">
        <div className="container-main">
          <div className="about-new-culture-head about-new-reveal">
            <span className="about-new-label">Cultura técnica</span>
          </div>

          <h2 className="about-new-culture-title">
            <span className="about-new-culture-word">Probamos.</span>
            <span className="about-new-culture-word">Rompemos.</span>
            <span className="about-new-culture-word">Entendemos.</span>
            <span className="about-new-culture-word">Documentamos.</span>
            <span className="about-new-culture-word">
              Volvemos a probar.
            </span>
          </h2>

          <div className="about-new-culture-footer about-new-reveal">
            <div className="about-new-culture-line" />

            <div className="about-new-culture-copy">
              <p>
                Buena parte de lo que sabemos nace del laboratorio, del campo y
                de enfrentarnos a problemas reales.
              </p>

              <p>
                Cuando algo falla, no buscamos únicamente que vuelva a
                funcionar. Buscamos entender por qué ocurrió.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATEMENT
      ====================================================== */}

      <section className="about-new-statement">
        <div className="container-main">
          <div className="about-new-statement-inner about-new-reveal">
            <span className="about-new-label">RTSEC Perú</span>

            <h2>
              Somos una empresa joven.
              <span>
                La experiencia técnica con la que trabajamos no empezó ayer.
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="about-new-cta">
        <div className="container-main">
          <div className="about-new-cta-inner about-new-reveal">
            <span className="about-new-label">Hablemos</span>

            <div className="about-new-cta-content">
              <h2>¿Tienes un reto técnico?</h2>

              <Link href="/contacto" className="about-new-cta-link">
                <span>Cuéntanoslo</span>
                <span className="about-new-cta-arrow">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}