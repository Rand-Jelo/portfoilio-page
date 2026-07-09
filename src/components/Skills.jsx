import { useState, useEffect, useRef } from 'react';
import { skillCategories } from '../data/skills';
import { useScrollAnimation, useScrollAnimationList } from '../hooks/useScrollAnimation';

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
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
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
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-base to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-base to-transparent z-10 pointer-events-none" />
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