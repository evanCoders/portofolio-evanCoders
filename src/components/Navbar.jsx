import '../assets/css/Navbar.css';

function Navbar() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="brand">
        <span className="brand-name">EVANCODERS</span>
        <span className="brand-role">WEB DEVELOPER</span>
      </div>
      
      <nav className="nav-menu">
        <a href="#intro" onClick={(e) => scrollToSection(e, 'intro')}>Intro</a>
        <a href="#work" onClick={(e) => scrollToSection(e, 'work')}>Work</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;


