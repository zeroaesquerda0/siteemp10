"use client";

import { motion } from "framer-motion";
import { IconDownload, IconFile, IconFileText, IconPhoto, IconCode, IconSearch, IconCalendar, IconEye } from "@tabler/icons-react";
import { BackToTop } from "@/components/ui/back-to-top";
import { useState } from "react";

export default function DownloadsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "E-books", "Templates", "Guias", "Recursos", "Apresentações"];

const downloads = [
    {
        id: 1,
        title: "Guia Completo de Desenvolvimento Web 2026",
        description: "E-book abrangente sobre as melhores práticas e tendências em desenvolvimento web.",
        category: "E-books",
        type: "PDF",
        size: "2.5 MB",
        downloads: 1250,
        date: "2025-06-15",
        preview: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop",
        icon: IconFileText
    },
    {
        id: 2,
        title: "Template Landing Page React",
        description: "Template moderno e responsivo para landing pages desenvolvido em React.",
        category: "Templates",
        type: "ZIP",
        size: "15.2 MB",
        downloads: 890,
        date: "2025-06-12",
        preview: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=400&auto=format&fit=crop",
        icon: IconCode
    },
    {
        id: 3,
        title: "Checklist de SEO para Desenvolvedores",
        description: "Lista completa de verificação para otimização de sites para mecanismos de busca.",
        category: "Guias",
        type: "PDF",
        size: "1.8 MB",
        downloads: 2100,
        date: "2025-06-10",
        preview: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=400&auto=format&fit=crop",
        icon: IconFileText
    },
    {
        id: 4,
        title: "Kit de Ícones para UI/UX",
        description: "Coleção de 500+ ícones vetoriais para interfaces de usuário.",
        category: "Recursos",
        type: "SVG",
        size: "8.7 MB",
        downloads: 3200,
        date: "2025-06-08",
        preview: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=400&auto=format&fit=crop",
        icon: IconPhoto
    },
    {
        id: 5,
        title: "Apresentação: Transformação Digital",
        description: "Slides sobre estratégias de transformação digital para empresas.",
        category: "Apresentações",
        type: "PPTX",
        size: "12.4 MB",
        downloads: 670,
        date: "2025-06-05",
        preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop",
        icon: IconFile
    },
    {
        id: 6,
        title: "Template Dashboard Admin",
        description: "Interface completa para painéis administrativos com componentes reutilizáveis.",
        category: "Templates",
        type: "ZIP",
        size: "25.1 MB",
        downloads: 1450,
        date: "2025-06-03",
        preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
        icon: IconCode
    },
    {
        id: 7,
        title: "E-book: UX/UI Design Principles",
        description: "Princípios fundamentais de design de experiência e interface do usuário.",
        category: "E-books",
        type: "PDF",
        size: "4.2 MB",
        downloads: 1890,
        date: "2025-05-28",
        preview: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=400&auto=format&fit=crop",
        icon: IconFileText
    },
    {
        id: 8,
        title: "Guia de Acessibilidade Web",
        description: "Manual prático para implementar acessibilidade em aplicações web.",
        category: "Guias",
        type: "PDF",
        size: "3.1 MB",
        downloads: 980,
        date: "2025-05-25",
        preview: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=400&auto=format&fit=crop",
        icon: IconFileText
    }
];

  const filteredDownloads = downloads.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalDownloads = downloads.reduce((sum, item) => sum + item.downloads, 0);

  const handleDownload = (item: typeof downloads[0]) => {
    // Simular download
    console.log(`Downloading: ${item.title}`);
    // implementar a lógica real de download
  };

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
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Downloads Gratuitos
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
              Recursos, templates, guias e e-books para acelerar seus projetos de desenvolvimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400">
                <IconDownload className="h-5 w-5" />
                <span className="font-semibold">{totalDownloads.toLocaleString()} downloads realizados</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    {/* Seção de Busca e Filtros */}
      <section className="py-8 bg-white dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Buscar recursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
              />
            </div>

            {/* Categorias */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white"
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

      {/* Downloads Grade */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDownloads.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="h-16 w-16 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 dark:bg-neutral-800/90 text-neutral-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                        {item.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <span>{item.size}</span>
                        <div className="flex items-center space-x-1">
                          <IconDownload className="h-4 w-4" />
                          <span>{item.downloads}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <IconCalendar className="h-4 w-4" />
                        <span>{new Date(item.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDownload(item)}
                        className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <IconDownload className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                      <button className="px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-200">
                        <IconEye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredDownloads.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                Nenhum recurso encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </section>

    {/* Seção de Newsletter */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Receba novos recursos por e-mail
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Seja o primeiro a saber sobre novos templates, guias e recursos gratuitos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
              />
              <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors duration-200">
                Inscrever-se
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </main>
  );
}