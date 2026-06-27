import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { experience, profile, projects, skills } from "@/data/profile";

type Line = { kind: "in" | "out" | "sys"; text: string };

const HELP = `available commands:
  about       — who is bhanu
  experience  — work history
  projects    — list shipped projects
  skills      — capability radar
  github      — open github profile
  resume      — download resume pdf
  contact     — email / linkedin / phone
  hire        — recruiter quick brief
  clear       — clear screen
  help        — this menu`;

function run(cmd: string): string {
  const c = cmd.trim().toLowerCase();
  if (!c) return "";
  if (c === "help" || c === "?") return HELP;
  if (c === "about")
    return `${profile.name} — ${profile.title}\n${profile.tagline}\n📍 ${profile.location} · ${profile.timezone}\n${profile.mission}`;
  if (c === "experience")
    return experience.map((e) => `• ${e.role} @ ${e.company} — ${e.period}\n  ${e.bullets[0]}`).join("\n\n");
  if (c === "projects")
    return projects.map((p) => `• ${p.name} [${p.status}] — ${p.tagline}`).join("\n");
  if (c === "skills")
    return skills.map((s) => `• ${s.group.padEnd(22)} ${"█".repeat(Math.floor(s.score / 10))} ${s.score}`).join("\n");
  if (c === "github") { window.open(profile.github, "_blank"); return `opening ${profile.github}…`; }
  if (c === "resume") { window.open(profile.resumeUrl, "_blank"); return `downloading résumé…`; }
  if (c === "contact")
    return `email   : ${profile.email}\nphone   : ${profile.phoneDisplay}\nlinkedin: ${profile.linkedin}\ngithub  : ${profile.github}`;
  if (c === "hire")
    return `── recruiter brief ──────────────\nrole-fit: Workload Automation / Production Support / DevOps\ncore: AutoSys · Automic UC4 · Linux · SQL · Incident Mgmt\nbonus: CI/CD · Docker · AWS · React/Next.js\nstatus: ${profile.availability}\nemail: ${profile.email}\n────────────────────────────────`;
  if (c === "clear") return "__CLEAR__";
  if (c === "sudo make me a sandwich") return "🥪 nice try.";
  return `command not found: ${c}\ntype 'help' to list commands.`;
}

export function TerminalPanel({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const [lines, setLines] = useState<Line[]>([
    { kind: "sys", text: "bhanu-os 2040.1 — type 'help' to begin." },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIdx, setHIdx] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const submit = () => {
    const cmd = input;
    setInput("");
    if (!cmd.trim()) return;
    setHistory((h) => [cmd, ...h]); setHIdx(-1);
    const out = run(cmd);
    if (out === "__CLEAR__") { setLines([]); return; }
    setLines((l) => [...l, { kind: "in", text: cmd }, { kind: "out", text: out }]);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-background/60 p-4 backdrop-blur-sm md:items-center" onClick={() => setOpen(false)}>
      <div onClick={(e) => e.stopPropagation()} className="glass-strong w-full max-w-2xl overflow-hidden rounded-2xl border border-border">
        <div className="flex items-center justify-between border-b border-border px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">bhanu@os ~ /portfolio</span>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close terminal" className="text-muted-foreground hover:text-foreground"><X className="h-4 w-4" /></button>
        </div>
        <div ref={scrollRef} className="max-h-[60vh] min-h-[40vh] overflow-y-auto px-4 py-3 font-mono text-[13px] leading-relaxed">
          {lines.map((l, i) => (
            <div key={i} className={l.kind === "in" ? "text-foreground" : l.kind === "sys" ? "text-primary" : "text-muted-foreground"}>
              {l.kind === "in" && <span className="text-primary">❯ </span>}
              <span style={{ whiteSpace: "pre-wrap" }}>{l.text}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 pt-1 text-foreground">
            <span className="text-primary">❯</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") submit();
                if (e.key === "ArrowUp" && history.length) {
                  const ni = Math.min(hIdx + 1, history.length - 1); setHIdx(ni); setInput(history[ni] ?? "");
                }
                if (e.key === "ArrowDown" && hIdx > 0) {
                  const ni = hIdx - 1; setHIdx(ni); setInput(history[ni] ?? "");
                }
              }}
              className="flex-1 bg-transparent outline-none"
              aria-label="Terminal input"
              spellCheck={false}
              autoComplete="off"
            />
            <span className="inline-block h-4 w-1.5 animate-blink bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
