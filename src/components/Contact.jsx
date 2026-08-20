import "../assets/css/Contact.css";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-header">
        <p className="section-label">07 / KONTAK</p>
        <p className="section-intro">
          Ayo saling terhubung! Kamu bisa menemukan aku di sebuah platform ini
          atau kirim email ke aku.
        </p>
      </div>

      <div className="contact-links">
        <a
          href="mailto:hello@evan.dev"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-platform">EMAIL</span>
          <h2>evancoder70@gmail.com</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>

        <a
          href="https://github.com/evancoders"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-platform">GITHUB</span>
          <h2>@evancoders</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>

        <a
          href="https://instagram.com/vanzzsac2"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-platform">INSTAGRAM</span>
          <h2>@vanzzsac2</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
      </div>
    </section>
  );
}

export default Contact;
