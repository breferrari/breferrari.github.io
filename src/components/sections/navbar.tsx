"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#speaking", label: "Speaking" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggle: toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState("");
  const [clicked, setClicked] = useState("");
  const isAutoScrolling = useRef(false);

  const active = clicked || scrollActive;

  // When a link is clicked, lock the highlight and ignore scroll updates
  // until the user manually scrolls (wheel/touch)
  useEffect(() => {
    if (!clicked) return;

    isAutoScrolling.current = true;

    const unlock = () => {
      isAutoScrolling.current = false;
      setClicked("");
    };

    // Only manual scroll gestures clear the lock
    window.addEventListener("wheel", unlock, { once: true, passive: true });
    window.addEventListener("touchmove", unlock, { once: true, passive: true });

    return () => {
      window.removeEventListener("wheel", unlock);
      window.removeEventListener("touchmove", unlock);
    };
  }, [clicked]);

  // Scroll-based section tracking
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));

    const update = () => {
      if (isAutoScrolling.current) return;

      // Find the last section whose top has scrolled past the 1/3 mark
      const target = window.innerHeight / 3;
      let current = "";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= target) {
          current = id;
        }
      }

      if (current) setScrollActive(`#${current}`);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav className="liquid-glass fixed top-0 z-50 w-full border-b border-border">
      <div className="relative z-10 mx-auto flex max-w-4xl items-center justify-between px-6 py-2.5">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-foreground transition-all hover:text-warm hover:scale-110"
        >
          BF
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-5 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setClicked(l.href)}
                className={`relative text-xs transition-colors hover:text-warm after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-warm after:transition-all after:duration-300 ${
                  active === l.href
                    ? "text-warm after:w-full"
                    : "text-muted-foreground after:w-0 hover:after:w-full"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            className="cursor-pointer text-muted-foreground transition-all duration-300 hover:text-warm hover:scale-110 hover:drop-shadow-[0_0_5px_var(--warm)]"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden cursor-pointer text-muted-foreground hover:text-foreground transition-all hover:scale-110"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`border-t border-border/30 bg-background/90 backdrop-blur-lg md:hidden overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col gap-0.5 px-6 py-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`block py-1.5 text-sm transition-colors hover:text-warm ${
                  active === l.href ? "text-warm" : "text-muted-foreground"
                }`}
                onClick={() => { setClicked(l.href); setOpen(false); }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
