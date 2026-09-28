import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, FileText, Palette } from 'lucide-react';
import { ThemeId, THEME_OPTIONS } from './ThemeSelectorModal';

interface NavbarProps {
  displayName: string;
  onOpenResumeModal: () => void;
  onOpenThemeModal: () => void;
  currentTheme: ThemeId;
}

export const Navbar: React.FC<NavbarProps> = ({
  displayName,
  onOpenResumeModal,
  onOpenThemeModal,
  currentTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentThemeObj = THEME_OPTIONS.find((t) => t.id === currentTheme);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Publications', href: '#publications' },
    { label: 'Magazine Showcase', href: '#showcase' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border-color)] py-3.5 shadow-sm'
          : 'bg-[var(--bg-primary)]/80 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Single text wordmark */}
        <a
          href="#about"
          className="text-base font-semibold tracking-tight text-[var(--text-primary)] hover:opacity-75 transition-opacity"
        >
          {displayName || "Curriculum & Works"}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-[var(--text-muted)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[var(--text-primary)] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--text-primary)] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions + Design Switcher */}
        <div className="flex items-center gap-2.5">
          {/* Design Style Trigger */}
          <button
            onClick={onOpenThemeModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-subtle)] border border-[var(--border-color)] transition-colors"
            title="Explore & Switch Design Themes"
          >
            <Palette className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span className="hidden sm:inline">Theme:</span>
            <span className="font-semibold truncate max-w-[90px]">
              {currentThemeObj ? currentThemeObj.name.split('.')[1]?.trim().split(' ')[0] : 'Style'}
            </span>
          </button>

          <button
            onClick={onOpenResumeModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-subtle)] border border-[var(--border-color)] transition-colors"
            title="View & Print CV Document"
          >
            <FileText className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            <span>CV Doc</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-mono text-[var(--accent-contrast)] bg-[var(--accent)] hover:opacity-90 transition-opacity"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] transition-colors ml-1"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-color)] bg-[var(--bg-primary)] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[var(--border-color)] flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenThemeModal();
              }}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-primary)] py-1"
            >
              <Palette className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Change Design Style</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-primary)] py-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Print CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

