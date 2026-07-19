import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { projects } from "@/data/projects";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Projects | Flexi Integrated", description: "Selected commercial interior, retail fit-out, design and build projects by Flexi Integrated." };

export default function ProjectsPage() {
  return (
    <main className="inner-page">
      <Navbar />
      <header className="projects-hero"><p className="eyebrow">Selected Works</p><h1>Projects</h1><p>Flexi delivers commercial interiors, retail fit-outs, design and build, and construction projects with a practical focus on quality, function and dependable delivery.</p></header>
      <section className="project-list" aria-label="Project list">
        {projects.map((project, index) => <article className="project-card" key={project.slug}>
          <div className="project-index">0{index + 1}</div>
          <Link className="project-cover" href={`/projects/${project.slug}`}><Image unoptimized src={project.coverImage} width={1200} height={1500} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" alt={`${project.brand} project placeholder`} /></Link>
          <div className="project-summary"><h2>{project.brand}</h2><p className="card-category">{project.category}</p><dl><div><dt>Scope</dt><dd>{project.scope.slice(0, 3).join(", ")}</dd></div><div><dt>Location</dt><dd>{project.location}</dd></div></dl></div>
          <Link className="arrow-link" href={`/projects/${project.slug}`}>View Project</Link>
        </article>)}
      </section>
      <Footer />
    </main>
  );
}
