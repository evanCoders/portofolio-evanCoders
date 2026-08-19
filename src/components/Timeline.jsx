const timeline = [
  {
    year: "2023",
    title: "STARTED WEB DEVELOPMENT",
    description:
      "Started exploring web development and learning the fundamentals of HTML, CSS and JavaScript.",
  },
  {
    year: "2024",
    title: "BUILDING PROJECTS",
    description:
      "Started building websites and small applications while learning how to turn ideas into functional products.",
  },
  {
    year: "2025",
    title: "FULL-STACK DEVELOPMENT",
    description:
      "Expanded into backend development and database systems using Laravel, MySQL and modern frontend technologies.",
  },
  {
    year: "2026",
    title: "WEB DEVELOPER",
    description:
      "Building real-world web systems, experimenting with new technologies and developing a stronger product-focused workflow.",
  },
];

function Timeline() {
  return (
    <section className="section timeline-section" id="timeline">
      <div className="section-header">
        <p className="section-label">03 / TIMELINE</p>

        <p className="section-intro">
          A timeline of my journey, from learning the fundamentals
          to building complete web applications and digital products.
        </p>
      </div>

      <div className="timeline">
        {timeline.map((item, index) => (
          <article className="timeline-item" key={item.year}>
            <div className="timeline-year">
              {item.year}
            </div>

            <div className="timeline-line">
              <span className="timeline-dot"></span>

              {index !== timeline.length - 1 && (
                <span className="timeline-connector"></span>
              )}
            </div>

            <div className="timeline-content">
              <span className="timeline-number">
                0{index + 1}
              </span>

              <h2>{item.title}</h2>

              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Timeline;