"use client";

import { motion } from "framer-motion";
import { IconUsers, IconTarget, IconHeart, IconBriefcase, IconMail, IconPhone, IconArrowRight, IconCheck } from "@tabler/icons-react";
import { BackToTop } from "@/components/ui/back-to-top";
import Image from "next/image";
import { Link } from "lucide-react";

export default function EmpresaPage() {
  const values = [
    {
      icon: IconTarget,
      title: "Excelência",
      description: "Buscamos sempre a perfeição em cada projeto, superando expectativas e entregando resultados excepcionais."
    },
    {
      icon: IconHeart,
      title: "Transparência",
      description: "Mantemos comunicação clara e honesta com nossos clientes, construindo relacionamentos baseados na confiança."
    },
    {
      icon: IconUsers,
      title: "Inovação",
      description: "Estamos sempre atualizados com as últimas tecnologias e tendências do mercado para oferecer soluções modernas."
    },
    {
      icon: IconBriefcase,
      title: "Compromisso",
      description: "Cumprimos prazos e mantemos a qualidade prometida, sendo parceiros confiáveis para o crescimento do seu negócio."
    }
  ];

  const team = [
    {
      name: "67 Coringa",
      role: "CEO & Fundador",
      description: "99 anos de experiência em tecnologia e gestão de projetos",
      image: "https://i.imgur.com/1YNRT0T.jpeg"
    },
    {
      name: "Wagner Henrique",
      role: "CTO",
      description: "Especialista em arquitetura de software e desenvolvimento Front-End",
      image: "https://i.imgur.com/Lbif13L.jpeg"
    },
    {
      name: "Carlos Oliveira",
      role: "Lead Developer",
      description: "Expert em React, Node.js e tecnologias cloud",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Ana Costa",
      role: "UX/UI Designer",
      description: "Focada em criar experiências digitais intuitivas e atrativas",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const achievements = [
    { number: "500+", label: "Projetos Entregues" },
    { number: "150+", label: "Clientes Satisfeitos" },
    { number: "5", label: "Anos de Experiência" },
    { number: "99%", label: "Taxa de Satisfação" }
  ];

  const benefits = [
    "Plano de carreira estruturado",
    "Ambiente de trabalho colaborativo",
    "Flexibilidade de horários",
    "Home office disponível",
    "Treinamentos e certificações",
    "Plano de saúde e dental",
    "Vale refeição e transporte",
    "Participação nos lucros"
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
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Sobre a PrimeCode Solutions
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
              Somos uma empresa de tecnologia dedicada a transformar ideias em soluções digitais inovadoras e eficientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#sobre-nos" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Conheça Nossa História
                <IconArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#equipe" className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                Nossa Equipe
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-nos" className="py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
                <p>
                  Fundada em 2025, a PrimeCode Solutions nasceu da visão de democratizar o acesso à tecnologia de qualidade para empresas de todos os tamanhos. Começamos como uma pequena equipe de desenvolvedores apaixonados por criar soluções que realmente fazem a diferença.
                </p>
                <p>
                  Ao longo dos anos, crescemos e evoluímos, sempre mantendo nosso foco na excelência técnica e no atendimento personalizado. Hoje, somos reconhecidos como uma das principais empresas de desenvolvimento de software da região.
                </p>
                <p>
                  Nossa jornada é marcada por projetos desafiadores, clientes satisfeitos e uma equipe que não para de crescer. Continuamos inovando e buscando novas formas de agregar valor aos negócios de nossos parceiros.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                  alt="Equipe trabalhando"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
              Nossos Números
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Resultados que demonstram nossa dedicação e competência
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-neutral-600 dark:text-neutral-300">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section id="missao" className="py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Missão e Valores
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e relacionamentos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                Nossa Missão
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Transformar ideias em soluções tecnológicas inovadoras, ajudando empresas a alcançar seus objetivos através da tecnologia de qualidade, com foco na excelência, transparência e resultados mensuráveis.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                Nossa Visão
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Ser reconhecida como a principal referência em desenvolvimento de software na região, sendo a primeira escolha de empresas que buscam inovação, qualidade e parceria estratégica em tecnologia.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-20 bg-neutral-100 dark:bg-neutral-900 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Nossa Equipe
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Profissionais talentosos e dedicados que fazem a diferença
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="carreiras" className="py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Carreiras
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Faça parte da nossa equipe e construa uma carreira de sucesso
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                Por que trabalhar conosco?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <IconCheck className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-neutral-600 dark:text-neutral-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                Envie seu currículo
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                Estamos sempre em busca de talentos. Mesmo que não tenhamos vagas abertas no momento, adoraríamos conhecer você!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <IconMail className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-neutral-600 dark:text-neutral-300">rh@primecodesolutions.com.br</span>
                </div>
                <div className="flex items-center">
                  <IconPhone className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-neutral-600 dark:text-neutral-300">+55 (82) 9 9999-9999</span>
                </div>
              </div>
              <button className="w-full mt-6 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Enviar Currículo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vamos conversar sobre seu projeto?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
                Falar Conosco
                <IconArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
                Ver Nossos Serviços
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </main>
  );
}