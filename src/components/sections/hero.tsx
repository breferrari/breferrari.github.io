import { MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export function Hero() {
  return (
    <section id="about" className="scroll-mt-16 flex flex-col items-center justify-center px-6 pt-28 pb-8 text-center">
      <div className="animate-fade-in-up">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl">
          Brenno Ferrari
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          Senior iOS Engineer at Trade Republic
        </p>
        <p className="mt-1.5 flex items-center justify-center gap-1.5 text-xs text-muted-foreground/70">
          <MapPin className="h-3 w-3" />
          Berlin, Germany
        </p>

        <div className="mt-5 flex items-center justify-center gap-4">
          <a
            href="https://github.com/breferrari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all duration-300 hover:text-warm hover:scale-110 hover:drop-shadow-[0_0_5px_var(--warm)]"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/brennoferrari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all duration-300 hover:text-warm hover:scale-110 hover:drop-shadow-[0_0_5px_var(--warm)]"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href="https://x.com/brennoferrari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all duration-300 hover:text-warm hover:scale-110 hover:drop-shadow-[0_0_5px_var(--warm)]"
            aria-label="X"
          >
            <XIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
