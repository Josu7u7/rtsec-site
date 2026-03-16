"use client";

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

  return (
    <header className="site-header">
      <div className="container-main">
        <div className="header-inner">
          <a href="/" className="brand-mark" aria-label="RTSEC Perú">
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

          <a href="/contacto" className="contact-cta" aria-label="Contáctanos">
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
        </div>
      </div>
    </header>
  );
}