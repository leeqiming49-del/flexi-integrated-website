import Link from "next/link";

export function FeaturedProjects() {
  return (
    <section className="featured" id="projects">
      <div className="featured-info"><p className="eyebrow">Featured project</p><h2>Huawei Project</h2><p>Huawei · Retail Interior Fit-Out</p><p>Malaysia</p></div>
      <Link className="arrow-link" href="/projects/huawei">View Project</Link>
    </section>
  );
}
