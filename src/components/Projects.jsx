const projects = [
  {
    number: "01",
    name: "KAWANKIOS",
    category: "Point of Sale System",
    tech: ["Laravel", "NODE JS", "MySQL"],
  },
  {
    number: "02",
    name: "SAKU",
    category: "Financial Management",
    tech: ["React", "Laravel", "MySQL"],
  },
  {
    number: "03",
    name: "NEXLIB",
    category: "Library Management System",
    tech: ["React", "Laravel", "MySQL"],
  },
  {
    number: "04",
    name: "TOOL MANAGER",
    category: "Inventory Management",
    tech: ["Laravel", "MySQL"],
  },
  {
    number: "05",
    name: "PEMINJAMAN ALAT",
    category: "Equipment Borrowing System",
    tech: ["Laravel", "MySQL"],
  },
  {
    number: "06",
    name: "UANGKAS",
    category: "Cash Management System",
    tech: ["Laravel", "MySQL"],
  },
  {
    number: "07",
    name: "E-ADUAN",
    category: "Complaint & Reporting System",
    tech: ["Laravel", "MySQL"],
  },
  {
    number: "08",
    name: "PPLG2 BINTANG",
    category: "School Project",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "09",
    name: "FREELANCE",
    category: "Freelance Web Project",
    tech: ["React", "JavaScript"],
  },
  {
    number: "10",
    name: "LANDING PAGE PT",
    category: "Company Landing Page",
    tech: ["React", "UI/UX"],
  },
  {
    number: "11",
    name: "PERPUSTAKAAN",
    category: "Library System",
    tech: ["Laravel", "MySQL"],
  },
];

function Projects() {
  return (
    <section className="section projects-section" id="work">
      <div className="section-header">
        <p className="section-label">02 / PROJECTS</p>

        <p className="section-intro">
          A collection of websites, applications and systems I have built while
          exploring web development.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-row" key={project.number}>
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
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
