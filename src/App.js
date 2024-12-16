import React from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "./Context/theme";
import { Header } from "./components/Header/Header.jsx";
import { About } from "./components/about/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/contact/Contact"
// import { Techstacks } from "./Components/About/Techstacks";
import { Footer } from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import { Timeline } from "./components/about/Timeline";
// import { Github } from "./components/about/Github";

export default function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="top" className={`${themename} app`}>
      <section id="#home">
        <Header />
      </section>
      <main>
        <About />
        {/* <Github /> */}
        <Timeline />
        <section id="#projects">
          <Projects />
        </section>
        <section id="#contact">
          <Contact />
        </section>
       </main>
      <Footer />
      <ScrollToTop /> 
    </div>
  );
}
