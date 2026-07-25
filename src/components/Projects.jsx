import { motion } from "framer-motion";
import { ArrowUpRight, CodeXml } from "lucide-react";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      whileHover={{ y: -10 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/40"
    >
      {/* Thumbnail */}

      <div className="relative h-56 overflow-hidden bg-linear-to-br from-violet-600/30 via-zinc-900 to-cyan-500/20">

        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-5xl font-black text-white/10">
            {project.name}
          </div>
        )}

        <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-300 backdrop-blur-xl">
          {project.type}
        </div>

      </div>

      {/* Content */}

      <div className="space-y-6 p-8">

        <div>

          <h3 className="text-2xl font-bold text-white">
            {project.name}
          </h3>

          <p className="mt-4 leading-7 text-zinc-400">
            {project.summary}
          </p>

        </div>

        {/* Stack */}

        <div className="flex flex-wrap gap-2">

          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-sm text-zinc-300"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-4">

          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:scale-105"
          >
            Live Demo
            <ArrowUpRight size={18} />
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10"
            >
              <CodeXml size={18} />
              Code
            </a>
          )}

        </div>

      </div>
    </motion.article>
  );
}

export default function Projects({ projects }) {
  return (
    <section
      id="work"
      className="bg-zinc-950 px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Selected Work
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
            Projects built with
            <span className="block bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              product thinking.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            A collection of projects focused on solving real problems using
            modern technologies, scalable backend architecture, and polished
            user experiences.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}