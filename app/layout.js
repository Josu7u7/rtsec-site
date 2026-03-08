import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

export const metadata = {
  title: "RTSEC Perú",
  description:
    "Consultoría especializada en ciberseguridad, redes, conectividad, datacenter y continuidad operativa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}