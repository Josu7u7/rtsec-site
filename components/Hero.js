import Image from "next/image";
import RevealUp from "./RevealUp";

export default function Hero() {
  return (
    <section id="inicio" className="section-space" style={{ paddingTop: 72 }}>
      <div className="container-main">
        <div
          className="card"
          style={{
            overflow: "hidden",
            minHeight: 620,
            position: "relative",
            background: "#05070A",
          }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/images/hero-rtsec.jpg"
              alt="RTSEC Hero"
              fill
              priority
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(5,7,10,0.88) 0%, rgba(5,7,10,0.72) 38%, rgba(5,7,10,0.38) 100%)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "48px",
              minHeight: 620,
              display: "flex",
              alignItems: "center",
            }}
          >
            <RevealUp>
              <div style={{ maxWidth: 760 }}>
                <span className="badge">
                  Consultoría · Ciberseguridad · Infraestructura
                </span>

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
                  Protegemos operaciones críticas
                  <br />
                  con tecnología, criterio
                  <br />
                  y diseño premium.
                </h1>

                <p
                  style={{
                    marginTop: 24,
                    color: "#cbd5e1",
                    fontSize: 18,
                    lineHeight: 1.8,
                    maxWidth: 700,
                  }}
                >
                  Diseñamos y operamos entornos seguros en ciberseguridad,
                  infraestructura, conectividad y cloud para organizaciones que no
                  pueden detenerse.
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: 14,
                    marginTop: 30,
                    flexWrap: "wrap",
                  }}
                >
                  <a href="#soluciones" className="btn-primary">
                    Ver soluciones
                  </a>
                  <a href="#contacto" className="btn-secondary">
                    Solicitar reunión
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
                    ["24/7", "Monitoreo y observabilidad"],
                    ["Multi-vendor", "Arquitectura enterprise"],
                  ].map(([n, t]) => (
                    <div
                      key={n}
                      style={{
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 18,
                        padding: 18,
                        background: "rgba(255,255,255,0.04)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div style={{ fontSize: 24, fontWeight: 800 }}>{n}</div>
                      <div
                        style={{
                          color: "#cbd5e1",
                          fontSize: 13,
                          lineHeight: 1.5,
                          marginTop: 8,
                        }}
                      >
                        {t}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealUp>
          </div>
        </div>
      </div>
    </section>
  );
}