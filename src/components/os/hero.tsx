import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { profile, stats } from "@/data/profile";
import { useMode } from "./mode";

export function Hero({ onOpenPalette, onOpenAssistant }: { onOpenPalette: () => void; onOpenAssistant: () => void }) {
  const { mode } = useMode();

  return (
    <section className="relative px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        {/* Status bar */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-10 flex flex-wrap items-center justify-between gap-4 rounded-full px-5 py-2.5 text-xs md:text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-[var(--color-success)]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-success)]" />
            </span>
            <span className="font-mono tracking-tight text-foreground/90">SYSTEM ONLINE</span>
            <span className="hidden text-muted-foreground md:inline">· {profile.availability}</span>
          </div>
          <div className="hidden items-center gap-4 font-mono text-muted-foreground md:flex">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3 w-3" /> {profile.location}</span>
            <span>{profile.timezone}</span>
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px]">⌘K</kbd>
          </div>
        </motion.div>

        {/* Identity */}
        <div className="grid items-end gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary/80"
            >
              {mode === "recruiter" ? "// hiring brief · v2040.1" : "// bhanu_os · v2040.1"}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-balance text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl"
            >
              <span className="text-gradient">{profile.name.split(" ")[0]} {profile.name.split(" ").slice(1).join(" ")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-5 max-w-xl text-lg text-muted-foreground md:text-xl"
            >
              <span className="text-foreground/90">{profile.title}.</span> {profile.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={profile.resumeUrl}
                download
                className="magnetic magnetic-hover inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground glow-ring"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <button
                onClick={onOpenAssistant}
                className="magnetic magnetic-hover glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium hover:bg-card"
              >
                <Sparkles className="h-4 w-4 text-primary" /> Ask the AI assistant
              </button>
              <button
                onClick={onOpenPalette}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground"
              >
                Search <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
              </button>
            </motion.div>

            {/* Contact rail */}
            <div className="mt-10 flex flex-wrap items-center gap-2">
              <ContactPill href={`mailto:${profile.email}`} icon={<Mail className="h-3.5 w-3.5" />} label="Email" />
              <ContactPill href={`tel:${profile.phone}`} icon={<Phone className="h-3.5 w-3.5" />} label={profile.phoneDisplay} />
              <ContactPill href={profile.github} external icon={<Github className="h-3.5 w-3.5" />} label="GitHub" />
              <ContactPill href={profile.linkedin} external icon={<Linkedin className="h-3.5 w-3.5" />} label="LinkedIn" />
            </div>
          </div>

          {/* Live ops widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-strong relative overflow-hidden rounded-2xl p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">live ops</div>
              <div className="font-mono text-[10px] text-primary">●REC</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="rounded-xl border border-border bg-background/40 p-4"
                >
                  <div className="font-display text-2xl font-semibold tracking-tight text-foreground">{s.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between rounded-lg border border-border bg-background/40 px-3 py-2 font-mono text-[11px]">
              <span className="text-muted-foreground">autosys.master</span>
              <span className="text-[var(--color-success)]">▲ healthy</span>
            </div>
            <div className="mt-2 flex items-center justify-between rounded-lg border border-border bg-background/40 px-3 py-2 font-mono text-[11px]">
              <span className="text-muted-foreground">automic.uc4</span>
              <span className="text-[var(--color-success)]">▲ healthy</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactPill({ href, icon, label, external }: { href: string; icon: React.ReactNode; label: string; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary/40 hover:bg-card hover:text-foreground"
    >
      {icon} {label}
      {external && <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />}
    </a>
  );
}
