import React from 'react';
import { Terminal, Cpu, Layout, Server, Check } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[var(--border-color)] scroll-mt-12 transition-colors">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[var(--border-color)]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-2">
              04 · Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display text-[var(--text-primary)] tracking-tight">
              Skills &amp; Methodologies
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--text-muted)]">
            ENGINEERING TAXONOMY · LOW-LEVEL TO DISTRIBUTED CLOUD
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 sm:p-7 space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
                <h3 className="text-xl font-serif-display text-[var(--text-primary)]">
                  {cat.title}
                </h3>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  0{idx + 1}
                </span>
              </div>

              <p className="text-xs font-sans-body text-[var(--text-secondary)] italic">
                {cat.description}
              </p>

              {/* Clean unboxed skill list */}
              <div className="pt-2 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
