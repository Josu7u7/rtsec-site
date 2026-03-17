import "./globals.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/home-hero.css";
import "./styles/home-impact.css";
import "./styles/home-sections.css";
import "./styles/home-solutions-intro.css";
import "./styles/home-solutions-slider.css";
import "./styles/home-services-preview.css";
import "./styles/home-premium-sections.css";
import "./styles/services-page.css";
import "./styles/services-stack.css";
import "./styles/solutions.css";
import "./styles/about-page.css";
import "./styles/contact-page.css";

import Header from "../components/layout/Header";

const baseUrl = "https://www.rtsec.com.pe";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "RTSEC Perú | Ciberseguridad, Redes y Continuidad Operativa",
    template: "%s | RTSEC Perú",
  },
  description:
    "RTSEC Perú integra ciberseguridad, infraestructura, conectividad y continuidad operativa para organizaciones que necesitan operar con criterio, resiliencia y dirección clara.",
  applicationName: "RTSEC Perú",
  keywords: [
    "RTSEC Perú",
    "ciberseguridad Perú",
    "servicios de ciberseguridad",
    "soluciones de ciberseguridad",
    "redes empresariales",
    "infraestructura tecnológica",
    "continuidad operativa",
    "SOC NOC",
    "consultoría en ciberseguridad",
    "conectividad empresarial",
  ],
  authors: [{ name: "RTSEC Perú" }],
  creator: "RTSEC Perú",
  publisher: "RTSEC Perú",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: baseUrl,
    siteName: "RTSEC Perú",
    title: "RTSEC Perú | Ciberseguridad, Redes y Continuidad Operativa",
    description:
      "Arquitectura crítica, ciberseguridad, conectividad e infraestructura para organizaciones que necesitan operar con resiliencia.",
    images: [
      {
        url: "/images/hero-rtsec.jpg",
        width: 1600,
        height: 900,
        alt: "RTSEC Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RTSEC Perú | Ciberseguridad, Redes y Continuidad Operativa",
    description:
      "Ciberseguridad, infraestructura, conectividad y continuidad operativa para empresas en Perú.",
    images: ["/images/hero-rtsec.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      {
        url: "/images/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RTSEC Perú",
    alternateName: "RTSEC",
    url: baseUrl,
    logo: `${baseUrl}/images/rtsec-logo.svg`,
    image: `${baseUrl}/images/hero-rtsec.jpg`,
    email: "ventas@rtsec.com.pe",
    sameAs: ["https://www.linkedin.com/company/rtsec-peru/"],
    description:
      "Empresa especializada en ciberseguridad, infraestructura, conectividad y continuidad operativa.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RTSEC Perú",
    url: baseUrl,
    publisher: {
      "@type": "Organization",
      name: "RTSEC Perú",
    },
    inLanguage: "es-PE",
  };

  return (
    <html lang="es-PE">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}