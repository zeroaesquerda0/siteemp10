"use client";

import { motion } from "framer-motion";
import { IconCode, IconDeviceMobile, IconBulb, IconHeadset, IconCheck, IconArrowRight, IconX, IconStar } from "@tabler/icons-react";
import { BackToTop } from "@/components/ui/back-to-top";
import { useState } from "react";

export default function OrcamentoPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const services = [
    {
      id: "web-dev",
      title: "Desenvolvimento Web",
      icon: IconCode,
      description: "Sites e sistemas web modernos e responsivos",
      benefits: [
        "Design responsivo para todos os dispositivos",
        "SEO otimizado para melhor posicionamento",
        "Performance e velocidade de carregamento"
      ],
      link: "/services/components/web-development"
    },
    {
      id: "mobile-apps",
      title: "Aplicativos Mobile",
      icon: IconDeviceMobile,
      description: "Apps nativos e híbridos para iOS e Android",
      benefits: [
        "Interface nativa para cada plataforma",
        "Integração com APIs e serviços externos",
        "Publicação nas lojas de aplicativos"
      ],
      link: "/services/components/mobile-apps"
    },
    {
      id: "consulting",
      title: "Consultoria Tecnológica",
      icon: IconBulb,
      description: "Estratégias e orientação para transformação digital",
      benefits: [
        "Análise completa da infraestrutura atual",
        "Roadmap personalizado de melhorias",
        "Acompanhamento na implementação"
      ],
      link: "/services/components/tech-consulting"
    },
    {
      id: "support",
      title: "Suporte Técnico",
      icon: IconHeadset,
      description: "Manutenção e suporte contínuo para seus sistemas",
      benefits: [
        "Monitoramento 24/7 dos sistemas",
        "Backup automático e segurança",
        "Atualizações e correções regulares"
      ],
      link: "/services/components/technical-support"
    }
  ];

  const plans = [
    {
      id: "basic",
      name: "Básico",
      price: "R$ 89,90",
      period: "projeto",
      description: "Ideal para pequenos projetos e startups",
      features: [
        "Site institucional responsivo",
        "Até 5 páginas",
        "Formulário de contato",
        "SEO básico",
        "Hospedagem por 1 ano",
        "Suporte por 30 dias"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "pro",
      name: "Profissional",
      price: "R$ 129,90",
      period: "projeto",
      description: "Perfeito para empresas em crescimento",
      features: [
        "Sistema web completo",
        "Painel administrativo",
        "Integração com APIs",
        "SEO avançado",
        "Hospedagem por 1 ano",
        "Suporte por 90 dias",
        "Treinamento da equipe",
        "Relatórios e analytics"
      ],
      popular: true,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "R$ 199,90",
      period: "projeto",
      description: "Solução completa para grandes empresas",
      features: [
        "Aplicação web/mobile completa",
        "Arquitetura escalável",
        "Integrações complexas",
        "Segurança avançada",
        "Hospedagem premium",
        "Suporte por 1 ano",
        "Consultoria estratégica",
        "SLA garantido",
        "Equipe dedicada"
      ],
      popular: false,
      color: "from-orange-500 to-red-600"
    }
  ];

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    setShowModal(true);
    
    // Mova para o topo da página
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleModalConfirm = () => {
    const plan = plans.find(p => p.id === selectedPlan);
    if (plan) {
      // Redireciona para a página de contato com o plano selecionado
      window.location.href = `/contato?plan=${plan.id}`;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      {/* Modal */}
      {showModal && selectedPlan && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-neutral-800 rounded-2xl p-8 max-w-md w-full relative"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
            >
              <IconX className="h-6 w-6" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                Plano Selecionado!
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                Você escolheu o plano <strong>{plans.find(p => p.id === selectedPlan)?.name}</strong>. 
                Vamos entrar em contato para finalizar os detalhes.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-200"
                >
                  Voltar
                </button>
                <button
                  onClick={handleModalConfirm}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200"
                >
                  Continuar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-green-950/20 dark:via-neutral-950 dark:to-blue-950/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Solicite seu Orçamento
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
              Escolha o serviço ideal para seu projeto e receba uma proposta personalizada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Soluções completas para transformar sua presença digital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start text-sm text-neutral-600 dark:text-neutral-300">
                        <IconCheck className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                  >
                    Ver detalhes
                    <IconArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-neutral-100 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Planos e Preços
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Escolha o plano que melhor se adapta às suas necessidades
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative p-8 bg-white dark:bg-neutral-800 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-purple-300 dark:border-purple-600 scale-105' 
                    : 'border-neutral-200 dark:border-neutral-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <IconStar className="h-4 w-4" />
                      <span>Mais Popular</span>
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-neutral-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-400 ml-2">
                      /{plan.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutral-600 dark:text-neutral-300">
                      <IconCheck className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r ${plan.color} text-white hover:shadow-lg hover:-translate-y-1`}
                >
                  Selecionar Plano
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    {/* Seção de Orçamento Personalizado */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de algo personalizado?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Cada projeto é único. Vamos criar uma solução sob medida para suas necessidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contato"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
              >
                Solicitar Orçamento Personalizado
                <IconArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:+5582999532934"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Ligar Agora
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </main>
  );
}