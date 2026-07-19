"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/#top" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(pathname !== "/");

  useEffect(() => {
    const update = () => setScrolled(pathname !== "/" || window.scrollY > 50);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`} aria-label="Primary navigation">
        <Link className="brand" href="/#top" aria-label="Flexi Integrated home">FLEXI<small>INTEGRATED</small></Link>
        <div className="desktop-nav">{links.map((link) => <Link key={link.label} href={link.href}>{link.label}</Link>)}</div>
        <button className="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}><i /><i /><i /></button>
      </nav>
      <button className={`drawer-overlay ${open ? "is-open" : ""}`} aria-label="Close navigation menu" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} />
      <aside className={`mobile-drawer ${open ? "is-open" : ""}`} id="mobile-menu" aria-hidden={!open}>
        <div className="drawer-top"><span className="brand dark-brand">FLEXI<small>INTEGRATED</small></span><button className="drawer-close" type="button" aria-label="Close navigation menu" onClick={() => setOpen(false)}>×</button></div>
        <nav aria-label="Mobile navigation">{links.map((link, index) => <Link key={link.label} href={link.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{link.label}</Link>)}</nav>
        <p>Commercial Interior<br />Design &amp; Build Since 1997</p>
      </aside>
    </>
  );
}
