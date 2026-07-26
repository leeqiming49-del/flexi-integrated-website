import Image from "next/image";

const clients = [
  { name: "Huawei", src: "/images/logos/huawei.svg" },
  { name: "Honor", src: "/images/logos/honor.svg" },
  { name: "Xiaomi", src: "/images/logos/xiaomi.png" },
  { name: "DJI", src: "/images/logos/dji.svg" },
  { name: "Swatch", src: "/images/logos/swatch.png" },
];

export function LogoRiver() {
  return (
    <section className="logo-river" id="clients" aria-label="Selected clients">
      <p className="river-label">Trusted by</p>
      <div className="river-track">
        {[0, 1].map((set) => <div className="river-set" key={set} aria-hidden={set === 1}>{clients.map((client) => <span className="client-logo" key={`${set}-${client.name}`}><Image unoptimized src={client.src} width={150} height={44} sizes="150px" alt={set === 0 ? `${client.name} logo` : ""} /></span>)}</div>)}
      </div>
    </section>
  );
}
