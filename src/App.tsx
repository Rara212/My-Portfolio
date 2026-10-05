import React, { useState, useEffect } from 'react';
import { Sidebar, NavTabId } from './components/Sidebar';
import { WhatIDoView } from './components/views/WhatIDoView';
import { WhereIveDoneItView } from './components/views/WhereIveDoneItView';
import { HowIDoItView } from './components/views/HowIDoItView';
import { MagazineShowcaseView } from './components/views/MagazineShowcaseView';
import { PublicationsView } from './components/views/PublicationsView';
import { MoreContactView } from './components/views/MoreContactView';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { ThemeSelectorModal, ThemeId, THEME_OPTIONS } from './components/ThemeSelectorModal';
import { initialProfileData, ProfileData, MagazineProject } from './data/portfolioData';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(initialProfileData);

  const [activeTab, setActiveTab] = useState<NavTabId>(() => {
    const hash = window.location.hash.replace('#', '') as NavTabId;
    const validTabs: NavTabId[] = [
      'what-i-do',
      'where-ive-done-it',
      'how-i-do-it',
      'showcase',
      'publications',
      'more-contact',
    ];
    if (validTabs.includes(hash)) {
      return hash;
    }
    return 'what-i-do';
  });

  const [currentTheme, setCurrentTheme] = useState<ThemeId>(() => {
    try {
      const savedTheme = localStorage.getItem('portfolio_theme') as ThemeId;
      if (savedTheme === 'nordic') {
        return savedTheme;
      }
    } catch {
      // fallback
    }
    return 'nordic';
  });

  const [selectedProject, setSelectedProject] = useState<MagazineProject | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync hash with active tab
  const handleTabChange = (tab: NavTabId) => {
    setActiveTab(tab);
    window.location.hash = tab;
    // Scroll content container to top
    const mainArea = document.getElementById('main-content-scroll');
    if (mainArea) {
      mainArea.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavTabId;
      const validTabs: NavTabId[] = [
        'what-i-do',
        'where-ive-done-it',
        'how-i-do-it',
        'showcase',
        'publications',
        'more-contact',
      ];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync theme with DOM root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    try {
      localStorage.setItem('portfolio_theme', currentTheme);
    } catch {
      // ignore
    }
  }, [currentTheme]);

  const handleSelectTheme = (themeId: ThemeId) => {
    setCurrentTheme(themeId);
    const chosen = THEME_OPTIONS.find((t) => t.id === themeId);
    setToastMessage(`Theme applied: ${chosen?.tagline || themeId}`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col md:flex-row font-sans-body selection:bg-[var(--accent)] selection:text-[var(--accent-contrast)] transition-colors duration-200">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[var(--accent)] text-[var(--accent-contrast)] px-4 py-2.5 text-xs font-mono shadow-2xl border border-[var(--border-color)] animate-fade-in flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Left Sidebar (fixed on desktop, matching qasim.li) */}
      <Sidebar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        profile={profile}
      />

      {/* Right Content Area: Displays ONE PAGE AT A TIME based on activeTab */}
      <main
        id="main-content-scroll"
        className="flex-1 md:ml-64 lg:ml-72 min-h-screen overflow-y-auto px-6 sm:px-12 lg:px-16 py-24 md:py-16"
      >
        <div className="max-w-4xl">
          {activeTab === 'what-i-do' && (
            <WhatIDoView
              profile={profile}
              onNavigate={handleTabChange}
              onOpenResumeModal={() => setIsResumeModalOpen(true)}
            />
          )}

          {activeTab === 'where-ive-done-it' && <WhereIveDoneItView />}

          {activeTab === 'how-i-do-it' && <HowIDoItView />}

          {activeTab === 'showcase' && (
            <MagazineShowcaseView onSelectProject={(p) => setSelectedProject(p)} />
          )}

          {activeTab === 'publications' && <PublicationsView />}

          {activeTab === 'more-contact' && (
            <MoreContactView
              profile={profile}
              onOpenResumeModal={() => setIsResumeModalOpen(true)}
            />
          )}
        </div>
      </main>

      {/* Deep-Dive Case Study Reader Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Printable Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        profile={profile}
      />

      {/* Design Presets & Theme Explorer Modal */}
      <ThemeSelectorModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
        currentTheme={currentTheme}
        onSelectTheme={handleSelectTheme}
      />
    </div>
  );
}
