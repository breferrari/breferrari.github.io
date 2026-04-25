import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";
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
    "Brenno Ferrari is a Senior iOS Engineer at Trade Republic in Berlin. Over a decade building mobile software across fintech, cybersecurity, e-commerce, fitness, real estate, energy, and financial regulation. Creator of Obsidian Mind (obsidian-mind, 1,200+ GitHub stars) and Weave (PackWeave), an MCP pack manager.",
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
    "Weave",
    "weave",
    "PackWeave",
    "MCP",
    "Claude Code",
    "AI developer tools",
    "mobile software engineer",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Brenno Ferrari",
    url: "https://brennoferrari.com",
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
      "Obsidian Mind",
      "obsidian-mind",
      "ObsidianMind",
      "Weave",
      "PackWeave",
      "Model Context Protocol",
    ],
    affiliation: [
      {
        "@type": "CollegeOrUniversity",
        name: "Pontifícia Universidade Católica do Rio de Janeiro",
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
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
