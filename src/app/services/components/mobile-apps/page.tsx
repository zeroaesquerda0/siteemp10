"use client";
import { motion } from "framer-motion";
import { IconDeviceMobile, IconBrandApple, IconBrandAndroid, IconBrandReactNative, IconBrandFlutter, IconCloudUpload, IconShield, IconCheck, IconArrowRight, IconStar } from "@tabler/icons-react";
import { BackToTop } from "@/components/ui/back-to-top";


export default function MobileAppsPage() {
  const platforms = [
    { name: "iOS", icon: IconBrandApple, color: "text-gray-800 dark:text-gray-200", description: "Apps nativos para iPhone e iPad" },
    { name: "Android", icon: IconBrandAndroid, color: "text-green-500", description: "Apps para dispositivos Android" },
    { name: "React Native", icon: IconBrandReactNative, color: "text-blue-500", description: "Apps híbridos multiplataforma" },
    { name: "Flutter", icon: IconBrandFlutter, color: "text-blue-400", description: "Framework Google para apps" },
  ];

  const features = [
    {
      title: "Design Nativo",
      description: "Interface adaptada para cada plataforma seguindo as diretrizes de design",
      icon: IconDeviceMobile
    },
    {
      title: "Performance Otimizada",
      description: "Apps rápidos e responsivos com carregamento instantâneo",
      icon: IconStar
    },
    {
      title: "Integração Cloud",
      description: "Sincronização de dados em tempo real com serviços em nuvem",
      icon: IconCloudUpload
    },
    {
      title: "Segurança Avançada",
      description: "Proteção de dados com criptografia e autenticação segura",
      icon: IconShield
    }
  ];

  const appTypes = [
    {
      title: "Apps Corporativos",
      description: "Aplicativos para gestão interna e produtividade empresarial",
      features: ["Dashboard executivo", "Gestão de equipes", "Relatórios móveis", "Integração ERP"],
      price: "A partir de R$ 99,90",
      popular: false
    },
    {
      title: "Apps de E-commerce",
      description: "Lojas virtuais móveis com experiência de compra otimizada",
      features: ["Catálogo de produtos", "Carrinho e checkout", "Pagamentos seguros", "Push notifications"],
      price: "A partir de R$ 101,90",
      popular: true
    },
    {
      title: "Apps Sob Medida",
      description: "Aplicativos personalizados para necessidades específicas",
      features: ["Funcionalidades únicas", "Design exclusivo", "Integração APIs", "Suporte completo"],
      price: "A partir de R$ 201,90",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechCorp",
      text: "O app desenvolvido pela PrimeCode revolucionou nossa operação. Aumento de 40% na produtividade.",
      rating: 5
    },
    {
      name: "Ana Santos",
      company: "Fashion Store",
      text: "Nosso app de e-commerce superou todas as expectativas. Vendas mobile cresceram 300%.",
      rating: 5
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
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
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl mb-6">
              <IconDeviceMobile className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Aplicativos Mobile
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
              Desenvolvemos aplicativos móveis inovadores que conectam sua marca aos usuários de forma intuitiva e eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Desenvolver Meu App
                <IconArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-600 dark:text-green-400 font-semibold rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300">
                Ver Apps Criados
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
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
              Plataformas Suportadas
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Desenvolvemos para todas as principais plataformas móveis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <IconComponent className={`h-12 w-12 ${platform.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                    {platform.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Recursos Avançados
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Implementamos as melhores práticas e tecnologias mais modernas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Types Section */}
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
              Tipos de Aplicativos
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Soluções personalizadas para diferentes necessidades
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appTypes.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative p-8 bg-white dark:bg-neutral-800 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                  app.popular 
                    ? 'border-green-300 dark:border-green-600 scale-105' 
                    : 'border-neutral-200 dark:border-neutral-700'
                }`}
              >
                {app.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                  {app.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                  {app.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {app.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-neutral-600 dark:text-neutral-300">
                      <IconCheck className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6">
                  {app.price}
                </div>
                <button className={`w-full py-3 px-6 font-semibold rounded-xl transition-all duration-300 ${
                  app.popular
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                    : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                }`}>
                  Solicitar Orçamento
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transforme sua ideia em um app de sucesso
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Vamos criar juntos o aplicativo que vai revolucionar seu negócio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-300 hover:shadow-lg">
                Começar Meu Projeto
                <IconArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-green-600 transition-all duration-300">
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