import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] py-12 text-[var(--text-muted)] text-xs font-mono transition-colors">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-[var(--border-color)]">
          <div className="space-y-1">
            <div className="text-sm font-serif-display font-medium text-[var(--text-primary)]">
              {profile.name} — Web-CV &amp; Magazine Portfolio
            </div>
            <div>
              {profile.headline} · {profile.location}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[var(--text-primary)] hover:underline ml-2"
              title="Return to masthead"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[var(--accent)]" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-[var(--text-muted)]">
          <div>
            &copy; {new Date().getFullYear()} {profile.name}. All research, architecture, and case studies reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Production Build</span>
            <span aria-hidden="true">·</span>
            <span className="text-[var(--text-secondary)]">Ready for 1-Click Vercel Deployment</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
