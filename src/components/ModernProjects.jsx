import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code2,
  CheckCircle,
  Zap,
  Cpu,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Server,
  Activity,
  Globe,
} from "lucide-react";
import { projects } from "../data/portfolioData";
import { Card3D } from "./ui/Card3D";
import { Badge, Button } from "./ui";

export default function ModernProjects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedArchitecture, setExpandedArchitecture] = useState(null);

  const categories = [
    { id: "all", label: "All Engineering Systems" },
    { id: "Distributed Systems & Fintech", label: "Fintech & Distributed" },
    { id: "Real-Time & Networking", label: "Real-Time & WebRTC" },
    { id: "AI & Full-Stack SaaS", label: "AI SaaS & Cloud" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300 mb-4">
              <Layers size={14} />
              <span>Architected & Shipped</span>
            </div>
            <h2 className="text-3xl font-black text-white sm:text-5xl tracking-tight">
              Production Projects &{" "}
              <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Distributed Systems
              </span>
            </h2>
            <p className="mt-4 text-zinc-400 text-base sm:text-lg">
              Explore full-stack platforms engineered with real-time streaming,
              decoupled workers, transactional safety, and production deployments.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveFilter(c.id)}
                className={`rounded-xl px-3.5 py-2 text-xs font-medium transition-all ${
                  activeFilter === c.id
                    ? "bg-white text-zinc-950 font-bold shadow-md shadow-white/10"
                    : "border border-white/10 bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Interactive Project Cards */}
        <div className="grid gap-10 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-full flex"
              >
                <Card3D className="flex h-full flex-col justify-between p-7 bg-zinc-900/70 border border-white/10 hover:border-cyan-500/40">
                  <div className="space-y-5">
                    {/* Header badge & title */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Badge
                          variant={
                            project.id === "tradeforge"
                              ? "emerald"
                              : project.id === "wechat"
                              ? "primary"
                              : "secondary"
                          }
                        >
                          {project.badge}
                        </Badge>
                        <h3 className="mt-3 text-2xl font-black text-white tracking-tight">
                          {project.name}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-zinc-400 bg-black/40 border border-white/10 rounded-lg px-2.5 py-1">
                        {project.status}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-cyan-300">
                      {project.tagline}
                    </p>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Architecture Metric Strip */}
                    <div className="grid grid-cols-2 gap-2 rounded-xl border border-white/10 bg-black/40 p-3 text-[11px] font-mono">
                      <div>
                        <span className="text-zinc-400 block">Architecture:</span>
                        <span className="text-zinc-200 font-semibold truncate block">
                          {project.architecture.type}
                        </span>
                      </div>
                      <div>
                        <span className="text-zinc-400 block">Latency / Spec:</span>
                        <span className="text-emerald-400 font-semibold block">
                          {project.architecture.latency}
                        </span>
                      </div>
                    </div>

                    {/* Key Technical Highlights Checklist */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                        Core Implementations
                      </span>
                      <ul className="space-y-2">
                        {project.highlights.map((item, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-zinc-300 leading-snug"
                          >
                            <CheckCircle
                              size={14}
                              className="mt-0.5 shrink-0 text-cyan-400"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="primary"
                          size="default"
                          className="w-full gap-2 text-xs font-bold"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight size={14} />
                        </Button>
                      </a>
                    ) : (
                      <div className="flex-1">
                        <Button
                          variant="secondary"
                          size="default"
                          disabled
                          className="w-full text-xs text-zinc-400 border-white/5 bg-white/[0.02]"
                        >
                          <span>P2P Backend Service</span>
                        </Button>
                      </div>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="secondary"
                          size="default"
                          className="w-full gap-2 text-xs font-bold"
                        >
                          <Code2 size={14} />
                          <span>Code Repository</span>
                        </Button>
                      </a>
                    )}
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
