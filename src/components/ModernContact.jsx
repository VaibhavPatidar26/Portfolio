import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles,
  MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import confetti from "canvas-confetti";
import { personalInfo } from "../data/portfolioData";
import { Button, Badge } from "./ui";

export default function ModernContact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Software Engineering Opportunity",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const getGmailUrl = () => {
    const subject = encodeURIComponent(formState.subject || "Software Engineering Opportunity");
    const body = encodeURIComponent(
      `Hi Vaibhav,\n\n${formState.message || "I came across your portfolio and would like to connect."}\n\nBest regards,\n${formState.name || "Recruiter / Collaborator"}\n${formState.email}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${body}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(formState.subject || "Software Engineering Opportunity");
    const body = encodeURIComponent(
      `Hi Vaibhav,\n\n${formState.message || "I came across your portfolio and would like to connect."}\n\nBest regards,\n${formState.name || "Recruiter / Collaborator"}\n${formState.email}`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {}

    // Open direct Gmail compose tab in browser which is guaranteed to work across all platforms
    window.open(getGmailUrl(), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setShowOptions(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 mb-4">
            <Mail size={14} />
            <span>Initiate Direct Channel</span>
          </div>
          <h2 className="text-3xl font-black text-white sm:text-5xl tracking-tight">
            Let's Collaborate On{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Mission-Critical Systems
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Actively open for Software Engineering Internships, full-stack development,
            and high-impact technical initiatives.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Left Column: Direct channels & Quick Connect */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Engineer Direct Line
              </h3>
              <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                Reach out directly via email, phone, or connected professional platforms.
                I respond within 24 hours.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-cyan-500/40">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-zinc-400 block">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-semibold text-white hover:text-cyan-400 transition break-all"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check size={16} className="text-emerald-400" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-emerald-500/40">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-zinc-400 block">
                        Telephone / WhatsApp
                      </span>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-sm font-semibold text-white hover:text-emerald-400 transition"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                {/* Location / Status */}
                <div className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-black/40 p-4">
                  <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-zinc-400 block">
                      Location & Relocation
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {personalInfo.location} (Open to On-Site & Remote)
                    </span>
                  </div>
                </div>
              </div>

              {/* Profiles Row */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-xs font-semibold text-zinc-300 hover:bg-white/10 hover:text-white transition"
                >
                  <FaGithub size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 py-3 text-xs font-semibold text-blue-300 hover:bg-blue-500/20 transition"
                >
                  <FaLinkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 py-3 text-xs font-semibold text-amber-300 hover:bg-amber-500/20 transition"
                >
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Dispatcher */}
          <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white mb-2">
              Send Dispatch Message
            </h3>
            <p className="text-sm text-zinc-400 mb-6">
              Fill in details below to generate a pre-formatted direct email dispatch.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-cyan-500/60 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-cyan-500/60 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  Subject / Role
                </label>
                <input
                  type="text"
                  required
                  placeholder="Software Engineering Internship / Project Discussion"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-cyan-500/60 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your team, tech stack, or the project requirements..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-cyan-500/60 focus:outline-none resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full gap-2 font-bold"
              >
                <Send size={16} />
                <span>Send via Gmail Web</span>
              </Button>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={getMailtoUrl()}
                  className="flex-1 text-center rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-zinc-300 hover:bg-white/10 hover:text-white transition"
                >
                  Open in Default Mail App
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-semibold text-zinc-300 hover:bg-white/10 hover:text-white transition"
                  title="Copy email address"
                >
                  {copiedEmail ? "Email Copied!" : "Copy Email"}
                </button>
              </div>

              {submitted && (
                <div className="mt-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-300 space-y-1">
                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    <span>Gmail compose tab opened with your message prefilled!</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 pl-6">
                    If popups were blocked, you can also click "Open in Default Mail App" or send directly to <span className="text-white font-mono">{personalInfo.email}</span>.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
