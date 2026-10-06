import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Monitor,
  Database,
  Cpu,
  CheckCircle,
  ExternalLink,
  Flame,
  Award,
} from "lucide-react";
import { skillMatrix, personalInfo } from "../data/portfolioData";
import { Badge } from "./ui";

export default function ModernSkills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const getIcon = (type) => {
    switch (type) {
      case "code":
        return <Code size={20} className="text-blue-400" />;
      case "server":
        return <Server size={20} className="text-emerald-400" />;
      case "monitor":
        return <Monitor size={20} className="text-purple-400" />;
      case "database":
        return <Database size={20} className="text-amber-400" />;
      case "cpu":
      default:
        return <Cpu size={20} className="text-rose-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 mb-4">
            <Cpu size={14} />
            <span>Comprehensive Technical Repertoire</span>
          </div>
          <h2 className="text-3xl font-black text-white sm:text-5xl tracking-tight">
            Engineered Across The{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Full Technology Stack
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            From low-level data structures and memory paradigms to distributed queuing,
            asynchronous microservices, and interactive modern user experiences.
          </p>
        </div>

        {/* LeetCode & Competitive Coding Highlight Banner */}
        <div className="mb-14 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-zinc-900/60 to-orange-500/10 p-6 md:p-8 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Flame className="text-amber-400" size={24} />
                <h3 className="text-xl font-bold text-white">
                  Algorithmic Rigor & Problem Solving
                </h3>
                <Badge variant="amber">Competitive Coding</Badge>
              </div>
              <p className="text-sm text-zinc-300 max-w-2xl">
                Continuous practice across LeetCode, CodeChef, and GeeksforGeeks focusing on
                Advanced Graphs, Dynamic Programming, Tree Traversals, Two Pointers, and Binary Search.
              </p>
            </div>

            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-zinc-950 transition-all hover:bg-amber-300 hover:scale-[1.03] shadow-lg shadow-amber-400/20"
            >
              <span>Verify LeetCode Profile</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Category Tabs for Desktop / Mobile */}
        <div className="grid gap-6 md:grid-cols-5 mb-10">
          {skillMatrix.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(idx)}
              className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all ${
                selectedCategory === idx
                  ? `border-white/30 bg-white/10 shadow-lg shadow-white/5`
                  : `border-white/10 bg-zinc-900/50 hover:bg-white/5 hover:border-white/20`
              }`}
            >
              <div className="p-2 rounded-xl bg-white/5">{getIcon(cat.icon)}</div>
              <div>
                <span className="text-xs font-semibold text-white block">
                  {cat.category}
                </span>
                <span className="text-[11px] text-zinc-400">
                  {cat.skills.length} competencies
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Skill Category Showcase */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 md:p-10 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                {getIcon(skillMatrix[selectedCategory].icon)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {skillMatrix[selectedCategory].category}
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Production-tested patterns & architectural implementations
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
              Category [{selectedCategory + 1}/5]
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillMatrix[selectedCategory].skills.map((skill, sIdx) => (
              <div
                key={skill.name}
                className="group rounded-2xl border border-white/10 bg-black/40 p-5 transition-all duration-300 hover:border-cyan-500/40 hover:bg-zinc-900/70"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h4>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-mono text-zinc-300">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
