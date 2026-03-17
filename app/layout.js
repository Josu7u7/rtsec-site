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

export const metadata = {
  metadataBase: new URL("https://www.rtsec.com.pe"),
  title: {
    default: "RTSEC Perú | Ciberseguridad, Redes y Continuidad Operativa",
    template: "%s | RTSEC Perú",
  },
  description:
    "RTSEC Perú diseña e implementa soluciones de ciberseguridad, redes, conectividad, datacenter y continuidad operativa para empresas.",
  applicationName: "RTSEC Perú",
  keywords: [
    "RTSEC Perú",
    "ciberseguridad en Perú",
    "servicios de ciberseguridad",
    "soluciones de ciberseguridad",
    "redes empresariales",
    "continuidad operativa",
    "SOC NOC",
    "datacenter",
    "infraestructura TI",
    "consultoría de ciberseguridad",
  ],
  authors: [{ name: "RTSEC Perú" }],
  creator: "RTSEC Perú",
  publisher: "RTSEC Perú",
  category: "technology",
  alternates: {
    canonical: "https://www.rtsec.com.pe",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://www.rtsec.com.pe",
    siteName: "RTSEC Perú",
    title: "RTSEC Perú | Ciberseguridad, Redes y Continuidad Operativa",
    description:
      "RTSEC Perú diseña e implementa soluciones de ciberseguridad, redes, conectividad, datacenter y continuidad operativa para empresas.",
    images: [
      {
        url: "/images/hero-rtsec.jpg",
        width: 1200,
        height: 630,
        alt: "RTSEC Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RTSEC Perú | Ciberseguridad, Redes y Continuidad Operativa",
    description:
      "Servicios y soluciones de ciberseguridad, redes, datacenter y continuidad operativa para empresas en Perú.",
    images: ["/images/hero-rtsec.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-PE">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}