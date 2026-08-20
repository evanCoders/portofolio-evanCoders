import "../assets/css/About.css";
import evanImage from "../assets/evan.png";

function About() {
  return (
    <section className="section about-section">
      <div className="section-header">
        <p className="section-label">05 / TENTANG SAYA</p>
      </div>

      <div className="about-grid">
        <h2>
          SAYA SUKA MEMBUAT
          <br />
          WEB DENGAN <span style={{ color: "var(--accent)" }}>IDE</span> SAYA
        </h2>

        <div className="about-content">
          <p>
            Saya{" "}
            <div className="name-trigger">
              <strong>Evan Purnamalila Kosasih</strong>

              <div className="name-overlay">
                <div className="name-overlay-content">
                  <div className="name-overlay-info">
                    <h3>Evan Purnamalila Kosasih</h3>
                    <p>
                      Saya berumur 17 tahun, yang masih duduk di bangku sekolah.
                    </p>
                  </div>

                  <div className="name-overlay-image">
                    <img src={evanImage} alt="Evan" />
                  </div>
                </div>
              </div>
            </div>
            , biasa dipanggil Van, dan dikenal melalui branding{" "}
            <strong>evanCoders</strong>. Saya seorang pengembang web yang
            memiliki passion dalam mengubah ide menjadi produk digital yang
            nyata dan bermanfaat. Saya menikmati proses membangun sebuah produk
            dari konsep hingga eksekusi, dengan perhatian pada fungsionalitas,
            efisiensi, dan kebutuhan pengguna.
          </p>

          <p>
            Saya tertarik pada perpaduan antara desain dan pengembangan,
            walaupun saya tidak begitu paham desain, terutama bagaimana
            antarmuka yang baik dapat dipadukan dengan sistem yang terstruktur
            dan andal. Bagi saya, produk digital yang baik bukan hanya tentang
            tampilan yang menarik, tetapi juga tentang bagaimana produk tersebut
            bekerja dengan baik dan memberikan pengalaman yang nyaman bagi
            penggunanya. Saat ini saya terus mengembangkan kemampuan dalam
            pengembangan web modern dengan mengeksplorasi React, Laravel,
            Node.js, serta UI/UX. Saya senang belajar melalui berbagai proyek
            nyata karena setiap proyek menjadi kesempatan untuk mengasah
            kemampuan, mencoba hal baru, dan mengubah sebuah ide menjadi produk
            digital yang lebih baik.
            <div className="quote-container">
              <strong className="quote-trigger">
                "Terus belajar apa yang bisa dan kejar selagi bisa."
              </strong>

              <div className="quote-overlay">
                <div className="quote-overlay-text">
                  "Terus belajar apa yang bisa dan kejar selagi bisa."
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
