import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

/**
 * Navbar - Sticky navigation bar with smooth scroll, active section highlighting,
 * and a mobile hamburger menu
 * 
 * @param {boolean} isDark - Current theme state
 * @param {Function} toggleTheme - Function to toggle theme
 */
export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong py-3 shadow-lg shadow-neon-purple/5' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-2xl font-bold gradient-text tracking-tight hover:scale-105 transition-transform duration-300"
          >
            RJ<span className="text-neon-cyan">.</span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                    activeSection === link.id
                      ? 'text-neon-cyan'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Active indicator */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full transition-all duration-300 ${
                      activeSection === link.id ? 'w-8 opacity-100' : 'w-0 opacity-0'
                    }`}
                  />
                  {/* Hover glow */}
                  <span className="absolute inset-0 rounded-full bg-neon-purple/0 group-hover:bg-neon-purple/10 transition-colors duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: theme toggle + mobile menu button */}
          <div className="flex items-center gap-3">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-14 h-14 rounded-full glass flex items-center justify-center group"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="flex flex-col gap-1.5 w-6">
                <span
                  className={`block h-0.5 bg-neon-cyan rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-neon-cyan rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-neon-cyan rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-dark-base/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 glass-strong p-8 pt-24 transition-transform duration-500 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(50px)',
                  opacity: mobileMenuOpen ? 1 : 0,
                  transition: 'all 0.4s ease',
                }}
              >
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-neon-cyan bg-neon-purple/10 glow-purple'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Decorative gradient line */}
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent" />

          <p className="mt-6 text-sm text-slate-400 px-4">
            Let's build something amazing together.
          </p>
        </div>
      </div>
    </>
  );
}