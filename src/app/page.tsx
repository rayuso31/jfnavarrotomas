import { HeroSection } from "@/components/landing/HeroSection";
import { FirmSection } from "@/components/landing/FirmSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { ScopeSection } from "@/components/landing/ScopeSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { FAQSection } from "@/components/landing/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-50 selection:bg-gold-500 selection:text-white">
      <HeroSection />
      <FirmSection />
      <ServicesSection />
      <ScopeSection />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
