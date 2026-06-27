import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Star } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "./sections";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
};

export function GithubSection() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=6`)
      .then((r) => {
        if (!r.ok) throw new Error(`GitHub ${r.status}`);
        return r.json();
      })
      .then((d) => !cancelled && setRepos(d))
      .catch((e) => !cancelled && setError(String(e.message ?? e)));
    return () => { cancelled = true; };
  }, []);

  return (
    <Section id="github" eyebrow="// github.live" title="From the source" kicker={`Latest activity on @${profile.githubUser}.`}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {!repos && !error && Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="glass h-36 rounded-2xl">
            <div className="h-full w-full rounded-2xl shimmer" />
          </div>
        ))}
        {error && (
          <div className="glass col-span-full rounded-2xl p-6 text-sm text-muted-foreground">
            Couldn't reach GitHub right now ({error}). Visit{" "}
            <a className="text-primary underline" href={profile.github} target="_blank" rel="noreferrer">
              github.com/{profile.githubUser}
            </a>.
          </div>
        )}
        {repos?.map((r, i) => (
          <motion.a
            key={r.id}
            href={r.html_url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass magnetic magnetic-hover group flex flex-col rounded-2xl p-5 transition hover:border-primary/40"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-mono text-sm font-medium text-foreground/90 group-hover:text-primary">{r.name}</h3>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <p className="mt-2 line-clamp-2 min-h-[2.5rem] text-xs text-muted-foreground">
              {r.description ?? "No description."}
            </p>
            <div className="mt-4 flex items-center gap-3 font-mono text-[11px] text-muted-foreground">
              {r.language && <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-primary" />{r.language}</span>}
              <span className="inline-flex items-center gap-1"><Star className="h-3 w-3" />{r.stargazers_count}</span>
              <span className="inline-flex items-center gap-1"><GitBranch className="h-3 w-3" />{r.forks_count}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
