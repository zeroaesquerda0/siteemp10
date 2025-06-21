import type { Metadata } from "next";
import WebDevelopment from "@/app/services/components/web-development/page";
import MobileApps from "@/app/services/components/mobile-apps/page";
import TechConsulting from "@/app/services/components/tech-consulting/page";
import TechnicalSupport from "@/app/services/components/technical-support/page";
import { BackToTop } from "@/components/ui/back-to-top";

export const metadata: Metadata = {
  title: "Nossos Serviços - PrimeCode Solutions",
  description: "Conheça nossos serviços especializados: Desenvolvimento Web, Aplicativos Mobile, Consultoria Tech e Suporte Técnico. Soluções personalizadas para o seu negócio.",
  keywords: "desenvolvimento web, aplicativos mobile, consultoria tecnológica, suporte técnico, PrimeCode Solutions",
  openGraph: {
    title: "Nossos Serviços - PrimeCode Solutions",
    description: "Soluções tecnológicas completas para impulsionar seu negócio",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-neutral-950 dark:to-purple-950/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Oferecemos soluções tecnológicas completas para impulsionar seu negócio com inovação e qualidade.
          </p>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32">
        <WebDevelopment />
        <MobileApps />
        <TechConsulting />
        <TechnicalSupport />
      </div>
      
      <BackToTop />
    </main>
  );
}