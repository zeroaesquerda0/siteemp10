"use client";

import { motion } from "framer-motion";
import { IconChevronDown, IconSearch, IconMessageCircle, IconMail, IconPhone } from "@tabler/icons-react";
import { BackToTop } from "@/components/ui/back-to-top";
import { useState } from "react";

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = ["Todos", "Serviços", "Preços", "Técnico", "Suporte", "Geral"];

  const faqs = [
    {
      id: 1,
      question: "Quais tipos de projetos vocês desenvolvem?",
      answer: "Desenvolvemos uma ampla gama de projetos incluindo sites institucionais, e-commerce, aplicativos mobile (iOS e Android), sistemas web personalizados, APIs e integrações. Nossa equipe tem experiência em diversas tecnologias como React, Next.js, Node.js, React Native e muito mais.",
      category: "Serviços"
    },
    {
      id: 2,
      question: "Quanto tempo leva para desenvolver um projeto?",
      answer: "O prazo varia conforme a complexidade do projeto. Sites simples podem levar de 2-4 semanas, enquanto sistemas complexos podem levar de 3-6 meses. Sempre fornecemos um cronograma detalhado após a análise inicial dos requisitos.",
      category: "Serviços"
    },
    {
      id: 3,
      question: "Como funciona o processo de orçamento?",
      answer: "Nosso processo de orçamento é transparente e personalizado. Primeiro, fazemos uma reunião para entender suas necessidades, depois elaboramos uma proposta detalhada com escopo, prazos e valores. O orçamento é gratuito e sem compromisso.",
      category: "Preços"
    },
    {
      id: 4,
      question: "Vocês oferecem suporte após a entrega?",
      answer: "Sim! Oferecemos diferentes planos de suporte pós-entrega, incluindo manutenção, atualizações, backup e monitoramento. Também fornecemos garantia de 90 dias para correção de bugs em todos os projetos.",
      category: "Suporte"
    },
    {
      id: 5,
      question: "Quais tecnologias vocês utilizam?",
      answer: "Trabalhamos com tecnologias modernas e confiáveis como React, Next.js, Node.js, TypeScript, Python, PostgreSQL, MongoDB, AWS, Docker, entre outras. Escolhemos a stack ideal para cada projeto baseado nos requisitos específicos.",
      category: "Técnico"
    },
    {
      id: 6,
      question: "O projeto será responsivo para mobile?",
      answer: "Absolutamente! Todos os nossos projetos são desenvolvidos com design responsivo, garantindo perfeita visualização e funcionamento em dispositivos móveis, tablets e desktops. Seguimos a abordagem mobile-first.",
      category: "Técnico"
    },
    {
      id: 7,
      question: "Vocês trabalham com clientes de outras cidades/estados?",
      answer: "Sim, atendemos clientes em todo o Brasil. Trabalhamos de forma remota utilizando ferramentas de comunicação modernas como videoconferências, Slack, e sistemas de gestão de projetos para manter total transparência.",
      category: "Geral"
    },
    {
      id: 8,
      question: "Como é feito o pagamento dos projetos?",
      answer: "Oferecemos flexibilidade no pagamento. Geralmente dividimos em parcelas conforme os marcos do projeto (30% início, 40% desenvolvimento, 30% entrega). Aceitamos PIX, transferência bancária e cartão de crédito.",
      category: "Preços"
    },
    {
      id: 9,
      question: "Vocês fazem redesign de sites existentes?",
      answer: "Sim! Fazemos redesign completo de sites existentes, modernizando o visual, melhorando a experiência do usuário e otimizando a performance. Também podemos migrar para tecnologias mais modernas.",
      category: "Serviços"
    },
    {
      id: 10,
      question: "O que está incluso na hospedagem?",
      answer: "Nossos planos de hospedagem incluem domínio, SSL, backup automático, monitoramento 24/7, suporte técnico e atualizações de segurança. Utilizamos serviços confiáveis como AWS e Vercel.",
      category: "Técnico"
    },
    {
      id: 11,
      question: "Vocês oferecem treinamento para usar o sistema?",
      answer: "Sim! Fornecemos treinamento completo para sua equipe utilizar o sistema desenvolvido. Isso inclui documentação detalhada, vídeos tutoriais e sessões de treinamento ao vivo.",
      category: "Suporte"
    },
    {
      id: 12,
      question: "Como garantem a segurança dos dados?",
      answer: "Implementamos as melhores práticas de segurança incluindo criptografia, autenticação segura, proteção contra ataques, backups regulares e conformidade com LGPD. Todos os dados são tratados com máxima confidencialidade.",
      category: "Técnico"
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-blue-950/20 dark:via-neutral-950 dark:to-green-950/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
              Encontre respostas para as dúvidas mais comuns sobre nossos serviços e processos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Buscar perguntas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <IconChevronDown 
                    className={`h-5 w-5 text-neutral-500 transition-transform duration-200 ${
                      openItems.includes(faq.id) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openItems.includes(faq.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                Nenhuma pergunta encontrada com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-neutral-100 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
              Não encontrou sua resposta?
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
              Nossa equipe está pronta para esclarecer todas as suas dúvidas
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
                <IconMessageCircle className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Chat Online</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                  Converse conosco em tempo real
                </p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Iniciar Chat
                </button>
              </div>
              
              <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
                <IconMail className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">E-mail</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                  Envie sua dúvida por e-mail
                </p>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200">
                  Enviar E-mail
                </button>
              </div>
              
              <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
                <IconPhone className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Telefone</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                  Fale diretamente conosco
                </p>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                  Ligar Agora
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </main>
  );
}