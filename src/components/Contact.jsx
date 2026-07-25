import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  CodeXml,
  
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-zinc-950 px-6 py-32 text-white"
    >
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Contact
          </span>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            Let's Build Something
            <span className="block bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Amazing Together.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            I'm actively looking for internship opportunities and exciting
            projects where I can contribute, learn, and build impactful
            software.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold">
              Get in Touch
            </h3>

            <p className="mt-4 leading-8 text-zinc-400">
              Whether you have an internship opportunity, freelance work,
              collaboration idea, or simply want to connect, I'd love to hear
              from you.
            </p>

            <div className="mt-10 space-y-5">

              <a
                href="mailto:yourmail@gmail.com"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-violet-500/40 hover:bg-white/5"
              >
                <div className="flex items-center gap-4">
                  <Mail className="text-violet-400" />
                  <div>
                    <p className="text-sm text-zinc-400">
                      Email
                    </p>
                    <h4>yourmail@gmail.com</h4>
                  </div>
                </div>

                <ArrowUpRight />
              </a>

              <a
                href="tel:+919999999999"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-violet-500/40 hover:bg-white/5"
              >
                <div className="flex items-center gap-4">
                  <Phone className="text-cyan-400" />
                  <div>
                    <p className="text-sm text-zinc-400">
                      Phone
                    </p>
                    <h4>+91 XXXXX XXXXX</h4>
                  </div>
                </div>

                <ArrowUpRight />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-violet-500/40 hover:bg-white/5"
              >
                <div className="flex items-center gap-4">
                  <CodeXml />
                  <div>
                    <p className="text-sm text-zinc-400">
                      GitHub
                    </p>
                    <h4>github.com/yourusername</h4>
                  </div>
                </div>

                <ArrowUpRight />
              </a>

              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-violet-500/40 hover:bg-white/5"
              >
                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-blue-400" />
                  <div>
                    <p className="text-sm text-zinc-400">
                      LinkedIn
                    </p>
                    <h4>linkedin.com/in/yourprofile</h4>
                  </div>
                </div>

                <ArrowUpRight />
              </a>

            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >

            <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8">

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-400" />
                <h3 className="text-xl font-bold">
                  Available for Work
                </h3>
              </div>

              <p className="mt-4 text-zinc-300">
                Looking for
              </p>

              <ul className="mt-5 space-y-3 text-zinc-400">
                <li>✔ Software Engineering Internship</li>
                <li>✔ Full Stack Projects</li>
                <li>✔ AI based Applications</li>
                <li>✔ Open Source Collaboration</li>
              </ul>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <h3 className="text-2xl font-bold">
                Quick Stats
              </h3>

              <div className="mt-8 space-y-6">

                <div>
                  <h2 className="text-4xl font-black text-violet-400">
                    &lt;24 hrs
                  </h2>
                  <p className="text-zinc-400">
                    Average Response Time
                  </p>
                </div>

                <div>
                  <h2 className="text-4xl font-black text-cyan-400">
                    Remote
                  </h2>
                  <p className="text-zinc-400">
                    Available Worldwide
                  </p>
                </div>

                <div>
                  <h2 className="text-4xl font-black text-white">
                    2027
                  </h2>
                  <p className="text-zinc-400">
                    Graduation Year
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}