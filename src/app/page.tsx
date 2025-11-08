import { HeroSection } from "@/src/components/organisms/hero-section";
import { AboutSection } from "@/src/components/organisms/about-section";
import { MenuSection } from "@/src/components/organisms/menu-section";
import { CTASection } from "@/src/components/organisms/cta-section";
import { Footer } from "@/src/components/organisms/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <CTASection />
      <Footer />
    </>
  );
}
