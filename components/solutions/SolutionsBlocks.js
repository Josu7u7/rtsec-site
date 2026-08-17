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
      "Routing / Switching",
      "Wi-Fi Empresarial",
      "Balanceo de Aplicaciones y Cargas (L4/L7)",
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
      "Protección de Aplicaciones Web (WAF)",
      "Data Loss Prevention (DLP)",
      "XDR / EDR / NDR",
      "Seguridad de Bases de Datos (DB Security)",
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
      "Backup y Restore",
    ],
  },
];

export default function SolutionsBlocks() {
  return (
    <main className="solutions-page">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="solutions-page-hero">
        <div className="container-main">
          <p className="solutions-page-kicker">
            Soluciones empresariales
          </p>

          <h1 className="solutions-page-title">
            Capacidades diseñadas para proteger, conectar y sostener la operación.
          </h1>

          <p className="solutions-page-text">
            Integramos infraestructura, conectividad, seguridad y continuidad
            para responder a necesidades reales de la operación.
          </p>
        </div>
      </section>

      {/* =====================================================
          INDEX
      ====================================================== */}

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

      {/* =====================================================
          SOLUTION BLOCKS
      ====================================================== */}

      <section className="solutions-blocks">
        <div className="container-main">
          {solutions.map((solution, index) => (
            <article
              key={solution.id}
              id={solution.id}
              className={`solution-block ${
                index % 2 !== 0 ? "is-reverse" : ""
              }`}
            >
              {/* COPY */}

              <div className="solution-block-copy">
                <p className="solution-block-eyebrow">
                  {solution.eyebrow}
                </p>

                <h2 className="solution-block-title">
                  {solution.title}
                </h2>

                <p className="solution-block-intro">
                  {solution.intro}
                </p>

                <ul className="solution-block-list">
                  {solution.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* IMAGE */}

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