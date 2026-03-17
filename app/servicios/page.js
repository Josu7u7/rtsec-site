import ServicesStackSection from "../../components/services/ServicesStackSection";

export const metadata = {
  title: "Servicios de Ciberseguridad y Redes en Perú",
  description:
    "Consultoría, implementación, soporte, servicios gestionados, SOC/NOC y gestión de exposición para entornos empresariales en Perú.",
  alternates: {
    canonical: "https://www.rtsec.com.pe/servicios",
  },
  openGraph: {
    title: "Servicios de Ciberseguridad y Redes en Perú | RTSEC Perú",
    description:
      "Consultoría, implementación, soporte, servicios gestionados y gestión de exposición para empresas que necesitan operar con seguridad y continuidad.",
    url: "https://www.rtsec.com.pe/servicios",
  },
};

export default function ServiciosPage() {
  return <ServicesStackSection />;
}