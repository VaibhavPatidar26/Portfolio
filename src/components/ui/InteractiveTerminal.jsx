import React, { useState } from "react";
import { Terminal as TerminalIcon, Copy, Check, Play, RefreshCw } from "lucide-react";
import { cn } from "../../lib/utils";

const commandDatabase = {
  help: [
    "Available commands:",
    "  • tradeforge  - Inspect architecture of TradeForge paper trading engine",
    "  • wechat      - View real-time WebRTC & WebSocket chat stack",
    "  • imagify     - Inspect AI image generation pipeline & payment flow",
    "  • stats       - View verified LeetCode & competitive stats",
    "  • contact     - Display direct engineer contact info",
    "  • clear       - Clear current console output",
  ],
  tradeforge: [
    "╔════════════════════════════════════════════════════════════════════╗",
    "║ [TradeForge] Real-Time Paper Trading & Execution Platform          ║",
    "╚════════════════════════════════════════════════════════════════════╝",
    " → Deployment: Containerized the complete app using Docker & Docker Compose",
    " → Architecture: Decoupled Worker Queues (BullMQ) & Redis Pub/Sub",
    " → Concurrency: Asynchronous Market, Limit & GTT order execution",
    " → Consistency: Idempotent transactional ledger for user balances",
    " → Infrastructure: AWS EC2, Nginx Reverse Proxy, Docker Containers",
    " → Live Demo: https://trade-forge-kappa.vercel.app/",
  ],
  wechat: [
    "╔════════════════════════════════════════════════════════════════════╗",
    "║ [WeChat] Real-Time Collaboration & WebRTC Engine                  ║",
    "╚════════════════════════════════════════════════════════════════════╝",
    " → Protocol: Bidirectional WebSockets + P2P WebRTC audio/video calls",
    " → Cache Layer: Redis in-memory cache for fast room & state queries",
    " → Storage: MongoDB cluster with JWT-authenticated protected routes",
    " → Repo: https://github.com/VaibhavPatidar26/ChatApp.git",
  ],
  imagify: [
    "╔════════════════════════════════════════════════════════════════════╗",
    "║ [Imagify] AI SaaS Platform                                         ║",
    "╚════════════════════════════════════════════════════════════════════╝",
    " → Models: Multi-model AI APIs for image synthesis & background strip",
    " → Payments: Webhook-verified Razorpay ledger & credit tokenization",
    " → Media: Cloudinary CDN signed asset pipelines",
    " → Live Demo: https://imagify-five-bice.vercel.app/",
  ],
  stats: [
    "⚡ Problem Solving: Active competitive practice across LeetCode, CodeChef, and GFG",
    "⚡ LeetCode Profile: https://leetcode.com/u/Vaibhav_patidar22/",
    "⚡ Education: B.Tech CSE (2023 - 2027), UIT RGPV",
    "⚡ Experience: Frontend Development Intern @ TurfBooking.in (Nov - Dec 2024)",
  ],
  contact: [
    "📧 Email: vaibhavpatidar22012005@gmail.com",
    "📱 Phone: +91 7974357592",
    "💼 LinkedIn: https://www.linkedin.com/in/vaibhav-patidar-227338297/",
    "🐙 GitHub: https://github.com/VaibhavPatidar26",
  ],
};

export function InteractiveTerminal() {
  const [history, setHistory] = useState([
    {
      command: "welcome",
      outputs: [
        "PatidarOS v2.4 (x86_64-engine-linux-gnu)",
        "Type 'help' to inspect projects, architecture, or stats directly.",
      ],
    },
    {
      command: "tradeforge --summary",
      outputs: commandDatabase.tradeforge.slice(0, 4),
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCommand = (e) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    const matched = commandDatabase[cleanCmd];
    const newEntry = {
      command: inputVal,
      outputs: matched || [
        `Command not recognized: '${cleanCmd}'. Type 'help' for commands.`,
      ],
    };

    setHistory((prev) => [...prev, newEntry]);
    setInputVal("");
  };

  const runQuick = (cmd) => {
    const matched = commandDatabase[cmd];
    if (matched) {
      setHistory((prev) => [...prev, { command: cmd, outputs: matched }]);
    }
  };

  const copyLog = () => {
    const text = history
      .map((h) => `$ ${h.command}\n${h.outputs.join("\n")}`)
      .join("\n\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-zinc-950/95 shadow-2xl backdrop-blur-2xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900/90 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-rose-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <div className="ml-2 flex items-center gap-1.5 text-xs text-zinc-400">
            <TerminalIcon size={14} className="text-cyan-400" />
            <span>vaibhav@systems-node:~</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setHistory([])}
            className="flex items-center gap-1 rounded px-2 py-1 text-xs text-zinc-400 transition hover:bg-white/5 hover:text-white"
            title="Reset Console"
          >
            <RefreshCw size={12} />
            <span className="hidden sm:inline">Clear</span>
          </button>
          <button
            onClick={copyLog}
            className="flex items-center gap-1 rounded px-2 py-1 text-xs text-zinc-400 transition hover:bg-white/5 hover:text-white"
            title="Copy Output"
          >
            {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
            <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
      </div>

      {/* Quick Clickable Suggestions */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/5 bg-zinc-900/40 px-4 py-2 text-[11px] text-zinc-400">
        <span className="text-zinc-500">Quick run:</span>
        {["tradeforge", "wechat", "imagify", "stats", "contact"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => runQuick(cmd)}
            className="rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-zinc-300 transition hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300"
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Terminal History Container */}
      <div className="max-h-72 min-h-48 overflow-y-auto p-4 space-y-3 scrollbar-thin">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
              <span className="text-zinc-500">❯</span>
              <span>{item.command}</span>
            </div>
            <div className="pl-4 text-zinc-300 space-y-0.5 leading-relaxed font-sans text-xs sm:text-[13px]">
              {item.outputs.map((line, lIdx) => (
                <div
                  key={lIdx}
                  className={cn(
                    line.startsWith("╔") || line.startsWith("║") || line.startsWith("╚")
                      ? "text-cyan-400 font-mono"
                      : line.startsWith(" →")
                      ? "text-zinc-300"
                      : line.startsWith("⚡")
                      ? "text-amber-300"
                      : "text-zinc-400"
                  )}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Input Prompt */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
          <span className="text-emerald-400 font-bold">❯</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-white placeholder-zinc-600 focus:outline-none"
          />
          <button
            type="submit"
            className="text-zinc-500 hover:text-cyan-400 transition"
            title="Execute"
          >
            <Play size={14} />
          </button>
        </form>
      </div>
    </div>
  );
}
