import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    text: "Evaluamos brechas, riesgos, dependencias y exposición para entender dónde está el impacto real.",
  },
  {
    number: "02",
    title: "Arquitectura",
    text: "Diseñamos la ruta técnica con criterio operativo, priorizando continuidad, integración y escalabilidad.",
  },
  {
    number: "03",
    title: "Despliegue",
    text: "Implementamos controles, validamos escenarios y reducimos fricción con una ejecución ordenada.",
  },
  {
    number: "04",
    title: "Operación continua",
    text: "Monitoreamos, optimizamos y reforzamos la cobertura para sostener una postura resiliente en el tiempo.",
  },
];

export default function HomeProtectionFlowSection() {
  return (
    <section className="home-premium-section home-flow-section">
      <div className="container-main">
        <div className="home-flow-top">
          <div className="home-flow-header">
            <p className="home-premium-kicker">Cómo trabajamos</p>
            <h2 className="home-premium-title">
              Convertimos riesgo, complejidad y crecimiento en una operación más preparada.
            </h2>
            <p className="home-premium-text">
              Desde la evaluación inicial hasta la mejora continua, integramos una ruta
              clara para proteger, conectar y sostener entornos empresariales críticos.
            </p>
          </div>

          <div className="home-flow-visual">
            <div className="home-flow-visual-frame">
              <Image
                src="/images/home-flow-architecture.jpg"
                alt="Arquitectura y flujo de protección empresarial"
                width={1600}
                height={1000}
                className="home-flow-image"
              />
            </div>
          </div>
        </div>

        <div className="home-flow-grid">
          {steps.map((step) => (
            <article key={step.number} className="home-flow-card">
              <span className="home-flow-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}