"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { generateWhatsAppURL } from "@/utils/whatsapp";

const navItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Servicios", href: "#services" },
  { name: "Beneficios", href: "#benefits" },
  { name: "Testimonios", href: "#testimonials" },
  { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const accentPurple = "#b14ccf";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:px-10 pointer-events-none">
      <nav
        className={`mx-auto max-w-7xl transition-all duration-500 ease-out pointer-events-auto
          ${isScrolled 
            ? "bg-white/60 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-[2rem] px-6 py-2" 
            : "bg-transparent px-2 py-4"
          }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-3 group outline-none"
          >
            <div className="relative w-10 h-10 overflow-hidden transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/logoperfecsteticsin.webp"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="flex flex-col items-start -space-y-2">
              <span 
                className="text-2xl lg:text-3xl italic"
                style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a" }}
              >
                PerfeStetic
              </span>

            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-gray-50/40 rounded-full px-2 py-1 border border-gray-100/20">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-5 py-2 group relative transition-all"
              >
                <span className="text-[11px] uppercase tracking-[0.15em] font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
                  {item.name}
                </span>
                <motion.span 
                  className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                  layoutId="navUnderline"
                />
              </button>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <motion.a
              href={generateWhatsAppURL("general")}
              target="_blank"
              whileHover={{ y: -2, boxShadow: "0 10px 20px -10px #b14ccf" }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-7 py-2.5 rounded-full text-white text-[10px] font-bold uppercase tracking-[0.15em]"
              style={{ background: `linear-gradient(135deg, ${accentPurple}, #8e44ad)` }}
            >
              Cita Online
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            >
              <span className={`w-5 h-[1.5px] bg-gray-600 transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-5 h-[1.5px] bg-gray-600 transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-5 h-[1.5px] bg-gray-600 transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-8 shadow-2xl border border-white/20 pointer-events-auto"
          >
            <div className="flex flex-col gap-6 items-center">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.1 } }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-xl font-light text-gray-800 tracking-wide"
                >
                  {item.name}
                </motion.button>
              ))}
              <hr className="w-12 border-gray-200" />
              <a
                href={generateWhatsAppURL("general")}
                className="w-full text-center py-4 rounded-full text-white font-bold uppercase tracking-widest text-[11px]"
                style={{ background: `linear-gradient(135deg, ${accentPurple}, #8e44ad)` }}
              >
                Agendar Evaluación
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}