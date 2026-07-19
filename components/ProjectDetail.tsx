import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ProjectGallery } from "./ProjectGallery";
import Link from "next/link";

export function ProjectDetail({ project }: { project: Project }) {
  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;
  return (
    <main className="inner-page">
      <Navbar />
      <header className="project-header"><p className="eyebrow">Selected work · {project.brand}</p><h1>{project.title}</h1><p className="project-lead">{project.description}</p><div className="project-meta"><p><span>Category</span>{project.category}</p><p><span>Location</span>{project.location}</p></div></header>
      <section className="project-overview"><div><p className="eyebrow">Project Overview</p><h2>Considered delivery,<br />from site to finish.</h2></div><div className="overview-details"><dl><div><dt>Client / Brand</dt><dd>{project.brand}</dd></div><div><dt>Project Type</dt><dd>{project.category}</dd></div><div><dt>Location</dt><dd>{project.location}</dd></div></dl><p>{project.summary}</p></div></section>
      <section className="project-scope"><div><p className="eyebrow">Scope of Work</p><h2>What Flexi handled</h2></div><ol>{project.scope.map((item, scopeIndex) => <li key={item}><span>0{scopeIndex + 1}</span>{item}</li>)}</ol></section>
      {project.galleries.map((gallery) => <ProjectGallery gallery={gallery} brand={project.brand} key={gallery.title} />)}
      <section className="project-outcome"><p className="eyebrow">Project Outcome</p><p>{project.outcome}</p></section>
      <nav className="project-pager" aria-label="Project navigation"><div>{previous && <Link href={`/projects/${previous.slug}`}>← Previous Project<br /><strong>{previous.brand}</strong></Link>}</div><Link className="back-link" href="/projects">Back to Projects</Link><div>{next && <Link href={`/projects/${next.slug}`}>Next Project →<br /><strong>{next.brand}</strong></Link>}</div></nav>
      <Footer />
    </main>
  );
}
