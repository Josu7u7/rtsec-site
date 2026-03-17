import AboutPage from "../../components/about/AboutPage";

export const metadata = {
  title: "Nosotros",
  description:
    "Conoce la identidad, visión, misión y enfoque estratégico de RTSEC Perú en ciberseguridad, infraestructura y conectividad empresarial.",
  alternates: {
    canonical: "https://www.rtsec.com.pe/nosotros",
  },
  openGraph: {
    title: "Nosotros | RTSEC Perú",
    description:
      "Identidad, visión y propósito de RTSEC Perú en ciberseguridad, infraestructura y conectividad empresarial.",
    url: "https://www.rtsec.com.pe/nosotros",
  },
};

export default function NosotrosPage() {
  return <AboutPage />;
}