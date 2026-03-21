"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const cleanupBeforeNavigate = () => {
    try {
      document.body.style.overflow = "";

      ScrollTrigger.getAll().forEach((trigger) => {
        try {
          trigger.kill(true);
        } catch {}
      });

      document.querySelectorAll(".pin-spacer").forEach((spacer) => {
        try {
          const parent = spacer.parentNode;
          if (!parent) return;

          while (spacer.firstChild) {
            parent.insertBefore(spacer.firstChild, spacer);
          }

          parent.removeChild(spacer);
        } catch {}
      });
    } catch {}
  };

  const handleNavigate = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);
    cleanupBeforeNavigate();
    window.location.href = href;
  };

  const handleOverlayClose = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container-main">
        <div className="header-inner">
          <a
            href="/"
            className="brand-mark"
            aria-label="RTSEC Perú"
            onClick={(e) => handleNavigate(e, "/")}
          >
            <Image
              src="/images/rtsec-logo.svg"
              alt="RTSEC Perú"
              width={500}
              height={500}
              className="brand-logo"
              priority
            />
          </a>

          <nav className="main-nav" aria-label="Principal">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isActive ? "is-active" : ""}`}
                  onClick={(e) => handleNavigate(e, item.href)}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="header-actions">
            <a
              href="/contacto"
              className="contact-cta"
              aria-label="Contáctanos"
              onClick={(e) => handleNavigate(e, "/contacto")}
            >
              <span className="contact-cta-outline" />
              <span className="contact-cta-inner">
                <span className="contact-cta-icon">→</span>

                <span className="contact-cta-text">
                  <span style={{ "--i": 0 }}>C</span>
                  <span style={{ "--i": 1 }}>o</span>
                  <span style={{ "--i": 2 }}>n</span>
                  <span style={{ "--i": 3 }}>t</span>
                  <span style={{ "--i": 4 }}>á</span>
                  <span style={{ "--i": 5 }}>c</span>
                  <span style={{ "--i": 6 }}>t</span>
                  <span style={{ "--i": 7 }}>a</span>
                  <span style={{ "--i": 8 }}>n</span>
                  <span style={{ "--i": 9 }}>o</span>
                  <span style={{ "--i": 10 }}>s</span>
                </span>
              </span>
            </a>

            <button
              type="button"
              className={`mobile-menu-toggle ${menuOpen ? "is-open" : ""}`}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`mobile-nav-overlay ${menuOpen ? "is-open" : ""}`}
        onClick={handleOverlayClose}
      >
        <div
          className={`mobile-nav-panel ${menuOpen ? "is-open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-nav-top">
            <a
              href="/"
              className="mobile-nav-brand"
              aria-label="RTSEC Perú"
              onClick={(e) => handleNavigate(e, "/")}
            >
              <Image
                src="/images/rtsec-logo.svg"
                alt="RTSEC Perú"
                width={500}
                height={500}
                className="mobile-nav-logo"
              />
            </a>

            <button
              type="button"
              className="mobile-nav-close"
              aria-label="Cerrar menú"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          <nav className="mobile-nav-links" aria-label="Menú móvil">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? "is-active" : ""}`}
                  onClick={(e) => handleNavigate(e, item.href)}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}

            <a
              href="/contacto"
              className="mobile-nav-cta"
              onClick={(e) => handleNavigate(e, "/contacto")}
            >
              Contáctanos
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}