"use client";

import { motion } from "framer-motion";
import { IconArrowRight, IconClock } from "@tabler/icons-react";
import { BackToTop } from "@/components/ui/back-to-top";
import Image from "next/image";
import { useState } from "react";

export default function CasesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "E-commerce", "Aplicativos", "Sistemas Web", "Consultoria"];

  const cases = [
    {
      id: 1,
      title: "Loja Virtual TechStore",
      client: "TechStore Brasil",
      category: "E-commerce",
      description: "Desenvolvimento de plataforma e-commerce completa com integração de pagamentos e gestão de estoque.",
      challenge: "Criar uma loja virtual robusta que suportasse alto volume de vendas durante promoções.",
      solution: "Desenvolvemos uma plataforma escalável usando Next.js e Node.js, com cache inteligente e CDN.",
      results: [
        { metric: "300%", description: "Aumento nas vendas online" },
        { metric: "50%", description: "Redução no tempo de carregamento" },
        { metric: "95%", description: "Uptime garantido" }
      ],
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
      duration: "4 meses",
      year: "2024",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
      testimonial: {
        text: "A PrimeCode transformou nossa visão em realidade. O resultado superou todas as expectativas.",
        author: "João Silva",
        position: "CEO da TechStore"
      }
    },
    {
      id: 2,
      title: "App de Delivery FoodExpress",
      client: "FoodExpress",
      category: "Aplicativos",
      description: "Aplicativo mobile para delivery de comida com sistema de rastreamento em tempo real.",
      challenge: "Desenvolver um app que conectasse restaurantes, entregadores e clientes de forma eficiente.",
      solution: "Criamos um ecossistema completo com apps nativos para iOS/Android e dashboard web para gestão.",
      results: [
        { metric: "10k+", description: "Downloads no primeiro mês" },
        { metric: "4.8", description: "Avaliação na App Store" },
        { metric: "40%", description: "Aumento na eficiência de entregas" }
      ],
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB", "Socket.io"],
      duration: "6 meses",
      year: "2024",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=800&auto=format&fit=crop",
      testimonial: {
        text: "O app revolucionou nossa operação. Agora conseguimos atender muito mais clientes com qualidade.",
        author: "Maria Santos",
        position: "Fundadora do FoodExpress"
      }
    },
    {
      id: 3,
      title: "Sistema de Gestão Hospitalar",
      client: "Hospital São Lucas",
      category: "Sistemas Web",
      description: "Sistema completo para gestão hospitalar com prontuário eletrônico e agendamento.",
      challenge: "Digitalizar processos manuais e integrar diferentes departamentos do hospital.",
      solution: "Desenvolvemos um sistema web responsivo com módulos integrados e interface intuitiva.",
      results: [
        { metric: "60%", description: "Redução no tempo de atendimento" },
        { metric: "90%", description: "Satisfação dos funcionários" },
        { metric: "100%", description: "Digitalização dos prontuários" }
      ],
      technologies: ["React", "Express.js", "MySQL", "Docker", "NGINX"],
      duration: "8 meses",
      year: "2023",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=800&auto=format&fit=crop",
      testimonial: {
        text: "O sistema melhorou drasticamente nossa eficiência operacional e qualidade do atendimento.",
        author: "Dr. Carlos Mendes",
        position: "Diretor Médico"
      }
    },
    {
      id: 4,
      title: "Transformação Digital - Indústria ABC",
      client: "Indústria ABC",
      category: "Consultoria",
      description: "Consultoria completa para modernização de processos industriais e implementação de IoT.",
      challenge: "Modernizar uma indústria tradicional com processos manuais e sistemas legados.",
      solution: "Implementamos soluções IoT, dashboards em tempo real e automação de processos.",
      results: [
        { metric: "45%", description: "Redução de custos operacionais" },
        { metric: "80%", description: "Aumento na produtividade" },
        { metric: "99%", description: "Precisão no controle de qualidade" }
      ],
      technologies: ["IoT", "Python", "InfluxDB", "Grafana", "Docker"],
      duration: "12 meses",
      year: "2023",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      testimonial: {
        text: "A consultoria da PrimeCode foi fundamental para nossa transformação digital bem-sucedida.",
        author: "Roberto Lima",
        position: "Diretor de Operações"
      }
    }
  ];

  const filteredCases = cases.filter(caseItem => 
    selectedCategory === "Todos" || caseItem.category === selectedCategory
  );

  const stats = [
    { number: "50+", label: "Projetos Entregues" },
    { number: "98%", label: "Taxa de Satisfação" },
    { number: "24", label: "Meses de Experiência" },
    { number: "15+", label: "Tecnologias Dominadas" }
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
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Cases de Sucesso
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
              Conheça alguns dos projetos que transformaram negócios e geraram resultados excepcionais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 dark:text-neutral-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-neutral-100 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-green-600 text-white"
                    : "bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-green-50 dark:hover:bg-neutral-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {filteredCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-neutral-800 rounded-3xl overflow-hidden shadow-xl"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative h-64 lg:h-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Image
                      src={caseItem.image}
                      alt={caseItem.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        {caseItem.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center space-x-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                      <span className="flex items-center space-x-1">
                        <IconClock className="h-4 w-4" />
                        <span>{caseItem.duration}</span>
                      </span>
                      <span>{caseItem.year}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                      {caseItem.title}
                    </h3>
                    <p className="text-green-600 dark:text-green-400 font-medium mb-4">
                      {caseItem.client}
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                      {caseItem.description}
                    </p>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {caseItem.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                            {result.metric}
                          </div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-400">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {caseItem.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-neutral-50 dark:bg-neutral-700 p-4 rounded-lg mb-6">
                      <p className="text-neutral-700 dark:text-neutral-300 italic mb-2">
                        &quot;{caseItem.testimonial.text}&quot;
                      </p>
                      <div className="text-sm">
                        <span className="font-medium text-neutral-900 dark:text-white">
                          {caseItem.testimonial.author}
                        </span>
                        <span className="text-neutral-600 dark:text-neutral-400">
                          , {caseItem.testimonial.position}
                        </span>
                      </div>
                    </div>

                    <button className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium">
                      Ver detalhes completos
                      <IconArrowRight className="ml-2 h-4 w-4" />
                    </button>
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
              Pronto para ser nosso próximo case de sucesso?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Vamos conversar sobre como podemos transformar seu negócio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-300 hover:shadow-lg">
                Solicitar Orçamento
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