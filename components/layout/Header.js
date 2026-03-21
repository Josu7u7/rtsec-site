"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavigate = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);
    window.location.href = href;
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
              className="contact-cta desktop-contact-cta"
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
        onClick={() => setMenuOpen(false)}
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
              <span />
              <span />
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