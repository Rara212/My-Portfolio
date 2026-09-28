import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';

interface HeroProps {
  profile: ProfileData;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResumeModal }) => {
  return (
    <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[var(--border-color)] relative overflow-hidden transition-colors">
      {/* Editorial Folio Header line */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--border-color)] text-xs font-mono tracking-wider text-[var(--text-muted)] uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span>FOLIO ARCHIVE</span>
            <span aria-hidden="true">·</span>
            <span>EDITION 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[var(--text-primary)] font-medium">{profile.status}</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">{profile.location}</span>
          </div>
        </div>

        {/* Main Editorial Masthead */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-block text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] px-2.5 py-1 bg-[var(--bg-surface)] border border-[var(--border-color)]">
              {profile.headline}
            </div>

            {/* Name Lockup */}
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-display text-[var(--text-primary)] tracking-tight leading-[1.05]">
                {profile.name}
              </h1>
            </div>

            <p className="text-xl sm:text-2xl font-serif-display italic text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              &ldquo;{profile.subheadline}&rdquo;
            </p>

            <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl font-sans-body">
              {profile.bio}
            </p>

            {/* Social & Contact Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-surface)] hover:bg-[var(--bg-subtle)] border border-[var(--border-color)] text-[var(--text-primary)] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-surface)] hover:bg-[var(--bg-subtle)] border border-[var(--border-color)] text-[var(--text-primary)] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${profile.socials.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-surface)] hover:bg-[var(--bg-subtle)] border border-[var(--border-color)] text-[var(--text-primary)] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{profile.socials.email}</span>
              </a>
            </div>
          </div>

          {/* Right column: Editorial Index & Quick Jumps */}
          <div className="lg:col-span-4 bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 lg:p-7 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)] text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
              <span>Table of Contents</span>
              <span>Index</span>
            </div>

            <nav className="space-y-3 font-sans-body text-sm">
              <a
                href="#experience"
                className="flex items-center justify-between group text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-1"
              >
                <span className="group-hover:translate-x-1 transition-transform">01. Chronological Trajectory</span>
                <span className="font-mono text-xs text-[var(--text-muted)]">3 Roles</span>
              </a>
              <a
                href="#publications"
                className="flex items-center justify-between group text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-1"
              >
                <span className="group-hover:translate-x-1 transition-transform">02. Journal Research</span>
                <span className="font-mono text-xs text-[var(--text-muted)]">2 Papers</span>
              </a>
              <a
                href="#showcase"
                className="flex items-center justify-between group text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-1"
              >
                <span className="group-hover:translate-x-1 transition-transform">03. Magazine Showcase</span>
                <span className="font-mono text-xs text-[var(--text-muted)]">4 Spreads</span>
              </a>
              <a
                href="#skills"
                className="flex items-center justify-between group text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-1"
              >
                <span className="group-hover:translate-x-1 transition-transform">04. Technical Capabilities</span>
                <span className="font-mono text-xs text-[var(--text-muted)]">4 Clusters</span>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-between group text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-1"
              >
                <span className="group-hover:translate-x-1 transition-transform">05. Direct Inquiries</span>
                <span className="font-mono text-xs text-[var(--text-muted)]">Open</span>
              </a>
            </nav>

            <div className="pt-4 border-t border-[var(--border-color)]">
              <button
                onClick={onOpenResumeModal}
                className="w-full py-2.5 px-4 bg-[var(--accent)] hover:opacity-90 text-[var(--accent-contrast)] text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Curriculum Vitae Document</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
