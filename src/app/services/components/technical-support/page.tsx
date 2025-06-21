"use client";
import { motion } from "framer-motion";
import { IconHeadset, IconClock, IconShield, IconTools, IconPhone, IconMail, IconMessageCircle, IconUserCheck, IconCheck, IconArrowRight, IconStar } from "@tabler/icons-react";
import { BackToTop } from "@/components/ui/back-to-top";

export default function TechnicalSupportPage() {
  const supportTypes = [
    {
      title: "Suporte 24/7",
      description: "Atendimento técnico disponível 24 horas por dia, 7 dias por semana para emergências críticas.",
      icon: IconClock,
      highlight: "Disponível sempre",
      features: ["Monitoramento contínuo", "Resposta imediata", "Escalação automática", "Relatórios em tempo real"]
    },
    {
      title: "Manutenção Preventiva",
      description: "Monitoramento proativo e manutenção regular para evitar problemas antes que aconteçam.",
      icon: IconTools,
      highlight: "Prevenção ativa",
      features: ["Análise preditiva", "Atualizações automáticas", "Backup automatizado", "Otimização de performance"]
    },
    {
      title: "Segurança Avançada",
      description: "Proteção contínua contra ameaças digitais com atualizações de segurança regulares.",
      icon: IconShield,
      highlight: "Proteção total",
      features: ["Firewall gerenciado", "Antivírus corporativo", "Análise de vulnerabilidades", "Compliance"]
    },
    {
      title: "Suporte Especializado",
      description: "Equipe técnica altamente qualificada com expertise em diversas tecnologias.",
      icon: IconUserCheck,
      highlight: "Expertise comprovada",
      features: ["Técnicos certificados", "Conhecimento especializado", "Treinamento contínuo", "Documentação técnica"]
    }
  ];

  const channels = [
    { name: "Telefone", icon: IconPhone, desc: "Atendimento direto", contact: "+55 (82) 9 9999-9999", available: "24/7" },
    { name: "E-mail", icon: IconMail, desc: "Suporte por e-mail", contact: "suporte@primecodesolutions.com.br", available: "24/7" },
    { name: "Chat Online", icon: IconMessageCircle, desc: "Chat em tempo real", contact: "Disponível no site", available: "8h-18h" },
    { name: "WhatsApp", icon: IconPhone, desc: "Suporte via WhatsApp", contact: "Clique para conversar", available: "8h-22h" }
  ];

  const plans = [
    {
      name: "Básico",
      price: "R$ 39,90",
      period: "/mês",
      features: [
        "Suporte em horário comercial",
        "Tempo de resposta: 4h",
        "Suporte por e-mail e telefone",
        "Manutenção básica mensal",
        "Backup semanal"
      ],
      color: "from-blue-500 to-blue-600",
      sla: "99.5%"
    },
    {
      name: "Profissional",
      price: "R$ 59,90",
      period: "/mês",
      features: [
        "Suporte 24/7",
        "Tempo de resposta: 1h",
        "Todos os canais de suporte",
        "Manutenção preventiva semanal",
        "Monitoramento em tempo real",
        "Backup diário"
      ],
      color: "from-purple-500 to-purple-600",
      popular: true,
      sla: "99.9%"
    },
    {
      name: "Enterprise",
      price: "R$ 99,90",
      period: "/mês",
      features: [
        "Suporte 24/7 prioritário",
        "Tempo de resposta: 15min",
        "Técnico dedicado",
        "Manutenção diária",
        "Relatórios personalizados",
        "SLA garantido",
        "Backup em tempo real"
      ],
      color: "from-orange-500 to-red-600",
      sla: "99.99%"
    }
  ];

  const testimonials = [
    {
      name: "Roberto Silva",
      company: "Indústria ABC",
      text: "O suporte da PrimeCode é excepcional. Nunca tivemos problemas não resolvidos rapidamente.",
      rating: 5
    },
    {
      name: "Marina Costa",
      company: "Clínica Saúde+",
      text: "A manutenção preventiva evitou várias paradas. Nossos sistemas estão sempre funcionando.",
      rating: 5
    }
  ];

  const metrics = [
    { value: "99.9%", label: "Uptime Garantido" },
    { value: "< 15min", label: "Tempo de Resposta" },
    { value: "24/7", label: "Disponibilidade" },
    { value: "500+", label: "Clientes Atendidos" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-orange-950/20 dark:via-neutral-950 dark:to-red-950/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-6">
              <IconHeadset className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Suporte Técnico Especializado
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
              Oferecemos suporte técnico completo e confiável para manter seus sistemas funcionando perfeitamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Falar com Suporte
                <IconArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-orange-600 text-orange-600 dark:text-orange-400 font-semibold rounded-xl hover:bg-orange-600 hover:text-white transition-all duration-300">
                Ver Planos
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-neutral-600 dark:text-neutral-300">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Types Section */}
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
              Tipos de Suporte
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Cobertura completa para todas as suas necessidades técnicas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportTypes.map((support, index) => {
              const IconComponent = support.icon;
              return (
                <motion.div
                  key={support.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                          {support.title}
                        </h3>
                        <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-full">
                          {support.highlight}
                        </span>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                        {support.description}
                      </p>
                      <ul className="space-y-2">
                        {support.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-neutral-600 dark:text-neutral-300">
                            <IconCheck className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
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

      {/* Contact Channels Section */}
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
              Canais de Atendimento
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Múltiplas formas de entrar em contato conosco
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {channels.map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <motion.div
                  key={channel.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-100 dark:border-orange-800 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    {channel.name}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    {channel.desc}
                  </p>
                  <p className="text-xs text-orange-600 dark:text-orange-400 font-medium mb-1">
                    {channel.contact}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">
                    {channel.available}
                  </p>
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
              Planos de Suporte
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
                    <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                  <div className="text-sm text-orange-600 dark:text-orange-400 font-medium mt-2">
                    SLA: {plan.sla}
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

      {/* Testimonials Section */}
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
              O que nossos clientes dizem
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <IconStar key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-neutral-500 dark:text-neutral-400">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Precisa de suporte técnico agora?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Nossa equipe está pronta para ajudar você a resolver qualquer problema técnico
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300 hover:shadow-lg">
                Falar com Suporte Agora
                <IconArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300">
                Ver Planos de Suporte
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </main>
  );
}