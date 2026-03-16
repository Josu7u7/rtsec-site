import Link from "next/link";

export default function HomeFinalCTASection() {
  return (
    <section className="home-premium-section home-final-cta-section">
      <div className="container-main">
        <div className="home-final-cta-shell">
          <p className="home-premium-kicker">Cierre estratégico</p>

          <h2 className="home-final-cta-title">
            Diseñamos continuidad, visibilidad y defensa para entornos que no pueden detenerse.
          </h2>

          <p className="home-final-cta-text">
            RTSEC acompaña a las organizaciones desde la arquitectura hasta la operación,
            integrando conectividad, protección, monitoreo y resiliencia en una sola visión.
          </p>

          <div className="home-premium-actions">
            <Link href="/contacto" className="home-premium-btn is-primary">
              Agendar una reunión
            </Link>

            <Link href="/servicios" className="home-premium-btn is-secondary">
              Ver servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}