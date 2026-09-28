import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { magazineProjects, MagazineProject } from '../../data/portfolioData';

interface MagazineShowcaseViewProps {
  onSelectProject: (project: MagazineProject) => void;
}

export const MagazineShowcaseView: React.FC<MagazineShowcaseViewProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Systems', 'AI & Agents', 'Cloud & Infra', 'Graphics & Vision'];

  const filteredProjects = selectedCategory === 'All'
    ? magazineProjects
    : magazineProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-5xl space-y-10 animate-fade-in">
      {/* Header and Filter */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
            Magazine Showcase
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-1.5 font-sans-body">
            Editorial spreads, system deep-dives, and performance invariants. Click any spread to read.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center flex-wrap gap-1 p-1 bg-[var(--bg-surface)] border border-[var(--border-color)]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-mono transition-colors ${
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

      {/* Grid of Magazine Spreads */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group cursor-pointer bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl"
          >
            <div>
              {/* Header Bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border-color)] bg-[var(--bg-secondary)] text-xs font-mono text-[var(--text-muted)]">
                <span className="text-[var(--text-primary)] font-medium">{project.issueLabel}</span>
                <span>{project.readTime}</span>
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
                    Open case study reader ↗
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 space-y-3">
                <div className="text-xs font-mono text-[var(--accent)]">
                  {project.category} · Verified Outcome
                </div>

                <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs font-serif-display italic text-[var(--text-secondary)]">
                  {project.subtitle}
                </p>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3 font-sans-body">
                  {project.summary}
                </p>
              </div>
            </div>

            {/* Bottom Card Affordance */}
            <div className="px-6 py-3.5 border-t border-[var(--border-color)] bg-[var(--bg-secondary)] flex items-center justify-between text-xs font-mono">
              <span className="text-[var(--text-muted)]">
                Architecture &amp; Metrics
              </span>
              <span className="inline-flex items-center gap-1 font-semibold text-[var(--text-primary)] group-hover:translate-x-0.5 transition-transform">
                <span>Read Spread</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)]" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
