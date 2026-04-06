import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/reveal";
import { Calendar } from "lucide-react";

const events = [
  {
    name: "WWDC 2019",
    location: "San Jose, CA",
    description: "Apple's Worldwide Developers Conference.",
  },
  {
    name: "AltConf 2019",
    location: "San Jose, CA",
    description:
      "Community-driven conference running alongside WWDC — talks, networking, and workshops open to all Apple developers.",
  },
];

export function Events() {
  return (
    <section id="events" className="scroll-mt-20 px-6 py-10">
      <Reveal>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight">Events</h2>
          <Separator className="my-4" />

          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.name} className="group flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "var(--icon-event-bg)" }}>
                  <Calendar className="h-3.5 w-3.5 transition-all duration-500 group-hover:scale-125 group-hover:brightness-125 group-hover:drop-shadow-[0_0_3px_var(--icon-event)]" style={{ color: "var(--icon-event)" }} />
                </div>
                <div>
                  <p className="text-sm font-medium transition-all duration-300 origin-left group-hover:scale-[1.03] group-hover:brightness-125" style={{ color: "var(--icon-event)" }}>
                    {event.name}
                  </p>
                  <p className="text-sm text-foreground/80 transition-all duration-300 origin-left group-hover:scale-[1.03] group-hover:text-foreground">
                    {event.location}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground/80 transition-colors duration-300 group-hover:text-foreground/90">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
