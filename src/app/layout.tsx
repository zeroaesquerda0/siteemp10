import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarDemo from "./components/navbar-demo";
import Footer from "./components/footer";
import { CTAProvider } from "./contexts/CTAContext";
import { ContactModal } from "./components/cta/ContactModal";
import { FloatingWhatsApp } from "./components/cta/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrimeCode Solutions - Soluções Tecnológicas Inovadoras",
  description: "Empresa especializada em desenvolvimento de software, consultoria e suporte técnico. Transformamos ideias em soluções digitais eficientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CTAProvider>
          <NavbarDemo />
          
          <main>
            {children}
          </main>
          
          <Footer />
          
          {/* Global CTA Components */}
          <ContactModal />
          <FloatingWhatsApp />
        </CTAProvider>
      </body>
    </html>
  );
}