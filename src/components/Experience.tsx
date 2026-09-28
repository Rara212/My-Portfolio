import React from 'react';
import { ExternalLink, Briefcase, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[var(--border-color)] scroll-mt-12 transition-colors">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[var(--border-color)]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-2">
              01 · Chronological Trajectory
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display text-[var(--text-primary)] tracking-tight">
              Work &amp; Research Experience
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--text-muted)]">
            3 ROLES · HIGH-THROUGHPUT SYSTEMS &amp; PARALLEL COMPUTING
          </div>
        </div>

        {/* Timeline List */}
        <div className="mt-12 divide-y divide-[var(--border-color)]">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="py-10 first:pt-4 last:pb-4 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start group"
            >
              {/* Date & Metadata Column */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="text-[var(--text-primary)] font-medium">{exp.period}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-xs">{exp.type}</span>
                </div>
                <div className="pt-2">
                  {exp.link && exp.link !== '#' && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline decoration-[var(--border-color)] hover:decoration-[var(--text-primary)] transition-colors"
                    >
                      <span>Company Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Main Content Column */}
              <div className="lg:col-span-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-serif-display text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-[var(--text-secondary)] mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic font-serif-display text-base">
                  {exp.description}
                </p>

                {/* Key Impact Bullets */}
                <ul className="space-y-2.5 pt-1">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                      <span className="text-[var(--accent)] font-mono text-xs mt-1 shrink-0">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Clean Unboxed Metadata Technologies */}
                <div className="pt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-[var(--text-muted)]">
                  <span className="text-[var(--text-primary)] font-medium">Core Stack:</span>
                  {exp.skills.map((skill, sIdx) => (
                    <React.Fragment key={skill}>
                      <span>{skill}</span>
                      {sIdx < exp.skills.length - 1 && <span aria-hidden="true" className="text-[var(--border-color)]">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
