import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    id: "infraestructura-conectividad-segura",
    eyebrow: "Solución 01",
    title: "Infraestructura y Conectividad Segura",
    intro:
      "Soluciones orientadas a garantizar conectividad, disponibilidad, rendimiento y acceso seguro entre usuarios, sedes, aplicaciones y servicios críticos.",
    image: "/images/red-acceso-seguro.jpg",
    items: [
      "SASE / SSE",
      "SD-WAN",
      "Routers",
      "Switching Campus y Data Center",
      "Wi-Fi Empresarial",
      "Controladoras LAN/WLAN",
      "Balanceo de Aplicaciones y Cargas (L4/L7)",
      "Optimización de Tráfico, QoS y Application-Aware Networking",
      "ZTNA para Acceso Seguro",
    ],
  },
  {
    id: "ciberseguridad-proteccion",
    eyebrow: "Solución 02",
    title: "Ciberseguridad y Protección",
    intro:
      "Soluciones orientadas a prevenir amenazas, controlar accesos, proteger información y reducir la superficie de riesgo en usuarios, redes, aplicaciones y servicios.",
    image: "/images/proteccion-avanzada.jpg",
    items: [
      "Next-Generation Firewalls (NGFW)",
      "Protección de Correo y Colaboración",
      "Protección de Aplicaciones Web y APIs (WAF / WAAP)",
      "Protección DDoS",
      "Seguridad de Redes IT / IoT",
      "Segmentación y Visibilidad",
      "Data Loss Prevention (DLP)",
      "Identity and Access Management (IAM)",
      "Privileged Access Management (PAM)",
      "Seguridad de Bases de Datos (DB Security / DAM)",
    ],
  },
  {
    id: "data-center-respaldo-continuidad",
    eyebrow: "Solución 03",
    title: "Data Center, Respaldo y Continuidad",
    intro:
      "Soluciones orientadas a asegurar la disponibilidad de plataformas, la resiliencia operativa, la recuperación de servicios y la evolución de la infraestructura central.",
    image: "/images/data-center-virtualizacion.jpg",
    items: [
      "Servidores Blade y Rack",
      "Hiperconvergencia (HCI)",
      "Virtualización de Servidores",
      "Almacenamiento y Resguardo de Información (SAN / NAS)",
      "Backup y Recuperación",
      "Estrategias de Continuidad basadas en RPO / RTO",
    ],
  },
  {
    id: "visibilidad-deteccion-respuesta",
    eyebrow: "Solución 04",
    title: "Visibilidad, Detección y Respuesta",
    intro:
      "Soluciones orientadas a detectar amenazas, responder con rapidez, reducir exposición y fortalecer la capacidad de monitoreo y defensa.",
    image: "/images/deteccion-respuesta.jpg",
    items: [
      "Next-Generation SIEM",
      "XDR / EDR / NDR",
      "SOAR",
      "Threat Intelligence",
      "MDR / CyberSOC",
      "Análisis Forense Digital",
      "Gestión de Vulnerabilidades",
      "Attack Surface Management (ASM / EASM)",
      "Pentest de Red Interno y Externo",
      "Phishing Simulation",
    ],
  },
];

export default function SolutionsBlocks() {
  return (
    <main className="solutions-page">
      <section className="solutions-page-hero">
        <div className="container-main">
          <p className="solutions-page-kicker">Soluciones empresariales</p>
          <h1 className="solutions-page-title">
            Capacidades diseñadas para proteger, conectar y sostener la operación.
          </h1>
          <p className="solutions-page-text">
            Una arquitectura sólida no se define por una sola herramienta, sino por
            cómo cada capacidad responde al riesgo, al rendimiento y a la continuidad
            del negocio.
          </p>
        </div>
      </section>

      <section className="solutions-page-index">
        <div className="container-main">
          <div className="solutions-page-index-grid">
            {solutions.map((solution) => (
              <Link
                key={solution.id}
                href={`/soluciones#${solution.id}`}
                className="solutions-page-index-link"
              >
                {solution.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-blocks">
        <div className="container-main">
          {solutions.map((solution, index) => (
            <article
              key={solution.id}
              id={solution.id}
              className={`solution-block ${index % 2 !== 0 ? "is-reverse" : ""}`}
            >
              <div className="solution-block-copy">
                <p className="solution-block-eyebrow">{solution.eyebrow}</p>
                <h2 className="solution-block-title">{solution.title}</h2>
                <p className="solution-block-intro">{solution.intro}</p>

                <ul className="solution-block-list">
                  {solution.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="solution-block-media">
                <div className="solution-block-image-shell">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={1600}
                    height={1000}
                    className="solution-block-image"
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