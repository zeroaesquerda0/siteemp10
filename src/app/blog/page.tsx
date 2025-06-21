"use client";

import { motion } from "framer-motion";
import { IconCalendar, IconUser, IconClock, IconArrowRight, IconSearch, IconTag } from "@tabler/icons-react";
import { BackToTop } from "@/components/ui/back-to-top";
import Image from "next/image";
import { useState } from "react";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Desenvolvimento", "Design", "Tecnologia", "Negócios", "Tutoriais"];

  const blogPosts = [
    {
      id: 1,
      title: "Como Escolher a Tecnologia Certa para seu Projeto Web",
      excerpt: "Guia completo para tomar decisões técnicas assertivas no desenvolvimento de aplicações web modernas.",
      content: "Neste artigo, exploramos os principais fatores que devem ser considerados...",
      author: "Wagner Henrique",
      date: "2025-01-15",
      readTime: "8 min",
      category: "Desenvolvimento",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "Next.js", "Tecnologia"]
    },
    {
      id: 2,
      title: "Tendências de Design UI/UX para 2025",
      excerpt: "Descubra as principais tendências que vão dominar o design de interfaces este ano.",
      content: "O design de interfaces continua evoluindo rapidamente...",
      author: "Wagner Henrique",
      date: "2025-01-12",
      readTime: "6 min",
      category: "Design",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format&fit=crop",
      tags: ["UI/UX", "Design", "Tendências"]
    },
    {
      id: 3,
      title: "Otimização de Performance em Aplicações React",
      excerpt: "Técnicas avançadas para melhorar a performance de suas aplicações React.",
      content: "A performance é crucial para a experiência do usuário...",
      author: "Wagner Henrique",
      date: "2025-01-10",
      readTime: "12 min",
      category: "Desenvolvimento",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "Performance", "Otimização"]
    },
    {
      id: 4,
      title: "Inteligência Artificial no Desenvolvimento de Software",
      excerpt: "Como a IA está transformando a forma como desenvolvemos software.",
      content: "A inteligência artificial está revolucionando...",
      author: "67 Coringa",
      date: "2025-01-08",
      readTime: "10 min",
      category: "Tecnologia",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      tags: ["IA", "Tecnologia", "Futuro"]
    },
    {
      id: 5,
      title: "Estratégias de Marketing Digital para Startups Tech",
      excerpt: "Como startups de tecnologia podem se destacar no mercado digital.",
      content: "O marketing digital é essencial para startups...",
      author: "Wagner Henrique",
      date: "2025-01-05",
      readTime: "7 min",
      category: "Negócios",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      tags: ["Marketing", "Startups", "Digital"]
    },
    {
      id: 6,
      title: "Tutorial: Criando APIs RESTful com Node.js",
      excerpt: "Passo a passo para criar APIs robustas e escaláveis com Node.js.",
      content: "Neste tutorial completo, você aprenderá...",
      author: "Wagner Henrique",
      date: "2025-01-03",
      readTime: "15 min",
      category: "Tutoriais",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=800&auto=format&fit=crop",
      tags: ["Node.js", "API", "Tutorial"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

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
              Blog PrimeCode
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
              Insights, tutoriais e tendências do mundo da tecnologia e desenvolvimento.
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
                placeholder="Buscar artigos..."
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

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
              Artigo em Destaque
            </h2>
            <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <IconCalendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <IconClock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <IconUser className="h-4 w-4 text-neutral-400" />
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        {featuredPost.author}
                      </span>
                    </div>
                    <button className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                      Ler mais
                      <IconArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-neutral-100 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
              Todos os Artigos
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 dark:bg-neutral-800/90 text-neutral-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <IconCalendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <IconClock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-xs bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 px-2 py-1 rounded-full"
                      >
                        <IconTag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <IconUser className="h-4 w-4 text-neutral-400" />
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        {post.author}
                      </span>
                    </div>
                    <button className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm">
                      Ler mais
                      <IconArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                Nenhum artigo encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </section>

      <BackToTop />
    </main>
  );
}