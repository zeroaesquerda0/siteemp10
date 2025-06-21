"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconBrandWhatsapp, IconX, IconSend } from '@tabler/icons-react';
import { useCTA } from '@/app/contexts/CTAContext';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const { trackCTAClick, getWhatsAppLink } = useCTA();

  useEffect(() => {
    // Show after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    
    if (!isOpen) {
      trackCTAClick({
        id: 'floating-whatsapp-open',
        type: 'floating',
        label: 'WhatsApp Float Open',
        action: 'whatsapp',
        target: 'chat_open',
        section: 'floating'
      });
    }
  };

  const handleSendMessage = () => {
    const finalMessage = message || 'Olá! Vi o site da PrimeCode Solutions e gostaria de saber mais sobre os serviços.';
    
    trackCTAClick({
      id: 'floating-whatsapp-send',
      type: 'floating',
      label: 'WhatsApp Float Send',
      action: 'whatsapp',
      target: finalMessage,
      section: 'floating'
    });

    window.open(getWhatsAppLink(finalMessage), '_blank');
    setIsOpen(false);
    setMessage('');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 w-80 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-green-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <IconBrandWhatsapp className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">PrimeCode Solutions</h3>
                    <p className="text-sm opacity-90">Online agora</p>
                  </div>
                </div>
                <button
                  onClick={handleToggle}
                  className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
                >
                  <IconX className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 max-h-60 overflow-y-auto">
              <div className="bg-neutral-100 dark:bg-neutral-700 p-3 rounded-lg rounded-tl-none">
                <p className="text-sm text-neutral-800 dark:text-neutral-200">
                  Olá! 👋 Como podemos ajudar você hoje?
                </p>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  Agora
                </span>
              </div>
              
              <div className="bg-neutral-100 dark:bg-neutral-700 p-3 rounded-lg rounded-tl-none">
                <p className="text-sm text-neutral-800 dark:text-neutral-200">
                  Estamos prontos para transformar sua ideia em realidade digital! 🚀
                </p>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  Agora
                </span>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-neutral-200 dark:border-neutral-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white text-sm"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <IconSend className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggle}
        className="relative w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-colors flex items-center justify-center"
      >
        <IconBrandWhatsapp className="h-7 w-7" />
        
        {/* Pulse Animation */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-green-500 rounded-full"
        />

        {/* Notification Badge */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
          >
            2
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};