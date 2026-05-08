"use client";

import { generateWhatsAppURL } from "@/utils/whatsapp";
import { motion } from "framer-motion";

type Benefit = {
  title: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
};

const benefits: Benefit[] = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Tecnología avanzada",
    description: "Láser lipólisis + láser diodo + soft laser para esculpir con precisión y estimular colágeno.",
    tag: "Precisión láser",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Acompañamiento médico",
    description: "Protocolos personalizados y seguimiento cercano para una recuperación guiada y segura.",
    tag: "Seguimiento médico",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Resultados visibles",
    description: "Cambios desde la primera sesión: menos volumen, mejor definición y piel más firme.",
    tag: "Impacto inmediato",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Recuperación rápida",
    description: "Procedimientos sin incapacidad ni dolor post, para retomar tus actividades el mismo día.",
    tag: "Sin downtime",
  },
];

export default function Benefits() {
  const accentPurple = "#b14ccf";

  return (
    <section id="benefits" className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Decoración de fondo mejorada */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            ¿Por qué elegir <span className="italic" style={{ color: accentPurple }}>Perfestetic</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 font-light"
          >
            Precisión médica y calidez humana para resultados que transforman.
          </motion.p>
        </div>

        {/* Grid Adaptativo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Tarjeta con tu diseño original de bordes y glassmorphism */}
              <div className="soft-gradient-border h-full card-hover-elevate rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="card-sheen relative h-full bg-white/40 backdrop-blur-md p-8 flex flex-col items-center text-center">
                  
                  {/* Icono Minimalista con Halo */}
                  <div className="relative mb-8 flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm border border-purple-50 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-purple-100/30 blur-xl rounded-full group-hover:bg-purple-200/50 transition-colors" />
                    <div className="relative z-10 text-[#b14ccf]">
                      {benefit.icon}
                    </div>
                  </div>

                  <span className="mb-4 inline-flex px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-[#a35ab6] bg-purple-50 rounded-full border border-purple-100/50">
                    {benefit.tag}
                  </span>

                  <h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">
                    {benefit.title}
                  </h3>

                  <p className="text-sm md:text-base text-slate-500 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Final Responsive */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-purple-100 bg-gradient-to-tr from-white to-[#fdf8ff] px-6 py-12 md:px-12 md:py-16 text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50/50 blur-[80px] rounded-full -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-light text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                ¿Lista para tu <span className="italic" style={{ color: accentPurple }}>transformación</span>?
              </h3>
              <p className="text-slate-600 mb-10 max-w-xl mx-auto font-light leading-relaxed">
                Agenda tu valoración y diseñemos un plan preciso con resultados visibles.
              </p>
              
              <motion.a
                href={generateWhatsAppURL("benefits")}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-[#25D366] hover:bg-[#20b358] text-white font-bold py-4 px-10 rounded-full transition-all shadow-[0_15px_30px_rgba(37,211,102,0.3)] text-sm md:text-base uppercase tracking-wider"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Contactar por WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}