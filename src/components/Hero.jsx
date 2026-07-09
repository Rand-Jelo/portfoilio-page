import { useState, useEffect } from 'react';

const roles = [
  'Junior Software Developer',
  'React Enthusiast',
  'Problem Solver',
  'Lifelong Learner',
];

/**
 * useTypingEffect - Cycles through an array of words with a typewriter effect
 */
function useTypingEffect(words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          setText(currentWord.substring(0, text.length + 1));
          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          // Deleting
          setText(currentWord.substring(0, text.length - 1));
          if (text === '') {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

/**
 * Hero - Animated hero section with typewriter effect, floating elements,
 * and call-to-action buttons
 */
export default function Hero() {
  const typedText = useTypingEffect(roles);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Floating decorative orbs */}
      <div
        className="orb w-96 h-96 bg-neon-purple animate-float"
        style={{ top: '10%', left: '5%' }}
      />
      <div
        className="orb w-80 h-80 bg-neon-cyan animate-float-slow"
        style={{ bottom: '15%', right: '10%' }}
      />
      <div
        className="orb w-64 h-64 bg-neon-pink animate-float"
        style={{ top: '50%', left: '50%', animationDelay: '2s' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass text-sm font-medium text-neon-cyan animate-fade-in"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan" />
          </span>
          Available for opportunities
        </div>

        {/* Greeting */}
        <p
          className="text-lg sm:text-xl text-slate-400 mb-4 animate-fade-in-up"
          style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Hi, I'm
        </p>

        {/* Name */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <span className="gradient-text text-glow">Rand Jelo</span>
        </h1>

        {/* Typing role */}
        <div
          className="h-10 sm:h-12 mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-300 flex items-center justify-center">
            <span className="gradient-text-static">{typedText}</span>
            <span className="ml-1 w-0.5 h-7 sm:h-9 bg-neon-cyan animate-blink" />
          </h2>
        </div>

        {/* Description */}
        <p
          className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Based in Stockholm, Sweden 🇸🇪 — I craft clean, functional web experiences
          with modern technologies. Passionate about building things that make a difference.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <button onClick={handleScrollToProjects} className="btn-primary w-full sm:w-auto">
            <span>View My Work</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          <button onClick={handleScrollToContact} className="btn-secondary w-full sm:w-auto">
            <span>Get In Touch</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-4 mt-12 animate-fade-in-up"
          style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}
        >
          {[
            { name: 'GitHub', href: '#', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
            { name: 'LinkedIn', href: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
            { name: 'Email', href: '#contact', icon: 'M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z' },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              onClick={social.name === 'Email' ? handleScrollToContact : undefined}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:scale-110 hover:glow-cyan transition-all duration-300 group"
              aria-label={social.name}
              title={social.name}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d={social.icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-slate-500 animate-fade-in" style={{ animationDelay: '1.5s', opacity: 0, animationFillMode: 'forwards' }}>
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
            <span className="w-1 h-2 rounded-full bg-neon-cyan animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}