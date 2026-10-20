import type { Metadata } from "next";
import { readCaseStudyHtml } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies · Pranav Thatavarti",
  description:
    "Four self-initiated AI product case studies: healthcare prior auth, insurance claims, payment scams and quick commerce, across the US and India.",
};

export default function CaseStudiesIndex() {
  return <div dangerouslySetInnerHTML={{ __html: readCaseStudyHtml("index") }} />;
}
