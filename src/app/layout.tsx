import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";
import { WebVitals } from "@/components/web-vitals";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brenno Ferrari — Senior iOS Engineer | Berlin",
  description:
    "Brenno Ferrari is a Senior iOS Engineer at Trade Republic in Berlin. Over a decade building mobile software across fintech, cybersecurity, e-commerce, fitness, real estate, energy, and financial regulation. Creator of Obsidian Mind (obsidian-mind, 2,000+ GitHub stars) — persistent memory for Claude Code, Codex CLI, and Gemini CLI — and Weave (PackWeave), an MCP pack manager.",
  authors: [{ name: "Brenno Ferrari", url: "https://brennoferrari.com" }],
  creator: "Brenno Ferrari",
  metadataBase: new URL("https://brennoferrari.com"),
  alternates: {
    canonical: "https://brennoferrari.com",
  },
  openGraph: {
    title: "Brenno Ferrari — Senior iOS Engineer",
    description:
      "Senior iOS Engineer at Trade Republic. Creator of Obsidian Mind (obsidian-mind) and Weave (PackWeave). Over a decade building mobile software across fintech, cybersecurity, e-commerce, fitness, real estate, energy, and financial regulation.",
    type: "website",
    locale: "en_US",
    url: "https://brennoferrari.com",
    siteName: "Brenno Ferrari",
    images: [
      {
        url: "https://brennoferrari.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brenno Ferrari — Senior iOS Engineer at Trade Republic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brenno Ferrari — Senior iOS Engineer",
    description:
      "Senior iOS Engineer at Trade Republic. Creator of Obsidian Mind (obsidian-mind) and Weave (PackWeave).",
    creator: "@brennoferrari",
    images: ["https://brennoferrari.com/og-image.png"],
  },
  keywords: [
    "Brenno Ferrari",
    "brennoferrari",
    "breferrari",
    "Senior iOS Engineer",
    "Trade Republic",
    "NordVPN",
    "Nord Security",
    "Wayfair",
    "Accenture",
    "BlackBerry",
    "Berlin",
    "Swift",
    "Obsidian Mind",
    "obsidian-mind",
    "ObsidianMind",
    "ShardMind",
    "Weave",
    "weave",
    "PackWeave",
    "MCP",
    "Claude Code",
    "Codex CLI",
    "Gemini CLI",
    "AI developer tools",
    "mobile software engineer",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f6fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d14" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personId = "https://brennoferrari.com/#person";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Brenno Ferrari",
        givenName: "Brenno",
        familyName: "Ferrari",
        url: "https://brennoferrari.com",
        image: "https://brennoferrari.com/og-image.png",
        description:
          "Senior iOS Engineer at Trade Republic in Berlin. Over a decade building mobile software across fintech, cybersecurity, e-commerce, fitness, real estate, energy, and financial regulation. Creator of Obsidian Mind and Weave.",
        jobTitle: "Senior iOS Engineer",
        worksFor: {
          "@type": "Organization",
          name: "Trade Republic",
          url: "https://traderepublic.com",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Berlin",
          addressCountry: "DE",
        },
        sameAs: [
          "https://github.com/breferrari",
          "https://linkedin.com/in/brennoferrari",
          "https://x.com/brennoferrari",
          "https://instagram.com/breferrari",
        ],
        knowsAbout: [
          "iOS Development",
          "Swift",
          "macOS Development",
          "Mobile Software Engineering",
          "Developer Tooling",
          "AI Coding Assistants",
          "Claude Code",
          "Codex CLI",
          "Gemini CLI",
          "Obsidian Mind",
          "obsidian-mind",
          "ObsidianMind",
          "ShardMind",
          "Weave",
          "PackWeave",
          "Model Context Protocol",
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Pontifícia Universidade Católica do Rio de Janeiro",
          url: "https://www.puc-rio.br",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://brennoferrari.com/#obsidian-mind",
        name: "Obsidian Mind",
        url: "https://github.com/breferrari/obsidian-mind",
        codeRepository: "https://github.com/breferrari/obsidian-mind",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Cross-platform",
        programmingLanguage: ["TypeScript", "JavaScript"],
        author: { "@id": personId },
        creator: { "@id": personId },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        description:
          "An Obsidian vault that gives AI coding agents persistent memory across Claude Code, Codex CLI, and Gemini CLI. Turns a vault into a structured, version-controlled external brain that persists across coding-assistant conversations. Lifecycle hooks, a data-driven message classifier with CJK-aware regex, isolated subagents for heavy operations, QMD semantic search, self-healing graph rules, and migration tooling.",
        keywords: "Obsidian, Claude Code, Codex CLI, Gemini CLI, AI memory, MCP, developer tooling",
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://brennoferrari.com/#shardmind",
        name: "ShardMind",
        url: "https://github.com/breferrari/shardmind",
        codeRepository: "https://github.com/breferrari/shardmind",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Cross-platform",
        programmingLanguage: "TypeScript",
        softwareVersion: "0.1.0-pre",
        author: { "@id": personId },
        creator: { "@id": personId },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/PreOrder",
        },
        description:
          "A package manager for Obsidian vault templates. Solves the upgrade problem that scaffolding tools (Cookiecutter, Yeoman, Backstage) gave up on, using a three-state model adapted from Terraform and chezmoi: hash-based drift detection, cached templates for three-way merge, and ownership-aware file handling. Built in TypeScript on Pastel and Ink.",
        keywords: "Obsidian, package manager, template engine, scaffolding, three-way merge, drift detection, TUI, CLI, Ink, Pastel",
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://brennoferrari.com/#weave",
        name: "Weave",
        alternateName: "PackWeave",
        url: "https://github.com/breferrari/weave",
        codeRepository: "https://github.com/breferrari/weave",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Cross-platform",
        programmingLanguage: "Rust",
        author: { "@id": personId },
        creator: { "@id": personId },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        description:
          "A Model Context Protocol pack manager for AI coding assistants. Install, update, and share MCP server configurations across Claude Code, Codex, and Gemini CLI with a single command. Built in Rust for performance and portability.",
        keywords: "MCP, Model Context Protocol, Claude Code, Codex, Gemini CLI, Rust CLI",
      },
    ],
  };

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">{`(function(){try{var t=localStorage.getItem('theme');if(t==='light'){return}document.documentElement.classList.add('dark')}catch(e){document.documentElement.classList.add('dark')}})()`}</Script>
        <ThemeProvider>
        <svg style={{ display: "none" }} aria-hidden="true">
          <filter id="container-glass" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise" />
            <feGaussianBlur in="noise" stdDeviation="0.02" result="blur" />
            <feDisplacementMap in="SourceGraphic" in2="blur" scale="77" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="btn-glass" primitiveUnits="objectBoundingBox">
            <feImage href="/glass-map.png" x="0" y="0" width="1" height="1" result="map" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.02" result="blur" />
            <feDisplacementMap in="blur" in2="map" scale="1" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
        {children}
        </ThemeProvider>
      </body>
      {gaId && (
        <>
          <GoogleAnalytics gaId={gaId} />
          <WebVitals />
        </>
      )}
    </html>
  );
}
