import SolutionsBlocks from "../../components/solutions/SolutionsBlocks";

export const metadata = {
  title: "Soluciones de Ciberseguridad Empresarial",
  description:
    "Soluciones empresariales de ciberseguridad, conectividad, datacenter, identidad, protección avanzada y respuesta para organizaciones en Perú.",
  alternates: {
    canonical: "https://www.rtsec.com.pe/soluciones",
  },
  openGraph: {
    title: "Soluciones de Ciberseguridad Empresarial | RTSEC Perú",
    description:
      "Redes seguras, datacenter, identidades, protección avanzada y respuesta para entornos empresariales críticos.",
    url: "https://www.rtsec.com.pe/soluciones",
  },
};

export default function SolucionesPage() {
  return <SolutionsBlocks />;
}