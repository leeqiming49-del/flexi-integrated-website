import Image from "next/image";

const clients = [
  { name: "Anker", src: "/images/logos/anker.webp" },
  { name: "Blackmoges", src: "/images/logos/blackmoges.png" },
  { name: "Citizen", src: "/images/logos/citizen.png" },
  { name: "Dermatix", src: "/images/logos/dermatix.jpg" },
  { name: "DJI", src: "/images/logos/dji.svg" },
  { name: "DLap Drift Kart", src: "/images/logos/dlap-drift-kart.png" },
  { name: "Elfbar", src: "/images/logos/elfbar.png" },
  { name: "G2000", src: "/images/logos/g2000.png" },
  { name: "Honor", src: "/images/logos/honor.svg" },
  { name: "Huawei", src: "/images/logos/huawei.svg" },
  { name: "Kfour Cambodia", src: "/images/logos/kfour-cambodia.png" },
  { name: "Morelli's Gelato", src: "/images/logos/morellis-gelato.jpg" },
  { name: "Nong Geng Ji", src: "/images/logos/nong-geng-ji.jpg" },
  { name: "Philips", src: "/images/logos/philips.png" },
  { name: "Samsung", src: "/images/logos/samsung.png" },
  { name: "Swatch", src: "/images/logos/swatch.png" },
  { name: "Watsons", src: "/images/logos/watsons.png" },
  { name: "Xiaomi", src: "/images/logos/xiaomi.png" },
];

export function LogoRiver() {
  return (
    <section className="logo-river" id="clients" aria-label="Selected clients">
      <p className="river-label">Trusted by</p>
      <div className="river-track">
        {[0, 1].map((set) => <div className="river-set" key={set} aria-hidden={set === 1}>{clients.map((client) => <span className="client-logo" key={`${set}-${client.name}`}><Image unoptimized loading="eager" src={client.src} width={150} height={40} sizes="132px" alt={set === 0 ? `${client.name} logo` : ""} /></span>)}</div>)}
      </div>
    </section>
  );
}
