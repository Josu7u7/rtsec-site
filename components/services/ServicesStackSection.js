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
      "Evaluación de necesidades, riesgos y oportunidades de mejora",
      "Diseño de arquitectura y definición de alcance",
      "Dimensionamiento y criterios de decisión",
      "Hoja de ruta por fases para una adopción ordenada",
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
      "Plan de despliegue con validaciones previas, respaldos y rollback",
      "Configuración segura e integración con plataformas clave de la operación",
      "Pruebas de disponibilidad, DR recuperación y UAT validación operativa",
      "Documentación técnica y transferencia ordenada hacia la operación",
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
      "Actualizaciones, ajustes y optimización continua",
      "RCA - Análisis de causa raíz ante incidentes relevantes",
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
      "Monitoreo continuo y gestión de eventos e incidentes",
      "Respuesta y contención basadas en procedimientos definidos",
      "Indicadores, reportes ejecutivos y mejora continua",
      "Operación parcial o total de capacidades críticas",
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