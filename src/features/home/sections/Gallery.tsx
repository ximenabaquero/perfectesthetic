"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { generateWhatsAppURL } from "@/utils/whatsapp";

const beforeAfterGallery = [
  {
    id: 1,
    before: "/antes-despues/imagen1-antes.jpg",
    after: "/antes-despues/imagen1-despues.jpg",
    area: "Moldeamiento Corporal",
    description: "Reducción de grasa localizada",
  },
  {
    id: 2,
    before: "/antes-despues/imagen2-antes.jpg",
    after: "/antes-despues/imagen2-despues.jpg",
    area: "Definición Abdominal",
    description: "Esculpido de cintura y abdomen",
  },
  {
    id: 3,
    before: "/antes-despues/imagen3-antes.jpg",
    after: "/antes-despues/imagen3-despues.jpg",
    area: "Tonificación Láser",
    description: "Reducción y firmeza cutánea",
  },
];

export default function Gallery() {
  const accentPurple = "#b14ccf";

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* ENCABEZADO COHERENTE */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Resultados <span className="italic" style={{ color: accentPurple }}>Reales</span>
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
            Transformaciones auténticas que reflejan la eficacia de nuestros tratamientos y el cuidado médico personalizado.
          </motion.p>
        </div>

        {/* GRID DE GALERÍA */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {beforeAfterGallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <div className="soft-gradient-border h-full card-hover-elevate">
                  <div className="card-sheen relative h-full rounded-[22px] bg-white/40 backdrop-blur-md border border-white/60 p-6 shadow-xl">
                    
                    {/* INFO DEL PROCEDIMIENTO */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-800 tracking-tight">
                        {item.area}
                      </h3>
                      <p className="text-xs md:text-sm font-medium uppercase tracking-[0.1em] mt-1" style={{ color: accentPurple }}>
                        {item.description}
                      </p>
                    </div>

                    {/* COMPARATIVA ANTES/DESPUÉS */}
                    <div className="grid grid-cols-2 gap-3 relative">
                      {/* Antes */}
                      <div className="relative group/img overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                        <div className="absolute top-2 left-2 z-10 bg-black/40 backdrop-blur-sm text-[10px] text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                          Antes
                        </div>
                        <Image
                          src={item.before}
                          alt={`Antes - ${item.area}`}
                          width={400}
                          height={500}
                          className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover/img:scale-110"
                        />
                      </div>

                      {/* Después */}
                      <div className="relative group/img overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                        <div className="absolute top-2 left-2 z-10 bg-[#b14ccf]/60 backdrop-blur-sm text-[10px] text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                          Después
                        </div>
                        <Image
                          src={item.after}
                          alt={`Después - ${item.area}`}
                          width={400}
                          height={500}
                          className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover/img:scale-110"
                        />
                      </div>
                    </div>

                    {/* BADGE DE ÉXITO */}
                    <div className="mt-6 flex justify-center">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        Resultado Exitoso
                      </span>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA FINAL */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 md:mt-24"
          >
            <p className="text-gray-500 font-light mb-8 italic">
              ¿Quieres lograr tu propia transformación?
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={generateWhatsAppURL("gallery")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full px-10 py-4 text-white font-bold shadow-2xl transition-all"
              style={{ background: `linear-gradient(135deg, ${accentPurple} 0%, #d471e0 100%)` }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
              Quiero mi valoración gratis
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}