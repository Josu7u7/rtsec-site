"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slidesData = [
  {
    id: "solution-slide-1",
    title: "Red & Acceso Seguro",
    number: "Solución 01",
    image: "/images/red-acceso-seguro.jpg",
    href: "/soluciones#red-acceso-seguro",
    textColor: "#eaf2ff",
  },
  {
    id: "solution-slide-2",
    title: "Data Center & Virtualización",
    number: "Solución 02",
    image: "/images/data-center-virtualizacion.jpg",
    href: "/soluciones#data-center-virtualizacion",
    textColor: "#d9ecff",
  },
  {
    id: "solution-slide-3",
    title: "Identidades & Datos",
    number: "Solución 03",
    image: "/images/identidades-datos.jpg",
    href: "/soluciones#identidades-datos",
    textColor: "#eef4ff",
  },
  {
    id: "solution-slide-4",
    title: "Protección Avanzada",
    number: "Solución 04",
    image: "/images/proteccion-avanzada.jpg",
    href: "/soluciones#proteccion-avanzada",
    textColor: "#fff3ea",
  },
  {
    id: "solution-slide-5",
    title: "Detección & Respuesta",
    number: "Solución 05",
    image: "/images/deteccion-respuesta.jpg",
    href: "/soluciones#deteccion-respuesta",
    textColor: "#f1f6ff",
  },
  {
    id: "solution-slide-6",
    title: "Ciberseguridad Ofensiva",
    number: "Solución 06",
    image: "/images/ciberseguridad-ofensiva.jpg",
    href: "/soluciones#ciberseguridad-ofensiva",
    textColor: "#ffe9d6",
  },
];

export default function SolutionsSliderSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".solution-slide");
      const activeSlideImages = gsap.utils.toArray(".solutions-active-slide img");

      const getInitialTranslateZ = (slide) => {
        const style = window.getComputedStyle(slide);
        const transform = style.transform;

        if (!transform || transform === "none") return 0;

        const matrix3dMatch = transform.match(/matrix3d\((.+)\)/);
        if (matrix3dMatch) {
          const values = matrix3dMatch[1]
            .split(",")
            .map((value) => parseFloat(value.trim()));
          return values[14] || 0;
        }

        return 0;
      };

      const mapRange = (value, inMin, inMax, outMin, outMax) => {
        return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
      };

      activeSlideImages.forEach((img, index) => {
        gsap.set(img, { opacity: index === 0 ? 1 : 0 });
      });

      slides.forEach((slide, index) => {
        const initialZ = getInitialTranslateZ(slide);

        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          onUpdate: (self) => {
            const progress = self.progress;
            const zIncrement = progress * 16000;
            const currentZ = initialZ + zIncrement;

            let opacity = 0;

            if (currentZ <= -3200) {
              opacity = mapRange(currentZ, -6400, -3200, 0, 0.18);
            } else if (currentZ > -3200 && currentZ <= 0) {
              opacity = mapRange(currentZ, -3200, 0, 0.18, 1);
            } else if (currentZ > 0 && currentZ <= 1800) {
              opacity = mapRange(currentZ, 0, 1800, 1, 0);
            }

            opacity = Math.max(0, Math.min(1, opacity));

            slide.style.opacity = opacity;
            slide.style.transform = `translateX(-50%) translateY(-50%) translateZ(${currentZ}px)`;

            const isActive = currentZ > -900 && currentZ < 900;
            slide.style.pointerEvents = isActive ? "auto" : "none";
            slide.style.zIndex = isActive ? "20" : "10";

            if (activeSlideImages[index]) {
              gsap.to(activeSlideImages[index], {
                opacity: isActive ? 1 : 0,
                duration: 1,
                ease: "power3.out",
                overwrite: true,
              });
            }
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="solutions-slider-section">
      <div className="solutions-scene-section">
        <div className="solutions-scene-sticky">
          <div className="solutions-active-slide">
            {slidesData.map((slide) => (
              <Image
                key={`bg-${slide.id}`}
                src={slide.image}
                alt=""
                width={1600}
                height={1000}
                priority={slide.id === "solution-slide-1"}
              />
            ))}
          </div>

          <div className="solutions-slider">
            {slidesData.map((slide) => (
              <Link
                key={slide.id}
                href={slide.href}
                className="solution-slide"
                id={slide.id}
                aria-label={slide.title}
              >
                <div className="solution-slide-copy">
                  <h3
                    className="solution-slide-title"
                    style={{ color: slide.textColor }}
                  >
                    {slide.title}
                  </h3>
                  <p
                    className="solution-slide-index"
                    style={{ color: slide.textColor }}
                  >
                    {slide.number}
                  </p>
                </div>

                <div className="solution-slide-media">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={1600}
                    height={1000}
                    priority={slide.id === "solution-slide-1"}
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="solutions-slider-progress">
            <span>Explora nuestras soluciones</span>
            <span>Scroll para descubrir</span>
          </div>
        </div>
      </div>
    </section>
  );
}