import "./globals.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/home-hero.css";
import "./styles/home-impact.css";
import "./styles/home-sections.css";
import "./styles/home-solutions-slider.css";
import "./styles/solutions.css";

import Header from "../components/layout/Header";

export const metadata = {
  title: "RTSEC Perú",
  description:
    "Consultoría especializada en ciberseguridad, redes, conectividad, datacenter y continuidad operativa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}