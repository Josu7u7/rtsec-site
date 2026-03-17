import ContactPage from "../../components/contact/ContactPage";

export const metadata = {
  title: "Contáctanos",
  description:
    "Conversemos sobre ciberseguridad, redes, infraestructura y continuidad operativa para tu organización.",
  alternates: {
    canonical: "https://www.rtsec.com.pe/contacto",
  },
  openGraph: {
    title: "Contáctanos | RTSEC Perú",
    description:
      "Conversemos sobre arquitectura, ciberseguridad, infraestructura y continuidad operativa.",
    url: "https://www.rtsec.com.pe/contacto",
  },
};

export default function ContactoPage() {
  return <ContactPage />;
}