import type { ReactNode } from "react";
import "./case-studies.css";

// The case study pages wrap themselves in .cs-root, so these styles never leak into the rest of the site.
export default function CaseStudiesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
