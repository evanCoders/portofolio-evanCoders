import "../assets/css/Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>EVANCODERS</strong>
        <span>WEB DEVELOPER</span>
      </div>

      <div>
        <span>DIBUAT DENGAN</span>
        <strong>REACT + VITE</strong>
      </div>

      <div>
        <span>© {new Date().getFullYear()} EVANCODERS</span>
      </div>
    </footer>
  );
}

export default Footer;
