"use client";

import { motion } from "framer-motion";
import { IconMail, IconPhone, IconMapPin, IconClock, IconSend, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react";
import { BackToTop } from "@/components/ui/back-to-top";
import { useState } from "react";
import Link from "next/link";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    service: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      service: ""
    });
    
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  const contactInfo = [
    {
      icon: IconPhone,
      title: "Telefone",
      info: "+55 (82) 9 9953-2934",
      description: "Segunda a sexta, 8h às 18h",
      action: "tel:+5582999532934"
    },
    {
      icon: IconMail,
      title: "E-mail",
      info: "primecodesolutions@gmail.com",
      description: "Resposta em até 24h",
      action: "mailto:primecodesolutions@gmail.com"
    },
    {
      icon: IconMapPin,
      title: "Endereço",
      info: "Rua do Wagner Fera, 123 - Sala 456",
      description: "Arapiraca, AL - CEP: 01234-567",
      action: "#"
    },
    {
      icon: IconClock,
      title: "Horário",
      info: "Segunda a Sexta: 8h às 18h",
      description: "Sábado: 8h às 12h",
      action: "#"
    }
  ];

  const services = [
    "Desenvolvimento Web",
    "Aplicativos Mobile",
    "Consultoria Tecnológica",
    "Suporte Técnico",
    "E-commerce",
    "Sistemas Personalizados",
    "Outro"
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
              Fale Conosco
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
              Estamos prontos para transformar suas ideias em soluções digitais inovadoras. Entre em contato!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Card info contato */}
      <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-neutral-50 dark:bg-neutral-700 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 font-medium mb-1">
                    {item.info}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form de contato e mapa */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                Envie sua Mensagem
              </h2>
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
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                      placeholder="Seu nome completo"
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
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                      placeholder="(82) 9 9999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Serviço de Interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                    >
                      <option value="">Selecione um serviço</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
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
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white resize-none"
                    placeholder="Descreva seu projeto ou dúvida..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <IconSend className="h-5 w-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Mapa e informações adicionais */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                  Nossa Localização
                </h2>
                <div className="bg-neutral-200 dark:bg-neutral-700 rounded-2xl h-64 flex items-center justify-center">
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Mapa interativo será carregado aqui
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                  Outras Formas de Contato
                </h3>
                <div className="space-y-4">
                  <Link
                    href="https://wa.me/5582999532934"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200"
                  >
                    <IconBrandWhatsapp className="h-6 w-6" />
                    <span>WhatsApp: (82) 9 9953-2934</span>
                  </Link>
                  <Link
                    href="https://linkedin.com/company/primecodesolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    <IconBrandLinkedin className="h-6 w-6" />
                    <span>LinkedIn: PrimeCode Solutions</span>
                  </Link>
                </div>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                  Tempo de Resposta
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-400">E-mail:</span>
                    <span className="text-neutral-900 dark:text-white font-medium">Até 24h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-400">WhatsApp:</span>
                    <span className="text-neutral-900 dark:text-white font-medium">Até 2h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-400">Telefone:</span>
                    <span className="text-neutral-900 dark:text-white font-medium">Imediato</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BackToTop />
    </main>
  );
}