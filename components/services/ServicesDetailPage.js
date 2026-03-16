import Image from "next/image";
import Link from "next/link";
import { servicesData } from "./servicesData";

export default function ServicesDetailPage() {
  return (
    <main className="services-detail-page">
      <section className="services-detail-hero">
        <div className="container-main">
          <p className="services-detail-kicker">Servicios especializados</p>
          <h1 className="services-detail-title">
            Diseñamos, implementamos y operamos capacidades que sostienen la continuidad del negocio.
          </h1>
          <p className="services-detail-text">
            Convertimos estrategia técnica en ejecución real: desde arquitectura y
            despliegue hasta soporte, monitoreo y reducción de exposición.
          </p>
        </div>
      </section>

      <section className="services-detail-index">
        <div className="container-main">
          <div className="services-detail-index-grid">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                href={`/servicios#${service.id}`}
                className="services-detail-index-link"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="services-detail-blocks">
        <div className="container-main">
          {servicesData.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className={`services-detail-block ${
                index % 2 !== 0 ? "is-reverse" : ""
              }`}
            >
              <div className="services-detail-block-copy">
                <p className="services-detail-block-eyebrow">{service.eyebrow}</p>
                <h2 className="services-detail-block-title">{service.title}</h2>
                <p className="services-detail-block-intro">{service.intro}</p>

                <ul className="services-detail-block-list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="services-detail-block-media">
                <div className="services-detail-block-image-shell">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1600}
                    height={1000}
                    className="services-detail-block-image"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}