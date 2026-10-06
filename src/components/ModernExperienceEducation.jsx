import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Award,
  Sparkles,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { experience, education } from "../data/portfolioData";
import { Badge } from "./ui";

export default function ModernExperienceEducation() {
  return (
    <section id="education" className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 mb-4">
            <GraduationCap size={14} />
            <span>Trajectory & Credentials</span>
          </div>
          <h2 className="text-3xl font-black text-white sm:text-5xl tracking-tight">
            Work Experience &{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Academic Foundations
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Practical production contributions in commercial software engineering combined
            with rigorous computer science education and certifications.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column: Work Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Briefcase size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Professional Experience
              </h3>
            </div>

            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl border border-white/10 bg-zinc-900/60 p-8 backdrop-blur-xl transition hover:border-cyan-500/40"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {exp.role}
                    </h4>
                    <p className="text-base font-semibold text-cyan-400">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-mono text-xs text-zinc-400">
                      {exp.duration}
                    </span>
                    <Badge variant="emerald" className="mt-1">
                      {exp.type}
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="space-y-2.5 border-t border-white/10 pt-5">
                  <span className="text-xs font-mono uppercase text-zinc-400 block">
                    Key Engineering Contributions:
                  </span>
                  {exp.contributions.map((c, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-400" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mt-6 pt-5 border-t border-white/10">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-black/40 px-2.5 py-1 text-xs font-mono text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Education & Credentials
              </h3>
            </div>

            {/* University Degree Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 backdrop-blur-xl transition hover:border-violet-500/40"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {education.degree}
                  </h4>
                  <p className="text-sm font-semibold text-violet-400">
                    {education.institution}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs text-zinc-400">
                    {education.duration}
                  </span>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-xs text-zinc-300 leading-relaxed">
                {education.highlights.map((h, hIdx) => (
                  <p key={hIdx}>• {h}</p>
                ))}
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Award size={18} className="text-amber-400" />
                <h4 className="text-lg font-bold text-white">
                  Verified Certifications
                </h4>
              </div>

              <div className="space-y-4">
                {education.certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-amber-500/30"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">
                        {cert.title}
                      </span>
                      <span className="font-mono text-xs text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                        {cert.issuer}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2">
                      Focus: {cert.focus}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
