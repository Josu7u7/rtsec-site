"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Precisión",
    text: "Diseñamos con criterio técnico, claridad operativa y foco real en continuidad.",
  },
  {
    title: "Resiliencia",
    text: "Construimos entornos preparados para soportar presión, crecimiento y cambio.",
  },
  {
    title: "Visión",
    text: "No implementamos por tendencia. Elegimos capacidades que sostienen negocio.",
  },
  {
    title: "Confianza",
    text: "Cada decisión debe traducirse en control, visibilidad y seguridad sostenible.",
  },
];

export default function AboutPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-hero-reveal",
        { y: 44, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
        }
      );

      gsap.utils.toArray(".about-reveal").forEach((item, index) => {
        gsap.fromTo(
          item,
          { y: 46, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.95,
            delay: index * 0.03,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 84%",
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".about-identity-image-shell img, .about-values-feature-media img, .about-purpose-visual img",
        { scale: 1.08 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: page,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".about-values-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-values-grid",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-purpose-card",
        { y: 34, opacity: 0, scale: 0.985 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-purpose-grid",
            start: "top 82%",
            once: true,
          },
        }
      );
    }, page);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="about-page">
      <section className="about-hero-section">
        <div className="container-main">
          <div className="about-hero-shell">
            <p className="about-kicker about-hero-reveal">Nosotros</p>

            <h1 className="about-hero-title about-hero-reveal">
              No seguimos la inercia del mercado.
              <span>Diseñamos capacidad, control y ventaja operativa.</span>
            </h1>

            <p className="about-hero-text about-hero-reveal">
              RTSEC integra ciberseguridad, infraestructura y conectividad para
              organizaciones que necesitan operar con criterio, resiliencia y
              dirección clara.
            </p>
          </div>
        </div>
      </section>

      <section className="about-identity-section">
        <div className="container-main">
          <div className="about-section-heading about-reveal">
            <p className="about-kicker">Nuestra identidad</p>
            <h2 className="about-section-title">
              Donde la exigencia técnica se encuentra con visión estratégica.
            </h2>
            <p className="about-section-text">
              No construimos presencia. Construimos capacidad. Diseñamos
              arquitectura, seguridad e infraestructura para entornos donde
              improvisar no es una opción.
            </p>
          </div>

          <div className="about-identity-layout">
            <div className="about-identity-copy about-reveal">
              <div className="about-identity-copy-block">
                <span className="about-copy-label">Lo que nos impulsa</span>
                <p>
                  Convertir complejidad tecnológica en decisiones claras,
                  arquitecturas sólidas y operaciones preparadas para crecer bajo
                  presión.
                </p>
              </div>

              <div className="about-identity-copy-block">
                <span className="about-copy-label">Cómo pensamos</span>
                <p>
                  Cada componente debe responder a una necesidad real del
                  negocio: continuidad, visibilidad, rendimiento, seguridad y
                  escalabilidad.
                </p>
              </div>
            </div>

            <div className="about-identity-image-shell about-reveal">
              <Image
                src="/about-identity-main.jpg"
                alt="Identidad estratégica de RTSEC"
                width={1800}
                height={1200}
                className="about-identity-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="container-main">
          <div className="about-values-top about-reveal">
            <p className="about-kicker">Lo que defendemos</p>
            <h2 className="about-section-title">
              Una forma de operar basada en profundidad, criterio y dirección.
            </h2>
          </div>

          <div className="about-values-feature about-reveal">
            <div className="about-values-feature-media">
              <Image
                src="/about-values-panel.jpg"
                alt="Valores y cultura de RTSEC"
                width={1800}
                height={1200}
                className="about-values-feature-image"
              />
            </div>

            <div className="about-values-feature-copy">
              <span className="about-copy-label">Cultura técnica</span>
              <h3>No vendemos ruido. Diseñamos ventaja real.</h3>
              <p>
                Nuestra cultura se apoya en disciplina técnica, aprendizaje
                continuo y una convicción simple: cada decisión tecnológica debe
                fortalecer control, estabilidad y evolución operativa.
              </p>
            </div>
          </div>

          <div className="about-values-grid">
            {values.map((item, index) => (
              <article key={item.title} className="about-values-card">
                <span className="about-values-card-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-purpose-section">
        <div className="container-main">
          <div className="about-purpose-header about-reveal">
            <p className="about-kicker">Propósito y dirección</p>
            <h2 className="about-section-title">
              Proteger lo que no puede detenerse. Elevar el estándar de cómo operan las organizaciones.
            </h2>
          </div>

          <div className="about-purpose-visual about-reveal">
            <Image
              src="/about-purpose-future.jpg"
              alt="Propósito y visión futura de RTSEC"
              width={1800}
              height={1200}
              className="about-purpose-image"
            />
          </div>

          <div className="about-purpose-grid">
            <article className="about-purpose-card">
              <span className="about-copy-label">Nuestra misión</span>
              <h3>Proteger lo crítico con criterio técnico y visión operativa.</h3>
              <p>
                Ayudamos a las organizaciones a transformar complejidad
                tecnológica en arquitectura, seguridad y conectividad diseñadas
                para sostener continuidad, control y crecimiento.
              </p>
            </article>

            <article className="about-purpose-card">
              <span className="about-copy-label">Nuestra visión</span>
              <h3>Construir entornos más resilientes, más visibles y mejor preparados.</h3>
              <p>
                Queremos elevar la forma en que operan las empresas, integrando
                infraestructura y ciberseguridad como una ventaja real, no como
                un complemento tardío.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="container-main">
          <div className="about-cta-card about-reveal">
            <p className="about-kicker">RTSEC Perú</p>
            <h2>Diseñamos infraestructura y seguridad para organizaciones que exigen más.</h2>
            <p>
              Arquitectura, conectividad y ciberseguridad pensadas para operar
              con control, claridad y resiliencia.
            </p>

            <div className="about-cta-actions">
              <Link href="/contacto" className="about-btn about-btn-primary">
                Hablar con RTSEC
              </Link>
              <Link href="/soluciones" className="about-btn about-btn-secondary">
                Ver soluciones
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}