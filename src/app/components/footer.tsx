"use client";

import React from 'react';
import { 
  IconMail, 
  IconPhone, 
  IconMapPin, 
  IconBrandLinkedin, 
  IconBrandFacebook, 
  IconBrandInstagram, 
  IconBrandTwitter,
  IconBook,
  IconTrophy,
  IconDownload,
  IconHelp,
  IconMessageCircle,
  IconCalculator,
  IconHeadset,
  IconMap
} from '@tabler/icons-react';
import Link from 'next/link';

export default function Footer() {
  // Ano atual para copyright dinâmico
  const currentYear = new Date().getFullYear();

  // Dados de contato da empresa
  const contactInfo = {
    address: "Rua do Wagner Fera, 123 - Sala 456\nCentro Empresarial Tech\nArapiraca, AL - CEP: 01234-567",
    phone: "+55 (82) 9 9953-2934",
    email: "primecodesolutions@gmail.com"
  };

  // Links do mapa do site organizados por categoria
  const siteMapLinks = {
    empresa: [
      { name: "Sobre Nós", href: "/empresa#sobre-nos" },
      { name: "Nossa Equipe", href: "/empresa#equipe" },
      { name: "Missão e Valores", href: "/empresa#missao" },
      { name: "Carreiras", href: "/empresa#carreiras" }
    ],
    servicos: [
      { name: "Desenvolvimento Web", href: "/services/components/web-development" },
      { name: "Aplicativos Mobile", href: "/services/components/mobile-apps" },
      { name: "Consultoria Tech", href: "/services/components/tech-consulting" },
      { name: "Suporte Técnico", href: "/services/components/technical-support" }
    ],
    recursos: [
      { name: "Blog", href: "/blog", icon: IconBook },
      { name: "Cases de Sucesso", href: "/cases", icon: IconTrophy },
      { name: "Downloads", href: "/downloads", icon: IconDownload },
      { name: "FAQ", href: "/faq", icon: IconHelp }
    ],
    atendimento: [
      { name: "Fale Conosco", href: "/contato", icon: IconMessageCircle },
      { name: "Orçamento", href: "/orcamento", icon: IconCalculator },
      { name: "Suporte", href: "/suporte", icon: IconHeadset },
      { name: "Localização", href: "/localizacao", icon: IconMap }
    ]
  };

  // Links das redes sociais
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/primecodesolutions",
      icon: IconBrandLinkedin,
      ariaLabel: "Siga-nos no LinkedIn"
    },
    {
      name: "Facebook",
      href: "https://facebook.com/primecodesolutions",
      icon: IconBrandFacebook,
      ariaLabel: "Curta nossa página no Facebook"
    },
    {
      name: "Instagram",
      href: "https://instagram.com/primecode.solutions",
      icon: IconBrandInstagram,
      ariaLabel: "Siga-nos no Instagram"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/primecodesol",
      icon: IconBrandTwitter,
      ariaLabel: "Siga-nos no Twitter"
    }
  ];

  // Links legais com navegação suave para âncoras
  const legalLinks = [
    { name: "Política de Privacidade", href: "/legal/privacy" },
    { name: "Termos de Uso", href: "/legal/terms" },
    { name: "Cookies", href: "/legal/cookies" },
    { name: "LGPD", href: "/legal/lgpd" }
  ];

  // Função para navegação suave para âncoras
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      const [path, anchor] = href.split('#');
      
      // Se estamos na mesma página, faz scroll suave
      if (path === window.location.pathname || (path === '/empresa' && window.location.pathname === '/empresa')) {
        e.preventDefault();
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
      // Se não estamos na mesma página, deixa o navegador fazer a navegação normal
    }
  };

  return (
    <footer className="bg-neutral-900 text-white" role="contentinfo">
      {/* Seção principal do footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Seção de Contato */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">
              Entre em Contato
            </h3>
            
            {/* Endereço */}
            <div className="mb-4 flex items-start space-x-3">
              <IconMapPin 
                className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" 
                aria-hidden="true"
              />
              <address className="text-sm text-neutral-300 not-italic leading-relaxed">
                {contactInfo.address.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < contactInfo.address.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </address>
            </div>

            {/* Telefone */}
            <div className="mb-4 flex items-center space-x-3">
              <IconPhone 
                className="h-5 w-5 text-blue-400 flex-shrink-0" 
                aria-hidden="true"
              />
              <Link
                href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                className="text-sm text-neutral-300 hover:text-blue-400 transition-colors duration-300"
                aria-label={`Ligar para ${contactInfo.phone}`}
              >
                {contactInfo.phone}
              </Link>
            </div>

            {/* E-mail */}
            <div className="mb-6 flex items-center space-x-3">
              <IconMail 
                className="h-5 w-5 text-blue-400 flex-shrink-0" 
                aria-hidden="true"
              />
              <Link 
                href={`mailto:${contactInfo.email}`}
                className="text-sm text-neutral-300 hover:text-blue-400 transition-colors duration-300 break-all"
                aria-label={`Enviar e-mail para ${contactInfo.email}`}
              >
                {contactInfo.email}
              </Link>
            </div>

            {/* Redes Sociais */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-white">
                Siga-nos nas Redes Sociais
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                      aria-label={social.ariaLabel}
                    >
                      <IconComponent className="h-6 w-6" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mapa do Site - Empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Empresa
            </h3>
            <ul className="space-y-3">
              {siteMapLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-sm text-neutral-300 hover:text-blue-400 transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mapa do Site - Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Serviços
            </h3>
            <ul className="space-y-3">
              {siteMapLinks.servicos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-300 hover:text-blue-400 transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mapa do Site - Recursos */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Recursos
            </h3>
            <ul className="space-y-3">
              {siteMapLinks.recursos.map((link) => {
                const IconComponent = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-300 hover:text-blue-400 transition-colors duration-300 hover:underline flex items-center space-x-2"
                    >
                      <IconComponent className="h-4 w-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mapa do Site - Atendimento */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Atendimento
            </h3>
            <ul className="space-y-3">
              {siteMapLinks.atendimento.map((link) => {
                const IconComponent = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-300 hover:text-blue-400 transition-colors duration-300 hover:underline flex items-center space-x-2"
                    >
                      <IconComponent className="h-4 w-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Seção inferior com links legais e copyright */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Links Legais */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-neutral-600 hidden md:inline">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-sm text-neutral-400 text-center md:text-right">
              <p>
                © {currentYear} PrimeCode Solutions. Todos os direitos reservados.
              </p>
              <p className="mt-1">
                Desenvolvido com ❤️ pela nossa equipe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}