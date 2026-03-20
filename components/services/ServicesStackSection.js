import Image from "next/image";

const services = [
  {
    id: "consultoria-arquitectura",
    eyebrow: "Servicio 01",
    title: "Consultoría y Arquitectura",
    intro:
      "Definimos el estado actual, identificamos brechas y diseñamos la ruta técnica más adecuada para la organización.",
    image: "/images/Consultoría y Arquitectura.jpg",
    items: [
      "Discovery y Assessment de brechas, riesgos y requerimientos",
      "High-Level Design (HLD) y Low-Level Design (LLD)",
      "Dimensionamiento y criterios de decisión",
      "Roadmap por fases y plan de adopción operativa",
    ],
  },
  {
    id: "implementacion-integracion",
    eyebrow: "Servicio 02",
    title: "Implementación e Integración",
    intro:
      "Ejecutamos despliegues controlados, seguros y alineados a la operación del cliente, integrando correctamente las capacidades tecnológicas necesarias.",
    image: "/images/Implementación e Integración.jpg",
    items: [
      "Plan de despliegue con pre-checks, respaldos y rollback",
      "Hardening e integraciones con AD, IdP, SIEM, ITSM, correo, APIs, PKI y NTP",
      "Pruebas HA / DR / UAT",
      "Documentación y handover operativo",
    ],
  },
  {
    id: "soporte-mantenimiento-especializado",
    eyebrow: "Servicio 03",
    title: "Soporte y Mantenimiento Especializado",
    intro:
      "Aseguramos la estabilidad, actualización y mejora continua de plataformas críticas mediante soporte técnico experto.",
    image: "/images/Soporte y Mantenimiento.jpg",
    items: [
      "Atención por niveles L1 / L2 / L3 con SLA y escalamiento",
      "Parches, actualizaciones, tuning y cambios menores",
      "RCA (Root Cause Analysis)",
      "Reportes periódicos y control mediante ITSM / tickets",
    ],
  },
  {
    id: "servicios-gestionados",
    eyebrow: "Servicio 04",
    title: "Servicios Gestionados",
    intro:
      "Operamos capacidades específicas de monitoreo, detección, respuesta o infraestructura para reducir carga interna y mejorar la ejecución continua.",
    image: "/images/Servicios Gestionados (SOC:NOC).jpg",
    items: [
      "Monitoreo 24/7 y gestión de eventos e incidentes",
      "Respuesta y contención basadas en playbooks y runbooks",
      "KPIs, reportes ejecutivos y mejora continua de cobertura",
      "Operación parcial o total de capacidades definidas",
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
                <p className="services-detail-block-eyebrow">
                  {service.eyebrow}
                </p>
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