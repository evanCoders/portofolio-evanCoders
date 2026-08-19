function Hero() {
  return (
    <section className="hero" id="intro">
      <div className="hero-content">
        <p className="section-label">01 / INTRO</p>

        <h1>
          I BUILD WEBSITES
          <br />
          THAT FEEL LIKE
          <span> PRODUCTS.</span>
        </h1>

        <p className="hero-description">
          Web developer focused on building modern, functional and
          user-centered digital experiences.
        </p>

        <div className="hero-stack">
          <span>NODE JS</span>
          <span>LARAVEL BLADE</span>
          <span>MYSQL</span>
        </div>

        <a href="#work" className="hero-button">
          EXPLORE MY WORK <span>↗</span>
        </a>
      </div>

      <div className="hero-visual">
        <div className="browser">
          <div className="browser-top">
            <div className="browser-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="browser-url">evan.dev/kawankios</div>
          </div>

          <div className="browser-content">
            <div className="mini-label">SELECTED PROJECT</div>

            <h2>KAWANKIOS</h2>

            <p>Point of Sale System</p>

            <div className="fake-dashboard">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;