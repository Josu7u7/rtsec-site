import ImpactReveal from "../motion/ImpactReveal";

export default function ImpactSection() {
  const values = [
    {
      number: "+10",
      label: "Años",
      sublabel: "Experiencia",
      compact: false,
    },
    {
      number: "24/7",
      label: "Operación",
      sublabel: "Continua",
      compact: false,
    },
    {
      number: "Multi-vendor",
      label: "Integración",
      sublabel: "Especializada",
      compact: true,
    },
  ];

  const capabilities = [
    {
      title: "Especialización técnica",
      note: "Arquitectura y criterio",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="impact-card-icon-svg">
          <path
            d="M6 6h5v5H6zM13 6h5v5h-5zM6 13h5v5H6zM13 13h5v5h-5z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      title: "Equipo senior",
      note: "Experiencia real",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="impact-card-icon-svg">
          <path
            d="M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5 19c1.2-2.6 3.8-4 7-4s5.8 1.4 7 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Resiliencia operativa",
      note: "Continuidad crítica",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="impact-card-icon-svg">
          <path
            d="M12 3l7 3v5c0 4.5-2.8 7.5-7 10-4.2-2.5-7-5.5-7-10V6l7-3Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 12.5l2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Escalabilidad empresarial",
      note: "Crecimiento ordenado",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="impact-card-icon-svg">
          <path
            d="M5 16l4-4 3 3 7-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 8h4v4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="impact-section-clean">
      <ImpactReveal />

      <div className="impact-overlap-panel">
        <div className="container-main">
          <div className="impact-metrics-bar">
            {values.map((item, index) => (
              <div className="impact-metric-item" key={item.number}>
                <strong className={item.compact ? "metric-compact" : ""}>
                  {item.number}
                </strong>
                <span>{item.label}</span>
                <small>{item.sublabel}</small>
                {index !== values.length - 1 && (
                  <div className="impact-metric-line" />
                )}
              </div>
            ))}
          </div>

          <div className="impact-values-wrap">
            <div className="impact-values-header">
              <p className="impact-values-kicker">Capacidad y respaldo</p>
              <h2 className="impact-values-title">Pasión por la ciberseguridad</h2>
            </div>

            <div className="impact-values-grid impact-values-grid-premium">
              {capabilities.map((item) => (
                <article
                  className="impact-value-card impact-value-card-premium"
                  key={item.title}
                >
                  <div className="impact-card-top">
                    <div className="impact-card-icon-wrap">{item.icon}</div>
                  </div>

                  <div className="impact-card-bottom">
                    <h3>{item.title}</h3>
                    <p>{item.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}