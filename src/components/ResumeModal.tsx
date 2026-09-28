import React, { useEffect } from 'react';
import { X, Printer, Download, ExternalLink } from 'lucide-react';
import { ProfileData, experiences, publications, skillCategories } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, profile }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white border border-[#dedad0] shadow-2xl overflow-hidden my-6 max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#dedad0] bg-[#f4f2ec] shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-[#736f68] uppercase">
            <span className="font-semibold text-[#1a1a19]">Curriculum Vitae</span>
            <span aria-hidden="true">·</span>
            <span>Print &amp; Archival Edition</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#dedad0] hover:bg-[#ece8df] text-xs font-mono text-[#1a1a19] transition-colors"
              title="Print document or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#57534d] hover:text-[#1a1a19] hover:bg-[#eae6dc] transition-colors"
              aria-label="Close CV viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Document */}
        <div className="overflow-y-auto p-8 sm:p-12 space-y-8 bg-white text-[#1a1a19]">
          {/* Header */}
          <div className="border-b-2 border-[#1a1a19] pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl sm:text-4xl font-serif-display font-bold tracking-tight">
                {profile.name}
              </h1>
              <div className="text-xs font-mono text-[#57534d]">
                {profile.location} · {profile.socials.email}
              </div>
            </div>
            <div className="text-sm font-mono text-[#1a1a19] font-medium tracking-wide">
              {profile.headline}
            </div>
            <div className="text-xs font-mono text-[#736f68] flex flex-wrap gap-x-4 gap-y-1 pt-1">
              <span>GitHub: {profile.socials.github}</span>
              <span>LinkedIn: {profile.socials.linkedin}</span>
            </div>
          </div>

          {/* Research & Engineering Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-[#1a1a19] border-b border-[#dedad0] pb-1">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#44413c] leading-relaxed font-sans-body">
              {profile.bio}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-[#1a1a19] border-b border-[#dedad0] pb-1">
              Professional Trajectory
            </h2>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-[#1a1a19]">
                      {exp.role} <span className="font-normal text-[#57534d]">| {exp.company}</span>
                    </span>
                    <span className="font-mono text-xs text-[#736f68]">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[#44413c]">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="leading-relaxed">
                        <span className="font-sans-body">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-[#1a1a19] border-b border-[#dedad0] pb-1">
              Peer-Reviewed Publications
            </h2>
            <div className="space-y-3">
              {publications.map((pub) => (
                <div key={pub.id} className="text-xs space-y-1">
                  <div className="font-semibold text-[#1a1a19] leading-snug">
                    {pub.title}
                  </div>
                  <div className="text-[#57534d]">
                    {pub.authors.map((a, i) => (
                      <span key={a.name} className={a.isPrimary ? 'font-bold text-[#1a1a19]' : ''}>
                        {a.name}{a.isPrimary ? '*' : ''}{i < pub.authors.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                    {' · '}
                    <span className="italic">{pub.journal}</span> ({pub.year})
                  </div>
                  <div className="font-mono text-[11px] text-[#736f68]">
                    DOI: {pub.doi}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-[#1a1a19] border-b border-[#dedad0] pb-1">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.title}>
                  <span className="font-semibold text-[#1a1a19]">{cat.title}: </span>
                  <span className="text-[#57534d] font-mono text-[11px]">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
