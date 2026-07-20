import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <Link className="brand" href="/">FLEXI<small>INTEGRATED</small></Link>
      <span className="copyright">© 2026 Flexi Integrated (M) Sdn. Bhd.</span>
    </footer>
  );
}
