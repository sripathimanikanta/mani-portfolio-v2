import './App.css'
import Contact from './Components/Contact.jsx';
import Hero from './Components/Hero.jsx';
import Navbar from './Components/Navbar.jsx';
import Experience from './Components/Experience.jsx';
import Portfolio from './Components/Portfolio.jsx';
import Projects from './Components/Projects.jsx';
import Certificates from './Components/Certificates.jsx';
import Skills from './Components/Skills.jsx';
import Footer from './Components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <Experience />
      <Portfolio />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

