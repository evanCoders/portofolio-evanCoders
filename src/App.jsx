import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import HowIBuild from "./components/HowIBuild";
import About from "./components/About";
import LetsBuild from "./components/LetsBuild";
import Footer from "./components/Footer";

function App() {
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
      </main>

      <Footer />
    </div>
  );
}

export default App;