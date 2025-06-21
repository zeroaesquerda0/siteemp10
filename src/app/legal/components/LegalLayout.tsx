"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconHome, IconChevronRight, IconCalendar } from "@tabler/icons-react";
import Link from "next/link";
import { BackToTop } from "../../../components/ui/back-to-top";

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  lastUpdated: string;
  breadcrumb: string;
}

export function LegalLayout({ children, title, lastUpdated, breadcrumb }: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-neutral-950 dark:to-purple-950/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400 mb-8"
          >
            <Link 
              href="/" 
              className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <IconHome className="h-4 w-4 mr-1" />
              Início
            </Link>
            <IconChevronRight className="h-4 w-4" />
            <span className="text-neutral-900 dark:text-white font-medium">{breadcrumb}</span>
          </motion.nav>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              {title}
            </h1>
            <div className="flex items-center justify-center text-neutral-600 dark:text-neutral-400">
              <IconCalendar className="h-5 w-5 mr-2" />
              <span>Última atualização: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 p-8 md:p-12"
          >
            {children}
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </main>
  );

}

