import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { profile } from "@/data/profile";
import { ModeProvider } from "@/components/os/mode";
import { TopNav } from "@/components/os/nav";
import { Hero } from "@/components/os/hero";
import { ExperienceSection, TimelineSection } from "@/components/os/sections";
import { CertificationsSection } from "@/components/os/certifications";
import { SkillsSection } from "@/components/os/skills";
import { ProjectsSection } from "@/components/os/projects";
import { GithubSection } from "@/components/os/github";
import { ContactSection } from "@/components/os/contact";
import { Footer } from "@/components/os/footer";
import { CommandPalette } from "@/components/os/command-palette";
import { TerminalPanel } from "@/components/os/terminal";
import { AIAssistant } from "@/components/os/assistant";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — ${profile.title}` },
      { name: "description", content: `${profile.name}: ${profile.title}. ${profile.tagline}` },
      { property: "og:title", content: `${profile.name} — ${profile.title}` },
      { property: "og:description", content: profile.tagline },
      { property: "og:type", content: "profile" },
      { name: "twitter:title", content: `${profile.name} — ${profile.title}` },
      { name: "twitter:description", content: profile.tagline },
    ],
  }),
  component: Home,
});

function Home() {
  const [palette, setPalette] = useState(false);
  const [terminal, setTerminal] = useState(false);
  const [assistant, setAssistant] = useState(false);

  return (
    <ModeProvider>
      <div id="top" className="relative min-h-screen">
        <TopNav onOpenPalette={() => setPalette(true)} onOpenTerminal={() => setTerminal(true)} onOpenAssistant={() => setAssistant(true)} />

        <main>
          <Hero onOpenPalette={() => setPalette(true)} onOpenAssistant={() => setAssistant(true)} />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <TimelineSection />
          <GithubSection />
          <ContactSection />
        </main>

        <Footer />

        <CommandPalette open={palette} setOpen={setPalette} onOpenTerminal={() => setTerminal(true)} onOpenAssistant={() => setAssistant(true)} />
        <TerminalPanel open={terminal} setOpen={setTerminal} />
        <AIAssistant open={assistant} setOpen={setAssistant} />
      </div>
    </ModeProvider>
  );
}
