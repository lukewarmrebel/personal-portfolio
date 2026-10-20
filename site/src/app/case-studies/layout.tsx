import type { ReactNode } from "react";
import "./case-studies.css";

// Everything in this section lives under .cs-root, so its styles never leak into the rest of the site.
export default function CaseStudiesLayout({ children }: { children: ReactNode }) {
  return <div className="cs-root">{children}</div>;
}
