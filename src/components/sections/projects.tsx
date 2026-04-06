"use client";

import { useEffect, useState } from "react";
import { TechBadge } from "@/components/tech-badge-interactive";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/reveal";
import { ExternalLink, Star } from "lucide-react";

interface Project {
  repo: string;
  name: string;
  description: string;
  featured?: boolean;
  tags: string[];
}

const projects: Project[] = [
  {
    repo: "breferrari/obsidian-mind",
    name: "Obsidian Mind",
    description:
      "An Obsidian vault template that gives Claude Code persistent memory. AI coding assistants lose all context between sessions — Obsidian Mind fixes this by turning a vault into a structured, version-controlled external brain that persists across conversations. Five lifecycle hooks, a data-driven message classifier with CJK-aware regex, nine isolated subagents for heavy operations, QMD semantic search, self-healing graph rules, migration tooling, and 57 tests. Went viral in its first week — adopted across five languages and independently reshaped for domains beyond its original scope. Architecture later converged with Karpathy's LLM Wiki patterns.",
    featured: true,
    tags: ["Python", "Shell", "Obsidian", "Claude Code", "AI"],
  },
  {
    repo: "breferrari/weave",
    name: "Weave",
    description: "A Model Context Protocol pack manager for AI coding assistants. Install, update, and share MCP server configurations across Claude Code, Codex, and Gemini CLI with a single command. Built in Rust for performance and portability.",
    tags: ["Rust", "MCP", "CLI", "AI"],
  },
];

function formatStars(count: number): string {
  if (count >= 1000) {
    const k = count / 1000;
    return k % 1 === 0 ? `${k}k` : `${k.toFixed(1).replace(/\.0$/, "")}k`;
  }
  return count.toString();
}

function starTier(count: number) {
  if (count >= 4096) return { text: "#b8920e", fill: "rgba(184, 146, 14, 0.30)" };   // gold
  if (count >= 512)  return { text: "#6880a0", fill: "rgba(104, 128, 160, 0.30)" };  // silver
  if (count >= 128)  return { text: "#a06828", fill: "rgba(160, 104, 40, 0.30)" };   // bronze
  return { text: "#8490a0", fill: "rgba(132, 144, 160, 0.12)" };                      // default
}

const CACHE_KEY = "gh-stars";
const CACHE_TTL = 3_600_000; // 1 hour

function readCache(): Record<string, number> | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { stars, ts } = JSON.parse(raw);
    if (Date.now() - ts < CACHE_TTL) return stars;
  } catch { /* corrupt cache */ }
  return null;
}

function writeCache(stars: Record<string, number>) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ stars, ts: Date.now() }));
  } catch { /* storage full / unavailable */ }
}

export function Projects() {
  const [stars, setStars] = useState<Record<string, number>>({});

  useEffect(() => {
    const cached = readCache();
    if (cached) {
      setStars(cached);
      return;
    }
    const repos = projects.map((p) => p.repo);
    Promise.all(
      repos.map((repo) =>
        fetch(`https://api.github.com/repos/${repo}`)
          .then((r) => (r.ok ? r.json() : null))
          .then((d) => [repo, d?.stargazers_count ?? null] as const)
          .catch(() => [repo, null] as const)
      )
    ).then((results) => {
      const counts: Record<string, number> = {};
      for (const [repo, count] of results) {
        if (count != null) counts[repo] = count;
      }
      if (Object.keys(counts).length > 0) {
        writeCache(counts);
        setStars(counts);
      }
    });
  }, []);

  return (
    <section id="projects" className="scroll-mt-20 px-6 py-10">
      <Reveal>
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        <Separator className="my-4" />

        <div className="flex flex-col gap-3">
          {projects.map((project) => {
            const name = project.name;
            const count = stars[project.repo];
            const tier = count != null ? starTier(count) : null;
            return (
              <a
                key={name}
                href={`https://github.com/${project.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
              <Card
                className={`liquid-glass card-hover cursor-pointer ${project.featured ? "ring-1" : ""}`}
                style={{
                  borderColor: tier ? `${tier.text}20` : undefined,
                  ...(project.featured ? { "--tw-ring-color": `${tier?.text ?? "var(--warm)"}33` } as React.CSSProperties : {}),
                }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="inline-flex items-center gap-1.5 transition-colors group-hover:text-warm">
                        {name}
                        <ExternalLink className="h-3.5 w-3.5" />
                    </CardTitle>
                    {count != null && (() => {
                      const tier = starTier(count);
                      return (
                        <span className="inline-flex items-center gap-1 text-xs leading-none" style={{ color: tier.text }}>
                          <Star className="h-3.5 w-3.5 shrink-0" style={{ fill: tier.fill }} />
                          <span>{formatStars(count)}</span>
                        </span>
                      );
                    })()}
                  </div>
                  <CardDescription className="text-sm leading-7 transition-colors duration-300 group-hover:text-foreground/90">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <TechBadge key={tag} name={tag} />
                    ))}
                  </div>
                </CardContent>
              </Card>
              </a>
            );
          })}
        </div>
      </div>
      </Reveal>
    </section>
  );
}
