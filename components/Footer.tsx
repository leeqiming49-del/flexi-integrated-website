import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="footer">
      <Link className="brand" href="/" aria-label="Flexi Integrated home"><BrandLogo /></Link>
      <span className="copyright">© 2026 Flexi Integrated (M) Sdn. Bhd.</span>
    </footer>
  );
}
