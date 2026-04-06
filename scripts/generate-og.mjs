import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Fetch Space Grotesk font URLs from Google Fonts CSS
const cssResp = await fetch(
  "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap",
  { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } }
);
const css = await cssResp.text();
const fontUrls = [...css.matchAll(/url\(([^)]+)\)/g)].map(m => m[1]);

const [regular, bold] = await Promise.all(
  fontUrls.slice(0, 2).map(url => fetch(url).then(r => r.arrayBuffer()))
);

const h = (type, props, ...children) => ({
  type,
  props: {
    ...props,
    children: children.length === 1 ? children[0] : children.length ? children : undefined,
  },
});

const tags = ["Swift", "Python", "TypeScript", "Rust"];

const element = h("div", {
  style: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "80px",
    background: "#0b0d14",
    fontFamily: "Space Grotesk",
  },
  },
  h("div", { style: { display: "flex", flexDirection: "column" } },
    h("div", {
      style: {
        fontSize: "64px",
        fontWeight: 700,
        color: "#e8eaf0",
        letterSpacing: "-0.03em",
      },
    }, "Brenno Ferrari"),
    h("div", {
      style: {
        fontSize: "28px",
        color: "#6ec4e8",
        fontWeight: 400,
        marginTop: "12px",
      },
    }, "Senior iOS Engineer at Trade Republic"),
    h("div", {
      style: {
        fontSize: "22px",
        color: "#a0a8be",
        fontWeight: 400,
        marginTop: "8px",
      },
    }, "Berlin, Germany"),
  ),
  h("div", {
    style: {
      display: "flex",
      marginTop: "40px",
      gap: "16px",
    },
  },
    ...tags.map(tag =>
      h("div", {
        style: {
          fontSize: "18px",
          color: "#a0a8be",
          padding: "6px 16px",
          borderRadius: "8px",
          border: "1px solid rgba(140, 150, 180, 0.25)",
          background: "rgba(140, 150, 180, 0.08)",
        },
      }, tag)
    ),
  ),
  h("div", {
    style: {
      display: "flex",
      marginTop: "auto",
      fontSize: "20px",
      color: "#a0a8be",
      opacity: 0.6,
    },
  }, "brennoferrari.com"),
);

const svg = await satori(element, {
  width: 1200,
  height: 630,
  fonts: [
    { name: "Space Grotesk", data: regular, weight: 400, style: "normal" },
    { name: "Space Grotesk", data: bold, weight: 700, style: "normal" },
  ],
});

const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: 1200 },
});

const png = resvg.render().asPng();
const outPath = join(__dirname, "..", "public", "og-image.png");
writeFileSync(outPath, png);
console.log(`OG image written to ${outPath} (${png.length} bytes)`);
