import { personal } from "@/data/portfolio";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row gap-3 justify-between text-sm text-zinc-500">
        <span>Pranav Thatavarti · Product Manager · Hyderabad</span>
        <span className="flex flex-wrap gap-4">
          <a href="/" className="hover:text-zinc-900">Home</a>
          <a href="/projects" className="hover:text-zinc-900">Projects</a>
          <a href="/case-studies" className="hover:text-zinc-900">Case studies</a>
          <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900">Resume</a>
        </span>
      </div>
    </footer>
  );
}
