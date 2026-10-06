import React from "react";
import {
  Terminal,
  ArrowUp,
  Heart,
  ExternalLink,
  Code2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { personalInfo } from "../data/portfolioData";

export default function ModernFooter({ scrollTo }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-zinc-950/90 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-4 pb-12 border-b border-white/10">
          {/* Col 1: Identity & Persona */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 font-mono font-bold text-white text-sm">
                VP
              </div>
              <div>
                <span className="font-bold text-white text-base">
                  {personalInfo.name}
                </span>
                <span className="block text-xs font-mono text-zinc-400">
                  Engineering Distributed Systems & Scalable Full-Stack
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
              Crafting high-throughput distributed applications, low-latency WebRTC &
              WebSocket streaming platforms, and intuitive interfaces with modern engineering discipline.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-cyan-500/40 transition"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-cyan-500/40 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 px-3 items-center justify-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 text-xs font-mono transition"
                aria-label="LeetCode"
              >
                <span>LeetCode</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button
                  onClick={() => scrollTo("home")}
                  className="hover:text-cyan-400 transition"
                >
                  Overview & Hero
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("work")}
                  className="hover:text-cyan-400 transition"
                >
                  Systems & Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("skills")}
                  className="hover:text-cyan-400 transition"
                >
                  Technical Repertoire
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("education")}
                  className="hover:text-cyan-400 transition"
                >
                  Experience & Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("contact")}
                  className="hover:text-cyan-400 transition"
                >
                  Contact Dispatch
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts & Status */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
              Direct Contact
            </span>
            <div className="space-y-2 text-xs text-zinc-400">
              <p className="font-mono text-zinc-300 break-all">
                {personalInfo.email}
              </p>
              <p className="font-mono text-zinc-300">
                {personalInfo.phone}
              </p>
              <p className="text-zinc-400">
                {personalInfo.location}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => scrollTo("home")}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                  <span>Back to Top</span>
                  <ArrowUp size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-zinc-400">
          <p>© {currentYear} Vaibhav Patidar. Built with React, Tailwind CSS & Three.js.</p>
          <p className="flex items-center gap-1.5 text-zinc-400">
            <span>Designed for high performance & architectural clarity</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
