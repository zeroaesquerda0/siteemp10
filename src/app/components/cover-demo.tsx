import React from "react";
import { Cover } from "@/components/ui/cover";
import { CTAButton } from "@/app/components/cta/CTAButton";

export function CoverDemo() {
  return (
    <div>
     <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
       Soluções rápidas como um <br /> 
       <Cover>🚀</Cover> para o seu negócio
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        A <strong>PrimeCode Solutions</strong> é uma empresa de tecnologia que oferece soluções personalizadas para o seu negócio. Nossa equipe é especializada em desenvolvimento de software, consultoria e suporte técnico. Estamos aqui para ajudar você a alcançar seus objetivos com eficiência e inovação.
      </p>
 
      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <CTAButton
          id="hero-contact-cta"
          type="primary"
          action="modal"
          target="contact"
          section="hero"
          variant="gradient"
          size="lg"
          urgencyTag={true}
        >
          Entrar em contato
        </CTAButton>
        
        <CTAButton
          id="hero-about-cta"
          type="secondary"
          action="external"
          target="/empresa#sobre-nos"
          section="hero"
          variant="outline"
          size="lg"
          label="Sobre nós"
        >
          Sobre nós
        </CTAButton>
      </div>
    </div>
  );
}