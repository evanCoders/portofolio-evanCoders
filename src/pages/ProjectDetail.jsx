import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="project-not-found">
        <p className="section-label">404 / PROJECT NOT FOUND</p>

        <h1>PROJECT NOT FOUND</h1>

        <Link to="/">
          ← BACK TO HOME
        </Link>
      </main>
    );
  }

  return (
    <div className="project-detail-page">
      <header className="project-detail-nav">
        <Link to="/" className="project-back">
          ← EVAN
        </Link>

        <span>WEB DEVELOPER</span>
      </header>

      <main>
        <section className="project-detail-hero">
          <p className="section-label">
            {project.number} / PROJECT
          </p>

          <h1>{project.name}</h1>

          <p className="project-detail-category">
            {project.category}
          </p>

          <p className="project-detail-description">
            {project.description}
          </p>

          <div className="project-meta">
            <div>
              <span>YEAR</span>
              <strong>{project.year}</strong>
            </div>

            <div>
              <span>ROLE</span>
              <strong>{project.role}</strong>
            </div>

            <div>
              <span>STACK</span>
              <strong>{project.tech.join(" · ")}</strong>
            </div>
          </div>
        </section>

        <section className="project-detail-section">
          <span className="detail-number">01</span>

          <div>
            <p className="detail-label">THE PROBLEM</p>

            <h2>Understanding the problem.</h2>

            <p>{project.problem}</p>
          </div>
        </section>

        <section className="project-detail-section">
          <span className="detail-number">02</span>

          <div>
            <p className="detail-label">THE SOLUTION</p>

            <h2>Turning the idea into a system.</h2>

            <p>{project.solution}</p>
          </div>
        </section>

        <section className="project-detail-section">
          <span className="detail-number">03</span>

          <div>
            <p className="detail-label">THE SYSTEM</p>

            <div className="detail-tech-list">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="project-detail-section">
          <span className="detail-number">04</span>

          <div>
            <p className="detail-label">THE RESULT</p>

            <h2>Built to solve a real problem.</h2>

            <p>{project.result}</p>
          </div>
        </section>

        <section className="project-next">
          <p className="section-label">NEXT PROJECT</p>

          <Link to="/#work">
            BACK TO ALL PROJECTS ↗
          </Link>
        </section>
      </main>
    </div>
  );
}

export default ProjectDetail;