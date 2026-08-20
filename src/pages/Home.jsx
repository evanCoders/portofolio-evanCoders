import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";
import HowIBuild from "../components/HowIBuild";
import About from "../components/About";
import LetsBuild from "../components/LetsBuild";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Timeline />
        <HowIBuild />
        <About />
        <LetsBuild />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}


export default Home;