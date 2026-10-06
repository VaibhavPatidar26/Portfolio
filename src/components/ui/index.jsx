import React from "react";
import { cn } from "../../lib/utils";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-white/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Badge({ className, variant = "default", children, ...props }) {
  const variants = {
    default: "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10",
    primary: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20",
    secondary: "border-violet-500/30 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20",
    emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20",
    amber: "border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20",
    outline: "border-white/15 bg-transparent text-zinc-400 hover:text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function Button({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

  const variants = {
    default:
      "bg-white text-zinc-950 hover:bg-zinc-200 shadow-md shadow-white/10 hover:shadow-white/20 hover:scale-[1.02]",
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02]",
    violet:
      "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-600/25 hover:scale-[1.02]",
    secondary:
      "border border-white/15 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:border-white/30",
    ghost: "text-zinc-400 hover:text-white hover:bg-white/5",
    link: "text-cyan-400 underline-offset-4 hover:underline p-0 h-auto",
  };

  const sizes = {
    default: "h-11 px-5 py-2.5",
    sm: "h-9 rounded-lg px-3.5 text-xs",
    lg: "h-13 rounded-2xl px-7 text-base font-bold",
    icon: "h-10 w-10 p-0",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
