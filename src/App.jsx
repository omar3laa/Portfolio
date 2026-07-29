import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Journey from "./components/Journey/Journey";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import GridBackground from "./components/Background/GridBackground";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";
function App() {
  return (
    <>
     <GridBackground /> 
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] -z-10"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;