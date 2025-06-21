"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { IconCode, IconDeviceMobile, IconBulb, IconHeadset, IconClock } from '@tabler/icons-react';
import { CTAButton } from './CTAButton';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  showTimer?: boolean;
  section?: string;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Transforme sua Ideia em Realidade Digital",
  subtitle = "Escolha o serviço ideal para seu projeto e receba uma proposta personalizada",
  showTimer = false,
  section = "cta-section",
  className = ""
}) => {
  const ctaButtons = [
    {
        id: "cta-web-dev",
        label: "Desenvolvimento Web",
        icon: <IconCode className="h-6 w-6" />,
        action: "internal" as const,
        target: "/servicos/desenvolvimento-web",
        description: "Sites e sistemas web modernos",
        prefetch: true,
        transition: "fadeIn",
        trackingId: "nav_web_dev_click"
    },
    {
      id: "cta-mobile-app",
      label: "App Mobile",
      icon: <IconDeviceMobile className="h-6 w-6" />,
      action: "modal" as const,
      target: "contact",
      description: "Aplicativos iOS e Android"
    },
    {
      id: "cta-consulting",
      label: "Consultoria Tech",
      icon: <IconBulb className="h-6 w-6" />,
      action: "modal" as const,
      target: "contact",
      description: "Estratégia e transformação digital"
    },
    {
      id: "cta-support",
      label: "Suporte Técnico",
      icon: <IconHeadset className="h-6 w-6" />,
      action: "modal" as const,
      target: "contact",
      description: "Manutenção e suporte 24/7"
    }
  ];

  return (
    <section className={`py-20 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            {title}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>

          {showTimer && <CountdownTimer />}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ctaButtons.map((button, index) => (
            <motion.div
              key={button.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4">
                {button.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                {button.label}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                {button.description}
              </p>
              <CTAButton
                id={button.id}
                type="primary"
                action={button.action}
                target={button.target}
                section={section}
                variant="gradient"
                size="sm"
                fullWidth
              >
                Solicitar Orçamento
              </CTAButton>
            </motion.div>
          ))}
        </div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <CTAButton
            id="cta-primary-contact"
            type="primary"
            action="modal"
            target="contact"
            section={section}
            variant="gradient"
            size="lg"
            urgencyTag={showTimer}
          >
            Falar com Especialista Agora
          </CTAButton>
          
          <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              id="cta-whatsapp"
              type="secondary"
              action="whatsapp"
              target="Olá! Vi o site da PrimeCode e gostaria de saber mais sobre os serviços."
              section={section}
              variant="outline"
              size="md"
            >
              WhatsApp
            </CTAButton>
            
            <CTAButton
              id="cta-phone"
              type="secondary"
              action="phone"
              target="+5582999532934"
              section={section}
              variant="outline"
              size="md"
            >
              Ligar Agora
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = React.useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-full mb-8"
    >
      <IconClock className="h-5 w-5" />
      <span className="font-semibold">
        Oferta expira em: {String(timeLeft.hours).padStart(2, '0')}:
        {String(timeLeft.minutes).padStart(2, '0')}:
        {String(timeLeft.seconds).padStart(2, '0')}
      </span>
    </motion.div>
  );
};