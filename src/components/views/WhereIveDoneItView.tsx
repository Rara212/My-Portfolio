import React from 'react';
import { ExternalLink } from 'lucide-react';
import { researchWorkList } from '../../data/portfolioData';

// Institutional Logos crafted to mirror the exact emblems in screenshot
const InstitutionLogo: React.FC<{ type: 'uoft' | 'mcgill' | 'alphawave' }> = ({ type }) => {
  switch (type) {
    case 'uoft':
      return (
        <div className="w-12 h-14 shrink-0 flex items-center justify-center">
          {/* University of Toronto Blue Shield Crest */}
          <svg className="w-10 h-12" viewBox="0 0 100 120" fill="none">
            <path
              d="M10 10 H90 V65 C90 95 50 115 50 115 C50 115 10 95 10 65 Z"
              fill="#002A5C"
              stroke="#B3D4FC"
              strokeWidth="3"
            />
            {/* Crown & Tree emblem */}
            <path d="M35 30 L50 20 L65 30 L60 45 H40 Z" fill="#FDB913" />
            <path d="M42 45 H58 V80 H42 Z" fill="#FFFFFF" />
            <circle cx="50" cy="62" r="14" fill="#002A5C" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M50 52 L55 60 H45 Z" fill="#FFFFFF" />
            <path d="M50 64 L56 72 H44 Z" fill="#FFFFFF" />
            {/* Ribbon banner */}
            <path d="M20 90 Q50 105 80 90" stroke="#FFFFFF" strokeWidth="3" fill="none" />
          </svg>
        </div>
      );
    case 'mcgill':
      return (
        <div className="w-12 h-14 shrink-0 flex items-center justify-center">
          {/* McGill University Red Crest Shield with Crown & Birds */}
          <svg className="w-10 h-12" viewBox="0 0 100 120" fill="none">
            <path
              d="M10 10 H90 V65 C90 95 50 115 50 115 C50 115 10 95 10 65 Z"
              fill="#ED1B2F"
              stroke="#FFFFFF"
              strokeWidth="3"
            />
            {/* Open Book */}
            <path d="M30 25 Q50 20 70 25 V45 Q50 40 30 45 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
            {/* 3 Martlet birds */}
            <path d="M32 60 Q38 52 44 60 Q40 68 32 60 Z" fill="#FFFFFF" />
            <path d="M56 60 Q62 52 68 60 Q64 68 56 60 Z" fill="#FFFFFF" />
            <path d="M44 80 Q50 72 56 80 Q52 88 44 80 Z" fill="#FFFFFF" />
          </svg>
        </div>
      );
    case 'alphawave':
      return (
        <div className="w-12 h-14 shrink-0 flex items-center justify-center">
          {/* Alphawave Semi Triangular Ribbon Logo */}
          <svg className="w-11 h-11" viewBox="0 0 100 100" fill="none">
            <path
              d="M20 75 C15 65 30 25 45 20 C60 15 85 45 80 70 C75 90 35 90 20 75 Z"
              fill="url(#alphawave-gradient)"
            />
            <path
              d="M35 70 C40 45 65 45 68 68 C70 78 45 82 35 70 Z"
              fill="#000000"
            />
            <defs>
              <linearGradient id="alphawave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0072CE" />
                <stop offset="100%" stopColor="#00D2D3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
  }
};

export const WhereIveDoneItView: React.FC = () => {
  return (
    <div className="max-w-5xl space-y-16 animate-fade-in pb-12">
      {/* ========================================================================= */}
      {/* SECTION 1: Research & Work (Screenshot 1) */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
            Research &amp; Work
          </h2>
        </div>

        {/* 2-Column Grid of Institution Cards (Screenshot 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {researchWorkList.map((item) => (
            <div
              key={item.id}
              className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl overflow-hidden flex flex-col justify-between"
            >
              {/* Card Header with Logo + Meta */}
              <div className="p-6 pb-5 flex items-center gap-4 border-b border-[var(--border-color)]">
                {item.logoImage ? (
                  <img
                    src={item.logoImage}
                    alt={`${item.institution} logo`}
                    className="w-12 h-14 shrink-0 object-contain"
                  />
                ) : item.logoType ? (
                  <InstitutionLogo type={item.logoType} />
                ) : null}

                <div className="space-y-0.5 min-w-0">
                  <div className="text-xs font-mono text-[var(--accent)] font-medium">
                    {item.year}
                  </div>
                  <a
                    href={item.institutionUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-base sm:text-lg font-semibold text-[var(--text-primary)] hover:underline truncate"
                  >
                    <span className="truncate">{item.institution}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 text-[var(--text-muted)]" />
                  </a>
                  <div className="text-xs text-[var(--text-muted)]">
                    {item.roleType}
                  </div>
                </div>
              </div>

              {/* Card Body: Role & What I Did */}
              <div className="p-6 space-y-5">
                <div className="space-y-1">
                  <div className="text-sm font-semibold text-[var(--text-primary)]">
                    Role
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--text-secondary)] font-sans-body">
                    {item.roleDetail}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-semibold text-[var(--text-primary)]">
                    What I Did
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans-body">
                    {item.whatIDid}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
