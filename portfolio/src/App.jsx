import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import Loader from "./components/Loader";
import BackToTop from "./components/BackToTop";

import Home from "./pages/Home"; 
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

import "./App.css";

export default function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <ThemeToggle />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Services />
      <Achievements />
      <Contact />

      <BackToTop />
      <Footer />
    </>
  );
}