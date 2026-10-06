import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  FileDown,
  Terminal,
  Layers,
  Cpu,
  GraduationCap,
  Mail,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { Button, Badge } from "./ui";

const navItems = [
  { label: "Overview", id: "home", icon: Terminal },
  { label: "Systems & Projects", id: "work", icon: Layers },
  { label: "Tech Matrix", id: "skills", icon: Cpu },
  { label: "Experience & Education", id: "education", icon: GraduationCap },
  { label: "Get in Touch", id: "contact", icon: Mail },
];

export default function ModernNavbar({ scrollTo, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/60"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          {/* Brand Logo / Terminal Callout */}
          <button
            onClick={() => scrollTo("home")}
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-zinc-950 text-white font-mono font-bold text-sm">
                VP
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
              </div>
              <p className="hidden text-[11px] font-mono text-zinc-400 sm:block">
                Systems & Full-Stack Engineer
              </p>
            </div>
          </button>

          {/* Center Glass Navigation Pill */}
          <nav className="hidden items-center rounded-full border border-white/10 bg-zinc-900/60 p-1.5 backdrop-blur-xl md:flex shadow-inner shadow-white/5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/40 shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon size={14} className={isActive ? "text-cyan-400" : "text-zinc-500"} />
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3.5 py-2 text-xs font-medium text-amber-300 transition-colors hover:bg-amber-500/20"
            >
              <span>LeetCode Profile</span>
              <ExternalLink size={12} />
            </a>

            <a
              href={personalInfo.resumePdf}
              target="_blank"
              rel="noreferrer"
            >
              <Button size="sm" variant="default" className="gap-1.5">
                <FileDown size={14} />
                <span>Resume</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 md:hidden hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-4/5 max-w-sm border-l border-white/10 bg-zinc-950 p-6 flex flex-col justify-between shadow-2xl md:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-lg">{personalInfo.name}</span>
                    <Badge variant="emerald">Open to roles</Badge>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-1 rounded-lg text-zinc-400 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          scrollTo(item.id);
                          setMobileOpen(false);
                        }}
                        className="flex items-center justify-between rounded-xl p-3 text-left font-medium text-zinc-300 hover:bg-white/5 hover:text-white transition"
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={18} className="text-cyan-400" />
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight size={16} className="text-zinc-600" />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <a
                  href={personalInfo.resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full"
                >
                  <Button className="w-full" variant="primary">
                    <FileDown size={16} />
                    Download Resume
                  </Button>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center text-xs text-zinc-400 hover:text-white py-2"
                >
                  View GitHub Profile ↗
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
