import { useCallback, useState } from "react";
import { MotionConfig } from "motion/react";
import ThemeProvider from "./components/ThemeProvider";
import Nav from "./components/Nav/Nav";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Cursor from "./components/Cursor/Cursor";
import Grain from "./components/Grain/Grain";
import Marquee from "./components/Marquee/Marquee";
import Footer from "./components/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Work from "./sections/Work/Work";
import Skills from "./sections/Skills/Skills";
import Education from "./sections/Education/Education";
import Contact from "./sections/Contact/Contact";
import { marqueeItems } from "./data/stack";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const onMenuChange = useCallback((open: boolean) => setMenuOpen(open), []);

  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <Nav menuOpen={menuOpen} onMenuChange={onMenuChange} />

        <main id="main" inert={menuOpen || undefined}>
          <Hero />
          <Marquee items={marqueeItems} />
          <About />
          <Experience />
          <Work />
          <Skills />
          <Education />
          <Contact />
        </main>

        <Footer />
        <Cursor />
        <Grain />
      </MotionConfig>
    </ThemeProvider>
  );
}
