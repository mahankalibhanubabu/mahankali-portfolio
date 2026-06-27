import { motion } from "framer-motion";
import { experience, timeline } from "@/data/profile";
import { Briefcase, GraduationCap, Rocket } from "lucide-react";

export function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="// experience.log" title="Workload Automation in production">
      <div className="grid gap-6 lg:grid-cols-2">
        {experience.map((e, i) => (
          <motion.article
            key={e.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:border-primary/30"
          >
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-3xl transition group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg font-semibold tracking-tight">{e.company}</h3>
                <span className="font-mono text-[11px] text-muted-foreground">{e.period}</span>
              </div>
              <p className="mt-1 text-sm text-primary">{e.role}</p>
              <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">{e.location}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {e.stack.map((s) => (
                  <span key={s} className="rounded-md border border-border bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

const iconFor = { work: Briefcase, edu: GraduationCap, ship: Rocket } as const;

export function TimelineSection() {
  return (
    <Section id="timeline" eyebrow="// timeline" title="Trajectory">
      <ol className="relative ml-3 space-y-5 border-l border-border pl-6">
        {timeline.map((t, i) => {
          const Icon = iconFor[t.kind];
          return (
            <motion.li
              key={t.title}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative"
            >
              <span className="glass absolute -left-[34px] flex h-6 w-6 items-center justify-center rounded-full text-primary">
                <Icon className="h-3 w-3" />
              </span>
              <div className="font-mono text-xs text-muted-foreground">{t.year}</div>
              <div className="text-sm text-foreground/90">{t.title}</div>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  children,
  kicker,
}: {
  id: string;
  eyebrow: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary/80">{eyebrow}</div>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          </div>
          {kicker && <p className="max-w-md text-sm text-muted-foreground">{kicker}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
