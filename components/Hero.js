export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-stage-media">
        <img
          src="/images/hero-rtsec.jpg"
          alt="RTSEC Hero"
          className="hero-bg-image"
        />

        <div className="hero-vignette" />
        <div className="hero-grid-glow" />
      </div>

      <div className="container-main hero-content-wrap">
        <div className="hero-heading-group">
          <p className="hero-kicker">
            Arquitectura crítica · Ciberseguridad · Continuidad operativa
          </p>

          <h1 className="hero-title">
            Lo importante no
            <br />
            es si pasará algo.
            <br />
            Es qué tan preparado estás
            <br />
            <span>cuando pase.</span>
          </h1>

          <p className="hero-subtitle">
            Redes que fluyen. Seguridad que resiste.
          </p>
        </div>
      </div>
    </section>
  );
}