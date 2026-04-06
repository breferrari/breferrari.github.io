import { ScrollHue } from "@/components/scroll-hue";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Speaking } from "@/components/sections/speaking";
import { Events } from "@/components/sections/events";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <ScrollHue />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Speaking />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
