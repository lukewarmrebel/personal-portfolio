import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import InfoPanel from "@/components/InfoPanel";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Full-width hero */}
      <Hero />

      {/* Two-column layout: main scroll + sticky sidebar */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Main scrollable content */}
          <div className="flex-1 min-w-0 space-y-0">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </div>

          {/* Sticky sidebar */}
          <aside className="w-full lg:w-80 xl:w-88 shrink-0 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
            <InfoPanel />
          </aside>

        </div>
      </div>
    </>
  );
}
