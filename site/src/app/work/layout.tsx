import type { ReactNode } from "react";
import "../case-studies/case-studies.css";
import "./work.css";

// The work index shares the case studies look (scoped under .cs-root) plus a few card styles of its own.
export default function WorkLayout({ children }: { children: ReactNode }) {
  return <div className="cs-root">{children}</div>;
}
