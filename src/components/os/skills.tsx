import { motion } from "framer-motion";
import { skills } from "@/data/profile";
import { Section } from "./sections";

export function SkillsSection() {
  // Radar polygon math
  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 130;
  const n = skills.length;
  const angle = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2;

  const ringPoints = (r: number) =>
    skills
      .map((_, i) => `${cx + Math.cos(angle(i)) * r},${cy + Math.sin(angle(i)) * r}`)
      .join(" ");

  const dataPoints = skills
    .map((s, i) => `${cx + Math.cos(angle(i)) * (radius * s.score) / 100},${cy + Math.sin(angle(i)) * (radius * s.score) / 100}`)
    .join(" ");

  return (
    <Section id="skills" eyebrow="// skill.intel" title="Skill intelligence" kicker="Live radar over operational, platform, and product capabilities.">
      <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass mx-auto rounded-2xl p-6"
        >
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
            {[0.25, 0.5, 0.75, 1].map((f) => (
              <polygon key={f} points={ringPoints(radius * f)} fill="none" stroke="var(--color-border)" strokeWidth="1" />
            ))}
            {skills.map((s, i) => (
              <line
                key={s.group}
                x1={cx}
                y1={cy}
                x2={cx + Math.cos(angle(i)) * radius}
                y2={cy + Math.sin(angle(i)) * radius}
                stroke="var(--color-border)"
              />
            ))}
            <motion.polygon
              points={dataPoints}
              fill="oklch(0.74 0.18 250 / 0.25)"
              stroke="oklch(0.74 0.18 250)"
              strokeWidth="1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            {skills.map((s, i) => {
              const x = cx + Math.cos(angle(i)) * (radius + 22);
              const y = cy + Math.sin(angle(i)) * (radius + 22);
              return (
                <text key={s.group} x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="fill-foreground" fontSize="10" fontFamily="var(--font-mono)">
                  {s.group}
                </text>
              );
            })}
          </svg>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {skills.map((s, i) => (
            <motion.div
              key={s.group}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="glass rounded-xl p-4"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">{s.group}</div>
                <div className="font-mono text-xs text-primary">{s.score}</div>
              </div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.score}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1 + i * 0.04 }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-1">
                {s.items.map((it) => (
                  <span key={it} className="rounded border border-border bg-muted/30 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
