"use client";

import { motion } from "framer-motion";

const topics = [
  {
    title: "¿Cómo se forma la fibrosis?",
    body: "Tras un procedimiento, el tejido se inflama y puede generar fibras duras si no hay drenaje o compresión adecuada. El control médico evita que el tejido cicatrice de forma irregular.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: "¿Por qué la grasa no se va solo con ejercicio?",
    body: "Los adipocitos en ciertas zonas tienen más receptores para almacenar que para liberar grasa. Por eso necesitamos tecnologías focalizadas como la lipólisis láser para esculpir zonas rebeldes.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
  {
    title: "Beneficios de la faja post-lipólisis",
    body: "La compresión uniforme ayuda a que la piel se adhiera al nuevo contorno y disminuye el riesgo de seromas. Usarla según indicación médica acelera una recuperación estética y segura.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function Education() {
  const accentPurple = "#b14ccf";

  return (
    <section
      id="education"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(251, 232, 245, 0.4) 0%, rgba(255, 255, 255, 1) 100%)",
      }}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Cabecera Coherente */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Educación y <span className="italic" style={{ color: accentPurple }}>Cuidado</span>
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
            className="text-base md:text-lg text-slate-600 font-light leading-relaxed"
          >
            Explicaciones claras basadas en la práctica médica para una recuperación consciente y resultados duraderos.
          </motion.p>
        </div>

        {/* Grid Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group h-full"
            >
              {/* Mismo estilo de tarjeta que Servicios */}
              <div className="soft-gradient-border h-full card-hover-elevate">
                <div className="card-sheen relative h-full rounded-[22px] bg-white/30 backdrop-blur-md border border-white/50 p-8 flex flex-col shadow-sm transition-all duration-500 hover:shadow-xl">
                  
                  {/* Icono con Halo Sutil */}
                  <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-sm text-[#b14ccf] group-hover:scale-110 transition-transform duration-500 border border-purple-50">
                    <div className="absolute inset-0 bg-purple-100/20 blur-lg rounded-full" />
                    <div className="relative z-10">{topic.icon}</div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4 tracking-tight leading-snug group-hover:text-[#b14ccf] transition-colors">
                    {topic.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
                    {topic.body}
                  </p>

                  {/* Detalle decorativo al pie de la tarjeta */}
                  <div className="mt-8 w-8 h-1 bg-purple-100 rounded-full group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}