import { useEffect, useRef, useState } from "react";
import { Send, Sparkles, X } from "lucide-react";
import { experience, profile, projects, skills } from "@/data/profile";

type Msg = { role: "user" | "assistant"; text: string };

const SUGGESTIONS = [
  "What does Bhanu do?",
  "Tell me about his Automic UC4 experience",
  "What's his strongest skill?",
  "Is he available for hire?",
  "Show his projects",
  "How can I contact him?",
];

function answer(q: string): string {
  const t = q.toLowerCase();
  const has = (...k: string[]) => k.some((x) => t.includes(x));

  if (has("hire", "available", "open to", "opportunity"))
    return `Yes — ${profile.availability}. He's based in ${profile.location} (${profile.timezone}). Reach him at ${profile.email} or ${profile.phoneDisplay}.`;

  if (has("automic", "uc4", "autosys", "workload", "scheduler", "batch"))
    return `Workload automation is his core. As Workload Automation Engineer at Miraki Technologies he monitors and manages enterprise batch jobs on AutoSys and Automic UC4 across PROD, triages failures via scheduler + Linux log analysis, and recovers jobs by SOP. He also built an Automic UC4 Self-Healing Framework — auto-detects failures, runs recovery actions, escalates only true unknowns.`;

  if (has("project", "built", "shipped"))
    return projects.map((p) => `• ${p.name} — ${p.tagline} (${p.status})`).join("\n");

  if (has("skill", "stack", "tech", "strong"))
    return skills
      .slice()
      .sort((a, b) => b.score - a.score)
      .map((s) => `• ${s.group}: ${s.score}/100 — ${s.items.slice(0, 4).join(", ")}`)
      .join("\n");

  if (has("experience", "work", "job", "role", "career"))
    return experience.map((e) => `• ${e.role} @ ${e.company} (${e.period})\n  ${e.bullets[0]}`).join("\n\n");

  if (has("contact", "email", "phone", "linkedin", "reach"))
    return `Email: ${profile.email}\nPhone: ${profile.phoneDisplay}\nLinkedIn: ${profile.linkedin}\nGitHub: ${profile.github}`;

  if (has("location", "where", "based", "live"))
    return `${profile.location} — ${profile.timezone}.`;

  if (has("education", "degree", "college", "study"))
    return `B.Sc. Computer Science, Malla Reddy Engineering College (MREC), Hyderabad — graduated May 2025, GPA 8.40/10.`;

  if (has("salesforce", "crm"))
    return `Jan–Aug 2024 Salesforce Administrator & Developer Virtual Intern — CRM config, Flow, Process Builder, Apex fundamentals, validation rules, security model.`;

  if (has("devops", "ci/cd", "docker", "jenkins", "aws", "cloud"))
    return `On the platform side he built a Jenkins + Docker + GitHub Actions pipeline on AWS for CollegePath AI, with Nginx fronting production. Comfortable with Linux, Ansible, and Kubernetes basics.`;

  if (has("ai", "ml", "openai", "llm"))
    return `He shipped CollegePath AI — a Next.js + OpenAI platform that generates personalized career roadmaps, parses resumes, and runs interview simulations.`;

  if (has("about", "who", "intro", "background"))
    return `${profile.name} — ${profile.title}. ${profile.tagline} Mission: ${profile.mission}`;

  return `I can speak to ${profile.name}'s experience, skills, projects, availability, and contact info. Try one of the suggestions below — or ask anything from his résumé.`;
}

export function AIAssistant({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", text: `Hi — I'm the AI assistant for ${profile.name}. Ask me anything about his experience, skills, projects, or availability.` },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  const send = (q: string) => {
    const trimmed = q.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", text: answer(trimmed) }]);
      setThinking(false);
    }, 450 + Math.random() * 300);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end bg-background/50 p-4 backdrop-blur-sm md:items-center md:justify-center" onClick={() => setOpen(false)}>
      <div onClick={(e) => e.stopPropagation()} className="glass-strong flex h-[80vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl glow-ring md:h-[600px]">
        <header className="flex items-center justify-between border-b border-border px-5 py-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-display text-sm font-medium">Bhanu · AI Assistant</span>
            <span className="ml-2 rounded-full bg-success/15 px-2 py-0.5 font-mono text-[10px] text-success">online</span>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close assistant" className="text-muted-foreground hover:text-foreground"><X className="h-4 w-4" /></button>
        </header>

        <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
          {messages.map((m, i) => (
            <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
              <div className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "bg-primary text-primary-foreground" : "glass text-foreground/90"}`}>
                {m.text}
              </div>
            </div>
          ))}
          {thinking && (
            <div className="flex justify-start">
              <div className="glass rounded-2xl px-4 py-3">
                <span className="inline-flex gap-1">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.1s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary" />
                </span>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {messages.length <= 2 && (
          <div className="flex flex-wrap gap-1.5 border-t border-border px-5 py-3">
            {SUGGESTIONS.map((s) => (
              <button key={s} onClick={() => send(s)} className="rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground transition hover:border-primary/40 hover:text-foreground">
                {s}
              </button>
            ))}
          </div>
        )}

        <form
          onSubmit={(e) => { e.preventDefault(); send(input); }}
          className="flex items-center gap-2 border-t border-border px-3 py-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about Bhanu…"
            className="flex-1 rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm outline-none focus:border-primary/60"
            aria-label="Ask the assistant"
          />
          <button type="submit" aria-label="Send" className="magnetic magnetic-hover rounded-xl bg-primary p-2.5 text-primary-foreground glow-ring">
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
