import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import FloatingDock from "@/components/FloatingDock";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <About />
      <Experience />
      <Skills />
      <Education />
      <footer className="py-6 text-center text-xs text-zinc-400 border-t border-zinc-100">
        © {new Date().getFullYear()} Pranav Thatavarti · Built with Next.js &amp; Tailwind CSS
      </footer>
      <FloatingDock />
    </>
  );
}
