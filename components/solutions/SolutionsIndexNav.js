import Link from "next/link";

const items = [
  {
    id: "infraestructura-conectividad-segura",
    label: "Infraestructura y Conectividad Segura",
  },
  {
    id: "ciberseguridad-proteccion",
    label: "Ciberseguridad y Protección",
  },
  {
    id: "data-center-respaldo-continuidad",
    label: "Data Center, Respaldo y Continuidad",
  },
  {
    id: "visibilidad-deteccion-respuesta",
    label: "Visibilidad, Detección y Respuesta",
  },
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