import Link from "next/link";

export default function SolutionsCTA() {
  return (
    <section className="solutions-cta-section">
      <div className="container-main">
        <div className="solutions-cta-card">
          <span className="solutions-cta-kicker">Siguiente paso</span>
          <h2 className="solutions-cta-title">
            Convirtamos requerimientos críticos en una arquitectura clara y ejecutable.
          </h2>
          <p className="solutions-cta-text">
            Evaluamos tu necesidad, priorizamos riesgos y definimos una ruta de
            implementación coherente con tu operación.
          </p>

          <div className="solutions-cta-actions">
            <Link href="/contacto" className="btn-primary">
              Solicitar reunión
            </Link>
            <Link href="/servicios" className="btn-secondary">
              Ver servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}