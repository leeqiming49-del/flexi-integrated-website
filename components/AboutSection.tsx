const credentials = ["CIDB Registered", "Own Carpentry Factory", "Design & Build Specialist", "End-to-End Project Delivery"];

export function AboutSection() {
  return (
    <section className="about-grid" id="about">
      <div className="about-image" role="img" aria-label="Flexi Integrated factory exterior" />
      <div className="about-copy">
        <p className="eyebrow">About Flexi</p><h2>Since 1997</h2>
        <p>Flexi Integrated is a commercial interior design and build company specialising in retail and workplace fit-outs. We combine design thinking, technical knowledge and in-house craftsmanship to deliver functional, practical and high-quality spaces for businesses across Malaysia.</p>
        <ol className="credentials">{credentials.map((label, index) => <li className="credential" key={label}><span>0{index + 1}</span>{label}</li>)}</ol>
      </div>
    </section>
  );
}
