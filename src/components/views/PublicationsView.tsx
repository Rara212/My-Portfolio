import React, { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, ExternalLink, FileText } from 'lucide-react';
import { publications, PublicationItem } from '../../data/portfolioData';

export const PublicationsView: React.FC = () => {
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({
    'pub-1': true,
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
    <div className="max-w-4xl space-y-10 animate-fade-in">
      <div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
          Publications
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mt-2 font-sans-body">
          Peer-reviewed journal articles.
        </p>
      </div>

      <div className="space-y-8">
        {publications.map((paper) => {
          const isAbstractOpen = !!expandedAbstracts[paper.id];
          const isCopied = copiedId === paper.id;

          return (
            <article
              key={paper.id}
              className="p-6 bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-5 transition-all"
            >
              {/* Journal / Year Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[var(--text-muted)] pb-3 border-b border-[var(--border-color)]">
                <span className="text-[var(--text-primary)] font-medium">
                  {paper.journal} · {paper.volumeIssue}
                </span>
                <span className="text-[var(--accent)] font-medium">
                  {paper.year} · Peer-Reviewed
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[var(--text-primary)] leading-snug">
                {paper.title}
              </h3>

              {/* Authors with highlighted primary author */}
              <div className="space-y-1">
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  Authors &amp; Contributions:
                </div>
                <div className="flex flex-wrap items-center gap-y-1 text-sm font-sans-body">
                  {paper.authors.map((author, aIdx) => (
                    <span key={author.name} className="inline-flex items-center">
                      {author.isPrimary ? (
                        <span
                          className="font-bold text-[var(--text-primary)] underline decoration-[var(--accent)] decoration-2 underline-offset-4 mr-1.5"
                          title={`${author.name} (Lead / Primary Author)`}
                        >
                          {author.name}*
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
                <div className="text-xs font-mono text-[var(--text-muted)] italic pt-0.5">
                  * Highlights primary / lead investigator
                </div>
              </div>

              {/* Abstract Drawer */}
              <div>
                <button
                  onClick={() => toggleAbstract(paper.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors py-1"
                >
                  <span>{isAbstractOpen ? 'Hide Abstract' : 'Read Abstract'}</span>
                  {isAbstractOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {isAbstractOpen && (
                  <div className="mt-3 p-4 bg-[var(--bg-secondary)] border-l-2 border-[var(--accent)] text-sm text-[var(--text-secondary)] leading-relaxed font-sans-body">
                    <p>{paper.abstract}</p>
                  </div>
                )}
              </div>

              {/* Action Bar */}
              <div className="pt-3 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs font-mono">
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
                      <span>arXiv</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => copyBibtex(paper)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-secondary)] hover:bg-[var(--bg-subtle)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] transition-colors"
                  title="Copy BibTeX"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-medium">Citation Copied</span>
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
  );
};
