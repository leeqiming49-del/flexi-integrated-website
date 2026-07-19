"use client";

import { useState } from "react";
import type { ProjectGallery as GalleryData } from "@/data/projects";
import Image from "next/image";

export function ProjectGallery({ gallery, brand }: { gallery: GalleryData; brand: string }) {
  const [selected, setSelected] = useState(gallery.images[0]);
  return (
    <section className="gallery-section" aria-labelledby={`${brand}-${gallery.title}`}>
      <div className="gallery-heading"><p className="eyebrow">Project process</p><h2 id={`${brand}-${gallery.title}`}>{gallery.title}</h2></div>
      <div className="gallery-main"><Image unoptimized key={selected} src={selected} width={1600} height={900} sizes="(max-width: 600px) 100vw, 90vw" alt={`${brand} project ${gallery.title.toLowerCase()} view`} /></div>
      <div className="thumbnail-row" aria-label={`${gallery.title} image selection`}>
        {gallery.images.map((image, index) => <button className={selected === image ? "active" : ""} type="button" key={image} onClick={() => setSelected(image)} aria-label={`Show ${gallery.title.toLowerCase()} image ${index + 1}`} aria-pressed={selected === image}><Image unoptimized src={image} width={300} height={200} sizes="180px" alt="" /></button>)}
      </div>
    </section>
  );
}
