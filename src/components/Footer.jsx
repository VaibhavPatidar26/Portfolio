import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Heart,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourprofile",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:yourmail@gmail.com",
  },
];

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "work" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

export default function Footer({ scrollTo }) {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-zinc-950 text-white">

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black">
              VP.
            </h2>

            <p className="mt-6 max-w-md leading-8 text-zinc-400">
              Building modern digital experiences with clean design,
              scalable architecture, and thoughtful engineering.
            </p>

            <div className="mt-8 flex gap-4">

              {links.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:scale-110 hover:border-violet-500/40 hover:bg-white/10"
                >
                  <Icon size={20} />
                </a>
              ))}

            </div>

          </motion.div>

          {/* Navigation */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-xl font-bold">
              Navigation
            </h3>

            <div className="space-y-4">

              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block text-left text-zinc-400 transition hover:text-white"
                >
                  {item.name}
                </button>
              ))}

            </div>

          </motion.div>

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold">
              Let's Connect
            </h3>

            <p className="mt-6 text-zinc-400 leading-7">
              Interested in working together or discussing a project?
              I'm always open to meaningful conversations.
            </p>

            <a
              href="mailto:yourmail@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-105"
            >
              Say Hello
              <ArrowUpRight size={18} />
            </a>

          </motion.div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Vaibhav Patidar. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Crafted with
            <Heart
              size={16}
              className="fill-red-500 text-red-500"
            />
            using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}