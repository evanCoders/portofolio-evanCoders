import "../assets/css/Projects.css";
import { Link } from "react-router-dom";
import projects from "../data/projects";

function Projects() {
  return (
    <section className="section projects-section" id="work">
      <div className="section-header">
        <p className="section-label">02 / PROYEK</p>

        <p className="section-intro">
          Kumpulan proyek web, aplikasi, dan sistem yang saya bangun dari ide
          menjadi produk digital berdasarkan masalah nyata.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <Link
            to={`/project/${project.slug}`}
            className="project-row"
            key={project.number}
          >
            <span className="project-number">{project.number}</span>

            <div className="project-name">
              <h2>{project.name}</h2>
              <p>{project.category}</p>
            </div>

            <div className="project-technologies">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <span className="project-arrow">↗</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
