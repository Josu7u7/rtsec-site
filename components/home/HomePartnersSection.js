"use client";

import Image from "next/image";

const logosRow1 = [
  { name: "HPE Aruba", src: "/images/hpe aruba.png" },
  { name: "Check Point", src: "/images/check-point (1).png" },
  { name: "Fortinet", src: "/images/fortinet.png" },
  { name: "Huawei", src: "/images/huawei (1).png" },
];

const logosRow2 = [
  { name: "Proxmox", src: "/images/proxmox (1).png" },
  { name: "SentinelOne", src: "/images/sentinel one.png" },
  { name: "Sophos", src: "/images/sophos (1).png" },
  { name: "Ubiquiti", src: "/images/Ubiquiti.png" },
];

function LogoRow({ items, reverse = false }) {
  const duplicated = [...items, ...items];

  return (
    <div className={`home-partners-marquee ${reverse ? "is-reverse" : ""}`}>
      <div className="home-partners-track">
        {duplicated.map((logo, index) => (
          <div className="home-partner-logo-card" key={`${logo.name}-${index}`}>
            <div className="home-partner-logo-media">
              <Image
                src={logo.src}
                alt={logo.name}
                width={220}
                height={90}
                className="home-partner-logo-image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
              Integramos fabricantes y plataformas reconocidas para construir
              soluciones robustas, escalables y alineadas a la continuidad operativa.
            </p>
          </div>

          <div className="home-partners-carousel">
            <LogoRow items={logosRow1} />
            <LogoRow items={logosRow2} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}