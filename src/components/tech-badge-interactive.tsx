"use client";

import { useRef, useCallback } from "react";
import { colorFromHex, getColor } from "@/components/tech-badge";
import { useTheme } from "@/components/theme-provider";

export function TechBadge({ name }: { name: string }) {
  const { theme } = useTheme();
  const hex = getColor(name, theme);
  const color = colorFromHex(hex);
  const ref = useRef<HTMLSpanElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(200px) rotateX(${-y * 20}deg) rotateY(${x * 20}deg) scale(1.1)`;
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  }, []);

  return (
    <span
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="liquid-glass liquid-glass-btn relative inline-flex select-none items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-transform duration-200 ease-out hover:brightness-125"
      style={{
        "--glass-tint": color.tint,
        borderWidth: "1px",
        borderColor: color.border,
        color: color.text,
      } as React.CSSProperties}
    >
      {name}
    </span>
  );
}
