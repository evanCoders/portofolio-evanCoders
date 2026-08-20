import "../assets/css/Timeline.css";

const timeline = [
  {
    year: "2024 - 2025",
    title: "MEMULAI DARI DASAR",
    description:
      "Belajar HTML, atribut, komponen CSS, PHP native dan sedikit JavaScript sebagai fondasi awal pengembangan web.",
  },
  {
    year: "2025 - 2026",
    title: "BACKEND & DATABASE",
    description:
      "Belajar Laravel, Blade, sistem ORM, dan MVC. Mulai mengenal database dan membuat table melalui CMD dan PowerShell.",
  },
  {
    year: "2026 - 2027",
    title: "EKSPLORASI MOBILE & PKL",
    description:
      "Belajar membuat aplikasi dengan Android Studio meskipun tidak mudah. Tetap aktif mengembangkan aplikasi berbasis web dan PWA di sela-sela waktu. Sisa waktu digunakan untuk menjalani Praktek Kerja Lapangan (PKL).",
  },
];

function Timeline() {
  return (
    <section className="section timeline-section" id="timeline">
      <div className="section-header">
        <p className="section-label">03 / GARIS WAKTU</p>

        <p className="section-intro">
          Perjalanan belajar ku dari nol hingga bisa membangun aplikasi mobile
          juga PWA dan website hingga menjadi produk digital.
        </p>
      </div>

      <div className="timeline">
        {timeline.map((item, index) => (
          <article className="timeline-item" key={item.year}>
            <div className="timeline-year">{item.year}</div>

            <div className="timeline-line">
              <span className="timeline-dot"></span>

              {index !== timeline.length - 1 && (
                <span className="timeline-connector"></span>
              )}
            </div>

            <div className="timeline-content">
              <span className="timeline-number">0{index + 1}</span>

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
