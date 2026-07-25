import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const tech = [
  "React",
  "Node.js",
  "Express",
  "PostgreSQL",
  "AI",
  "Docker",
];

export default function Hero({ scrollTo }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-zinc-950 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-50 -top-30 h-105 w-105 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute -right-50 -bottom-37.5 h-105 w-105 rounded-full bg-cyan-500/10 blur-[120px]" />
    </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-20 px-6 py-32 lg:flex-row">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="max-w-2xl"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl">
            <Sparkles size={15} />
            Available for Internships
          </div>

          <h1 className="text-5xl font-black leading-none tracking-tight md:text-7xl lg:text-8xl">
            Building
            <span className="block bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Products
            </span>
            That Scale.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            I'm{" "}
            <span className="font-semibold text-white">
              Vaibhav Patidar
            </span>
            , a Full Stack Engineer passionate about building AI-powered web
            applications, scalable backend systems and intuitive user
            experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button
              onClick={() => scrollTo("work")}
              className="group flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
            >
              Explore Projects
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <a
              href="/Resume.pdf"
              target="_blank"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-medium backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
            >
              <Download size={18} />
              Resume
            </a>

          </div>

          <div className="mt-10 flex flex-wrap gap-3">

            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl"
              >
                {item}
              </span>
            ))}

          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: .2 }}
          className="relative"
        >

          <div className="absolute inset-0 rounded-[40px] bg-linear-to-brrom-violet-500/20 to-cyan-500/10 blur-3xl" />

          <div className="relative w-90 rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-linear-to-br from-violet-500 to-cyan-500 text-4xl font-black">
              VP
            </div>

            <h2 className="mt-6 text-center text-2xl font-bold">
              Vaibhav Patidar
            </h2>

            <p className="mt-2 text-center text-zinc-400">
              Full Stack Engineer
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 py-3 text-sm text-emerald-400">
              <CheckCircle2 size={16} />
              Open to Internship Opportunities
            </div>

            <div className="my-8 h-px bg-white/10" />

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-center">
                <h3 className="text-3xl font-black">300+</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Problems Solved
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-center">
                <h3 className="text-3xl font-black">3+</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Projects
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
} 