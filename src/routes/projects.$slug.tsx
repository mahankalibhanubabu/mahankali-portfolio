import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { profile, projects, type Project } from "@/data/profile";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — ${profile.name}` },
          { name: "description", content: loaderData.tagline },
          { property: "og:title", content: `${loaderData.name} — ${profile.name}` },
          { property: "og:description", content: loaderData.tagline },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="text-center">
        <h1 className="font-display text-4xl">404 · project not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary underline">← Back home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="text-center">
          <p className="text-muted-foreground">{String(error.message ?? error)}</p>
          <button onClick={() => { router.invalidate(); reset(); }} className="mt-4 rounded bg-primary px-4 py-2 text-primary-foreground">Try again</button>
        </div>
      </div>
    );
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const p = Route.useLoaderData() as Project;

  return (
    <div className="relative min-h-screen">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-24">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" /> back to bhanu_os
        </Link>

        <motion.header initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
          <div className="flex items-center gap-2">
            <span className="rounded-md border border-border bg-muted/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{p.status}</span>
            <span className="font-mono text-xs text-muted-foreground">project · /{p.slug}</span>
          </div>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            <span className="text-gradient">{p.name}</span>
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{p.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" className="magnetic magnetic-hover glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm hover:bg-card">
                <Github className="h-4 w-4" /> Source
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer" className="magnetic magnetic-hover inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground glow-ring">
                Live demo <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </motion.header>

        <div className="mt-12 grid gap-8">
          <Block title="Problem">{p.problem}</Block>
          <Block title="Solution">{p.solution}</Block>
          <Block title="Architecture">
            <ul className="space-y-2 text-sm text-muted-foreground">
              {p.architecture.map((a) => (
                <li key={a} className="flex gap-2"><span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />{a}</li>
              ))}
            </ul>
          </Block>
          <Block title="Stack">
            <div className="flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="rounded-md border border-border bg-muted/40 px-2 py-1 font-mono text-[11px] text-muted-foreground">{s}</span>
              ))}
            </div>
          </Block>
          <div className="grid gap-4 md:grid-cols-2">
            <Block title="Challenges">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {p.challenges.map((c) => <li key={c}>· {c}</li>)}
              </ul>
            </Block>
            <Block title="Roadmap">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {p.roadmap.map((c) => <li key={c}>→ {c}</li>)}
              </ul>
            </Block>
          </div>
        </div>
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="glass rounded-2xl p-6">
      <div className="font-mono text-[11px] uppercase tracking-widest text-primary/80">// {title}</div>
      <div className="mt-3 text-foreground/90">{children}</div>
    </section>
  );
}
