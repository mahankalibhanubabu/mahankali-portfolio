import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Mode = "default" | "recruiter";
type Ctx = { mode: Mode; setMode: (m: Mode) => void; toggle: () => void };

const ModeCtx = createContext<Ctx | null>(null);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("default");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("bhanu-os-mode") as Mode | null) : null;
    if (saved === "recruiter" || saved === "default") setMode(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("bhanu-os-mode", mode);
  }, [mode]);

  return (
    <ModeCtx.Provider value={{ mode, setMode, toggle: () => setMode(mode === "default" ? "recruiter" : "default") }}>
      {children}
    </ModeCtx.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeCtx);
  if (!ctx) throw new Error("useMode must be used within ModeProvider");
  return ctx;
}
