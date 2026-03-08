import Image from "next/image";
import StickyServicesMotion from "./StickyServicesMotion";

const services = [
  {
    number: "01",
    tag: "Estrategia",
    title: "Consultoría & Arquitectura",
    text: "Assessment, discovery, roadmap y diseño HLD/LLD para traducir necesidades críticas en una arquitectura empresarial clara.",
    image: "/images/solution-cloud.jpg",
  },
  {
    number: "02",
    tag: "Ejecución",
    title: "Implementación & Puesta en Marcha",
    text: "Despliegues controlados, integraciones, hardening y validaciones para pasar del diseño a la operación con criterio técnico.",
    image: "/images/solution-infra.jpg",
  },
  {
    number: "03",
    tag: "Operación",
    title: "Servicios Gestionados & Soporte",
    text: "Monitoreo especializado, respuesta operativa, soporte por niveles y evolución continua para sostener la continuidad.",
    image: "/images/solution-cyber.jpg",
  },
  {
    number: "04",
    tag: "Transferencia",
    title: "Formación",
    text: "Capacitación técnica y transferencia de conocimiento para fortalecer equipos, procesos y autonomía operativa.",
    image: "/images/cta-consulting.jpg",
  },
];

export default function StickyServicesSection() {
  const heading = (
    <div className="sticky-services-heading">
      <span className="badge">Cadena de servicio</span>
      <h2
        style={{
          fontSize: "clamp(32px, 5vw, 54px)",
          marginTop: 16,
          marginBottom: 12,
        }}
      >
        Nuestro servicio acompaña toda la cadena.
      </h2>
      <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: 18 }}>
        Desde la estrategia hasta la operación y la formación, con una lógica
        clara, empresarial y escalable.
      </p>
    </div>
  );

  const grid = (
    <div className="sticky-services-grid">
      {services.map((item) => (
        <article key={item.number} className="sticky-service-card">
          <div className="sticky-service-number">{item.number}</div>

          <div className="sticky-service-media">
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="sticky-service-overlay" />
          </div>

          <div className="sticky-service-content">
            <span className="sticky-service-tag">{item.tag}</span>
            <h3 className="sticky-service-title">{item.title}</h3>
            <p className="sticky-service-text">{item.text}</p>
            <a href="#contacto" className="sticky-service-link">
              Explorar servicio
              <span>→</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <section id="servicios" className="section-space">
      <div className="container-main">
        <StickyServicesMotion>{{
          heading,
          grid,
        }}</StickyServicesMotion>
      </div>
    </section>
  );
}