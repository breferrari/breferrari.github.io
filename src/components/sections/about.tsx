import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/reveal";
import { TechBadge } from "@/components/tech-badge-interactive";

const primaryStack = ["Swift", "Objective-C"];
const secondaryStack = ["TypeScript", "Rust", "Python", "Kotlin", "Ruby", "Java"];
const platforms = ["iOS", "iPadOS", "macOS", "tvOS", "visionOS", "Android", "Web"];

export function About() {
  return (
    <section className="px-6 py-10">
      <Reveal>
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight">About</h2>
        <Separator className="my-4" />

        <div className="group space-y-3 text-sm text-muted-foreground leading-relaxed transition-colors duration-300 hover:text-foreground/90">
          <p>
            Senior iOS Engineer at Trade Republic in Berlin. Over a decade
            building mobile software across fintech, cybersecurity,
            e-commerce, fitness, real estate, energy, and financial
            regulation — shipping production code on every Apple platform,
            and a few non-Apple ones along the way.
          </p>
          <p>
            Outside of the day job, builds open-source developer tools.{" "}
            <a
              href="https://github.com/breferrari/obsidian-mind"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm underline underline-offset-4 decoration-warm/30 transition-all hover:decoration-warm hover:brightness-150 hover:scale-105 inline-block"
            >
              Obsidian Mind
            </a>
            , a persistent memory system for AI coding assistants, went viral
            in its first week — 1,200+ GitHub stars, adopted by engineers
            across five languages, and independently reshaped for domains
            beyond software engineering.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <h3 className="mb-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Primary Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {primaryStack.map((s) => (
                <TechBadge key={s} name={s} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Secondary Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {secondaryStack.map((s) => (
                <TechBadge key={s} name={s} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              {platforms.map((p) => (
                <TechBadge key={p} name={p} />
              ))}
            </div>
          </div>

        </div>
      </div>
      </Reveal>
    </section>
  );
}
