import SolutionsBlocks from "../../components/solutions/SolutionsBlocks";

export const metadata = {
  title: "Soluciones de Ciberseguridad e Infraestructura Empresarial",
  description:
    "Soluciones empresariales en conectividad segura, ciberseguridad, data center, continuidad operativa, detección y respuesta para organizaciones en Perú.",
  alternates: {
    canonical: "https://www.rtsec.com.pe/soluciones",
  },
  openGraph: {
    title: "Soluciones de Ciberseguridad e Infraestructura Empresarial | RTSEC Perú",
    description:
      "Infraestructura segura, protección, continuidad, visibilidad, detección y respuesta para entornos empresariales críticos.",
    url: "https://www.rtsec.com.pe/soluciones",
  },
};

export default function SolucionesPage() {
  return <SolutionsBlocks />;
}