"use client";
import { motion } from "framer-motion";
import {
  IconCode,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconDatabase,
  IconCloud,
  IconDeviceDesktop,
  IconArrowRight,
  IconCheck
} from "@tabler/icons-react";
import { BackToTop } from "@/components/ui/back-to-top";

export default function WebDevelopmentPage() {
  const technologies = [
    { name: "React", icon: IconBrandReact, color: "text-blue-500", description: "Biblioteca JavaScript para interfaces" },
    { name: "Next.js", icon: IconBrandNextjs, color: "text-black dark:text-white", description: "Framework React para produção" },
    { name: "Node.js", icon: IconBrandNodejs, color: "text-green-500", description: "Runtime JavaScript no servidor" },
    { name: "Database", icon: IconDatabase, color: "text-purple-500", description: "Bancos de dados relacionais e NoSQL" },
    { name: "Cloud", icon: IconCloud, color: "text-sky-500", description: "Hospedagem em nuvem escalável" },
    { name: "Responsive", icon: IconDeviceDesktop, color: "text-orange-500", description: "Design adaptável a todos dispositivos" },
  ];

  const services = [
    {
      title: "Sites Institucionais",
      description: "Sites profissionais que representam sua marca com excelência",
      features: ["Design responsivo", "SEO otimizado", "Carregamento rápido", "Painel administrativo"],
      price: "A partir de R$ 109,90"
    },
    {
      title: "E-commerce",
      description: "Lojas virtuais completas para vender online",
      features: ["Carrinho de compras", "Pagamento integrado", "Gestão de estoque", "Relatórios de vendas"],
      price: "A partir de R$ 249,90"
    },
    {
      title: "Sistemas Web",
      description: "Aplicações web personalizadas para seu negócio",
      features: ["Dashboard personalizado", "Controle de usuários", "Relatórios avançados", "Integração com APIs"],
      price: "A partir de R$ 309,90"
    }
  ];

  const process = [
    { step: "01", title: "Análise", description: "Entendemos suas necessidades e objetivos", icon: "🔍" },
    { step: "02", title: "Planejamento", description: "Criamos a arquitetura e wireframes", icon: "📋" },
    { step: "03", title: "Design", description: "Desenvolvemos o layout visual", icon: "🎨" },
    { step: "04", title: "Desenvolvimento", description: "Codificamos com as melhores práticas", icon: "💻" },
    { step: "05", title: "Testes", description: "Testamos em diferentes dispositivos", icon: "🧪" },
    { step: "06", title: "Entrega", description: "Publicamos e treinamos sua equipe", icon: "🚀" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-neutral-950 dark:to-purple-950/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
              <IconCode className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Desenvolvimento Web
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
              Criamos experiências digitais excepcionais com tecnologias modernas e design centrado no usuário.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Solicitar Orçamento
                <IconArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                Ver Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Tecnologias que Utilizamos
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Trabalhamos com as tecnologias mais modernas e confiáveis do mercado
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className={`h-8 w-8 ${tech.color} mr-4`} />
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                      {tech.name}
                    </h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {tech.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Nossos Serviços
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Soluções completas para sua presença digital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-neutral-600 dark:text-neutral-300">
                      <IconCheck className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                  {service.price}
                </div>
                <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Solicitar Orçamento
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Nosso Processo
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Um processo estruturado para garantir o sucesso do seu projeto
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para começar seu projeto?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Entre em contato conosco e vamos transformar sua ideia em realidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
                Falar com Especialista
                <IconArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
                Ver Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </main>
  );
}