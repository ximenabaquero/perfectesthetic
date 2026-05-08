"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Lipólisis láser",
    description: "Moldea y elimina grasa localizada con energía láser de precisión, sin cirugía ni incapacidad.",
    benefit: "Resultados visibles desde la primera sesión",
  },
  {
    title: "Tensamax",
    description: "Tecnología avanzada que estimula colágeno y elastina para una piel más firme y definida.",
    benefit: "Efecto tensor inmediato y progresivo",
  },
  {
    title: "Ácido hialurónico",
    description: "Hidratación profunda y volumen natural para armonizar rasgos sin perder expresividad.",
    benefit: "Resultados naturales y seguros",
  },
  {
    title: "Hilos tensores",
    description: "Reafirma y levanta tejidos con bioestimulación de colágeno, sin quirófano.",
    benefit: "Efecto lifting y estimulación de colágeno",
  },
  {
    title: "Plasma rico en plaquetas",
    description: "Regenera y mejora textura cutánea con tus propios factores de crecimiento.",
    benefit: "Mejora de textura y luminosidad",
  },
  {
    title: "Botox",
    description: "Suaviza líneas de expresión manteniendo gestos naturales con técnica precisa.",
    benefit: "Resultados naturales y controlados",
  },
];

export default function Services() {
  const accentPurple = "#b14ccf";

  return (
    <section id="services" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* ENCABEZADO. - Ahora coincide con Benefits */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }} // Mismo estilo que Benefits
          >
            Nuestros <span className="italic" style={{ color: accentPurple }}>Servicios</span>
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-20 h-1 bg-[#b14ccf] mx-auto mb-8 rounded-full" 
          />

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Tratamientos médicos con tecnología avanzada, enfoque personalizado y resultados visibles.
          </motion.p>
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group/card soft-gradient-border shadow-xl card-hover-elevate h-full"
              >
                {/* Estilo Glassmorphism Original Restaurado */}
                <div className="card-sheen relative h-full rounded-[22px] bg-white/25 backdrop-blur-[12px] border border-white/40 p-6 md:p-8 shadow-lg flex flex-col justify-between">
                  
                  <div>
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#f7e2f5] px-3 py-1 text-[10px] md:text-xs font-bold text-[#b14ccf] uppercase tracking-[0.15em]">
                      Tratamiento
                    </div>
                    
                    {/* Título de tarjeta más limpio */}
                    <h3 className="text-gray-800 text-xl md:text-2xl font-semibold mb-4 tracking-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Beneficio alineado al fondo */}
                  <div className="flex items-center gap-2 text-[#1fa76b] text-sm font-bold border-t border-white/20 pt-5 mt-auto">
                    <div className="p-1 rounded-full bg-emerald-50 text-emerald-500">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="italic leading-tight">{service.benefit}</span>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}