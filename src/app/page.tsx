import { AnimatedTestimonialsDemo } from "./components/animated-testimonials-demo";
import HeroParallaxDemo from "./components/hero-demo";
import { FeaturesSectionDemo } from "./components/cards-demo";
import { CarouselDemo } from "./components/carousel-demo";
import { CTASection } from "./components/cta/CTASection";

export default function Home() {
  return (
    <main className="bg-[#0B0B0F]">
      <HeroParallaxDemo />
      <FeaturesSectionDemo />
      <CarouselDemo />
      
      {/* Seção de CTA com Temporizador */}
      <CTASection 
        title="Transforme sua Ideia em Realidade Digital"
        subtitle="Aproveite nossa oferta especial e receba 20% de desconto no primeiro projeto"
        showTimer={true}
        section="home-cta"
      />
      
      <AnimatedTestimonialsDemo />
    </main>
  );
}