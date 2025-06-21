"use client";

import { motion } from "framer-motion";
import { IconMapPin, IconPhone, IconMail, IconClock, IconCar, IconBus, IconNavigation, IconBuilding } from "@tabler/icons-react";
import { BackToTop } from "@/components/ui/back-to-top";

export default function LocalizacaoPage() {
  const contactInfo = {
    address: "Rua do Wagner Fera, 123 - Sala 456",
    neighborhood: "Centro Empresarial Tech",
    city: "Arapiraca",
    state: "AL",
    zipCode: "01234-567",
    phone: "+55 (82) 9 9953-2934",
    email: "primecodesolutions@gmail.com"
  };

  const businessHours = [
    { day: "Segunda-feira", hours: "8:00 - 18:00" },
    { day: "Terça-feira", hours: "8:00 - 18:00" },
    { day: "Quarta-feira", hours: "8:00 - 18:00" },
    { day: "Quinta-feira", hours: "8:00 - 18:00" },
    { day: "Sexta-feira", hours: "8:00 - 18:00" },
    { day: "Sábado", hours: "8:00 - 12:00" },
    { day: "Domingo", hours: "Fechado" }
  ];

  const transportOptions = [
    {
      icon: IconCar,
      title: "De Carro",
      description: "Estacionamento gratuito disponível no prédio",
      details: "Acesso pela Rua Principal, entrada pelo portão azul"
    },
    {
      icon: IconBus,
      title: "Transporte Público",
      description: "Várias linhas de ônibus passam próximo",
      details: "Pontos de ônibus a 200m do escritório"
    },
    {
      icon: IconNavigation,
      title: "GPS/Navegação",
      description: "Use as coordenadas para navegação precisa",
      details: "Lat: -9.7517, Long: -36.6611"
    }
  ];

  const nearbyLandmarks = [
    "Shopping Center Arapiraca - 500m",
    "Banco do Brasil - 200m",
    "Praça da Bandeira - 300m",
    "Terminal Rodoviário - 1.2km",
    "Universidade Federal - 2.5km"
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
              <IconMapPin className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Nossa Localização
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
              Venha nos visitar! Estamos localizados no coração de Arapiraca, em um ambiente moderno e acessível.
            </p>
          </motion.div>
        </div>
      </section>

    {/* Endereço e Informações de Contato */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Detalhes do Endereço */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
                Endereço Completo
              </h2>
              
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700 mb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl">
                    <IconBuilding className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                      PrimeCode Solutions
                    </h3>
                    <address className="text-neutral-600 dark:text-neutral-300 not-italic leading-relaxed">
                      {contactInfo.address}<br />
                      {contactInfo.neighborhood}<br />
                      {contactInfo.city}, {contactInfo.state} - CEP: {contactInfo.zipCode}
                    </address>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <IconPhone className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <a 
                      href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                      className="text-neutral-600 dark:text-neutral-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <IconMail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Horario de trabalho */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
                <div className="flex items-center space-x-3 mb-4">
                  <IconClock className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    Horário de Funcionamento
                  </h3>
                </div>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-neutral-700 dark:text-neutral-300">
                        {schedule.day}
                      </span>
                      <span className={`font-medium ${
                        schedule.hours === "Fechado" 
                          ? "text-red-600 dark:text-red-400" 
                          : "text-green-600 dark:text-green-400"
                      }`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Espaço reservado para o mapa */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
                Localização no Mapa
              </h2>
              
              <div className="bg-neutral-200 dark:bg-neutral-700 rounded-2xl h-96 flex items-center justify-center mb-8">
                <div className="text-center">
                  <IconMapPin className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Mapa interativo será carregado aqui
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
                    Coordenadas: -9.7517, -36.6611
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <IconNavigation className="h-5 w-5" />
                  <span>Abrir no Google Maps</span>
                </button>
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <IconNavigation className="h-5 w-5" />
                  <span>Abrir no Waze</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opções de transporte */}
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
              Como Chegar
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Várias opções de transporte para facilitar sua visita
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transportOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                    {option.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-3">
                    {option.description}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {option.details}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    {/* Pontos de Referência */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Pontos de Referência
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Locais conhecidos próximos ao nosso escritório
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700"
          >
            <ul className="space-y-4">
              {nearbyLandmarks.map((landmark, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-neutral-700 dark:text-neutral-300">{landmark}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Visite CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Agende sua Visita
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Venha conhecer nosso escritório e conversar pessoalmente sobre seu projeto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contato"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-300 hover:shadow-lg"
              >
                Agendar Reunião
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-green-600 transition-all duration-300"
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