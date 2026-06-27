import { Link } from "@tanstack/react-router";
import { Sparkles, Terminal as TerminalIcon, UserCog } from "lucide-react";
import { useMode } from "./mode";

export function TopNav({ onOpenPalette, onOpenTerminal, onOpenAssistant }: {
  onOpenPalette: () => void;
  onOpenTerminal: () => void;
  onOpenAssistant: () => void;
}) {
  const { mode, toggle } = useMode();
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full px-3 py-2">
        <Link to="/" className="flex items-center gap-2 pl-2">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inset-0 animate-pulse-dot rounded-full bg-primary" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">bhanu_os</span>
          <span className="hidden font-mono text-[10px] text-muted-foreground sm:inline">v2040.1</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {[
            ["Experience", "experience"],
            ["Skills", "skills"],
            ["Projects", "projects"],
            ["GitHub", "github"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} className="rounded-full px-3 py-1.5 text-xs text-muted-foreground transition hover:bg-muted/40 hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <button onClick={toggle} aria-pressed={mode === "recruiter"} title="Toggle recruiter mode" className={`magnetic magnetic-hover inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[11px] font-mono transition ${mode === "recruiter" ? "bg-primary text-primary-foreground" : "bg-card/40 text-muted-foreground hover:text-foreground"}`}>
            <UserCog className="h-3.5 w-3.5" />
            {mode === "recruiter" ? "RECRUITER" : "RECRUITER MODE"}
          </button>
          <button onClick={onOpenTerminal} aria-label="Open terminal" className="rounded-full p-2 text-muted-foreground hover:bg-muted/40 hover:text-foreground"><TerminalIcon className="h-4 w-4" /></button>
          <button onClick={onOpenAssistant} aria-label="Open assistant" className="rounded-full p-2 text-muted-foreground hover:bg-muted/40 hover:text-foreground"><Sparkles className="h-4 w-4" /></button>
          <button onClick={onOpenPalette} className="ml-1 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1.5 text-[11px] text-muted-foreground hover:text-foreground">
            <span className="font-mono">⌘K</span>
          </button>
        </div>
      </div>
    </header>
  );
}
