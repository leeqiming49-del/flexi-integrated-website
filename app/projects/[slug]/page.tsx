import { ProjectDetail } from "@/components/ProjectDetail";
import { getProject, projects } from "@/data/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  return { title: project ? `${project.title} | Flexi Integrated` : "Project | Flexi Integrated", description: project?.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
