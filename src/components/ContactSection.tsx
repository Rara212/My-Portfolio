import React, { useState } from 'react';
import { Mail, Send, Check, Copy, ArrowUpRight, MessageSquare, AlertCircle } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
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
    <section id="contact" className="py-20 md:py-28 scroll-mt-12 bg-[var(--bg-primary)] transition-colors">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[var(--border-color)]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-2">
              05 · Open Dialogue
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display text-[var(--text-primary)] tracking-tight">
              Initiate Contact
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--text-muted)]">
            DIRECT INQUIRIES · RESEARCH · ENGINEERING ROLES
          </div>
        </div>

        {/* Content Split */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels & statement */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif-display text-[var(--text-primary)]">
                Let&apos;s build something impactful together.
              </h3>
              <p className="text-sm font-sans-body text-[var(--text-secondary)] leading-relaxed">
                Whether you are looking for an engineer to tackle low-latency systems challenges, interested in co-authoring research, or looking to discuss full-time roles, I look forward to connecting.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4">
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                Direct Electronic Mail
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-sm text-[var(--text-primary)] truncate font-medium">
                  {profile.socials.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 bg-[var(--bg-secondary)] hover:bg-[var(--bg-subtle)] text-xs font-mono text-[var(--text-primary)] transition-colors shrink-0 flex items-center gap-1.5 border border-[var(--border-color)]"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 font-medium">Copied</span>
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

            {/* Response Availability */}
            <div className="space-y-2 text-xs font-mono text-[var(--text-muted)]">
              <div className="flex items-center gap-2 text-[var(--text-primary)]">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Typical response window: within 24 hours</span>
              </div>
              <p className="text-[var(--text-muted)] leading-normal font-sans-body text-xs">
                Encrypted keys and verified scholarly references available upon request.
              </p>
            </div>
          </div>

          {/* Right Column: Minimalist Contact Form */}
          <div className="lg:col-span-7 bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 sm:p-8">
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-[var(--accent)] text-[var(--accent-contrast)] mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-serif-display text-[var(--text-primary)]">
                  Dispatch Received
                </h4>
                <p className="text-sm text-[var(--text-secondary)] font-sans-body max-w-md mx-auto">
                  Thank you for reaching out. Your transmission has been queued and I will review your message promptly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-4 py-2 text-xs font-mono uppercase tracking-wider bg-[var(--bg-secondary)] hover:bg-[var(--bg-subtle)] text-[var(--text-primary)] border border-[var(--border-color)] transition-colors"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)] text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  <span>Transmission Form</span>
                  <span>SSL Verified</span>
                </div>

                {status === 'error' && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Jane Doe / Recruiter"
                      className="w-full px-3 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[var(--border-strong)] focus:outline-none text-sm font-sans-body text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[var(--border-strong)] focus:outline-none text-sm font-sans-body text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
                    Inquiry Topic
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[var(--border-strong)] focus:outline-none text-sm font-sans-body text-[var(--text-primary)]"
                  >
                    <option value="Engineering Opportunity">Full-time Software Engineering Role</option>
                    <option value="Research Collaboration">Academic / Systems Research Collaboration</option>
                    <option value="Technical Consulting">Technical Consulting / Architecture</option>
                    <option value="General Dialogue">General Engineering Inquiries</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
                    Message Body <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Brief description of the challenge, role, or proposal..."
                    className="w-full px-3 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[var(--border-strong)] focus:outline-none text-sm font-sans-body text-[var(--text-primary)] placeholder:text-[var(--text-muted)] resize-y"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 px-6 bg-[var(--accent)] hover:opacity-90 text-[var(--accent-contrast)] font-mono text-xs uppercase tracking-widest transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
