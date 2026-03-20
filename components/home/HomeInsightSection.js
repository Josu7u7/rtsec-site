import Image from "next/image";

export default function HomeInsightSection() {
  return (
    <section className="home-premium-section home-insight-section">
      <div className="container-main">
        <div className="home-insight-shell">
          <div className="home-insight-copy">
            <p className="home-premium-kicker">Insight estratégico</p>

            <h2 className="home-premium-title">
              La exposición digital crece más rápido que la preparación operativa.
            </h2>

            <p className="home-premium-text">
              Hoy no basta con tener tecnología. La diferencia real está en la
              visibilidad, la capacidad de respuesta y la arquitectura que sostiene la
              continuidad del negocio cuando aparece el riesgo.
            </p>

            <ul className="home-insight-points">
              <li>Más superficie digital implica más puntos de exposición.</li>
              <li>Sin contexto operativo, las alertas no se convierten en decisiones.</li>
              <li>Protección, monitoreo y continuidad deben funcionar como una sola estrategia.</li>
            </ul>

            <div className="home-premium-actions">
              <a href="/contacto" className="home-premium-btn is-primary">
                Evaluar mi operación
              </a>

              <a href="/soluciones" className="home-premium-btn is-secondary">
                Explorar soluciones
              </a>
            </div>
          </div>

          <div className="home-insight-media">
            <div className="home-insight-media-frame">
              <Image
                src="/images/home-insight-cyber.jpg"
                alt="Centro de monitoreo y visibilidad empresarial"
                width={1600}
                height={1000}
                className="home-insight-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}