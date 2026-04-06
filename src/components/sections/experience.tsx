import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/reveal";
import { MapPin, Newspaper, ExternalLink } from "lucide-react";
import { YouTubeIcon } from "@/components/icons";
import type { ComponentType } from "react";

interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  description: string;
}

const roles: Role[] = [
  {
    company: "Trade Republic",
    title: "Senior iOS Engineer",
    period: "2025 — present",
    location: "Berlin, Germany",
    description:
      "German neobank serving 8+ million customers. Part of the iOS platform team at one of Europe's fastest-growing fintech companies.",
  },
  {
    company: "Nord Security / NordVPN",
    title: "Senior Swift Engineer",
    period: "2022 — 2025",
    location: "Berlin, Germany",
    description:
      "Two and a half years spanning two distinct roles. Started as Senior macOS Engineer, building VPN and Meshnet features for the NordVPN macOS client. Led a design system initiative that brought developers and designers closer together. Drove modularization and migration to Swift Package Manager, reshaping the project's architecture.\n\nPromoted to Senior Swift Engineer on the Apple Low Level team — a foundational role building shared libraries consumed across macOS, iOS, tvOS, and visionOS. Worked directly with multiple product teams to ensure seamless integration and high-quality delivery. This was the role that proved platform-level thinking beyond iOS alone: writing Swift that ships on four operating systems, navigating platform-specific networking stacks, and maintaining a unified architecture across all of them.",
  },
  {
    company: "Wayfair",
    title: "iOS Engineer",
    period: "2019 — 2022",
    location: "Berlin, Germany",
    description:
      "Three years building e-commerce infrastructure in Berlin. Developed and maintained Waystation, an internal iOS/iPadOS tooling application, and created PayKit — Wayfair's payments SDK, the layer between the app and every payment processor the company supported. Collaborated with the iOS infrastructure team on SPM integration and led the modernization of Waystation with SwiftUI and Combine. The longest single tenure, and the period where the senior engineering identity solidified: owning critical-path systems, mentoring, and shipping reliably at scale.",
  },
  {
    company: "EGYM",
    title: "iOS Engineer",
    period: "2018 — 2019",
    location: "Berlin, Germany",
    description:
      "Fitness technology platform based in Munich and Berlin. Built iPhone and iPad applications for a connected strength equipment ecosystem used in gyms across Europe. Rebuilt the iPad app from the ground up in Swift with high test coverage, introduced a design module and composable animations framework, and led the architecture transition from XIBs and Storyboards to fully programmatic views. First international role — relocated from Brazil to Germany for this position.",
  },
  {
    company: "Accenture / Concrete Solutions",
    title: "iOS Engineer",
    period: "2017 — 2018",
    location: "Rio de Janeiro / São Paulo, Brazil",
    description:
      'Concrete Solutions was one of Brazil\'s most respected mobile consultancies, acquired by Accenture shortly after joining. Built "Meu Cartão BV," the iOS banking app for Banco Votorantim, one of the country\'s major banks — fully programmatic views in Swift, custom UI components, and intricate animations for credit card transaction management. The first dedicated, single-company iOS role after years of juggling multiple positions at once.',
  },
];

interface EarlierRole {
  name: string;
  title: string;
  period: string;
  description: string;
  links?: { label: string; title?: string; url: string; icon?: ComponentType<{ className?: string; style?: React.CSSProperties }>; iconColor?: string }[];
}

const earlierRoles: EarlierRole[] = [
  {
    name: "Homer — Parcerias Imobiliárias",
    title: "iOS & Android Engineer",
    period: "2016 — 2017",
    description:
      "A social network for the housing market and real estate professionals. Started on Android, transitioned to iOS within five months, and built the iOS app from scratch — Firebase, SendBird for real-time messaging, MapKit for geographic search, Twilio for in-app calling, and UrbanAirship for push notifications. Shipped authentication, a debug mode, a chat system with custom bubbles and audio messages, and a full map-based search experience. Shaped technology and strategy decisions well beyond the engineering scope.",
  },
  {
    name: "Radix Engenharia e Software",
    title: "Full-Stack & iOS Engineer",
    period: "2016 — 2017",
    description:
      "Engineering consulting firm in Rio de Janeiro. Two distinct projects: a full-stack web application (Java backend, Angular frontend) for Ambima/CVM — the Brazilian financial market association and securities commission — and an iOS app for AM/PM's Ipiranga, one of Brazil's largest fuel distributors, featuring extensive custom animations.",
  },
  {
    name: "Sb Promoções",
    title: "Full-Stack Developer",
    period: "2016 — 2017",
    description:
      "Sole IT professional for a promotions company. Developer, system architect, and AWS integrator. Built the iOS app, Android app, and product website. The kind of role where you learn everything because there is no one else.",
  },
  {
    name: "LES Lab — PUC-Rio",
    title: "QA Analyst, Support Analyst & Lead Mobile Developer",
    period: "2013 — 2015",
    description:
      "Two years holding three simultaneous roles in a university research lab. QA analyst running manual and automated tests on Java systems for Petrobras at TecGraf. Support analyst managing infrastructure, networks, and systems. And lead mobile developer — a role that emerged after BlackBerry dissolved its Tech Center, carrying forward team management and client relations.",
  },
  {
    name: "BlackBerry Tech Center at PUC-Rio",
    title: "Tech Center Developer",
    period: "2013 — 2014",
    description:
      "Part of an elite development team promoting the BlackBerry 10 platform — native development in Cascades and C++, porting Android games to the BlackBerry app store. The inauguration was attended by Canada's Foreign Minister and BlackBerry's VP of Public Policy. Covered by TechTudo, Brazil's largest tech publication, and featured in a BlackBerry promotional video. This is where mobile development started.",
    links: [
      { label: "Globo.com | TechTudo", title: "BlackBerry Opens New Tech Center in Rio de Janeiro", url: "https://www.techtudo.com.br/noticias/2013/08/blackberry-inaugura-novo-tech-center-no-rio-de-janeiro.ghtml", icon: Newspaper, iconColor: "var(--foreground)" },
      { label: "BlackBerry Channel at YouTube", title: "BlackBerry Launches Tech Center in Rio de Janeiro in Partnership with PUC-Rio", url: "https://www.youtube.com/watch?v=sNnrLw3fmIs", icon: YouTubeIcon, iconColor: "#FF0000" },
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-6 py-12">
      <Reveal>
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
        <Separator className="my-4" />

        <div className="relative flex flex-col">
          {/* Single continuous line through all entries */}
          <div className="absolute left-[5.5px] top-0 bottom-0 w-px bg-warm/30" style={{ maskImage: "linear-gradient(to bottom, transparent, white 3%, white 97%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, transparent, white 3%, white 97%, transparent)" }} />

          {roles.map((role, i) => (
            <Reveal key={role.company} delay={i * 100} className="pb-10">
            <div className="group flex gap-4">
              {/* Gutter: fixed-width column with dot */}
              <div className="relative flex w-3 shrink-0 justify-center">
                {/* Dot — centered horizontally, aligned with company name */}
                <div className="absolute top-[1.6rem] h-2.5 w-2.5 rounded-full border-2 border-warm bg-background transition-all duration-500 group-hover:bg-warm group-hover:scale-125 group-hover:shadow-[0_0_6px_var(--warm)]" />
              </div>
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  <span>{role.period}</span>
                  <span className="text-muted-foreground/50">·</span>
                  <span className="inline-flex items-center gap-1 normal-case tracking-normal"><MapPin className="h-3 w-3" />{role.location}</span>
                </div>
                <h3 className="mt-1 text-base font-semibold text-warm transition-all duration-300 origin-left group-hover:scale-[1.03] group-hover:brightness-125">
                  {role.company}
                </h3>
                <p className="text-sm text-foreground/80 transition-all duration-300 origin-left group-hover:scale-[1.03] group-hover:text-foreground">{role.title}</p>
                <div className="mt-2 text-sm leading-7 text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90">
                  {role.description.split("\n\n").map((para, j) => (
                    <p key={j} className={j > 0 ? "mt-4" : ""}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            </Reveal>
          ))}

          {/* Earlier roles */}
          <Reveal delay={roles.length * 100}>
          <div className="group/parent flex gap-4">
            {/* Gutter */}
            <div className="relative flex w-3 shrink-0 justify-center">
              <div className="absolute top-[1.6rem] h-2.5 w-2.5 rounded-full border-2 border-warm bg-background transition-all duration-500 group-hover/parent:bg-warm group-hover/parent:scale-125 group-hover/parent:shadow-[0_0_6px_var(--warm)]" />
            </div>
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <span>2013 — 2017</span>
                <span className="text-muted-foreground/50">·</span>
                <span className="inline-flex items-center gap-1 normal-case tracking-normal"><MapPin className="h-3 w-3" />Rio de Janeiro, Brazil</span>
              </div>
              <h3 className="mt-1 mb-5 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Earlier Roles
              </h3>
              <div className="mt-3 space-y-6">
                {earlierRoles.map((role) => (
                  <div key={role.name} className="group/earlier">
                    <p className="text-[0.65rem] font-medium uppercase tracking-wider text-muted-foreground/70">
                      {role.period}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-warm transition-all duration-300 origin-left group-hover/earlier:scale-[1.03] group-hover/earlier:brightness-125">
                      {role.name}
                    </p>
                    <p className="text-xs text-foreground/80 transition-all duration-300 origin-left group-hover/earlier:scale-[1.03] group-hover/earlier:text-foreground">
                      {role.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-7 text-muted-foreground transition-colors duration-300 group-hover/earlier:text-foreground/90">
                      {role.description}
                    </p>
                    {role.links && (
                      <div className="mt-2 flex flex-col gap-1.5">
                        {role.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs text-warm transition-all duration-300 hover:brightness-150 hover:translate-x-1 hover:drop-shadow-[0_0_6px_var(--warm)]"
                          >
                            {link.icon && <link.icon className="h-3 w-3 shrink-0" style={link.iconColor ? { color: link.iconColor } : undefined} />}
                            <span>
                              <span>{link.label}</span>
                              {link.title && <span className="ml-1 text-muted-foreground">— {link.title}</span>}
                            </span>
                            <ExternalLink className="h-2.5 w-2.5 shrink-0" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
