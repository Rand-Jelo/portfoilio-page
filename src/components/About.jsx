import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { value: '4+', label: 'Projects Built', icon: '🚀' },
  { value: '1+', label: 'Years Coding', icon: '💻' },
  { value: '∞', label: 'Cups of Coffee', icon: '☕' },
  { value: '100%', label: 'Dedication', icon: '🔥' },
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
                Hello, I'm Rand! 👋
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                I'm a junior software developer based in <span className="text-neon-cyan font-medium">Stockholm, Sweden</span>,
                with a passion for creating clean, user-friendly web applications. My journey in
                tech started with curiosity and has grown into a genuine love for building things
                that people use and enjoy.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                I specialize in <span className="text-neon-purple font-medium">React</span> and modern
                frontend development, but I'm always exploring new technologies and expanding my
                toolkit. I believe great software is about both functionality and experience —
                code that works beautifully and feels great to use.
              </p>
              <p className="text-slate-400 leading-relaxed">
                When I'm not coding, you'll find me exploring Stockholm's coffee scene,
                reading up on the latest in tech, or working on personal projects that
                push my boundaries.
              </p>
            </div>

            {/* Quick info chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: '📍 Stockholm, Sweden', color: 'text-neon-cyan' },
                { label: '💼 Open to work', color: 'text-neon-purple' },
                { label: '🎓 Self-taught + Bootcamp', color: 'text-neon-pink' },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className={`px-4 py-2 rounded-full glass text-sm font-medium ${chip.color} hover:scale-105 transition-transform duration-300`}
                >
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
                  <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
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
                <span className="text-neon-cyan">⚡</span> What I Do
              </h3>
              <ul className="space-y-3">
                {[
                  'Build responsive, accessible web apps with React',
                  'Craft beautiful UIs with Tailwind CSS & modern CSS',
                  'Integrate REST APIs and manage application state',
                  'Write clean, maintainable, well-documented code',
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