"use client";

import { motion } from "framer-motion";
import { IconHeadset, IconShield, IconPhone, IconMail, IconMessageCircle, IconTicket, IconBook, IconArrowRight } from "@tabler/icons-react";
import { BackToTop } from "@/components/ui/back-to-top";
import { useState } from "react";

export default function SuportePage() {
  const [ticketForm, setTicketForm] = useState({
    name: "",
    email: "",
    priority: "medium",
    category: "",
    subject: "",
    description: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTicketForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validação
    if (!ticketForm.name || !ticketForm.email || !ticketForm.category || !ticketForm.subject || !ticketForm.description) {
      alert("Por favor, preencha todos os campos obrigatórios");
      return;
    }
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzPczUSUwZLcRZiwXPcfRNeJWl5s7G33CXh9GfxWj5hWUi0HDzyCV7e0dpgq31Dngbc/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          data: JSON.stringify({
            name: ticketForm.name.trim(),
            email: ticketForm.email.trim(),
            priority: ticketForm.priority,
            category: ticketForm.category,
            subject: ticketForm.subject.trim(),
            description: ticketForm.description.trim()
          })
        })
      });
  
      const result = await response.json();
      
      if (result.success) {
        alert("Ticket enviado com sucesso!");
        setTicketForm({
          name: "",
          email: "",
          priority: "medium",
          category: "",
          subject: "",
          description: ""
        });
      } else {
        throw new Error(result.error || "Erro desconhecido ao enviar o ticket");
      }
    } catch (error) {
      console.error("Erro ao enviar ticket:", error);
      if (error instanceof Error) {
        alert(`Erro: ${error.message}`);
      } else {
        alert("Erro desconhecido ao enviar o ticket");
      }
    }
  };

  const supportChannels = [
    {
      icon: IconPhone,
      title: "Telefone",
      description: "Suporte direto por telefone",
      info: "+55 (82) 9 9953-2934",
      availability: "24/7 para emergências",
      action: "tel:+5582999532934"
    },
    {
      icon: IconMail,
      title: "E-mail",
      description: "Suporte técnico por e-mail",
      info: "suporte@primecodesolutions.com.br",
      availability: "Resposta em até 4h",
      action: "mailto:suporte@primecodesolutions.com.br"
    },
    {
      icon: IconMessageCircle,
      title: "Chat Online",
      description: "Chat em tempo real",
      info: "Disponível no site",
      availability: "Seg-Sex: 8h às 18h",
      action: "#"
    },
    {
      icon: IconTicket,
      title: "Sistema de Tickets",
      description: "Abra um ticket de suporte",
      info: "Portal de atendimento",
      availability: "Acompanhe o status",
      action: "#ticket-form"
    }
  ];

  const supportPlans = [
    {
      name: "Básico",
      price: "R$ 39,90",
      period: "/mês",
      features: [
        "Suporte em horário comercial",
        "Tempo de resposta: 4h",
        "E-mail e telefone",
        "Manutenção básica",
        "Backup semanal"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Profissional",
      price: "R$ 59,90",
      period: "/mês",
      features: [
        "Suporte 24/7",
        "Tempo de resposta: 1h",
        "Todos os canais",
        "Manutenção preventiva",
        "Monitoramento em tempo real",
        "Backup diário"
      ],
      color: "from-purple-500 to-purple-600",
      popular: true
    },
    {
      name: "Enterprise",
      price: "R$ 99,90",
      period: "/mês",
      features: [
        "Suporte 24/7 prioritário",
        "Tempo de resposta: 15min",
        "Técnico dedicado",
        "SLA garantido",
        "Relatórios personalizados",
        "Backup em tempo real"
      ],
      color: "from-orange-500 to-red-600"
    }
  ];

  const knowledgeBase = [
    {
      title: "Como configurar SSL no meu site?",
      category: "Segurança",
      views: 1250
    },
    {
      title: "Backup automático: configuração e restauração",
      category: "Backup",
      views: 980
    },
    {
      title: "Otimização de performance para sites WordPress",
      category: "Performance",
      views: 1450
    },
    {
      title: "Configuração de e-mail corporativo",
      category: "E-mail",
      views: 750
    }
  ];

  const priorities = [
    { value: "low", label: "Baixa", color: "text-green-600" },
    { value: "medium", label: "Média", color: "text-yellow-600" },
    { value: "high", label: "Alta", color: "text-orange-600" },
    { value: "critical", label: "Crítica", color: "text-red-600" }
  ];

  const categories = [
    { value: "technical", label: "Problema Técnico" },
    { value: "functionality", label: "Dúvida sobre Funcionalidade" },
    { value: "change", label: "Solicitação de Mudança" },
    { value: "performance", label: "Problema de Performance" },
    { value: "security", label: "Questão de Segurança" },
    { value: "backup", label: "Backup e Restauração" },
    { value: "other", label: "Outro" }
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
              Suporte Técnico
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
              Estamos aqui para ajudar você. Suporte especializado quando você precisar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Canais de suporte */}
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
              Escolha a forma mais conveniente para entrar em contato
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-3">
                    {channel.description}
                  </p>
                  <p className="text-sm font-medium text-orange-600 dark:text-orange-400 mb-2">
                    {channel.info}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                    {channel.availability}
                  </p>
                  <a
                    href={channel.action}
                    className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-medium"
                  >
                    Usar este canal
                    <IconArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ticket Form */}
      <section id="ticket-form" className="py-20 bg-neutral-100 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Abrir Ticket de Suporte
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Descreva seu problema e nossa equipe entrará em contato
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={ticketForm.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={ticketForm.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Prioridade *
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    required
                    value={ticketForm.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                  >
                    {priorities.map((priority) => (
                      <option key={priority.value} value={priority.value}>
                        {priority.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Categoria *
                  </label>
                <select
                    id="category"
                    name="category"
                    required
                    value={ticketForm.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                    >
                    <option value="">Selecione uma categoria</option>
                    {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                        {category.label}
                        </option>
                    ))}
                </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={ticketForm.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                  placeholder="Resumo do problema"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Descrição do Problema *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={6}
                  value={ticketForm.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white resize-none"
                  placeholder="Descreva detalhadamente o problema que está enfrentando..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <IconTicket className="h-5 w-5" />
                <span>Criar Ticket</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

    {/* Base de Conhecimento */}
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
              Base de Conhecimento
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Encontre respostas rápidas para problemas comuns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {knowledgeBase.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-sm">
                    {article.category}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    {article.views} visualizações
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                  {article.title}
                </h3>
                <button className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-medium">
                  <IconBook className="h-4 w-4 mr-2" />
                  Ler artigo
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos de suporte */}
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
              Escolha o nível de suporte ideal para seu negócio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportPlans.map((plan, index) => (
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
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-neutral-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-400 ml-2">
                      {plan.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutral-600 dark:text-neutral-300">
                      <IconShield className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
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

      <BackToTop />
    </main>
  );
}