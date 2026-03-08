export default function CTASection() {
  return (
    <section id="contacto" className="section-space" style={{ paddingTop: 0 }}>
      <div className="container-main">
        <div
          className="card"
          style={{
            overflow: "hidden",
            padding: 46,
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(149,76,233,0.55) 0%, rgba(89,44,170,0.65) 35%, rgba(29,39,104,0.8) 100%)",
          }}
        >
          <div style={{ color: "#e9d5ff", textTransform: "uppercase", letterSpacing: ".12em", fontSize: 13 }}>
            Contáctanos
          </div>
          <h2 style={{ fontSize: "clamp(30px,5vw,54px)", marginTop: 16, marginBottom: 14 }}>
            Transforma tu operación con una consultoría especializada.
          </h2>
          <p style={{ color: "#e2e8f0", maxWidth: 780, margin: "0 auto", lineHeight: 1.8 }}>
            Una base premium, corporativa y escalable para proyectar confianza desde el primer scroll.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
            <a className="btn-primary" href="mailto:contacto@rtsec.com.pe">
              contacto@rtsec.com.pe
            </a>
            <a className="btn-secondary" href="https://wa.me/51933719297" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}