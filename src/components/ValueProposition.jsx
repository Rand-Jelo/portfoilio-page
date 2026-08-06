import { useScrollAnimation, useScrollAnimationList } from '../hooks/useScrollAnimation';

const valueProps = [
  {
    title: 'Scalable Architecture',
    description: 'Apps built with clean architecture that grow with your product, not against it.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3A1.5 1.5 0 002.25 4.5v15A1.5 1.5 0 003.75 21h16.5A1.5 1.5 0 0021.75 19.5v-15a1.5 1.5 0 00-1.5-1.5H3.75zM9 12.75l3 3L18 9.75" />
      </svg>
    ),
  },
  {
    title: 'Fast, Modern UI',
    description: 'Pixel-perfect interfaces with sub-second load times and smooth interactions.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'End-to-End Delivery',
    description: 'From database design to deployment, I handle the full stack so you do not have to.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25M14.25 4.5l-4.5 15" />
      </svg>
    ),
  },
];

/**
 * ValueProposition - Three benefit-driven cards that speak recruiter language
 */
export default function ValueProposition() {
  const headerRef = useScrollAnimation();
  const cardsRef = useScrollAnimationList({ threshold: 0.2 });

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div ref={headerRef} className="reveal text-center mb-12">
          <p className="text-neon-cyan font-mono text-sm mb-2 tracking-widest uppercase">
            What I Deliver
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built for <span className="gradient-text">Production</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I don't just write code. I build systems that are fast, maintainable, and ready to grow.
          </p>
        </div>

        {/* Value cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-3 gap-6">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="glass rounded-3xl p-8 hover:glow-purple-hover transition-all duration-500 group reveal-scale"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center text-neon-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-white transition-colors">
                {prop.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
