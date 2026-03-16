const partners = [
  "Palo Alto Networks",
  "Check Point",
  "Cisco",
  "HPE Aruba",
  "AWS",
  "Tenable",
  "Trend Micro",
  "Imperva",
  "Nutanix",
  "Cato Networks",
  "Hillstone",
  "Gurucul",
];

export default function HomePartnersSection() {
  return (
    <section className="home-premium-section home-partners-section">
      <div className="container-main">
        <div className="home-partners-shell">
          <div className="home-partners-bg" />

          <div className="home-partners-header">
            <p className="home-premium-kicker">Alianzas que potencian</p>
            <h2 className="home-premium-title">
              Tecnologías líderes para arquitecturas de seguridad reales.
            </h2>
            <p className="home-premium-text">
              Integramos fabricantes y plataformas reconocidas para construir soluciones
              robustas, escalables y alineadas a la continuidad operativa.
            </p>
          </div>

          <div className="home-partners-grid">
            {partners.map((partner) => (
              <div key={partner} className="home-partner-card">
                <span>{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}