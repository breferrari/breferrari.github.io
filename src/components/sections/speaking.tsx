import { TechBadge } from "@/components/tech-badge-interactive";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/reveal";
import { Mic, ExternalLink } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";

export function Speaking() {
  return (
    <section id="speaking" className="scroll-mt-20 px-6 py-10">
      <Reveal>
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight">Speaking</h2>
        <Separator className="my-4" />

        <div className="group flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "var(--icon-speak-bg)" }}>
            <Mic className="h-4 w-4 transition-all duration-500 group-hover:scale-125 group-hover:brightness-125 group-hover:drop-shadow-[0_0_3px_var(--icon-speak)]" style={{ color: "var(--icon-speak)" }} />
          </div>
          <div>
            <h3 className="text-sm font-semibold transition-all duration-300 origin-left group-hover:scale-[1.03] group-hover:brightness-125" style={{ color: "var(--icon-speak)" }}>
              Coders on Beer iOS
            </h3>
            <p className="text-sm text-foreground/80 transition-all duration-300 origin-left group-hover:scale-[1.03] group-hover:text-foreground">
              Concrete Solutions, Rio de Janeiro (2018)
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90">
              Live demo of a custom-trained Core ML model for real-time image recognition. The model recognized specific people and objects on camera, tracked them with ARKit overlays, and showed how specialized models combine with augmented reality for practical use. Covered the full pipeline end to end: data collection, model training, on-device inference, and AR integration.
            </p>
            <div className="mt-2">
              <a
                href="https://www.linkedin.com/posts/brennoferrari_coders-on-beer-ios-activity-6367931436875423744-A4Zs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-warm transition-all duration-300 hover:brightness-150 hover:translate-x-1 hover:drop-shadow-[0_0_6px_var(--warm)]"
              >
                <LinkedInIcon className="h-3 w-3 shrink-0" style={{ color: "#0a66c2" }} />
                <span>
                  <span>LinkedIn</span>
                  <span className="ml-1 text-muted-foreground">— Coders on Beer iOS announcement by Concrete Solutions</span>
                </span>
                <ExternalLink className="h-2.5 w-2.5 shrink-0" />
              </a>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <TechBadge name="Vision" />
              <TechBadge name="Core ML" />
              <TechBadge name="ARKit" />
              <TechBadge name="Image Recognition" />
              <TechBadge name="Machine Learning" />
            </div>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
