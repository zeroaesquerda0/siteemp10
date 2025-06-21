"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';

export type CTAConfig = {
  id: string;
  type: 'primary' | 'secondary' | 'floating';
  label: string;
  action: 'modal' | 'external' | 'whatsapp' | 'phone' | 'internal';
  target: string;
  section?: string;
  urgencyTag?: boolean;
  icon?: React.ReactNode;
  variant?: 'default' | 'gradient' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export type CTAEvent = {
  ctaId: string;
  action: string;
  section?: string;
  timestamp: number;
  userAgent: string;
}

interface CTAContextType {
  isModalOpen: boolean;
  modalType: string | null;
  openModal: (type: string, ctaId?: string) => void;
  closeModal: () => void;
  trackCTAClick: (config: CTAConfig) => void;
  getWhatsAppLink: (message?: string) => string;
}

const CTAContext = createContext<CTAContextType | undefined>(undefined);

export const CTAProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);

  const openModal = useCallback((type: string, ctaId?: string) => {
    setModalType(type);
    setIsModalOpen(true);
    
    // Track modal open event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'modal_open', {
        modal_type: type,
        cta_id: ctaId,
        timestamp: Date.now()
      });
    }
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setModalType(null);
  }, []);

  const trackCTAClick = useCallback((config: CTAConfig) => {
    const event: CTAEvent = {
      ctaId: config.id,
      action: config.action,
      section: config.section,
      timestamp: Date.now(),
      userAgent: navigator.userAgent
    };

    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        cta_id: config.id,
        cta_type: config.type,
        cta_action: config.action,
        cta_section: config.section,
        cta_label: config.label
      });
    }

    // Custom event for additional tracking
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('ctaClick', { detail: event }));
    }

    console.log('CTA Click Tracked:', event);
  }, []);

  const getWhatsAppLink = useCallback((message?: string) => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5582999532934';
    const defaultMessage = message || 'Olá! Gostaria de saber mais sobre os serviços da PrimeCode Solutions.';
    const encodedMessage = encodeURIComponent(defaultMessage);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  }, []);

  return (
    <CTAContext.Provider value={{
      isModalOpen,
      modalType,
      openModal,
      closeModal,
      trackCTAClick,
      getWhatsAppLink
    }}>
      {children}
    </CTAContext.Provider>
  );
};

export const useCTA = () => {
  const context = useContext(CTAContext);
  if (context === undefined) {
    throw new Error('useCTA must be used within a CTAProvider');
  }
  return context;
};

// Hook específico para modal
export const useCTAModal = () => {
  const { isModalOpen, modalType, openModal, closeModal } = useCTA();
  return { isModalOpen, modalType, openModal, closeModal };
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}