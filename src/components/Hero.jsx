import { useState } from "react";
import "../assets/css/Hero.css";
import projects from "../data/projects";

function Hero() {
  const [projectIndex, setProjectIndex] = useState(0);

  const handleMouseEnter = () => {
    setProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const heroProject = projects[projectIndex];

  return (
    <section className="hero" id="intro">
      <div className="hero-content">
        <p className="section-label">01 / INTRO</p>

        <h1>
          SAYA MEMBUAT WEBSITE
          <br />
          YANG MENJAWAB <span>KEBUTUHAN.</span>
        </h1>

        <p className="hero-description">
          Pengembang web yang fokus membangun pengalaman digital modern,
          fungsional, dan berpusat pada solusi pengguna.
        </p>

        <div className="hero-stack">
          <span>LARAVEL BLADE</span>
          <span>NODE JS</span>
          <span>MYSQL</span>
        </div>

        <a href="#work" className="hero-button">
          EXPLORE MY WORK <span>↗</span>
        </a>
      </div>

      <div className="hero-visual" onMouseEnter={handleMouseEnter}>
        <div className="browser">
          <div className="browser-top">


            <div className="browser-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="browser-url">evanCoders/{heroProject?.slug}</div>
          </div>

          <div className="browser-content">
            <div className="mini-label">SELECTED PROJECT</div>

            <h2>{heroProject?.name}</h2>

            <p>{heroProject?.category}</p>

            <div className="fake-dashboard">
  {heroProject?.tech?.map((techItem, index) => (
    <div className="tech-card" key={index}>
      {techItem.toUpperCase()}
    </div>
  ))}
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;