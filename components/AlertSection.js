import Image from "next/image";
import RevealUp from "./RevealUp";

const solutions = [
  {
    title: "Ciberseguridad",
    text: "Prevenimos, detectamos y fortalecemos la postura de seguridad con una visión integral del riesgo.",
    image: "/images/solution-cyber.jpg",
  },
  {
    title: "Infraestructura",
    text: "Construimos entornos sólidos, escalables y listos para sostener operaciones críticas.",
    image: "/images/solution-infra.jpg",
  },
  {
    title: "Conectividad & Cloud",
    text: "Integramos redes, acceso seguro y cloud con foco en rendimiento, resiliencia y continuidad.",
    image: "/images/solution-cloud.jpg",
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

        <div className="grid-3">
          {solutions.map((item, index) => (
            <RevealUp key={item.title} delay={index * 0.08}>
              <article
                className="card"
                style={{
                  overflow: "hidden",
                  transition: "transform .25s ease, box-shadow .25s ease",
                }}
              >
                <div style={{ position: "relative", height: 320 }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div style={{ padding: 22 }}>
                  <h3 style={{ fontSize: 26, marginBottom: 10 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: 15 }}>
                    {item.text}
                  </p>
                  <a
                    href="#contacto"
                    style={{
                      display: "inline-block",
                      marginTop: 14,
                      color: "#60a5fa",
                      fontWeight: 700,
                    }}
                  >
                    Más información →
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