import { motion } from "framer-motion";
import { certifications } from "@/data/profile";
import { Section } from "./sections";
import { Award, ExternalLink } from "lucide-react";

export function CertificationsSection() {
  return (
    <Section id="certifications" eyebrow="// credentials" title="Certifications & Training">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((c, i) => (
          <motion.article
            key={c.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="glass group relative overflow-hidden rounded-2xl p-5 transition hover:border-primary/30"
          >
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-start justify-between gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Award className="h-4 w-4" />
                </div>
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-primary"
                    aria-label="View credential"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
              <h3 className="mt-3 font-display text-sm font-semibold leading-snug tracking-tight">
                {c.name}
              </h3>
              <div className="mt-1 font-mono text-[11px] text-muted-foreground">
                {c.issuer}
              </div>
              <div className="mt-0.5 font-mono text-[10px] text-primary/80">
                {c.date}
              </div>
              {c.credentialId && (
                <div className="mt-1 font-mono text-[10px] text-muted-foreground/70">
                  ID: {c.credentialId}
                </div>
              )}
              <div className="mt-3 flex flex-wrap gap-1">
                {c.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-border bg-muted/30 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
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
