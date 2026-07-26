import { useState, useEffect, useRef } from 'react';
import { skillCategories } from '../data/skills';
import { useScrollAnimation, useScrollAnimationList } from '../hooks/useScrollAnimation';

/**
 * renderCategoryIcon - SVG icons matching the Contact section style
 */
function renderCategoryIcon(categoryId) {
  const icons = {
    frontend: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25M14.25 4.5l-4.5 15" />
      </svg>
    ),
    backend: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.7 7.5m14.4 7.2a4.5 4.5 0 00-.9-2.7L18.3 7.5M5.7 7.5a4.5 4.5 0 013.6-1.7h6.4a4.5 4.5 0 013.6 1.7" />
      </svg>
    ),
    tools: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l-5.877 5.877A2.652 2.652 0 012.25 17.25l5.877-5.877M11.42 15.17l-5.877-5.877m5.877 5.877l5.877 5.877M11.42 15.17l5.877-5.877" />
      </svg>
    ),
    languages: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  };
  return icons[categoryId] || null;
}

/**
 * SkillBar - Animated progress bar that fills when scrolled into view
 */
function SkillBar({ skill, isVisible }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-700/50 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
            boxShadow: `0 0 10px ${skill.color}66`,
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 shimmer" />
        </div>
      </div>
    </div>
  );
}

/**
 * Skills - Categorized skills grid with animated progress bars
 */
export default function Skills() {
  const headerRef = useScrollAnimation();
  const gridRef = useRef(null);
  const [barsVisible, setBarsVisible] = useState(false);

  // Trigger progress bar animation when grid scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setBarsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (gridRef.current) observer.observe(gridRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative section-padding overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />

      {/* Background orb */}
      <div
        className="orb w-72 h-72 bg-neon-purple animate-float-slow"
        style={{ top: '30%', right: '-5%' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <p className="text-neon-cyan font-mono text-sm mb-2 tracking-widest uppercase">
            02. My Skills
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Work With</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
        </div>

        {/* Skills grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="glass rounded-3xl p-8 hover:glow-purple-hover transition-all duration-500 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center text-neon-cyan group-hover:scale-110 transition-transform duration-300">
                  {renderCategoryIcon(category.id)}
                </div>
                <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} isVisible={barsVisible} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech marquee */}
        <div className="mt-16 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 marquee-fade-left z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 marquee-fade-right z-10 pointer-events-none" />
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 items-center">
                {['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Git', 'Vite', 'HTML5', 'CSS3', 'Python', 'REST APIs'].map((tech) => (
                  <span
                    key={tech}
                    className="text-2xl font-bold text-slate-600 hover:text-neon-cyan transition-colors duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}