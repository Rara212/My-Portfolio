import React, { useState } from 'react';
import { Send, Github, Linkedin, GraduationCap, Mail, Menu, X } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';

export type NavTabId =
  | 'what-i-do'
  | 'where-ive-done-it'
  | 'how-i-do-it'
  | 'showcase'
  | 'publications'
  | 'more-contact';

interface SidebarProps {
  activeTab: NavTabId;
  onTabChange: (tab: NavTabId) => void;
  profile: ProfileData;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onTabChange,
  profile,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTabId; label: string }[] = [
    { id: 'what-i-do', label: 'what I do' },
    { id: 'where-ive-done-it', label: "where I've done it" },
    { id: 'how-i-do-it', label: 'how I do it' },
    { id: 'showcase', label: 'magazine showcase' },
    { id: 'publications', label: 'publications' },
    { id: 'more-contact', label: 'more + contact' },
  ];

  const handleItemClick = (id: NavTabId) => {
    onTabChange(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Top Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[var(--bg-primary)] border-b border-[var(--border-color)] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-base text-[var(--text-primary)]">
            {profile.name}
          </span>
          <span className="text-xs text-[var(--accent)] flex items-center gap-1">
            <Send className="w-3 h-3 rotate-[-30deg]" />
            <span>{profile.location.split('·')[0].trim()}</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[var(--text-primary)]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-[var(--bg-primary)] pt-20 px-8 pb-8 flex flex-col justify-between animate-fade-in">
          <nav className="space-y-6 pt-4">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`block w-full text-left text-xl transition-colors font-sans-body lowercase tracking-tight ${
                    isActive
                      ? 'text-[var(--text-primary)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-[var(--border-color)] space-y-4">
            <div className="flex items-center justify-center gap-6 pt-2 text-[var(--text-secondary)]">
              <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5 hover:text-[var(--text-primary)]" />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 hover:text-[var(--text-primary)]" />
              </a>
              <a href={`mailto:${profile.socials.email}`} aria-label="Email">
                <Mail className="w-5 h-5 hover:text-[var(--text-primary)]" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Persistent Sidebar */}
      <aside className="hidden md:flex flex-col justify-between w-64 lg:w-72 h-screen fixed top-0 left-0 border-r border-[var(--border-color)] bg-[var(--bg-primary)] px-8 py-12 shrink-0 z-20 transition-colors">
        {/* Top: Name & Location (matches qasim.li screenshot) */}
        <div className="space-y-2">
          <h1 className="text-lg font-semibold text-[var(--text-primary)] tracking-tight">
            {profile.name}
          </h1>

          {/* Location with pink/rose paper-plane arrow */}
          <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <Send className="w-3.5 h-3.5 text-[var(--accent)] rotate-[-30deg]" />
            <span className="text-[var(--text-secondary)]">{profile.location.split('·')[0].trim()}</span>
          </div>
        </div>

        {/* Middle: Clean lowercase nav items (matches screenshot 1:1) */}
        <nav className="my-auto space-y-6">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`block w-full text-left transition-colors duration-150 text-sm lowercase tracking-tight ${
                  isActive
                    ? 'text-[var(--text-primary)] font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Bottom: Socials + Utility Controls */}
        <div className="space-y-4 pt-4 border-t border-[var(--border-color)]">
          <div className="flex items-center gap-4 text-[var(--text-secondary)]">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.socials.email}`}
              className="hover:text-[var(--text-primary)] transition-colors"
              aria-label="Direct Email"
              title={profile.socials.email}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
