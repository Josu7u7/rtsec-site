"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ContactPage() {
  const pageRef = useRef(null);
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-hero-reveal",
        { y: 40, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.95,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".contact-panel-reveal",
        { y: 34, opacity: 0, scale: 0.985 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, page);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Consulta desde RTSEC");
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}
Empresa: ${form.empresa}
Correo: ${form.correo}
Teléfono: ${form.telefono}
Servicio: ${form.servicio}

Mensaje:
${form.mensaje}`
    );

    window.location.href = `mailto:contacto@rtsec.com.pe?subject=${subject}&body=${body}`;
  };

  return (
    <main ref={pageRef} className="contact-page">
      <section className="contact-hero-section">
        <div className="container-main">
          <div className="contact-hero-shell">
            <p className="contact-kicker contact-hero-reveal">Contáctanos</p>

            <h1 className="contact-hero-title contact-hero-reveal">
              Conversemos sobre lo que tu operación
              <span>no puede dejar al azar.</span>
            </h1>

            <p className="contact-hero-text contact-hero-reveal">
              Arquitectura, ciberseguridad, conectividad e infraestructura
              diseñadas para organizaciones que necesitan control, continuidad y
              criterio técnico real.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="container-main">
          <div className="contact-main-grid">
            <div className="contact-info-card contact-panel-reveal">
              <div className="contact-info-glow" />

              <p className="contact-kicker">RTSEC Perú</p>

              <h2 className="contact-info-title">
                Más que una cotización.
                <span>Una conversación con dirección técnica.</span>
              </h2>

              <p className="contact-info-text">
                Cuéntanos qué reto estás enfrentando y te ayudamos a convertirlo
                en una ruta clara de arquitectura, protección y continuidad.
              </p>

              <div className="contact-info-points">
                <div className="contact-info-point">
                  <span>01</span>
                  <p>Arquitectura y consultoría técnica</p>
                </div>

                <div className="contact-info-point">
                  <span>02</span>
                  <p>Implementación, integración y operación</p>
                </div>

                <div className="contact-info-point">
                  <span>03</span>
                  <p>Infraestructura, ciberseguridad y conectividad empresarial</p>
                </div>
              </div>

              <div className="contact-direct-block">
                <div>
                  <small>Correo</small>
                  <a href="mailto:contacto@rtsec.com.pe">contacto@rtsec.com.pe</a>
                </div>

                <div>
                  <small>Ubicación</small>
                  <p>Perú · Atención corporativa</p>
                </div>
              </div>
            </div>

            <div className="contact-form-card contact-panel-reveal">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-grid">
                  <div className="contact-field">
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder=" "
                      required
                    />
                    <label htmlFor="nombre">Nombre completo</label>
                  </div>

                  <div className="contact-field">
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label htmlFor="empresa">Empresa</label>
                  </div>

                  <div className="contact-field">
                    <input
                      id="correo"
                      name="correo"
                      type="email"
                      value={form.correo}
                      onChange={handleChange}
                      placeholder=" "
                      required
                    />
                    <label htmlFor="correo">Correo corporativo</label>
                  </div>

                  <div className="contact-field">
                    <input
                      id="telefono"
                      name="telefono"
                      type="text"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label htmlFor="telefono">Teléfono</label>
                  </div>
                </div>

                <div className="contact-field contact-field-full">
                  <select
                    id="servicio"
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona un enfoque</option>
                    <option value="Consultoría y arquitectura">
                      Consultoría y arquitectura
                    </option>
                    <option value="Implementación e integración">
                      Implementación e integración
                    </option>
                    <option value="Soporte y mantenimiento">
                      Soporte y mantenimiento
                    </option>
                    <option value="Servicios gestionados">
                      Servicios gestionados
                    </option>
                    <option value="Capacitación">
                      Capacitación
                    </option>
                    <option value="Otro">
                      Otro
                    </option>
                  </select>
                </div>

                <div className="contact-field contact-field-full contact-textarea">
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder=" "
                    rows={6}
                    required
                  />
                  <label htmlFor="mensaje">Cuéntanos tu necesidad</label>
                </div>

                <div className="contact-form-footer">
                  <p>
                    Al enviar este formulario abriremos tu cliente de correo con
                    la información cargada.
                  </p>

                  <button type="submit" className="contact-submit-btn">
                    Iniciar conversación
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}