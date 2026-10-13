import React from 'react';
import { Award, BadgeCheck } from 'lucide-react';
import { certifications, achievements, CredentialItem } from '../../data/portfolioData';

const CredentialCard: React.FC<{
  item: CredentialItem;
  icon: React.ReactNode;
  titleLabel: string;
}> = ({ item, icon, titleLabel }) => (
  <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-strong)] rounded-xl flex flex-col md:flex-row items-stretch overflow-hidden transition-all duration-200">
    <div className="w-full md:w-28 py-5 md:py-0 shrink-0 flex items-center justify-center border-b md:border-b-0 md:border-r border-[var(--border-color)] bg-[var(--bg-secondary)]">
      {icon}
    </div>
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-12 items-stretch divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-color)]">
      <div className="sm:col-span-6 p-4 sm:p-5 flex flex-col justify-center">
        <div className="text-[11px] font-mono text-[var(--text-muted)] tracking-wider">
          {titleLabel}
        </div>
        <div className="text-sm font-semibold text-[var(--text-primary)] mt-1 tracking-tight">
          {item.title}
        </div>
        <div className="text-xs text-[var(--text-muted)] mt-1 font-sans-body">
          {item.organization}
        </div>
        {item.note && (
          <div className="text-xs italic text-[var(--text-secondary)] mt-1.5 font-sans-body">
            {item.note}
          </div>
        )}
      </div>
      <div className="sm:col-span-3 p-4 sm:p-5 flex flex-col justify-center">
        <div className="text-[11px] font-mono text-[var(--text-muted)] tracking-wider">
          location
        </div>
        <div className="text-sm font-medium text-[var(--text-primary)] mt-1 tracking-tight">
          {item.location}
        </div>
      </div>
      <div className="sm:col-span-3 p-4 sm:p-5 flex flex-col justify-center">
        <div className="text-[11px] font-mono text-[var(--text-muted)] tracking-wider">
          year
        </div>
        <div className="text-sm font-medium text-[var(--text-primary)] mt-1 font-mono">
          {item.year}
        </div>
      </div>
    </div>
  </div>
);

export const AchievementsView: React.FC = () => {
  return (
    <div className="max-w-5xl space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
          Achievements
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans-body">
          Certifications and competition wins that recognize my craft.
        </p>
      </div>

      {/* Certifications */}
      <div className="space-y-4 pt-2">
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
          Certifications
        </h3>
        <div className="space-y-4">
          {certifications.map((cert) => (
            <CredentialCard
              key={cert.id}
              item={cert}
              titleLabel="certification"
              icon={<BadgeCheck className="w-8 h-8 text-[var(--accent)]" />}
            />
          ))}
        </div>
      </div>

      {/* Awards & Competition Wins */}
      <div className="space-y-4 pt-2">
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
          Awards &amp; Competition Wins
        </h3>
        <div className="space-y-4">
          {achievements.map((ach) => (
            <CredentialCard
              key={ach.id}
              item={ach}
              titleLabel="award"
              icon={<Award className="w-8 h-8 text-[var(--accent)]" />}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
