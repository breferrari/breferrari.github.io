"use client";

import { colorFromHex } from "@/components/tech-badge";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/reveal";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { useTheme } from "@/components/theme-provider";

const links = [
  { label: "GitHub",   href: "https://github.com/breferrari",        icon: GitHubIcon,   light: "#24292e", dark: "#c8cad4" },
  { label: "LinkedIn", href: "https://linkedin.com/in/brennoferrari", icon: LinkedInIcon, light: "#0a66c2", dark: "#5AA0D8" },
  { label: "X",        href: "https://x.com/brennoferrari",          icon: XIcon,        light: "#14171a", dark: "#c8cad4" },
  { label: "Email",    href: "mailto:contact@brennoferrari.com",      icon: Mail,         light: "#0e7490", dark: "#6EC4E8" },
];

export function Contact() {
  const { theme } = useTheme();

  return (
    <section id="contact" className="scroll-mt-20 px-6 py-10">
      <Reveal>
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
        <Separator className="my-4" />

        <p className="text-sm text-muted-foreground">
          Reach out via any of the channels below.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {links.map((link) => {
            const hex = theme === "dark" ? link.dark : link.light;
            const c = colorFromHex(hex);
            return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="contact-link liquid-glass relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs transition-all duration-300 hover:scale-105 hover:brightness-125"
              style={{
                "--glass-tint": c.tint,
                borderWidth: "1px",
                borderColor: c.border,
                color: c.text,
                "--glow-color": c.border,
              } as React.CSSProperties}
            >
              <link.icon className="h-3.5 w-3.5" />
              {link.label}
            </a>
            );
          })}
        </div>
      </div>
      </Reveal>
    </section>
  );
}
