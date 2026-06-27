import { useState } from "react";
import { Check, Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Section } from "./sections";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(profile.email);
    setCopied(true); setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Section id="contact" eyebrow="// uplink" title="Open a channel" kicker="Roles, collabs, automation deep-dives — all welcome.">
      <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-strong rounded-2xl p-8">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">primary channel</div>
          <button onClick={copy} className="mt-2 inline-flex items-center gap-3 font-display text-2xl font-medium text-foreground transition hover:text-primary md:text-3xl">
            {profile.email}
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card/40 text-xs">
              {copied ? <Check className="h-3.5 w-3.5 text-success" /> : "⧉"}
            </span>
          </button>
          <p className="mt-2 text-sm text-muted-foreground">Click to copy · responds within 24h on weekdays.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            <a href={`mailto:${profile.email}`} className="magnetic magnetic-hover inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground glow-ring">
              <Mail className="h-4 w-4" /> Send email
            </a>
            <a href={`tel:${profile.phone}`} className="magnetic magnetic-hover glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm hover:bg-card">
              <Phone className="h-4 w-4" /> Call
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass space-y-3 rounded-2xl p-6">
          <Row icon={<MapPin className="h-4 w-4" />} label="Location" value={profile.location} />
          <Row icon={<Phone className="h-4 w-4" />} label="Phone" value={profile.phoneDisplay} href={`tel:${profile.phone}`} />
          <Row icon={<Github className="h-4 w-4" />} label="GitHub" value={`@${profile.githubUser}`} href={profile.github} external />
          <Row icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="mahankali-bhanubabu" href={profile.linkedin} external />
        </motion.div>
      </div>
    </Section>
  );
}

function Row({ icon, label, value, href, external }: { icon: React.ReactNode; label: string; value: string; href?: string; external?: boolean }) {
  const inner = (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background/40 px-4 py-3 text-sm transition hover:border-primary/30">
      <div className="flex items-center gap-3 text-muted-foreground">
        <span className="text-primary">{icon}</span>
        <span className="font-mono text-[11px] uppercase tracking-wider">{label}</span>
      </div>
      <span className="text-foreground/90">{value}</span>
    </div>
  );
  return href ? (
    <a href={href} {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}>{inner}</a>
  ) : inner;
}
