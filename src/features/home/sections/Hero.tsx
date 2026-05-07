"use client";

import { colors } from "@/config/colors";
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#fffafa]"
      style={{
        backgroundImage: `radial-gradient(circle at 10% 50%, rgba(251, 232, 245, 0.6) 0%, rgba(255, 255, 255, 0) 100%)`,
        fontFamily: "'Montserrat', sans-serif"
      }}
    >
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50 blur-[150px] rounded-full -mr-48 -mt-48 opacity-60" />

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10 py-16 sm:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: TEXTO */}
          <div className="lg:col-span-7 text-left order-1 lg:order-1">
            <motion.div variants={itemVariants} className="mb-8">
              <span 
                className="inline-block px-4 py-1.5 rounded-full text-[10px] sm:text-xs uppercase tracking-[4px] font-semibold mb-6 bg-white shadow-sm border border-pink-100"
                style={{ color: accentPurple }}
              >
                Bienvenida a Perfestetic
              </span>
              
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[85px] leading-[1] font-light mb-8"
                style={{ 
                  color: "#1a1a1a", 
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "-0.02em" 
                }}
              >
                Lipólisis láser <br />
                <span style={{ color: accentPurple }} className="italic font-serif">sin cirugía.</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl mb-12 max-w-xl sm:max-w-2xl opacity-70 font-light leading-relaxed italic"
              style={{ color: "#2d3436" }}
            >
              Esculpe tu figura con la precisión de la tecnología médica y la suavidad que tu cuerpo merece.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.a
                href={generateWhatsAppURL("hero")}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(177, 76, 207, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-4 px-12 py-5 rounded-full text-white text-sm uppercase tracking-[3px] font-bold shadow-xl transition-all"
                style={{ background: `linear-gradient(135deg, ${accentPurple}, ${deepRose})` }}
              >
                Agendar ahora
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* COLUMNA DERECHA: IMAGEN (Sin marco y más centrada) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="lg:col-span-5 relative flex justify-center order-2 lg:order-2"
          >
            <div className="relative w-full max-w-[520px] sm:max-w-[560px] aspect-[4/5] lg:aspect-[3/4] mx-auto">
              
              {/* Contenedor de la Imagen Limpio */}
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden">
                <Image
                  src="/miniatura.png"
                  alt="Tratamiento Perfestetic"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  priority
                />
              </div>

            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}