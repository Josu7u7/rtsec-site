export default function ProcessSection() {
  const steps = [
    ["Diagnóstico inicial", "Evaluamos riesgos, brechas y oportunidades de mejora."],
    ["Implementación", "Ejecutamos soluciones con criterio técnico y orden operativo."],
    ["Monitoreo 24/7", "Observabilidad y seguimiento continuo de eventos críticos."],
    ["Capacitación", "Transferencia de conocimiento para fortalecer al equipo."],
  ];

  return (
    <section className="section-space">
      <div className="container-main">
        <div
          className="card"
          style={{
            padding: 34,
            background:
              "linear-gradient(180deg, rgba(7,12,36,1) 0%, rgba(5,7,10,1) 100%)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 34 }}>
            <span className="badge">Metodología</span>
            <h2 style={{ marginTop: 18, fontSize: "clamp(28px, 4vw, 44px)" }}>
              ¿Cómo funciona nuestra protección?
            </h2>
          </div>

          <div className="grid-4">
            {steps.map(([title, text], index) => (
              <div
                key={title}
                style={{
                  padding: 20,
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    background: "rgba(255,255,255,0.08)",
                    fontWeight: 800,
                    marginBottom: 16,
                  }}
                >
                  {index + 1}
                </div>
                <div style={{ fontSize: 20, fontWeight: 700 }}>{title}</div>
                <div style={{ color: "#94a3b8", marginTop: 10, lineHeight: 1.7 }}>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}