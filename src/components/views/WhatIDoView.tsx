import React from 'react';
import { ArrowRight, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import { ProfileData } from '../../data/portfolioData';
import { NavTabId } from '../Sidebar';

interface WhatIDoViewProps {
  profile: ProfileData;
  onNavigate: (tab: NavTabId) => void;
  onOpenResumeModal: () => void;
}

export const WhatIDoView: React.FC<WhatIDoViewProps> = ({ profile, onNavigate, onOpenResumeModal }) => {
  return (
    <div className="max-w-3xl space-y-10 animate-fade-in">
      {/* Title directly mirroring the screenshot */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
          What I Do
        </h2>
      </div>

      {/* Main Narrative Prose echoing qasim.li structure */}
      <div className="space-y-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans-body">
        <p className="text-[var(--text-primary)] font-medium">
          {profile.name}, {profile.headline.toLowerCase()}.
        </p>

        <p>
          I design, build and publish high-performance systems and products of uncompromising reliability.
          Currently researching low-latency accelerator architectures and engineering resilient distributed services.
        </p>

        <p>
          I&apos;m deeply interested in{' '}
          <span className="text-[var(--text-primary)] font-medium">hardware acceleration</span>,{' '}
          <span className="text-[var(--text-primary)] font-medium">parallel algorithm design</span>,{' '}
          <span className="text-[var(--text-primary)] font-medium">agentic workflows</span>, and{' '}
          <span className="text-[var(--text-primary)] font-medium">distributed cloud systems</span>.
        </p>
      </div>

      {/* Interactive Feature Highlights / Selected Directions */}
      <div className="pt-6 border-t border-[var(--border-color)] space-y-4">
        <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
          Exploration Index
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => onNavigate('where-ive-done-it')}
            className="p-4 text-left bg-[var(--bg-surface)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all group"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span>Trajectory</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)] group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
              Where I&apos;ve Done It
            </div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">
              PCIe validation at Alphawave Semi &amp; HPC research
            </div>
          </button>

          <button
            onClick={() => onNavigate('showcase')}
            className="p-4 text-left bg-[var(--bg-surface)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all group"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span>Selected Works</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)] group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
              Magazine Showcase
            </div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">
              Deep-dive case studies &amp; architectural blueprints
            </div>
          </button>

          <button
            onClick={() => onNavigate('publications')}
            className="p-4 text-left bg-[var(--bg-surface)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all group"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span>Scholarly Research</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)] group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
              Publications
            </div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">
              IEEE &amp; ACM peer-reviewed papers with verified DOIs
            </div>
          </button>

          <button
            onClick={() => onNavigate('how-i-do-it')}
            className="p-4 text-left bg-[var(--bg-surface)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all group"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span>Stack &amp; Skills</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)] group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
              How I Do It
            </div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">
              C++, SystemVerilog, FPGA pipelines, Go, &amp; Cloud
            </div>
          </button>
        </div>
      </div>

      {/* Action Prompt */}
      <div className="pt-6 border-t border-[var(--border-color)] flex items-center gap-4 text-xs font-mono">
        <button
          onClick={() => onNavigate('more-contact')}
          className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-contrast)] hover:opacity-90 transition-opacity font-medium"
        >
          Initiate Contact
        </button>
        <button
          onClick={onOpenResumeModal}
          className="px-4 py-2 bg-[var(--bg-surface)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] transition-colors"
        >
          View Full CV Document
        </button>
      </div>
    </div>
  );
};
