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
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (menuOpen) {
      body.classList.add("mobile-menu-open");
      html.classList.add("mobile-menu-open");
    } else {
      body.classList.remove("mobile-menu-open");
      html.classList.remove("mobile-menu-open");
    }

    return () => {
      body.classList.remove("mobile-menu-open");
      html.classList.remove("mobile-menu-open");
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="container-main">
          <div className="header-inner">
            <a href="/" className="brand-mark" aria-label="RTSEC Perú" onClick={closeMenu}>
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
                  >
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="header-actions">
              <a href="/contacto" className="contact-cta desktop-contact-cta" aria-label="Contáctanos">
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
                aria-controls="mobile-navigation"
                onClick={toggleMenu}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`mobile-nav-overlay ${menuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      >
        <aside
          id="mobile-navigation"
          className={`mobile-nav-panel ${menuOpen ? "is-open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-nav-top">
            <a href="/" className="mobile-nav-brand" aria-label="RTSEC Perú" onClick={closeMenu}>
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
              onClick={closeMenu}
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
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mobile-nav-bottom">
            <a href="/contacto" className="mobile-nav-cta" onClick={closeMenu}>
              Contáctanos
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}