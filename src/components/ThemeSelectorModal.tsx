import React, { useEffect } from 'react';
import { X, Check, Palette, Sparkles, Layout, Monitor, BookOpen } from 'lucide-react';

export type ThemeId = 'nordic';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  tagline: string;
  description: string;
  palette: {
    bg: string;
    surface: string;
    text: string;
    accent: string;
    border: string;
  };
  typography: string;
  vibe: string;
  referenceInspiration: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'nordic',
    name: '04. Nordic Slate & Spruce',
    tagline: 'Architectural Monograph & Studio',
    description: 'Cool limestone background with pure floating white cards, deep midnight navy text, and alpine spruce teal accents. Balances engineering precision with Scandinavian architectural serenity.',
    palette: {
      bg: '#eef2f6',
      surface: '#ffffff',
      text: '#0f172a',
      accent: '#0f766e',
      border: '#cbd5e1',
    },
    typography: 'Sculptural Display Serif + Clean Geometric Sans',
    vibe: 'Nordic architectural archive, calm authority, sustainable systems',
    referenceInspiration: 'Arkitektur review, Copenhagen design monographs',
  },
];

interface ThemeSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: ThemeId;
  onSelectTheme: (id: ThemeId) => void;
}

export const ThemeSelectorModal: React.FC<ThemeSelectorModalProps> = ({
  isOpen,
  onClose,
  currentTheme,
  onSelectTheme,
}) => {
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)] bg-[var(--bg-surface)] shrink-0">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
            <Palette className="w-4 h-4 text-[var(--accent)]" />
            <span className="font-semibold text-[var(--text-primary)]">Curated Design Presets</span>
            <span aria-hidden="true">·</span>
            <span>Live Interactive Preview</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] transition-colors"
            aria-label="Close design palette modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif-display text-[var(--text-primary)] leading-tight">
              Select Your Aesthetic Identity
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-1.5 max-w-2xl leading-relaxed">
              Click any design style below to immediately transform the entire site&apos;s palette, typography, card structures, and contrast discipline. Your preference persists in your browser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {THEME_OPTIONS.map((theme) => {
              const isSelected = currentTheme === theme.id;

              return (
                <div
                  key={theme.id}
                  onClick={() => onSelectTheme(theme.id)}
                  className={`cursor-pointer p-5 border text-left transition-all duration-200 flex flex-col justify-between relative group ${
                    isSelected
                      ? 'border-[var(--accent)] ring-2 ring-[var(--accent)]/30 bg-[var(--bg-surface)]'
                      : 'border-[var(--border-color)] hover:border-[var(--text-primary)] bg-[var(--bg-surface)]'
                  }`}
                  style={{
                    boxShadow: isSelected ? '0 8px 24px rgba(0,0,0,0.08)' : undefined,
                  }}
                >
                  <div className="space-y-3.5">
                    {/* Header + Indicator */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-serif-display text-[var(--text-primary)] leading-tight">
                          {theme.name}
                        </h3>
                        <div className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                          {theme.tagline}
                        </div>
                      </div>
                      {isSelected ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 bg-[var(--accent)] text-[var(--accent-contrast)] shrink-0">
                          <Check className="w-3 h-3" />
                          <span>Active</span>
                        </span>
                      ) : (
                        <span className="text-[11px] font-mono text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors shrink-0">
                          Click to apply ↗
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {theme.description}
                    </p>

                    {/* Color Swatch Bar */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                        Color Balance:
                      </div>
                      <div className="flex items-center gap-1.5 h-6 border border-[var(--border-color)] p-0.5 bg-black/5">
                        <div
                          className="h-full flex-1"
                          style={{ backgroundColor: theme.palette.bg }}
                          title={`Canvas: ${theme.palette.bg}`}
                        />
                        <div
                          className="h-full flex-1"
                          style={{ backgroundColor: theme.palette.surface }}
                          title={`Surface: ${theme.palette.surface}`}
                        />
                        <div
                          className="h-full flex-1"
                          style={{ backgroundColor: theme.palette.text }}
                          title={`Typography: ${theme.palette.text}`}
                        />
                        <div
                          className="h-full w-5"
                          style={{ backgroundColor: theme.palette.accent }}
                          title={`Accent: ${theme.palette.accent}`}
                        />
                      </div>
                    </div>

                    {/* Typography & Vibe details */}
                    <div className="text-xs font-mono space-y-1 pt-1 border-t border-[var(--border-color)] text-[var(--text-muted)]">
                      <div className="flex items-center justify-between text-[11px]">
                        <span>Type:</span>
                        <span className="text-[var(--text-primary)] font-medium truncate max-w-[200px] text-right">
                          {theme.typography}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span>Reference:</span>
                        <span className="text-[var(--text-secondary)] truncate max-w-[200px] text-right">
                          {theme.referenceInspiration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-mono">
                    <span className="text-[var(--text-muted)]">
                      {isSelected ? 'Currently Applied' : 'Ready to Preview'}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTheme(theme.id);
                      }}
                      className={`px-3 py-1 text-xs font-mono transition-colors ${
                        isSelected
                          ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-medium'
                          : 'bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--accent-contrast)]'
                      }`}
                    >
                      {isSelected ? 'Active Theme' : 'Switch Theme'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3.5 border-t border-[var(--border-color)] bg-[var(--bg-secondary)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)] shrink-0">
          <span>Themes are production-ready with zero additional runtime overhead</span>
          <button
            onClick={onClose}
            className="text-[var(--text-primary)] hover:underline"
          >
            Done Browsing
          </button>
        </div>
      </div>
    </div>
  );
};
