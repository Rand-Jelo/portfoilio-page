import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * renderStatIcon - SVG icons matching the Contact section style
 */
function renderStatIcon(iconKey) {
  const icons = {
    rocket: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6.99 6.99 0 01-5.77 5.77l-2.65-2.65a6.99 6.99 0 015.77-5.77l2.65 2.65zM4.5 19.5l1.5-1.5m14-14l-1.5 1.5M3 9l3-3 3 3m-3-3v6m9-9l3 3-3 3m3-3h-6" />
      </svg>
    ),
    diploma: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 9v5" />
      </svg>
    ),
    globe: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    chat: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.03-.444 48.282 48.282 0 005.683-.612c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.521 48.521 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    bolt: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    location: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    briefcase: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.781 2.066-1.864 2.246a48.375 48.375 0 01-12.436 0 2.25 2.25 0 01-1.864-2.246v-4.25m16.5 0a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25m16.5 0v.75a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 01-2.25-2.25v-.75m16.5 0h-16.5M3 14.15V9a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 9v5.15M3 14.15h18M7.5 6.75V4.5a2.25 2.25 0 012.25-2.25h4.5A2.25 2.25 0 0116.5 4.5v2.25" />
      </svg>
    ),
  };
  return icons[iconKey] || null;
}

const stats = [
  { value: '4+', label: 'Projects Built', iconKey: 'rocket' },
  { value: 'Diploma', label: 'Web App Dev', iconKey: 'diploma' },
  { value: '2', label: 'Languages', iconKey: 'globe' },
  { value: 'EN/SV', label: 'Bilingual', iconKey: 'chat' },
];

/**
 * About - Bio section with personal info, stats, and a tech highlight card
 */
export default function About() {
  const ref = useScrollAnimation();
  const statsRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={ref} className="reveal text-center mb-16">
          <p className="text-neon-cyan font-mono text-sm mb-2 tracking-widest uppercase">
            01. About Me
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Bio text */}
          <div className="reveal-left space-y-6" ref={useScrollAnimation({ threshold: 0.2 })}>
            <div className="glass rounded-3xl p-8 glow-purple-hover transition-all duration-500">
              <h3 className="text-2xl font-bold mb-4 gradient-text-static">
                Hello, I'm Rand!
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                I'm an ambitious <span className="text-neon-cyan font-medium">Full-Stack Developer</span> based in
                <span className="text-neon-cyan font-medium"> Stockholm, Sweden</span>, with a strong foundation
                in modern web architecture. I've built and shipped a range of projects, from a headless
                e-commerce platform with Next.js 14 and Cloudflare D1, to full-stack Django applications with
                PostgreSQL and Stripe integration.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                What sets me apart is my background in logistics: I bring disciplined problem-solving,
                adaptability, and a user-focused mindset to every project. I don't just write code — I think
                about the business outcome, the user experience, and how the system will scale.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I hold a Diploma in Web Application Development from Code Institute, where I focused on
                full-stack development with Python, Django, and modern frontend technologies. I'm currently
                looking for a developer role where I can contribute, grow, and help build products that matter.
              </p>
            </div>

            {/* Quick info chips */}
            <div className="flex flex-wrap gap-3">
              {[
                {
                  label: 'Stockholm, Sweden',
                  color: 'text-neon-cyan',
                  iconKey: 'location',
                },
                {
                  label: 'Open to opportunities',
                  color: 'text-neon-purple',
                  iconKey: 'briefcase',
                },
                {
                  label: 'Code Institute Graduate',
                  color: 'text-neon-pink',
                  iconKey: 'diploma',
                },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className={`px-4 py-2 rounded-full glass text-sm font-medium ${chip.color} hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2`}
                >
                  <span className="w-4 h-4 flex-shrink-0">{renderStatIcon(chip.iconKey)}</span>
                  {chip.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Stats grid + highlight card */}
          <div className="reveal-right space-y-6" ref={useScrollAnimation({ threshold: 0.2 })}>
            {/* Stats grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="reveal-scale glass rounded-2xl p-6 text-center hover:glow-purple-hover transition-all duration-500 group"
                >
                  <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center text-neon-cyan group-hover:scale-110 transition-transform duration-300">
                    {renderStatIcon(stat.iconKey)}
                  </div>
                  <div className="text-3xl font-bold gradient-text-static mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* What I do card */}
            <div className="glass rounded-3xl p-8 glow-cyan-hover transition-all duration-500">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center text-neon-cyan">
                  {renderStatIcon('bolt')}
                </span>
                What I Do
              </h3>
              <ul className="space-y-3">
                {[
                  'Architect SSR apps with Next.js 14 & TypeScript',
                  'Build full-stack platforms with Django & PostgreSQL',
                  'Integrate Stripe, PayPal & third-party APIs',
                  'Design scalable database schemas for edge & cloud deployment',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-400">
                    <span className="text-neon-purple mt-1 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}