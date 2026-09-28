import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Clock, Tag } from 'lucide-react';
import { magazineProjects, MagazineProject } from '../data/portfolioData';

interface MagazineShowcaseProps {
  onSelectProject: (project: MagazineProject) => void;
}

export const MagazineShowcase: React.FC<MagazineShowcaseProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Systems', 'AI & Agents', 'Cloud & Infra', 'Graphics & Vision'];

  const filteredProjects = selectedCategory === 'All'
    ? magazineProjects
    : magazineProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="showcase" className="py-20 md:py-28 border-b border-[var(--border-color)] scroll-mt-12 bg-[var(--bg-primary)] transition-colors">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--border-color)]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--accent)]"></span>
              <span>03 · Selected Works &amp; Spreads</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display text-[var(--text-primary)] tracking-tight">
              Magazine Showcase
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center flex-wrap gap-1 p-1 bg-[var(--bg-surface)] border border-[var(--border-color)]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-medium'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Magazine Editorial Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Magazine Card Header Bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border-color)] bg-[var(--bg-secondary)] text-xs font-mono text-[var(--text-muted)]">
                  <span className="text-[var(--text-primary)] font-medium">{project.issueLabel}</span>
                  <div className="flex items-center gap-2">
                    <span>{project.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Cover Image Spread */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--bg-subtle)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs font-mono text-white bg-black/80 backdrop-blur-sm px-2.5 py-1">
                      Click to open deep-dive case study ↗
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Empirical Verification</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif-display text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm font-serif-display italic text-[var(--text-secondary)]">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3 font-sans-body">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Card Affordance */}
              <div className="px-6 py-4 border-t border-[var(--border-color)] bg-[var(--bg-secondary)] flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                  Case Study &amp; Architecture Spec
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-[var(--text-primary)] group-hover:translate-x-0.5 transition-transform">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)]" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
