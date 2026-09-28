import React, { useEffect } from 'react';
import { X, Github, ExternalLink, ArrowRight, Layers, Cpu, Award } from 'lucide-react';
import { MagazineProject } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: MagazineProject | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 md:p-10 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Editorial Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)] bg-[var(--bg-surface)] shrink-0">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
            <span className="text-[var(--text-primary)] font-medium">{project.issueLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.readTime}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] transition-colors"
            aria-label="Close case study reader"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Reader Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-serif-display text-[var(--text-primary)] leading-tight">
              {project.title}
            </h2>
            <p className="text-lg sm:text-xl font-serif-display italic text-[var(--text-secondary)] leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Featured Image with styled fallback */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--bg-subtle)] border border-[var(--border-color)]">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 text-xs font-mono text-white">
              Editorial Figure 1.0 · System Architecture
            </div>
          </div>

          {/* Quantitative Outcomes & Metrics Bento */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Key Empirical Outcomes &amp; Performance</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.caseStudy.metrics.map((m, idx) => (
                <div key={idx} className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-4 space-y-1">
                  <div className="text-xs font-mono text-[var(--text-muted)] uppercase">{m.label}</div>
                  <div className="text-2xl sm:text-3xl font-serif-display font-semibold text-[var(--text-primary)] tabular-nums">
                    {m.value}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] leading-normal">{m.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Case Study Body: Problem & Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[var(--border-color)]">
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>The Challenge &amp; Bottleneck</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-sans-body">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Architectural Blueprint</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-sans-body">
                {project.caseStudy.architecture}
              </p>
            </div>
          </div>

          {/* Technical Highlights list */}
          <div className="space-y-3 pt-4 border-t border-[var(--border-color)]">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
              Implementation Invariants &amp; Highlights
            </div>
            <ul className="space-y-2">
              {project.caseStudy.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                  <span className="font-mono text-xs text-[var(--accent)] mt-1 shrink-0">—</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack & Links Footer */}
          <div className="pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-[var(--text-muted)]">
              <span className="text-[var(--text-primary)] font-medium">Stack:</span>
              {project.caseStudy.stack.map((s, idx) => (
                <React.Fragment key={s}>
                  <span>{s}</span>
                  {idx < project.caseStudy.stack.length - 1 && <span className="text-[var(--border-color)]">·</span>}
                </React.Fragment>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.caseStudy.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--bg-surface)] hover:bg-[var(--bg-subtle)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
              {project.caseStudy.liveUrl && (
                <a
                  href={project.caseStudy.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--accent)] hover:opacity-90 text-[var(--accent-contrast)] text-xs font-mono transition-opacity"
                >
                  <span>Live Inspection</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
