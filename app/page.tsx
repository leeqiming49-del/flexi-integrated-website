import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LogoRiver } from "@/components/LogoRiver";
import { TrustSection } from "@/components/TrustSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoRiver />
      <FeaturedProjects />
      <AboutSection />
      <TrustSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
