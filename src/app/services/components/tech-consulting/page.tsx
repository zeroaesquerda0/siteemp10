"use client";
import { motion } from "framer-motion";
import { IconBulb, IconChartBar, IconUsers, IconTarget, IconRocket, IconShieldCheck, IconTrendingUp, IconCpu, IconCheck, IconArrowRight } from "@tabler/icons-react";
import { BackToTop } from "@/components/ui/back-to-top";

export default function TechConsultingPage() {
  const services = [
    {
      title: "Análise Estratégica",
      description: "Avaliação completa da infraestrutura tecnológica atual e identificação de oportunidades de melhoria.",
      icon: IconChartBar,
      features: ["Auditoria tecnológica", "Análise de processos", "Identificação de gargalos", "Roadmap de melhorias"]
    },
    {
      title: "Transformação Digital",
      description: "Planejamento e execução de processos de digitalização para modernizar operações empresariais.",
      icon: IconRocket,
      features: ["Estratégia digital", "Automação de processos", "Integração de sistemas", "Change management"]
    },
    {
      title: "Arquitetura de Sistemas",
      description: "Design de arquiteturas escaláveis e robustas para suportar o crescimento do seu negócio.",
      icon: IconCpu,
      features: ["Arquitetura cloud", "Microserviços", "APIs e integrações", "Escalabilidade"]
    },
    {
      title: "Gestão de Projetos",
      description: "Coordenação especializada de projetos tecnológicos com metodologias ágeis e eficientes.",
      icon: IconUsers,
      features: ["Metodologias ágeis", "Gestão de equipes", "Controle de qualidade", "Entrega contínua"]
    }
  ];

  const benefits = [
    { icon: IconTarget, title: "Foco em Resultados", desc: "Estratégias alinhadas aos objetivos de negócio" },
    { icon: IconShieldCheck, title: "Segurança Garantida", desc: "Implementação de melhores práticas de segurança" },
    { icon: IconTrendingUp, title: "ROI Comprovado", desc: "Retorno sobre investimento mensurável" },
    { icon: IconBulb, title: "Inovação Contínua", desc: "Soluções tecnológicas de vanguarda" }
  ];

  const plans = [
    {
      name: "Consultoria Básica",
      price: "R$ 199,90",
      period: "/projeto",
      features: [
        "Análise inicial (40h)",
        "Relatório detalhado",
        "Recomendações estratégicas",
        "1 reunião de apresentação"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Consultoria Avançada",
      price: "R$ 149.90",
      period: "/mês",
      features: [
        "Consultoria contínua",
        "Acompanhamento semanal",
        "Implementação assistida",
        "Suporte prioritário",
        "Relatórios mensais"
      ],
      color: "from-purple-500 to-purple-600",
      popular: true
    },
    {
      name: "Transformação Completa",
      price: "R$ 399,90",
      period: "/projeto",
      features: [
        "Projeto de transformação",
        "Equipe dedicada",
        "Implementação completa",
        "Treinamento de equipes",
        "Suporte pós-implementação",
        "Garantia de resultados"
      ],
      color: "from-orange-500 to-red-600"
    }
  ];

  const methodology = [
    { phase: "Diagnóstico", desc: "Análise detalhada do cenário atual", icon: "🔍", duration: "1-2 semanas" },
    { phase: "Estratégia", desc: "Desenvolvimento de plano personalizado", icon: "📋", duration: "2-3 semanas" },
    { phase: "Implementação", desc: "Execução com acompanhamento contínuo", icon: "🚀", duration: "Variável" }
  ];

  const caseStudies = [
    {
      company: "TechCorp",
      challenge: "Modernização de sistemas legados",
      solution: "Migração para arquitetura cloud",
      result: "50% redução de custos operacionais"
    },
    {
      company: "RetailPlus",
      challenge: "Integração de canais de venda",
      solution: "Plataforma omnichannel",
      result: "300% aumento nas vendas online"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-950/20 dark:via-neutral-950 dark:to-pink-950/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6">
              <IconBulb className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Consultoria Tecnológica
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
              Orientamos sua empresa na jornada de transformação digital com estratégias personalizadas e expertise técnica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Agendar Consultoria
                <IconArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300">
                Ver Cases de Sucesso
              </button>
            </div>
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
              Nossos Serviços de Consultoria
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Soluções estratégicas para acelerar sua transformação digital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-neutral-600 dark:text-neutral-300">
                            <IconCheck className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Por que Escolher Nossa Consultoria?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-100 dark:border-purple-800"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
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
              Nossa Metodologia
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Processo estruturado para garantir resultados efetivos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodology.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                  {item.phase}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  {item.desc}
                </p>
                <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                  {item.duration}
                </span>
              </motion.div>
            ))}
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
              Planos de Consultoria
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Escolha o plano ideal para suas necessidades
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
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
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-neutral-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-400 ml-1">
                      {plan.period}
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
                
                <button className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r ${plan.color} text-white hover:shadow-lg hover:-translate-y-1`}>
                  Escolher Plano
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
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
              Cases de Sucesso
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Resultados reais de projetos de consultoria
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700"
              >
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                  {caseStudy.company}
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Desafio:</span>
                    <p className="text-neutral-600 dark:text-neutral-300">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Solução:</span>
                    <p className="text-neutral-600 dark:text-neutral-300">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">Resultado:</span>
                    <p className="text-neutral-600 dark:text-neutral-300 font-semibold">{caseStudy.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Acelere sua transformação digital
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Vamos juntos criar a estratégia tecnológica ideal para seu negócio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300 hover:shadow-lg">
                Agendar Consultoria Gratuita
                <IconArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300">
                Falar com Especialista
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </main>
  );
}