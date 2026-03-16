import Link from "next/link";

export default function SolutionsCTA() {
  return (
    <section className="solutions-cta-section">
      <div className="container-main">
        <div className="solutions-cta-card">
          <p className="solutions-cta-kicker">RTSEC Perú</p>
          <h2>Convirtamos arquitectura y seguridad en una ventaja operativa real.</h2>
          <p>
            Diseñamos soluciones alineadas a continuidad, rendimiento y reducción de riesgo.
          </p>
          <Link href="/contacto" className="solutions-cta-button">
            Hablar con RTSEC
          </Link>
        </div>
      </div>
    </section>
  );
}