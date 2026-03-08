import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(14px)",
        background: "rgba(5,7,10,0.72)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        className="container-main"
        style={{
          height: 78,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ fontSize: 24, fontWeight: 800 }}>
          RTSEC <span style={{ color: "#3B82F6" }}>Perú</span>
        </Link>

        <nav style={{ display: "flex", gap: 28, color: "#cbd5e1", fontSize: 14 }}>
          <a href="#inicio">Inicio</a>
          <a href="#soluciones">Soluciones</a>
          <a href="#servicios">Servicios</a>
          <a href="#partners">Partners</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="btn-primary" href="#contacto">
          Solicitar reunión
        </a>
      </div>
    </header>
  );
}