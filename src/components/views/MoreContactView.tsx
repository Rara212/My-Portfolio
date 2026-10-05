import React, { useState } from 'react';
import { Mail, Send, Check, Copy, AlertCircle, FileText, ExternalLink, ArrowRight } from 'lucide-react';
import { ProfileData } from '../../data/portfolioData';

interface MoreContactViewProps {
  profile: ProfileData;
  onOpenResumeModal: () => void;
}

export const MoreContactView: React.FC<MoreContactViewProps> = ({ profile, onOpenResumeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Engineering Opportunity',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all fields before sending dispatch.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'Engineering Opportunity',
        message: '',
      });
    }, 600);
  };

  return (
    <div className="max-w-4xl space-y-12 animate-fade-in">
      <div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
          More + Contact
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mt-2 font-sans-body">
          I&apos;m open to discussing software engineering opportunities, research collaborations, and other professional inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Email Card */}
          <div className="p-5 bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-3">
            <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
              Direct Inquiries
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-sm text-[var(--text-primary)] truncate font-medium">
                {profile.socials.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="px-2.5 py-1 bg-[var(--bg-secondary)] hover:bg-[var(--bg-subtle)] text-xs font-mono text-[var(--text-primary)] transition-colors shrink-0 flex items-center gap-1 border border-[var(--border-color)]"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Curriculum Vitae Download / View */}
          {/* <div className="p-5 bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-3">
            <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
              Curriculum Vitae
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Complete archival paper document ready for printing or exporting to PDF.
            </p>
            <button
              onClick={onOpenResumeModal}
              className="w-full py-2 px-3 bg-[var(--bg-secondary)] hover:bg-[var(--bg-subtle)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] flex items-center justify-between transition-colors"
            >
              <span className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Open Printable CV</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div> */}

          {/* Social Profiles */}
          <div className="p-5 bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-3">
            <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
              Verified Profiles
            </div>
            <div className="space-y-2 text-xs font-mono">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-1"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-1"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        {/* <div className="lg:col-span-7 bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 sm:p-7">
          {status === 'success' ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-10 h-10 bg-[var(--accent)] text-[var(--accent-contrast)] mx-auto flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                Transmission Received
              </h4>
              <p className="text-xs text-[var(--text-secondary)] max-w-sm mx-auto leading-relaxed">
                Thank you for getting in touch. I will review your message promptly.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setStatus('idle')}
                  className="px-3 py-1.5 text-xs font-mono uppercase bg-[var(--bg-secondary)] hover:bg-[var(--bg-subtle)] text-[var(--text-primary)] border border-[var(--border-color)] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)] text-xs font-mono text-[var(--text-muted)] uppercase">
                <span>Inquiry Dispatch</span>
                <span>Direct Mail</span>
              </div>

              {status === 'error' && (
                <div className="p-3 bg-red-950/30 border border-red-800 text-red-400 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="space-y-1">
                <label className="block text-xs font-mono text-[var(--text-secondary)] uppercase">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-3 py-2 bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[var(--accent)] focus:outline-none text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-mono text-[var(--text-secondary)] uppercase">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-3 py-2 bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[var(--accent)] focus:outline-none text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-mono text-[var(--text-secondary)] uppercase">
                  Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[var(--accent)] focus:outline-none text-sm text-[var(--text-primary)]"
                >
                  <option value="Engineering Opportunity">Software Engineering Role</option>
                  <option value="Research Collaboration">Research Collaboration</option>
                  <option value="Technical Consulting">Systems Consulting</option>
                  <option value="General Dialogue">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-mono text-[var(--text-secondary)] uppercase">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the problem, project, or role..."
                  className="w-full px-3 py-2 bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[var(--accent)] focus:outline-none text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-2.5 px-4 bg-[var(--accent)] hover:opacity-90 text-[var(--accent-contrast)] font-mono text-xs uppercase tracking-wider transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 font-medium"
              >
                {status === 'submitting' ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div> */}
      </div>
    </div>
  );
};
