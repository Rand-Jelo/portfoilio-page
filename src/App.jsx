import { useTheme } from './hooks/useTheme';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * App - Main application component
 * Composes all portfolio sections with theme management
 */
function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      {/* Custom cursor glow effect (desktop only) */}
      <CustomCursor />

      {/* Noise texture overlay for subtle depth */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Sticky navigation */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;