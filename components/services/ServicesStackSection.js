import Image from "next/image";

const services = [
  {
    id: "consultoria-arquitectura",
    eyebrow: "Servicio 01",
    title: "Consultoría y Arquitectura",
    intro:
      "Convertimos requerimientos, riesgos y objetivos del negocio en una arquitectura clara, priorizada y lista para ejecutarse con criterio.",
    image: "/images/Consultoría y Arquitectura.jpg",
    items: [
      "Discovery y assessment de brechas, riesgos y requerimientos",
      "HLD / LLD, dimensionamiento y criterios de decisión",
      "Roadmap por fases y plan de adopción operativa",
    ],
  },
  {
    id: "implementacion-integracion",
    eyebrow: "Servicio 02",
    title: "Implementación e Integración",
    intro:
      "Llevamos la estrategia a producción con orden técnico, control operativo y validación real para que la adopción sea segura y sostenible.",
    image: "/images/Implementación e Integración.jpg",
    items: [
      "Plan de despliegue con pre-checks, respaldos y rollback",
      "Hardening e integraciones con AD, IdP, SIEM, ITSM, correo, APIs, PKI y NTP",
      "Pruebas HA / DR / UAT, documentación y handover operativo",
    ],
  },
  {
    id: "soporte-mantenimiento",
    eyebrow: "Servicio 03",
    title: "Soporte y Mantenimiento (SLA)",
    intro:
      "Sostenemos la operación con soporte escalonado, ajustes continuos y visibilidad de servicio para reducir fricción y mantener estabilidad.",
    image: "/images/Soporte y Mantenimiento.jpg",
    items: [
      "Atención por niveles L1 / L2 / L3 con SLA y escalamiento",
      "Parches, tuning, cambios menores y RCA",
      "Reportes periódicos y control mediante ITSM y tickets",
    ],
  },
  {
    id: "servicios-gestionados",
    eyebrow: "Servicio 04",
    title: "Servicios Gestionados (SOC/NOC)",
    intro:
      "Monitoreamos y respondemos de forma continua para entregar visibilidad operativa, capacidad de contención y mejora constante.",
    image: "/images/Servicios Gestionados (SOC:NOC).jpg",
    items: [
      "Monitoreo 24/7 y gestión de eventos e incidentes con SLAs",
      "Respuesta y contención basadas en playbooks",
      "KPIs, reportes ejecutivos y mejora continua de cobertura",
    ],
  },
  {
    id: "gestion-exposicion",
    eyebrow: "Servicio 05",
    title: "Gestión de Exposición (VM/ASM)",
    intro:
      "Ayudamos a identificar exposición real, priorizar lo crítico y cerrar brechas con enfoque continuo sobre vulnerabilidad y superficie de ataque.",
    image: "/images/Gestión de Exposición (VM:ASM).jpg",
    items: [
      "Escaneo continuo con priorización por criticidad y exposición",
      "Integración con ITSM y SLAs de remediación",
      "Verificación de cierre con re-scans y reporting",
    ],
  },
];

export default function ServicesStackSection() {
  return (
    <main className="services-page">
      <section className="services-page-hero">
        <div className="container-main">
          <p className="services-page-kicker">Servicios especializados</p>
          <h1 className="services-page-title">
            Ejecución técnica, acompañamiento operativo y mejora continua.
          </h1>
          <p className="services-page-text">
            Diseñamos, implementamos y sostenemos capacidades tecnológicas con
            enfoque en riesgo, continuidad y operación real.
          </p>
        </div>
      </section>

      <section className="services-page-index">
        <div className="container-main">
          <div className="services-page-index-grid">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="services-page-index-link"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="services-detail-blocks">
        <div className="container-main">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className={`services-detail-block ${
                index % 2 !== 0 ? "is-reverse" : ""
              }`}
            >
              <div className="services-detail-block-copy">
                <p className="services-detail-block-eyebrow">{service.eyebrow}</p>
                <h2 className="services-detail-block-title">{service.title}</h2>
                <p className="services-detail-block-intro">{service.intro}</p>

                <ul className="services-detail-block-list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="services-detail-block-media">
                <div className="services-detail-block-image-shell">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1600}
                    height={1000}
                    className="services-detail-block-image"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}