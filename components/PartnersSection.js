import RevealUp from "./RevealUp";

export default function PartnersSection() {
  const partners = [
    "CATO",
    "Imperva",
    "Gurucul",
    "Palo Alto",
    "Check Point",
    "HPE Aruba",
    "Kaspersky",
    "AWS",
    "Hillstone",
    "Trend Micro",
    "Tenable",
    "Cisco",
  ];

  return (
    <section id="partners" className="section-space">
      <div className="container-main">
        <RevealUp>
          <div
            className="card"
            style={{
              padding: 34,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(248,250,252,0.96))",
              color: "#0f172a",
            }}
          >
            <div
              style={{
                textAlign: "center",
                maxWidth: 760,
                margin: "0 auto 28px",
              }}
            >
              <div
                style={{
                  color: "#2563eb",
                  fontWeight: 800,
                  fontSize: 14,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                }}
              >
                Partners
              </div>
              <h2
                style={{
                  fontSize: "clamp(32px, 5vw, 52px)",
                  marginTop: 14,
                  marginBottom: 0,
                }}
              >
                Alianzas que potencian
              </h2>
              <p
                style={{
                  color: "#475569",
                  lineHeight: 1.8,
                  marginTop: 14,
                }}
              >
                Trabajamos con fabricantes y ecosistemas líderes para construir
                arquitecturas de alto valor.
              </p>
            </div>

            <RevealUp delay={0.1}>
              <div className="logo-grid">
                {partners.map((item) => (
                  <div
                    key={item}
                    style={{
                      height: 96,
                      borderRadius: 20,
                      border: "1px solid rgba(15,23,42,0.08)",
                      display: "grid",
                      placeItems: "center",
                      background: "white",
                      color: "#334155",
                      fontWeight: 700,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </RevealUp>
          </div>
        </RevealUp>
      </div>
    </section>
  );
}