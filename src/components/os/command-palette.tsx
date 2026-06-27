import { useEffect, useRef, useState } from "react";
import { Command } from "cmdk";
import { useNavigate } from "@tanstack/react-router";
import { Briefcase, Code2, Download, Github, Linkedin, Mail, Phone, Radar, Sparkles, Terminal, User } from "lucide-react";
import { profile, projects } from "@/data/profile";

export function CommandPalette({ open, setOpen, onOpenTerminal, onOpenAssistant }: {
  open: boolean;
  setOpen: (v: boolean) => void;
  onOpenTerminal: () => void;
  onOpenAssistant: () => void;
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const go = (action: () => void) => { setOpen(false); action(); };

  const scrollTo = (id: string) => () => {
    navigate({ to: "/" }).then(() => {
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }));
    });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-background/60 backdrop-blur-sm p-4 pt-[12vh]" onClick={() => setOpen(false)}>
      <div onClick={(e) => e.stopPropagation()} className="glass-strong w-full max-w-xl overflow-hidden rounded-2xl glow-ring">
        <Command label="Command palette" className="">
          <div className="flex items-center border-b border-border px-4">
            <Command.Input
              autoFocus
              placeholder="Type a command or search…"
              className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">ESC</kbd>
          </div>
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="px-3 py-6 text-center text-sm text-muted-foreground">No results.</Command.Empty>
            <Command.Group heading="Quick actions" className="px-2 pt-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              <Item icon={<Sparkles className="h-3.5 w-3.5" />} label="Ask the AI assistant" hint="⏎" onSelect={() => go(onOpenAssistant)} />
              <Item icon={<Terminal className="h-3.5 w-3.5" />} label="Open developer terminal" onSelect={() => go(onOpenTerminal)} />
              <Item icon={<Download className="h-3.5 w-3.5" />} label="Download résumé (PDF)" onSelect={() => go(() => window.open(profile.resumeUrl, "_blank"))} />
            </Command.Group>
            <Command.Group heading="Navigate" className="px-2 pt-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              <Item icon={<User className="h-3.5 w-3.5" />} label="Hero" onSelect={() => go(scrollTo("top"))} />
              <Item icon={<Briefcase className="h-3.5 w-3.5" />} label="Experience" onSelect={() => go(scrollTo("experience"))} />
              <Item icon={<Radar className="h-3.5 w-3.5" />} label="Skill intelligence" onSelect={() => go(scrollTo("skills"))} />
              <Item icon={<Code2 className="h-3.5 w-3.5" />} label="Projects" onSelect={() => go(scrollTo("projects"))} />
              <Item icon={<Github className="h-3.5 w-3.5" />} label="GitHub activity" onSelect={() => go(scrollTo("github"))} />
              <Item icon={<Mail className="h-3.5 w-3.5" />} label="Contact" onSelect={() => go(scrollTo("contact"))} />
            </Command.Group>
            <Command.Group heading="Projects" className="px-2 pt-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              {projects.map((p) => (
                <Item key={p.slug} icon={<Code2 className="h-3.5 w-3.5" />} label={p.name} onSelect={() => go(() => navigate({ to: "/projects/$slug", params: { slug: p.slug } }))} />
              ))}
            </Command.Group>
            <Command.Group heading="Contact" className="px-2 pt-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              <Item icon={<Mail className="h-3.5 w-3.5" />} label={profile.email} onSelect={() => go(() => (window.location.href = `mailto:${profile.email}`))} />
              <Item icon={<Phone className="h-3.5 w-3.5" />} label={profile.phoneDisplay} onSelect={() => go(() => (window.location.href = `tel:${profile.phone}`))} />
              <Item icon={<Github className="h-3.5 w-3.5" />} label="GitHub profile" onSelect={() => go(() => window.open(profile.github, "_blank"))} />
              <Item icon={<Linkedin className="h-3.5 w-3.5" />} label="LinkedIn" onSelect={() => go(() => window.open(profile.linkedin, "_blank"))} />
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}

function Item({ icon, label, hint, onSelect }: { icon: React.ReactNode; label: string; hint?: string; onSelect: () => void }) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm text-foreground/90 aria-selected:bg-accent aria-selected:text-accent-foreground"
    >
      <span className="inline-flex items-center gap-2.5">
        <span className="text-primary">{icon}</span> {label}
      </span>
      {hint && <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">{hint}</kbd>}
    </Command.Item>
  );
}
