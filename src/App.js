import About from './components/About';
import Experience from './components/Experience';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Skills from './components/Skills';

function App() {
  return (
    <div className="h-screen bg-[rgb(36,36,36)] text-white snap-y snap-mandatory overflow-scroll z-0">
      <Header />
      <section className="snap-start" id="main">
        <MainSection />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
    </div>
  );
}

export default App;
