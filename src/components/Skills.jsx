import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Wrench,
  BrainCircuit,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: Code2,
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
      "Authentication",
      "Socket.IO",
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "SQL",
    ],
  },
  {
    title: "AI & APIs",
    icon: BrainCircuit,
    skills: [
      "OpenAI",
      "ClipDrop",
      "Replicate",
      "Prompt Engineering",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "Render",
      "Postman",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-zinc-950 px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Skills & Technologies
          </span>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            My
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Tech Stack
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            I enjoy building complete products—from elegant user interfaces
            to scalable backend systems, cloud deployment, and AI-powered
            experiences.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40"
              >
                {/* Icon */}

                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg shadow-violet-500/20">

                  <Icon size={26} />

                </div>

                <h3 className="mb-6 text-2xl font-bold">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">

                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 group-hover:border-violet-500/30"
                    >
                      {skill}
                    </span>
                  ))}

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Bottom Section */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[32px] border border-white/10 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 p-10 backdrop-blur-xl"
        >
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

            <div>

              <h3 className="text-3xl font-bold">
                Always Learning.
              </h3>

              <p className="mt-4 max-w-2xl text-zinc-400">
                Technology evolves every day. I continuously learn,
                experiment, and build projects using modern tools and best
                practices to stay ahead.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="text-center">
                <h2 className="text-5xl font-black text-violet-400">
                  20+
                </h2>
                <p className="mt-2 text-zinc-400">
                  Technologies
                </p>
              </div>

              <div className="text-center">
                <h2 className="text-5xl font-black text-cyan-400">
                  3+
                </h2>
                <p className="mt-2 text-zinc-400">
                  Full Stack Projects
                </p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}