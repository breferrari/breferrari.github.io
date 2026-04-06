import { TechBadge } from "@/components/tech-badge-interactive";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/reveal";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 px-6 py-10">
      <Reveal>
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight">Certifications</h2>
        <Separator className="my-4" />

        <div className="group flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "var(--icon-cert-bg)" }}>
            <Award className="h-3.5 w-3.5 transition-all duration-500 group-hover:scale-125 group-hover:brightness-125 group-hover:drop-shadow-[0_0_3px_var(--icon-cert)]" style={{ color: "var(--icon-cert)" }} />
          </div>
          <div>
            <p className="text-sm font-medium transition-all duration-300 origin-left group-hover:scale-[1.03] group-hover:brightness-125" style={{ color: "var(--icon-cert)" }}>
              Data Science Bootcamp
            </p>
            <p className="text-sm text-foreground/80 transition-all duration-300 origin-left group-hover:scale-[1.03] group-hover:text-foreground">
              Data Bootcamp, Rio de Janeiro (2017)
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90">
              Intensive, small-class program — 18 students max, two instructors — covering Data Science, Big Data, and Machine Learning from fundamentals through Jupyter, Pandas, and Spark to training and deploying models. Co-founded and taught by Diogo Munaro Vieira (PhD from PUC-Rio, now Data &amp; AI at Stone) and Renan Oliveira (now Chief AI Officer at PicPay), with guest instructors from Globo.com, iFood, Samsung, and JusBrasil. The program went on to train thousands of professionals and became one of Brazil&apos;s most respected data education initiatives.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <TechBadge name="Data Science" />
              <TechBadge name="Machine Learning" />
              <TechBadge name="Big Data" />
              <TechBadge name="Python" />
              <TechBadge name="Jupyter" />
              <TechBadge name="Pandas" />
              <TechBadge name="Spark" />
            </div>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
