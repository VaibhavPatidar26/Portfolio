import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "B.Tech Computer Science & Engineering",
    subtitle: "University Institute of Technology, RGPV",
    duration: "2023 — 2027",
    description:
      "Focused on software engineering, algorithms, operating systems, databases, computer networks and modern full-stack development.",
    highlight: "CGPA 7.3",
  },
];

const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Database Management Systems",
  "Computer Networks",
  "Object Oriented Programming",
  "Software Engineering",
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-zinc-950 px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Education
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
            Learning the
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              fundamentals deeply.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Strong computer science fundamentals combined with practical
            full-stack development through real-world projects.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">

          {/* Timeline */}

          <div className="relative border-l border-white/10 pl-10">

            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative mb-14"
                >
                  <div className="absolute -left-[58px] flex h-12 w-12 items-center justify-center rounded-full border border-violet-500/20 bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg shadow-violet-500/20">
                    <Icon size={22} />
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                    <div className="mb-5 flex items-center gap-3 text-sm text-zinc-400">
                      <Calendar size={16} />
                      {item.duration}
                    </div>

                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-violet-300">
                      {item.subtitle}
                    </p>

                    <p className="mt-6 leading-7 text-zinc-400">
                      {item.description}
                    </p>

                    <div className="mt-8 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-400">
                      {item.highlight}
                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>

          {/* Coursework */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 p-3">
                <BookOpen size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Relevant Coursework
                </h3>

                <p className="text-zinc-400">
                  Core Computer Science
                </p>
              </div>
            </div>

            <div className="space-y-4">

              {coursework.map((course) => (
                <div
                  key={course}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4 transition hover:border-violet-500/30"
                >
                  <span>{course}</span>

                  <div className="h-2 w-2 rounded-full bg-violet-400" />
                </div>
              ))}

            </div>

            <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

              <p className="text-sm uppercase tracking-widest text-cyan-300">
                Current Focus
              </p>

              <h4 className="mt-3 text-xl font-bold">
                Full Stack Development & AI
              </h4>

              <p className="mt-3 text-zinc-400">
                Continuously improving through personal projects,
                open-source learning, and solving Data Structures &
                Algorithms problems.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}