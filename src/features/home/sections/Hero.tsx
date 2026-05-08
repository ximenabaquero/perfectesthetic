"use client";

import Image from "next/image";
import { generateWhatsAppURL } from "@/utils/whatsapp";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const accentPurple = "#b14ccf";
  const deepRose = "#8644a2";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#fffafa] pt-20 lg:pt-0"
      style={{
        backgroundImage: `radial-gradient(circle at 10% 50%, rgba(251, 232, 245, 0.6) 0%, rgba(255, 255, 255, 0) 100%)`,
        fontFamily: "'Montserrat', sans-serif"
      }}
    >
      {/* Fondo decorativo sutil - Ajustado para no estorbar en móvil */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-purple-50 blur-[80px] md:blur-[150px] rounded-full -mr-24 -mt-24 opacity-60 pointer-events-none" />

      <motion.div 
        className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10 py-12 md:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* COLUMNA IZQUIERDA: TEXTO */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-6 md:mb-8">
              <span 
                className="inline-block px-4 py-1.5 rounded-full text-[9px] sm:text-xs uppercase tracking-[3px] md:tracking-[4px] font-bold mb-4 md:mb-6 bg-white shadow-sm border border-pink-100"
                style={{ color: accentPurple }}
              >
                Bienvenida a Perfestetic
              </span>
              
              <h1
                className="text-4xl sm:text-5xl md:text-6xl xl:text-[80px] leading-[1.1] font-light mb-6"
                style={{ 
                  color: "#1a1a1a", 
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "-0.02em" 
                }}
              >
                Lipólisis láser <br className="hidden sm:block" />
                <span style={{ color: accentPurple }} className="italic font-serif">sin cirugía.</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl mb-8 md:mb-12 max-w-xl mx-auto lg:mx-0 opacity-75 font-light leading-relaxed italic"
              style={{ color: "#2d3436" }}
            >
              Esculpe tu figura con la precisión de la tecnología médica y la suavidad que tu cuerpo merece.
            </motion.p>

            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <motion.a
                href={generateWhatsAppURL("hero")}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(177, 76, 207, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex justify-center items-center gap-4 px-8 md:px-12 py-4 md:py-5 rounded-full text-white text-xs md:text-sm uppercase tracking-[2px] font-bold shadow-xl transition-all"
                style={{ background: `linear-gradient(135deg, ${accentPurple}, ${deepRose})` }}
              >
                Agendar ahora
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* COLUMNA DERECHA: IMAGEN */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 20 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none aspect-[4/5] md:aspect-[3/4]">
              {/* Contenedor de la Imagen con bordes redondeados adaptativos */}
              <div className="relative h-full w-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden">
                <Image
                  src="/miniatura.png"
                  alt="Tratamiento Perfestetic"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}