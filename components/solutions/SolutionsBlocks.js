import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    id: "red-acceso-seguro",
    eyebrow: "Solución 01",
    title: "Red & Acceso Seguro",
    intro:
      "Diseñamos arquitecturas de conectividad seguras, resilientes y preparadas para sostener la operación con visibilidad, control y continuidad desde el acceso hasta el núcleo de la red.",
    image: "/images/red-acceso-seguro.jpg",
    items: [
      "SASE / SSE",
      "SD-WAN",
      "Routers",
      "Switches (Campus y Data Center)",
      "Wi-Fi 7",
      "Balanceo de aplicaciones y cargas (L4/L7)",
      "Administración y optimización de ancho de banda (QoS / shaping / app-aware)",
      "Controladoras LAN/WLAN",
    ],
  },
  {
    id: "data-center-virtualizacion",
    eyebrow: "Solución 02",
    title: "Data Center & Virtualización",
    intro:
      "Construimos entornos de cómputo y virtualización orientados a disponibilidad, rendimiento y crecimiento ordenado, con una base robusta para cargas críticas y continuidad operativa.",
    image: "/images/data-center-virtualizacion.jpg",
    items: [
      "Servidores (Blade / Rack)",
      "Hiperconvergencia (HCI)",
      "Virtualización de servidores",
      "Almacenamiento / resguardo de información (SAN/NAS)",
      "Backup y recuperación (Recovery / Restore / RPO-RTO)",
    ],
  },
  {
    id: "identidades-datos",
    eyebrow: "Solución 03",
    title: "Identidades & Datos",
    intro:
      "Protegemos el acceso y la información desde la identidad del usuario hasta el dato crítico, reduciendo exposición, fortaleciendo control y elevando la trazabilidad del entorno.",
    image: "/images/identidades-datos.jpg",
    items: [
      "IAM (Gestión de identidades)",
      "PAM (Gestión de cuentas privilegiadas)",
      "ZTNA (Acceso Zero Trust por aplicación/identidad)",
      "DLP (Prevención de fuga de información)",
      "Protección / seguridad de base de datos (DB Security / DAM)",
    ],
  },
  {
    id: "proteccion-avanzada",
    eyebrow: "Solución 04",
    title: "Protección Avanzada",
    intro:
      "Integramos controles de defensa empresarial para proteger usuarios, aplicaciones, correo, infraestructura y servicios expuestos, con una estrategia multicapa alineada al riesgo real.",
    image: "/images/proteccion-avanzada.jpg",
    items: [
      "Next-Gen Firewalls (NGFW)",
      "Protección de correo electrónico y colaboración",
      "Protección de aplicaciones web y APIs (WAF / WAAP)",
      "SWG Secure Web Gateway (Standalone)",
      "Protección DDoS",
      "Seguridad de redes IT / IoT (segmentación y visibilidad)",
    ],
  },
  {
    id: "deteccion-respuesta",
    eyebrow: "Solución 05",
    title: "Detección & Respuesta",
    intro:
      "Elevamos la capacidad de detección, análisis y contención con visibilidad centralizada, correlación avanzada y operación orientada a reducir tiempos de respuesta e impacto.",
    image: "/images/deteccion-respuesta.jpg",
    items: [
      "Next-Gen SIEM",
      "XDR / EDR / NDR",
      "SOAR",
      "Inteligencia de ciberamenazas (Threat Intel)",
      "CyberSOC / MDR (Gestión de detección y respuesta)",
      "Análisis forense digital",
      "Gestión de vulnerabilidades (operación)",
    ],
  },
  {
    id: "ciberseguridad-ofensiva",
    eyebrow: "Solución 06",
    title: "Ciberseguridad Ofensiva",
    intro:
      "Validamos controles, identificamos exposición real y simulamos escenarios de ataque para medir resiliencia, descubrir brechas críticas y fortalecer la postura de seguridad con evidencia técnica.",
    image: "/images/ciberseguridad-ofensiva.jpg",
    items: [
      "Pentest de Red (Interno/Externo)",
      "Pentest de Perímetro y Controles (NGFW/WAF/VPN/EDR)",
      "Red Team (Adversary Emulation)",
      "Phishing Simulation (opcional / add-on)",
      "Evaluación de exposición / superficie de ataque (EASM/ASM)",
    ],
  },
];

export default function SolutionsBlocks() {
  return (
    <main className="solutions-page">
      <section className="solutions-page-hero">
        <div className="container-main">
          <p className="solutions-page-kicker">Soluciones empresariales</p>
          <h1 className="solutions-page-title">
            Capacidades diseñadas para proteger, conectar y sostener la operación.
          </h1>
          <p className="solutions-page-text">
            Una arquitectura sólida no se define por una sola herramienta, sino por
            cómo cada capacidad responde al riesgo, al rendimiento y a la continuidad
            del negocio.
          </p>
        </div>
      </section>

      <section className="solutions-page-index">
        <div className="container-main">
          <div className="solutions-page-index-grid">
            {solutions.map((solution) => (
              <Link
                key={solution.id}
                href={`/soluciones#${solution.id}`}
                className="solutions-page-index-link"
              >
                {solution.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-blocks">
        <div className="container-main">
          {solutions.map((solution, index) => (
            <article
              key={solution.id}
              id={solution.id}
              className={`solution-block ${index % 2 !== 0 ? "is-reverse" : ""}`}
            >
              <div className="solution-block-copy">
                <p className="solution-block-eyebrow">{solution.eyebrow}</p>
                <h2 className="solution-block-title">{solution.title}</h2>
                <p className="solution-block-intro">{solution.intro}</p>

                <ul className="solution-block-list">
                  {solution.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="solution-block-media">
                <div className="solution-block-image-shell">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={1600}
                    height={1000}
                    className="solution-block-image"
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