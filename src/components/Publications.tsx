import React, { useState } from 'react';
import { BookOpen, Copy, Check, ChevronDown, ChevronUp, ExternalLink, FileText } from 'lucide-react';
import { publications, PublicationItem } from '../data/portfolioData';

export const Publications: React.FC = () => {
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({
    'pub-1': true, // first one expanded by default for immediate readership
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const copyBibtex = (item: PublicationItem) => {
    navigator.clipboard.writeText(item.bibtex);
    setCopiedId(item.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="publications" className="py-20 md:py-28 border-b border-[var(--border-color)] scroll-mt-12 bg-[var(--bg-primary)] transition-colors">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[var(--border-color)]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-2">
              02 · Peer-Reviewed Research
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display text-[var(--text-primary)] tracking-tight">
              Journal Publications
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--text-muted)]">
            PEER-REVIEWED PAPERS · LEAD &amp; PRIMARY AUTHOR HIGHLIGHTED
          </div>
        </div>

        {/* Papers List */}
        <div className="mt-12 space-y-10">
          {publications.map((paper, index) => {
            const isAbstractOpen = !!expandedAbstracts[paper.id];
            const isCopied = copiedId === paper.id;

            return (
              <article
                key={paper.id}
                className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 sm:p-8 space-y-6 transition-all"
              >
                {/* Journal & Year Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[var(--text-muted)] pb-4 border-b border-[var(--border-color)]">
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--text-primary)] font-medium font-serif-display text-sm tracking-wide">
                      {paper.journal}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{paper.volumeIssue}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--text-primary)] font-semibold">{paper.year}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[var(--accent)] font-medium">Peer-Reviewed Article</span>
                  </div>
                </div>

                {/* Article Title */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif-display text-[var(--text-primary)] leading-tight">
                    {paper.title}
                  </h3>
                </div>

                {/* Authors with highlighted primary author */}
                <div className="space-y-1">
                  <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                    Authors &amp; Affiliations:
                  </div>
                  <div className="flex flex-wrap items-center gap-y-1 text-sm font-sans-body">
                    {paper.authors.map((author, aIdx) => (
                      <span key={author.name} className="inline-flex items-center">
                        {author.isPrimary ? (
                          <span
                            className="font-semibold text-[var(--text-primary)] underline decoration-[var(--border-strong)] decoration-2 underline-offset-4 mr-1.5"
                            title={`${author.name} (Primary & Lead Author)`}
                          >
                            {author.name}*
                            <span className="sr-only"> (Primary Author)</span>
                          </span>
                        ) : (
                          <span className="text-[var(--text-secondary)] mr-1.5">
                            {author.name}
                          </span>
                        )}
                        {aIdx < paper.authors.length - 1 && (
                          <span className="text-[var(--text-muted)] mr-1.5" aria-hidden="true">,</span>
                        )}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs font-mono text-[var(--text-muted)] italic pt-1">
                    * Highlights primary / lead investigator
                  </div>
                </div>

                {/* Abstract Accordion */}
                <div className="pt-2">
                  <button
                    onClick={() => toggleAbstract(paper.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] hover:text-[var(--text-secondary)] py-1 transition-colors"
                  >
                    <span>{isAbstractOpen ? 'Hide Abstract' : 'Read Abstract'}</span>
                    {isAbstractOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isAbstractOpen && (
                    <div className="mt-3 p-4 bg-[var(--bg-secondary)] border-l-2 border-[var(--border-strong)] text-sm text-[var(--text-secondary)] leading-relaxed font-sans-body">
                      <p>{paper.abstract}</p>
                    </div>
                  )}
                </div>

                {/* Action Bar */}
                <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    {paper.doi && (
                      <a
                        href={`https://doi.org/${paper.doi}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[var(--text-primary)] hover:underline"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>DOI: {paper.doi}</span>
                      </a>
                    )}

                    {paper.arxivUrl && (
                      <a
                        href={paper.arxivUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:underline"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>arXiv Preprint</span>
                      </a>
                    )}
                  </div>

                  {/* Copy BibTeX Button */}
                  <button
                    onClick={() => copyBibtex(paper)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-secondary)] hover:bg-[var(--bg-subtle)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] transition-colors"
                    title="Copy BibTeX Citation to clipboard"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="font-medium text-emerald-600">Citation Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                        <span>Copy BibTeX</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
