import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import SolutionCard from "@/components/SolutionCard";
import PillarCard from "@/components/PillarCard";
import ProcessSection from "@/components/ProcessSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />

      <section id="soluciones" className="section-space">
        <div className="container-main">
          <SectionTitle
            eyebrow="Core de soluciones"
            title="Una propuesta tecnológica con fondo oscuro, presencia premium y enfoque empresarial."
            text="Presentamos una arquitectura comercial clara alrededor de ciberseguridad, conectividad, nube, datacenter y continuidad operativa."
          />

          <div className="grid-3">
            <SolutionCard
              title="Ciberseguridad"
              text="Servicios orientados a fortalecer la postura de seguridad, reducir riesgo y elevar la visibilidad del entorno."
              accent="linear-gradient(135deg, rgba(9,16,30,1) 0%, rgba(30,64,175,0.65) 100%)"
            />
            <SolutionCard
              title="Infraestructura"
              text="Arquitecturas robustas y modernas para soportar crecimiento, resiliencia y estandarización operativa."
              accent="linear-gradient(135deg, rgba(35,11,74,1) 0%, rgba(124,58,237,0.72) 100%)"
            />
            <SolutionCard
              title="Conectividad & Cloud"
              text="Diseño y evolución de entornos híbridos con foco en rendimiento, acceso seguro y escalabilidad."
              accent="linear-gradient(135deg, rgba(2,44,78,1) 0%, rgba(14,165,233,0.72) 100%)"
            />
          </div>
        </div>
      </section>

      <section id="servicios" className="section-space" style={{ paddingTop: 20 }}>
        <div className="container-main">
          <SectionTitle
            eyebrow="Pilares de servicio"
            title="Servicios estructurados para acompañar desde la estrategia hasta la operación."
            text="Tu home debe vender claridad. Aquí agrupamos el portafolio en pilares directos, entendibles y elegantes."
          />

          <div className="grid-4">
            <PillarCard
              number="1"
              title="Consultoría & Arquitectura"
              text="Assessment, discovery, hoja de ruta, diseño HLD/LLD y definición de modelo operativo."
            />
            <PillarCard
              number="2"
              title="Implementación & Puesta en Marcha"
              text="Despliegue ordenado, integraciones, hardening, pruebas y documentación de entrega."
            />
            <PillarCard
              number="3"
              title="Servicios Gestionados & Soporte"
              text="Operación especializada, atención por niveles, monitoreo y evolución continua del entorno."
            />
            <PillarCard
              number="4"
              title="Formación"
              text="Capacitación técnica y transferencia de conocimiento para fortalecer equipos internos."
            />
          </div>
        </div>
      </section>

      <ProcessSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </>
  );
}