import { Navbar } from "./Navbar";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero" id="top">
      <Navbar />
      <div className="hero-copy">
        <h1>Built on Trust</h1>
        <p className="hero-subtitle">Commercial Interior<br />Design &amp; Build Since 1997</p>
        <Link className="outline-button arrow-link" href="/projects">View Projects</Link>
      </div>
      <a className="scroll-cue" href="#clients">Scroll down</a>
    </section>
  );
}
