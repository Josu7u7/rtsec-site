"use client";

import Link from "next/link";

const servicesMenu = [
  {
    title: "Consultoría y Arquitectura",
    desc: "Assessment, roadmap y diseño técnico.",
    href: "/servicios/consultoria-arquitectura",
  },
  {
    title: "Implementación e Integración",
    desc: "Despliegue, integración y hardening.",
    href: "/servicios/implementacion-integracion",
  },
  {
    title: "Soporte y Mantenimiento (SLA)",
    desc: "Atención continua y evolución operativa.",
    href: "/servicios/soporte-mantenimiento",
  },
  {
    title: "Servicios Gestionados (SOC/NOC)",
    desc: "Monitoreo, operación y respuesta.",
    href: "/servicios/servicios-gestionados",
  },
  {
    title: "Gestión de Exposición (VM/ASM)",
    desc: "Visibilidad y reducción de superficie de ataque.",
    href: "/servicios/gestion-exposicion",
  },
];

const solutionsMenu = [
  {
    title: "Red & Acceso Seguro",
    desc: "Conectividad, segmentación y acceso protegido.",
    href: "/soluciones/red-acceso-seguro",
  },
  {
    title: "Data Center & Virtualización",
    desc: "Continuidad, rendimiento y resiliencia.",
    href: "/soluciones/data-center-virtualizacion",
  },
  {
    title: "Identidades & Datos",
    desc: "Control de acceso y protección de información.",
    href: "/soluciones/identidades-datos",
  },
  {
    title: "Protección Avanzada",
    desc: "Defensa multicapa para entornos críticos.",
    href: "/soluciones/proteccion-avanzada",
  },
  {
    title: "Detección & Respuesta",
    desc: "Correlación, monitoreo y contención.",
    href: "/soluciones/deteccion-respuesta",
  },
  {
    title: "Ciberseguridad Ofensiva",
    desc: "Validación técnica y simulación controlada.",
    href: "/soluciones/ciberseguridad-ofensiva",
  },
];

function DropdownMenu({ label, items, href }) {
  return (
    <div className="nav-dropdown">
      <Link href={href} className="nav-link nav-link-dropdown">
        <span>{label}</span>
        <span className="nav-caret">+</span>
      </Link>

      <div className="nav-dropdown-panel">
        <div className="nav-dropdown-inner">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="nav-dropdown-item">
              <div className="nav-dropdown-item-line" />
              <div>
                <div className="nav-dropdown-item-title">{item.title}</div>
                <div className="nav-dropdown-item-desc">{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="container-main header-inner">
        <Link href="/" className="brand-mark">
          <span className="brand-main">RTSEC</span>
          <span className="brand-sub">Perú</span>
        </Link>

        <nav className="main-nav">
          <Link href="/" className="nav-link">
            <span>Inicio</span>
          </Link>

          <Link href="/nosotros" className="nav-link">
            <span>Nosotros</span>
          </Link>

          <DropdownMenu
            label="Servicios"
            href="/servicios/consultoria-arquitectura"
            items={servicesMenu}
          />

          <DropdownMenu
            label="Soluciones"
            href="/soluciones/red-acceso-seguro"
            items={solutionsMenu}
          />

          <Link href="/blog" className="nav-link">
            <span>Blog</span>
          </Link>
        </nav>

        <Link href="/contacto" className="contact-cta">
          <span className="contact-cta-outline" />
          <span className="contact-cta-inner">
            <span className="contact-cta-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M14.22 21.63C13.04 21.63 11.37 20.8 10.05 16.83L9.33 14.67L7.17 13.95C3.21 12.63 2.38 10.96 2.38 9.78C2.38 8.61 3.21 6.93 7.17 5.6L15.66 2.77C17.78 2.06 19.55 2.27 20.64 3.35C21.73 4.43 21.94 6.21 21.23 8.33L18.4 16.82C17.07 20.8 15.4 21.63 14.22 21.63Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10.11 14.4L14.22 10.29"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>

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
        </Link>
      </div>
    </header>
  );
}