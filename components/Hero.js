export default function Hero() {
  return (
    <section id="inicio" className="section-space" style={{ paddingTop: 72 }}>
      <div className="container-main">
        <div
          className="card"
          style={{
            overflow: "hidden",
            padding: 34,
            minHeight: 580,
            position: "relative",
            background:
              "linear-gradient(135deg, rgba(10,14,30,0.95) 0%, rgba(5,7,10,0.98) 55%, rgba(8,18,40,0.95) 100%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 80% 20%, rgba(59,130,246,0.22), transparent 24%)",
            }}
          />

          <div
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: 28,
              alignItems: "center",
              minHeight: 510,
            }}
          >
            <div>
              <span className="badge">Consultoría · Ciberseguridad · Infraestructura</span>

              <h1
                style={{
                  marginTop: 20,
                  marginBottom: 0,
                  fontSize: "clamp(42px, 7vw, 78px)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.04em",
                  maxWidth: 780,
                }}
              >
                Tecnología crítica,
                <br />
                diseño premium
                <br />
                y operación segura.
              </h1>

              <p
                style={{
                  marginTop: 24,
                  color: "#94a3b8",
                  fontSize: 18,
                  lineHeight: 1.8,
                  maxWidth: 720,
                }}
              >
                Impulsamos operaciones empresariales con una propuesta sólida en
                ciberseguridad, redes & conectividad, datacenter, virtualización,
                continuidad operativa y servicios especializados.
              </p>

              <div style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap" }}>
                <a href="#soluciones" className="btn-primary">
                  Ver soluciones
                </a>
                <a href="#servicios" className="btn-secondary">
                  Explorar servicios
                </a>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, minmax(0,1fr))",
                  gap: 14,
                  marginTop: 36,
                }}
              >
                {[
                  ["350+", "Controles y mejoras aplicadas"],
                  ["99.9%", "Disponibilidad orientada al negocio"],
                  ["24/7", "Visibilidad y monitoreo operativo"],
                  ["Multi-vendor", "Arquitecturas abiertas"],
                ].map(([n, t]) => (
                  <div
                    key={n}
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 18,
                      padding: 18,
                      background: "rgba(255,255,255,0.02)",
                    }}
                  >
                    <div style={{ fontSize: 24, fontWeight: 800 }}>{n}</div>
                    <div style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.5, marginTop: 8 }}>
                      {t}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  height: 480,
                  borderRadius: 28,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background:
                    "linear-gradient(180deg, rgba(59,130,246,0.14), rgba(255,255,255,0.02))",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 22,
                }}
              >
                <div style={{ color: "#93c5fd", fontSize: 12, textTransform: "uppercase", letterSpacing: ".12em" }}>
                  RTSEC Framework
                </div>

                <div style={{ display: "grid", gap: 14 }}>
                  {[
                    "Ciberseguridad",
                    "Redes & Conectividad",
                    "Datacenter & Virtualización",
                    "Consultoría & Arquitectura",
                    "Servicios Gestionados",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: 16,
                        borderRadius: 16,
                        border: "1px solid rgba(255,255,255,0.08)",
                        background: "rgba(255,255,255,0.03)",
                        fontWeight: 700,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.6 }}>
                  Diseño visual premium con una base corporativa lista para crecer y sofisticarse.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}