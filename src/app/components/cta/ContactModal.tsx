"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconX, IconSend, IconCheck } from '@tabler/icons-react';
import { useCTAModal } from '@/app/contexts/CTAContext';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export const ContactModal: React.FC = () => {
  const { isModalOpen, modalType, closeModal } = useCTAModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const services = [
    'Desenvolvimento Web',
    'Aplicativos Mobile',
    'Consultoria Tecnológica',
    'Suporte Técnico',
    'E-commerce',
    'Sistemas Personalizados'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Track conversion
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
          value: 1.0,
          currency: 'BRL'
        });
      }

      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        setIsSuccess(false);
        closeModal();
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      closeModal();
      setErrors({});
      setIsSuccess(false);
    }
  };

  if (modalType !== 'contact') return null;

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-neutral-800 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              disabled={isSubmitting}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 disabled:opacity-50"
            >
              <IconX className="h-6 w-6" />
            </button>

            {/* Success State */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Obrigado pelo contato. Nossa equipe entrará em contato em breve.
                </p>
              </motion.div>
            )}

            {/* Form */}
            {!isSuccess && (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                    Fale Conosco
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Preencha o formulário e nossa equipe entrará em contato
                  </p>
                </div>

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
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white ${
                          errors.name ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-600'
                        }`}
                        placeholder="Seu nome completo"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white ${
                          errors.email ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-600'
                        }`}
                        placeholder="seu@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white ${
                          errors.phone ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-600'
                        }`}
                        placeholder="(82) 9 9999-9999"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                      )}
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
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>

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
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white resize-none ${
                        errors.message ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-600'
                      }`}
                      placeholder="Descreva seu projeto ou dúvida..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
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
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};