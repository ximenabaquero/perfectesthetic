"use client";

import { motion, Variants } from "framer-motion";

const services = [
  {
    title: "Lipólisis láser",
    description: "Moldea y elimina grasa localizada con energía láser de precisión, sin cirugía ni incapacidad.",
    benefit: "Resultados desde la 1ra sesión",
  },
  {
    title: "Tensamax",
    description: "Tecnología avanzada que estimula colágeno y elastina para una piel más firme y definida.",
    benefit: "Efecto tensor inmediato",
  },
  {
    title: "Ácido hialurónico",
    description: "Hidratación profunda y volumen natural para armonizar rasgos sin perder expresividad.",
    benefit: "Armonización natural",
  },
  {
    title: "Hilos tensores",
    description: "Reafirma y levanta tejidos con bioestimulación de colágeno, sin quirófano.",
    benefit: "Lifting sin bisturí",
  },
  {
    title: "Plasma rico en plaquetas",
    description: "Regenera y mejora textura cutánea con tus propios factores de crecimiento.",
    benefit: "Regeneración celular",
  },
  {
    title: "Botox",
    description: "Suaviza líneas de expresión manteniendo gestos naturales con técnica precisa.",
    benefit: "Mirada descansada",
  },
];

export default function Services() {
  const accentPurple = "#b14ccf";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.21, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="services"
      className="py-24 bg-[#fffafa] relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 90% 10%, rgba(251, 232, 245, 0.4) 0%, rgba(255, 255, 255, 0) 100%)`,
        fontFamily: "'Montserrat', sans-serif"
      }}
    >
      {/* Decoración de fondo sutil */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50 blur-[120px] rounded-full -ml-32 -mb-32 opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Encabezado Estilo Hero */}
        <div className="max-w-3xl mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[4px] font-semibold mb-6 bg-white shadow-sm border border-pink-100"
            style={{ color: accentPurple }}
          >
            Tratamientos VIP
          </motion.span>
          
          <h2
            className="text-5xl md:text-6xl font-light mb-6"
            style={{ 
              color: "#1a1a1a", 
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-0.01em" 
            }}
          >
            Nuestros <span className="italic font-serif" style={{ color: accentPurple }}>Servicios</span>
          </h2>
          <p className="text-lg text-gray-500 font-light leading-relaxed italic">
            Ciencia y estética en perfecta armonía para resaltar tu mejor versión.
          </p>
        </div>

        {/* Grid de Servicios */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.title} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-[40px] bg-white border border-pink-50 shadow-[0_15px_40px_-15px_rgba(177,76,207,0.08)] transition-all duration-500 group-hover:shadow-[0_25px_50px_-12px_rgba(177,76,207,0.15)] group-hover:border-purple-100 overflow-hidden relative">
                
                {/* Número como marca de agua sutil */}
                <span 
                  className="absolute -top-4 -right-2 text-8xl font-serif italic pointer-events-none transition-colors duration-500 text-gray-50/40 group-hover:text-purple-50/60"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  <h3 
                    className="text-2xl text-gray-800 mb-4 pr-10"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-500 text-[14px] leading-relaxed mb-8 font-light max-w-[90%]">
                    {service.description}
                  </p>

                  {/* Tag de Beneficio Estilo Badge */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50/40 border border-emerald-100/50 transition-transform group-hover:scale-105">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-700/80">
                        {service.benefit}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Línea decorativa inferior */}
                <div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full transition-all duration-500 group-hover:w-1/3"
                  style={{ background: `linear-gradient(90deg, transparent, ${accentPurple}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}