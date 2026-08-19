function HowIBuild() {
  const steps = [
    {
      number: "01",
      title: "UNDERSTAND",
      text: "Understand the problem before writing the first line of code.",
    },
    {
      number: "02",
      title: "DESIGN",
      text: "Turn ideas and requirements into a clear digital interface.",
    },
    {
      number: "03",
      title: "BUILD",
      text: "Build the product using modern technologies and clean code.",
    },
    {
      number: "04",
      title: "ITERATE",
      text: "Test, fix, improve and keep making the product better.",
    },
  ];

  return (
    <section className="section build-section">
      <div className="section-header">
        <p className="section-label">03 / HOW I BUILD</p>

        <p className="section-intro">
          My process is simple: understand the problem,
          build the right solution, then improve it.
        </p>
      </div>

      <div className="build-grid">
        {steps.map((step) => (
          <div className="build-card" key={step.number}>
            <span>{step.number}</span>

            <h3>{step.title}</h3>

            <p>{step.text}</p>
          </div>
        ))}
      </div>

      <div className="tech-line">
        <span>REACT</span>
        <span>JAVASCRIPT</span>
        <span>LARAVEL</span>
        <span>PHP</span>
        <span>MYSQL</span>
        <span>GIT</span>
      </div>
    </section>
  );
}

export default HowIBuild;