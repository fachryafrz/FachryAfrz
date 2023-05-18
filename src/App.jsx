import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Socials from "./components/Socials";

function App() {
  return (
    <>
      {/* Navbar */}
      <header>
        <nav></nav>
      </header>
      {/* Navbar */}

      {/* Main Contents */}
      <main className="bg-bg text-white font-fira-code px-4">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      {/* Main Contents */}

      <Socials />
    </>
  );
}

export default App;
