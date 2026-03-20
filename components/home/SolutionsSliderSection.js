"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slidesData = [
  {
    id: "solution-slide-1",
    title: "Infraestructura y Conectividad Segura",
    number: "01",
    image: "/images/red-acceso-seguro.jpg",
    href: "/soluciones#infraestructura-conectividad-segura",
  },
  {
    id: "solution-slide-2",
    title: "Ciberseguridad y Protección",
    number: "02",
    image: "/images/proteccion-avanzada.jpg",
    href: "/soluciones#ciberseguridad-proteccion",
  },
  {
    id: "solution-slide-3",
    title: "Data Center, Respaldo y Continuidad",
    displayTitle: ["Data Center, Respaldo", "y Continuidad"],
    number: "03",
    image: "/images/data-center-virtualizacion.jpg",
    href: "/soluciones#data-center-respaldo-continuidad",
  },
  {
    id: "solution-slide-4",
    title: "Visibilidad, Detección y Respuesta",
    number: "04",
    image: "/images/deteccion-respuesta.jpg",
    href: "/soluciones#visibilidad-deteccion-respuesta",
  },
];

export default function SolutionsSliderSection() {
  const rootRef = useRef(null);
  const currentRef = useRef(null);
  const titleRef = useRef(null);
  const numberRef = useRef(null);

  const ctxRef = useRef(null);
  const timelineRef = useRef(null);
  const resizeHandlerRef = useRef(null);
  const resizeTimerRef = useRef(null);

  const removeListeners = () => {
    if (resizeTimerRef.current) {
      clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = null;
    }

    if (resizeHandlerRef.current) {
      window.removeEventListener("resize", resizeHandlerRef.current);
      resizeHandlerRef.current = null;
    }
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    ctxRef.current = gsap.context(() => {
      const cards = gsap.utils.toArray(".solutions-visual-card");
      const bgs = gsap.utils.toArray(".solutions-bg-layer");
      const progressFill = root.querySelector(".solutions-progress-fill");

      if (!cards.length || !bgs.length || !progressFill) return;

      const setActiveMeta = (index) => {
        const item = slidesData[index];
        if (!item) return;

        if (titleRef.current) {
          if (item.displayTitle?.length) {
            titleRef.current.innerHTML = item.displayTitle
              .map(
                (line) =>
                  `<span class="solutions-slider-title-line">${line}</span>`
              )
              .join("");
          } else {
            titleRef.current.innerHTML = `<span class="solutions-slider-title-line">${item.title}</span>`;
          }
        }

        if (numberRef.current) {
          numberRef.current.textContent = `Solución ${item.number}`;
        }

        if (currentRef.current) {
          currentRef.current.textContent = item.number;
        }

        cards.forEach((card, i) => {
          card.style.pointerEvents = i === index ? "auto" : "none";
          card.style.zIndex = i === index ? "5" : i < index ? "1" : "3";
        });

        gsap.set(progressFill, {
          scaleX: (index + 1) / slidesData.length,
        });
      };

      gsap.set(cards, {
        autoAlpha: 0,
        scale: 0.94,
        y: 26,
        rotationX: -5,
        force3D: true,
        transformOrigin: "center center",
      });

      gsap.set(bgs, {
        autoAlpha: 0,
        scale: 1.06,
        force3D: true,
      });

      gsap.set(cards[0], {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        rotationX: 0,
        zIndex: 5,
      });

      gsap.set(bgs[0], {
        autoAlpha: 1,
        scale: 1,
      });

      gsap.set(progressFill, {
        scaleX: 1 / slidesData.length,
        transformOrigin: "left center",
      });

      setActiveMeta(0);

      timelineRef.current = gsap.timeline({
        defaults: {
          ease: "power2.inOut",
          duration: 1,
        },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: `+=${slidesData.length * 820}`,
          scrub: 0.8,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          onUpdate: (self) => {
            const index = Math.max(
              0,
              Math.min(
                slidesData.length - 1,
                Math.round(self.progress * (slidesData.length - 1))
              )
            );
            setActiveMeta(index);
          },
        },
      });

      for (let i = 0; i < cards.length - 1; i += 1) {
        const currentCard = cards[i];
        const nextCard = cards[i + 1];
        const currentBg = bgs[i];
        const nextBg = bgs[i + 1];

        timelineRef.current
          .to(
            currentCard,
            {
              autoAlpha: 0,
              scale: 0.95,
              y: -16,
              rotationX: 3,
            },
            `step-${i}`
          )
          .fromTo(
            nextCard,
            {
              autoAlpha: 0,
              scale: 0.94,
              y: 26,
              rotationX: -5,
            },
            {
              autoAlpha: 1,
              scale: 1,
              y: 0,
              rotationX: 0,
            },
            `step-${i}`
          )
          .to(
            currentBg,
            {
              autoAlpha: 0,
              scale: 1.04,
            },
            `step-${i}`
          )
          .fromTo(
            nextBg,
            {
              autoAlpha: 0,
              scale: 1.06,
            },
            {
              autoAlpha: 1,
              scale: 1,
            },
            `step-${i}`
          );
      }

      resizeHandlerRef.current = () => {
        if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);

        resizeTimerRef.current = setTimeout(() => {
          try {
            ScrollTrigger.refresh();
          } catch {}
        }, 180);
      };

      window.addEventListener("resize", resizeHandlerRef.current);
    }, root);

    return () => {
      removeListeners();

      try {
        timelineRef.current?.scrollTrigger?.kill();
      } catch {}

      try {
        timelineRef.current?.kill();
      } catch {}

      timelineRef.current = null;

      try {
        ctxRef.current?.revert();
      } catch {}

      ctxRef.current = null;
    };
  }, []);

  const handleNavigate = (href) => {
    window.location.href = href;
  };

  return (
    <section ref={rootRef} className="solutions-slider-section">
      <div className="solutions-slider-bg">
        {slidesData.map((slide) => (
          <div key={slide.id} className="solutions-bg-layer">
            <Image
              src={slide.image}
              alt=""
              fill
              priority={slide.id === "solution-slide-1"}
              sizes="100vw"
            />
          </div>
        ))}
        <div className="solutions-slider-bg-overlay" />
      </div>

      <div className="container-main solutions-slider-frame">
        <div className="solutions-slider-topbar">
          <span className="solutions-slider-kicker">
            Explora nuestras soluciones
          </span>

          <div className="solutions-slider-counter">
            <span ref={currentRef}>01</span>
            <span>/</span>
            <span>04</span>
          </div>
        </div>

        <div className="solutions-slider-title-wrap">
          <span ref={numberRef} className="solutions-slider-title-number">
            Solución 01
          </span>

          <h2 ref={titleRef} className="solutions-slider-title">
            <span className="solutions-slider-title-line">
              Infraestructura y Conectividad Segura
            </span>
          </h2>
        </div>

        <div className="solutions-slider-stage">
          {slidesData.map((slide) => (
            <button
              key={slide.id}
              type="button"
              className="solutions-visual-card"
              aria-label={slide.title}
              onClick={() => handleNavigate(slide.href)}
            >
              <div className="solutions-visual-card-media">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={slide.id === "solution-slide-1"}
                  sizes="(max-width: 768px) 92vw, 72vw"
                />
              </div>

              <div className="solutions-visual-card-overlay" />
              <span className="solutions-visual-card-chip">
                RTSEC Active View
              </span>
            </button>
          ))}
        </div>

        <div className="solutions-slider-bottombar">
          <div className="solutions-progress-track">
            <div className="solutions-progress-fill" />
          </div>

          <span className="solutions-slider-scroll-label">
            Scroll para descubrir
          </span>
        </div>
      </div>
    </section>
  );
}