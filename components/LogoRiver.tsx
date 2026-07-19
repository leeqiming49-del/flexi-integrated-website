const clients = [["HUAWEI", "huawei"], ["HONOR", ""], ["mi", "mi"], ["DJI", ""], ["swatch", ""], ["oppo", ""]];

export function LogoRiver() {
  return (
    <section className="logo-river" id="clients" aria-label="Selected clients">
      <p className="river-label">Trusted by</p>
      <div className="river-track">
        {[0, 1].map((set) => <div className="river-set" key={set} aria-hidden={set === 1}>{clients.map(([name, className]) => <span className={`client-logo ${className}`} key={`${set}-${name}`}>{name}</span>)}</div>)}
      </div>
    </section>
  );
}
