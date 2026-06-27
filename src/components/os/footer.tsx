import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
        <div className="font-mono">© 2040 bhanu_os · built in Hyderabad with too much coffee</div>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="hover:text-foreground">Email</a>
          <span className="font-mono">v2040.1</span>
        </div>
      </div>
    </footer>
  );
}
