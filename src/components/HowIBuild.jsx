import "../assets/css/HowIBuild.css";

function HowIBuild() {
  const steps = [
    {
      number: "01",
      title: "MEMAHAMI",
      text: "Memahami masalah sebelum menulis baris kode pertama.",
    },
    {
      number: "02",
      title: "MERANCANG",
      text: "Mengubah ide dan kebutuhan menjadi antarmuka digital yang jelas.",
    },
    {
      number: "03",
      title: "MEMBANGUN",
      text: "Membangun produk menggunakan teknologi modern dan kode yang bersih.",
    },
    {
      number: "04",
      title: "MENGULANG",
      text: "Menguji, memperbaiki, meningkatkan, dan terus membuat produk lebih baik.",
    },
  ];

  return (
    <section className="section build-section">
      <div className="section-header">
        <p className="section-label">03 / BAGAIMANA AKU MEMBANGUN</p>

        <p className="section-intro">
          Proses saya cukup sederhana pahami masalahnya, buat solusi yang tepat
          dan berguna bukan sekadar hasil jadi, lalu kerjakan.
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