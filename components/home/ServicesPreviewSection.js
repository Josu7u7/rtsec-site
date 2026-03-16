"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "consultoria-arquitectura",
    eyebrow: "Servicio 01",
    title: "Consultoría y Arquitectura",
    description:
      "Definimos la ruta correcta antes de implementar. Evaluamos brechas, riesgos y requerimientos para convertir necesidades del negocio en decisiones técnicas claras.",
    image: "/images/Consultoría y Arquitectura.jpg",
    href: "/servicios#consultoria-arquitectura",
  },
  {
    id: "implementacion-integracion",
    eyebrow: "Servicio 02",
    title: "Implementación e Integración",
    description:
      "Llevamos la estrategia a producción con orden, validación y control. Cada despliegue se ejecuta con criterio operativo, pruebas y capacidad de reversa.",
    image: "/images/Implementación e Integración.jpg",
    href: "/servicios#implementacion-integracion",
  },
  {
    id: "soporte-mantenimiento",
    eyebrow: "Servicio 03",
    title: "Soporte y Mantenimiento (SLA)",
    description:
      "Sostenemos la operación con atención escalonada, ajustes continuos y control técnico, manteniendo estabilidad, trazabilidad y tiempos de respuesta claros.",
    image: "/images/Soporte y Mantenimiento.jpg",
    href: "/servicios#soporte-mantenimiento",
  },
  {
    id: "servicios-gestionados",
    eyebrow: "Servicio 04",
    title: "Servicios Gestionados (SOC/NOC)",
    description:
      "Monitoreamos, analizamos y respondemos de forma continua para dar visibilidad operativa y reducir el impacto de incidentes sobre el negocio.",
    image: "/images/Servicios Gestionados (SOC:NOC).jpg",
    href: "/servicios#servicios-gestionados",
  },
  {
    id: "gestion-exposicion",
    eyebrow: "Servicio 05",
    title: "Gestión de Exposición (VM/ASM)",
    description:
      "Identificamos exposición real, priorizamos lo crítico y ayudamos a cerrar brechas con una visión continua sobre vulnerabilidad y superficie de ataque.",
    image: "/images/Gestión de Exposición (VM:ASM).jpg",
    href: "/servicios#gestion-exposicion",
  },
];

export default function ServicesPreviewSection() {
  const sectionRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    ctxRef.current = gsap.context(() => {
      const rows = gsap.utils.toArray(".services-preview-row");

      rows.forEach((row) => {
        const copy = row.querySelector(".services-preview-copy");
        const media = row.querySelector(".services-preview-image-shell");
        const mediaInner = row.querySelector(".services-preview-image-inner");
        const image = row.querySelector(".services-preview-image");

        if (!copy || !media || !mediaInner || !image) return;

        gsap.set(copy, { y: 32, opacity: 0 });
        gsap.set(media, { y: 36, opacity: 0 });
        gsap.set(mediaInner, { clipPath: "inset(0 100% 0 0 round 28px)" });
        gsap.set(image, { scale: 1.08 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 82%",
            end: "top 42%",
            scrub: 0.9,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          copy,
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
          },
          0
        )
          .to(
            media,
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
            },
            0.02
          )
          .to(
            mediaInner,
            {
              clipPath: "inset(0 0% 0 0 round 28px)",
              ease: "power2.out",
            },
            0.02
          )
          .to(
            image,
            {
              scale: 1,
              ease: "power2.out",
            },
            0.02
          );

        ScrollTrigger.create({
          trigger: row,
          start: "top 70%",
          end: "bottom 30%",
          onEnter: () => row.classList.add("is-active"),
          onEnterBack: () => row.classList.add("is-active"),
          onLeave: () => row.classList.remove("is-active"),
          onLeaveBack: () => row.classList.remove("is-active"),
        });
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, section);

    return () => {
      try {
        ctxRef.current?.revert();
      } catch {}
      ctxRef.current = null;
    };
  }, []);

  return (
    <section ref={sectionRef} className="services-preview-section">
      <div className="container-main">
        <div className="services-preview-list">
          {services.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className="services-preview-row"
            >
              <div className="services-preview-copy">
                <div className="services-preview-copy-top">
                  <p className="services-preview-eyebrow">{service.eyebrow}</p>
                  <h2 className="services-preview-title">{service.title}</h2>
                </div>

                <p className="services-preview-text">{service.description}</p>
              </div>

              <div className="services-preview-image-col">
                <div className="services-preview-image-shell">
                  <div className="services-preview-image-inner">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1600}
                      height={1000}
                      className="services-preview-image"
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}