import Image from "next/image";

export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return (
    <Image
      className="brand-logo"
      unoptimized
      priority={priority}
      src="/brand/flexi-logo-official.png"
      width={928}
      height={256}
      sizes="(max-width: 600px) 112px, 145px"
      alt="Flexi Integrated"
    />
  );
}
