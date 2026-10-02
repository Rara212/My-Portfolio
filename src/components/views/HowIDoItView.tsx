import React from 'react';
import { Cpu } from 'lucide-react';
import { techSkills, TechSkill } from '../../data/portfolioData';

// Custom Brand SVGs tailored for the exact qasim.li icon aesthetic
const TechIcon: React.FC<{ skillId: string }> = ({ skillId }) => {
  switch (skillId) {
    case 'systemverilog':
      return (
        <svg className="w-9 h-9 text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="8" y="8" width="8" height="8" rx="1" />
          <path d="M4 9h2" />
          <path d="M4 15h2" />
          <path d="M18 9h2" />
          <path d="M18 15h2" />
          <path d="M9 4v2" />
          <path d="M15 4v2" />
          <path d="M9 18v2" />
          <path d="M15 18v2" />
        </svg>
      );
    case 'python':
      return (
        <svg className="w-9 h-9 text-blue-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.91 2c-3.1 0-2.92 1.34-2.92 1.34l.01 1.4h2.96v.42H6.04s-1.95.22-1.95 2.89c0 2.68 1.7 2.8 1.7 2.8h1.02v-1.42s-.05-1.7 1.67-1.7h2.89s1.6.03 1.6-1.57V3.57S13.43 2 11.91 2zm-1.63 1.05a.55.55 0 1 1 0 1.1.55.55 0 0 1 0-1.1zM12.09 22c3.1 0 2.92-1.34 2.92-1.34l-.01-1.4h-2.96v-.42h5.92s1.95-.22 1.95-2.89c0-2.68-1.7-2.8-1.7-2.8h-1.02v1.42s.05 1.7-1.67 1.7h-2.89s-1.6-.03-1.6 1.57v2.65s-.46 1.51 1.06 1.51zm1.63-1.05a.55.55 0 1 1 0-1.1.55.55 0 0 1 0 1.1z" />
        </svg>
      );
    case 'react':
      return (
        <svg className="w-10 h-10 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        </svg>
      );
    case 'typescript':
      return (
        <div className="w-9 h-9 bg-blue-500 rounded text-white font-mono font-bold flex items-center justify-center text-sm tracking-tighter shadow-sm">
          TS
        </div>
      );
    case 'cpp':
      return (
        <div className="flex items-center justify-center">
          <svg className="w-9 h-9 text-teal-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4zm-1 5.7c1.7 0 2.7 1.1 2.7 2.7 0 1.7-1 2.7-2.7 2.7H8.5V10H11zm3.8 1.5h1v1h-1v1h-1v-1h-1v-1h1v-1h1v1zm3 0h1v1h-1v1h-1v-1h-1v-1h1v-1h1v1z" />
          </svg>
        </div>
      );
    case 'go':
      return (
        <div className="w-9 h-9 bg-cyan-700/80 rounded text-cyan-200 font-mono font-bold flex items-center justify-center text-xs tracking-wider border border-cyan-500/30">
          GO
        </div>
      );
    case 'linux-ebpf':
      return (
        <svg className="w-9 h-9 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );
    default:
      return <Cpu className="w-8 h-8 text-[var(--accent)]" />;
  }
};

export const HowIDoItView: React.FC = () => {
  return (
    <div className="max-w-5xl space-y-8 animate-fade-in">
      {/* Title & Subheading exactly matching qasim.li screenshot */}
      <div className="space-y-2">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
          How I Do It
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans-body">
          I explore modern technologies to build high-performance systems.
        </p>
      </div>

      {/* Stacked Horizontal Technology Cards (qasim.li format) */}
      <div className="space-y-4 pt-2">
        {techSkills.map((skill) => (
          <div
            key={skill.id}
            className="bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-strong)] rounded-xl flex flex-col md:flex-row items-stretch overflow-hidden transition-all duration-200 group"
          >
            {/* Left Icon Container with tailored color tint */}
            <div
              className={`w-full md:w-28 py-5 md:py-0 shrink-0 flex items-center justify-center border-b md:border-b-0 md:border-r border-[var(--border-color)] ${skill.theme.iconBg}`}
            >
              <TechIcon skillId={skill.id} />
            </div>

            {/* Right Information Columns */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-12 items-stretch divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-color)]">
              {/* Column 1: name */}
              <div className="sm:col-span-3 p-4 sm:p-5 flex flex-col justify-center">
                <div className="text-[11px] font-mono text-[var(--text-muted)] tracking-wider">
                  name
                </div>
                <div className="text-sm font-semibold text-[var(--text-primary)] mt-1 tracking-tight">
                  {skill.name}
                </div>
              </div>

              {/* Column 2: type */}
              <div className="sm:col-span-3 p-4 sm:p-5 flex flex-col justify-center">
                <div className="text-[11px] font-mono text-[var(--text-muted)] tracking-wider">
                  type
                </div>
                <div className="text-sm font-medium text-[var(--text-primary)] mt-1 tracking-tight">
                  {skill.type}
                </div>
              </div>

              {/* Column 3: use case */}
              <div className="sm:col-span-6 p-4 sm:p-5 flex flex-col justify-center">
                <div className="text-[11px] font-mono text-[var(--text-muted)] tracking-wider">
                  use case
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mt-1 font-sans-body">
                  {skill.useCase}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
