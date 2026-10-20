import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, readCaseStudyHtml } from "@/lib/caseStudies";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  return c ? { title: `${c.title} · Case study · Pranav Thatavarti`, description: c.description } : {};
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) notFound();
  return <div dangerouslySetInnerHTML={{ __html: readCaseStudyHtml(c.slug) }} />;
}
