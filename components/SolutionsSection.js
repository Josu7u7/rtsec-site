import Image from "next/image";
import RevealUp from "./RevealUp";

const solutions = [
  {
    title: "Ciberseguridad",
    text: "Prevenimos, detectamos y fortalecemos la postura de seguridad con una visión integral del riesgo.",
    image: "/images/solution-cyber.jpg",
    badge: "Defense",
  },
  {
    title: "Infraestructura",
    text: "Construimos entornos sólidos, escalables y listos para sostener operaciones críticas.",
    image: "/images/solution-infra.jpg",
    badge: "Infrastructure",
  },
  {
    title: "Conectividad & Cloud",
    text: "Integramos redes, acceso seguro y cloud con foco en rendimiento, resiliencia y continuidad.",
    image: "/images/solution-cloud.jpg",
    badge: "Network / Cloud",
  },
];

export default function SolutionsSection() {
  return (
    <section id="soluciones" className="section-space">
      <div className="container-main">
        <RevealUp>
          <div style={{ maxWidth: 760, marginBottom: 36 }}>
            <span className="badge">Dominios clave</span>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 54px)",
                marginTop: 16,
                marginBottom: 12,
              }}
            >
              Lo hacemos desde tres dominios clave.
            </h2>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: 18 }}>
              Ciberseguridad, infraestructura y conectividad/cloud como una
              propuesta empresarial unificada.
            </p>
          </div>
        </RevealUp>

        <div className="solutions-grid">
          {solutions.map((item, index) => (
            <RevealUp key={item.title} delay={index * 0.08}>
              <article className="solution-card">
                <div className="solution-media">
                  <span className="solution-badge">{item.badge}</span>

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />

                  <div className="solution-overlay" />
                </div>

                <div className="solution-content">
                  <h3 className="solution-title">{item.title}</h3>
                  <p className="solution-text">{item.text}</p>

                  <a href="#contacto" className="solution-link">
                    Más información
                    <span>→</span>
                  </a>
                </div>
              </article>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  );
}