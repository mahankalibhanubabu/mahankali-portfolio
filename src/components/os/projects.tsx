import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/profile";
import { Section } from "./sections";

export function ProjectsSection() {
  return (
    <Section id="projects" eyebrow="// projects.db" title="Things I've shipped" kicker="From production batch automation to AI-driven product experiences.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.06 }}
          >
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="glass magnetic magnetic-hover group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition hover:border-primary/40"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" aria-hidden />
              <div className="relative flex items-center justify-between">
                <span className="rounded-md border border-border bg-muted/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {p.status}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <h3 className="relative mt-5 font-display text-lg font-semibold tracking-tight">{p.name}</h3>
              <p className="relative mt-1 text-sm text-muted-foreground">{p.tagline}</p>
              <div className="relative mt-auto pt-5">
                <div className="flex flex-wrap gap-1">
                  {p.stack.slice(0, 4).map((s) => (
                    <span key={s} className="rounded border border-border bg-card/40 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
