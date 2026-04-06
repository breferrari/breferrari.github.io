"use client";

import { useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

export function ScrollHue() {
  const { theme } = useTheme();

  useEffect(() => {
    const maxHue = theme === "dark" ? 135 : 60;

    function onScroll() {
      const scrollFraction =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      const hue = scrollFraction * maxHue;
      document.documentElement.style.setProperty("--scroll-hue", `${hue}deg`);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [theme]);

  return null;
}
