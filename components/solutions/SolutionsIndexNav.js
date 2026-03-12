import Link from "next/link";

const items = [
  { id: "red-acceso-seguro", label: "Red & Acceso Seguro" },
  { id: "data-center-virtualizacion", label: "Data Center & Virtualización" },
  { id: "identidades-datos", label: "Identidades & Datos" },
  { id: "proteccion-avanzada", label: "Protección Avanzada" },
  { id: "deteccion-respuesta", label: "Detección & Respuesta" },
  { id: "ciberseguridad-ofensiva", label: "Ciberseguridad Ofensiva" },
];

export default function SolutionsIndexNav() {
  return (
    <section className="solutions-index-nav-section">
      <div className="container-main">
        <div className="solutions-index-nav">
          {items.map((item) => (
            <Link key={item.id} href={`/soluciones#${item.id}`}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}