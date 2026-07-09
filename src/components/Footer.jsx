/**
 * Footer - Footer with social links, quick navigation, and copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: '#',
      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    },
    {
      name: 'Email',
      href: 'mailto:rand.jelo@example.com',
      icon: 'M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z',
    },
  ];

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent" />

      {/* Background orb */}
      <div
        className="orb w-96 h-96 bg-neon-purple animate-float-slow"
        style={{ bottom: '-20%', left: '30%' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand column */}
          <div className="space-y-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-3xl font-bold gradient-text tracking-tight inline-block hover:scale-105 transition-transform duration-300"
            >
              Rand Jelo<span className="text-neon-cyan">.</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Junior Software Developer based in Stockholm, Sweden.
              Building clean, functional web experiences with modern tech.
            </p>
          </div>

          {/* Quick links column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="text-slate-400 hover:text-neon-cyan transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="text-neon-purple opacity-0 group-hover:opacity-100 transition-opacity">
                      ▸
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
              Let's Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full glass flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:scale-110 hover:glow-cyan transition-all duration-300"
                  aria-label={social.name}
                  title={social.name}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
            <p className="text-slate-500 text-xs">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © {currentYear} Rand Jelo. Built with{' '}
            <span className="text-neon-purple">React</span> &{' '}
            <span className="text-neon-cyan">Tailwind CSS</span>.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Made with <span className="text-neon-pink animate-pulse">♥</span> in Stockholm, Sweden
          </p>
        </div>

        {/* Back to top button */}
        <button
          onClick={(e) => handleNavClick(e, 'home')}
          className="group fixed bottom-6 right-6 w-12 h-12 rounded-full glass-strong flex items-center justify-center text-neon-cyan hover:scale-110 hover:glow-cyan transition-all duration-300 z-40"
          aria-label="Back to top"
          title="Back to top"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}