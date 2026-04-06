const techColors: Record<string, { dark: string; light: string }> = {
  // Languages
  "Swift":             { dark: "#F05138", light: "#c0341e" },
  "Objective-C":       { dark: "#438EFF", light: "#2860b8" },
  "Python":            { dark: "#5A9FD4", light: "#2e6f9e" },
  "TypeScript":        { dark: "#3178C6", light: "#22568e" },
  "Rust":              { dark: "#DEA584", light: "#9e6840" },
  "Kotlin":            { dark: "#7F52FF", light: "#5a30cc" },
  "Ruby":              { dark: "#CC342D", light: "#9e2420" },
  "Java":              { dark: "#ED8B00", light: "#b06800" },
  "Shell":             { dark: "#89D689", light: "#3a8a3a" },
  // Platforms
  "iOS":               { dark: "#007AFF", light: "#0058c0" },
  "iPadOS":            { dark: "#007AFF", light: "#0058c0" },
  "macOS":             { dark: "#6496FF", light: "#3a60c0" },
  "tvOS":              { dark: "#A0A0B4", light: "#606074" },
  "visionOS":          { dark: "#9664FF", light: "#6a3cc2" },
  "Android":           { dark: "#3DDC84", light: "#1a8a4a" },
  "Web":               { dark: "#50C8C8", light: "#2a8888" },
  // Tools & frameworks
  "Obsidian":          { dark: "#7C3AED", light: "#5a24b8" },
  "Claude Code":       { dark: "#D97706", light: "#a45a00" },
  "AI":                { dark: "#6EC4E8", light: "#1a7a9e" },
  "MCP":               { dark: "#6EC4E8", light: "#1a7a9e" },
  "CLI":               { dark: "#A0A8BE", light: "#5a6074" },
  // ML/Data
  "Vision":            { dark: "#007AFF", light: "#0058c0" },
  "Core ML":           { dark: "#F05138", light: "#c0341e" },
  "ARKit":             { dark: "#9664FF", light: "#6a3cc2" },
  "Image Recognition": { dark: "#50C8C8", light: "#2a8888" },
  "Machine Learning":  { dark: "#6EC4E8", light: "#1a7a9e" },
  "Data Science":      { dark: "#5A9FD4", light: "#2e6f9e" },
  "Big Data":          { dark: "#ED8B00", light: "#b06800" },
  "Jupyter":           { dark: "#F37626", light: "#b85a1a" },
  "Pandas":            { dark: "#6450C8", light: "#4a38a0" },
  "Spark":             { dark: "#E86932", light: "#b84e20" },
};

const DEFAULT_COLOR = { dark: "#A0A8BE", light: "#5a6074" };

function hexToRgb(hex: string): string {
  const n = parseInt(hex.slice(1), 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

export function colorFromHex(hex: string) {
  const rgb = hexToRgb(hex);
  return {
    bg: `rgba(${rgb}, 0.15)`,
    tint: `rgba(${rgb}, 0.10)`,
    border: `rgba(${rgb}, 0.35)`,
    text: hex,
  };
}

export function getColor(name: string, theme: "dark" | "light"): string {
  const entry = techColors[name] || DEFAULT_COLOR;
  return entry[theme];
}

export { techColors, DEFAULT_COLOR };
