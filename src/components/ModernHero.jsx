import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileDown,
  Layers,
  Sparkles,
  GitBranch,
  Terminal,
  Activity,
  CheckCircle2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { personalInfo } from "../data/portfolioData";
import { Button, Badge } from "./ui";
import { InteractiveTerminal } from "./ui/InteractiveTerminal";

export default function ModernHero({ scrollTo }) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex flex-col justify-center"
    >
      {/* Background radial gradient glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-[550px] w-[800px] max-w-full rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-violet-600/15 blur-[140px] -z-10" />

      <div className="mx-auto max-w-7xl px-5 md:px-8 w-full">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-start">
          {/* Left Column: Hero Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* Top Pill Status Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              <span>Available for Software Engineering Internships</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.08]">
              Engineering{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Distributed Systems
              </span>{" "}
              & Intelligent Products.
            </h1>

            {/* Bio Subtitle */}
            <p className="mt-6 max-w-2xl text-base text-zinc-300 sm:text-lg sm:leading-relaxed">
              Hi, I'm{" "}
              <span className="font-semibold text-white">Vaibhav Patidar</span>.
              I build high-concurrency event-driven engines, real-time WebRTC/WebSocket
              collaboration tools, and production-grade MERN + AI SaaS applications with
              rigorous performance and architectural discipline.
            </p>

            {/* Quick Micro-Highlights */}
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-zinc-400 font-mono">
              <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1">
                Redis Pub/Sub
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1">
                BullMQ Queues
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1">
                WebSockets & WebRTC
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1">
                Docker & AWS EC2
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-cyan-300 border-cyan-500/30 bg-cyan-500/5">
                Full-Stack Systems
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollTo("work")}
                className="group"
              >
                <span>Explore Architecture</span>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>

              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="secondary" size="lg" className="gap-2">
                  <FileDown size={18} />
                  <span>Download Resume</span>
                </Button>
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-cyan-500/40 hover:bg-white/10 hover:text-white"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-cyan-500/40 hover:bg-white/10 hover:text-white"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Live Stats Strip */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4 w-full">
              {personalInfo.stats.map((s, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-black text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text">
                    {s.value}
                  </div>
                  <div className="text-xs font-semibold text-zinc-300">
                    {s.label}
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    {s.subtext}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Live Interactive Architecture Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4 lg:pt-2"
          >
            <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
              <span className="flex items-center gap-1.5 font-mono text-cyan-400">
                <Activity size={14} /> Live Architecture Inspector
              </span>
              <span className="font-mono text-zinc-500 text-[11px]">
                Interactive CLI v2.4
              </span>
            </div>

            <InteractiveTerminal />

            {/* Architecture Highlights Pill Box */}
            <div className="grid grid-cols-3 gap-2.5 pt-2">
              <div className="rounded-xl border border-white/10 bg-zinc-900/40 p-3 text-center backdrop-blur-md">
                <span className="block text-[10px] font-mono uppercase text-zinc-400">
                  Engine Model
                </span>
                <span className="text-xs font-bold text-white mt-1 block">
                  Event-Driven
                </span>
              </div>
              <div className="rounded-xl border border-white/10 bg-zinc-900/40 p-3 text-center backdrop-blur-md">
                <span className="block text-[10px] font-mono uppercase text-zinc-400">
                  Order Latency
                </span>
                <span className="text-xs font-bold text-emerald-400 mt-1 block">
                  &lt; 25ms Sync
                </span>
              </div>
              <div className="rounded-xl border border-white/10 bg-zinc-900/40 p-3 text-center backdrop-blur-md">
                <span className="block text-[10px] font-mono uppercase text-zinc-400">
                  Deploy State
                </span>
                <span className="text-xs font-bold text-cyan-400 mt-1 block">
                  Docker + EC2
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
