import Image from "next/image";
import RevealUp from "./RevealUp";

export default function CTASection() {
  return (
    <section id="contacto" className="section-space" style={{ paddingTop: 0 }}>
      <div className="container-main">
        <RevealUp>
          <div
            className="card"
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: 360,
              background: "#120f1f",
            }}
          >
            <div style={{ position: "absolute", inset: 0 }}>
              <Image
                src="/images/cta-consulting.jpg"
                alt="CTA consulting"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(91,33,182,0.70) 0%, rgba(76,29,149,0.55) 35%, rgba(15,23,42,0.72) 100%)",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "52px 40px",
                minHeight: 360,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div style={{ maxWidth: 860 }}>
                <div
                  style={{
                    color: "#e9d5ff",
                    textTransform: "uppercase",
                    letterSpacing: ".12em",
                    fontSize: 13,
                  }}
                >
                  Hablemos de tu operación
                </div>

                <h2
                  style={{
                    fontSize: "clamp(30px,5vw,54px)",
                    marginTop: 16,
                    marginBottom: 14,
                  }}
                >
                  Transforma tu operación con una consultoría especializada.
                </h2>

                <p
                  style={{
                    color: "#e2e8f0",
                    maxWidth: 760,
                    margin: "0 auto",
                    lineHeight: 1.8,
                    fontSize: 17,
                  }}
                >
                  Diseñamos soluciones empresariales con foco en protección,
                  conectividad, continuidad y evolución tecnológica.
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 14,
                    marginTop: 28,
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    className="btn-primary"
                    href="mailto:contacto@rtsec.com.pe"
                  >
                    contacto@rtsec.com.pe
                  </a>
                  <a
                    className="btn-secondary"
                    href="https://wa.me/51933719297"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealUp>
      </div>
    </section>
  );
}