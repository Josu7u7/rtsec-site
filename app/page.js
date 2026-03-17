import HomePageClient from "../components/home/HomePageClient";

export const metadata = {
  title: "RTSEC Perú | Ciberseguridad, Redes y Continuidad Operativa",
  description:
    "RTSEC Perú diseña e implementa soluciones de ciberseguridad, redes, conectividad, datacenter y continuidad operativa para empresas en Perú.",
  alternates: {
    canonical: "https://www.rtsec.com.pe",
  },
  openGraph: {
    title: "RTSEC Perú | Ciberseguridad, Redes y Continuidad Operativa",
    description:
      "Servicios y soluciones de ciberseguridad, redes, datacenter y continuidad operativa para empresas en Perú.",
    url: "https://www.rtsec.com.pe",
    images: [
      {
        url: "/images/hero-rtsec.jpg",
        width: 1200,
        height: 630,
        alt: "RTSEC Perú",
      },
    ],
  },
};

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RTSEC Perú",
    alternateName: ["RTSEC", "RTSEC Peru"],
    url: "https://www.rtsec.com.pe/",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RTSEC Perú",
    url: "https://www.rtsec.com.pe",
    logo: "https://www.rtsec.com.pe/images/rtsec-logo.svg",
    email: "ventas@rtsec.com.pe",
    sameAs: ["https://www.linkedin.com/company/rtsec-peru/"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomePageClient />
    </>
  );
}