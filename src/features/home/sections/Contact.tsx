"use client";

import { motion } from "framer-motion";
import { generateWhatsAppURL } from "@/utils/whatsapp";

export default function Contact() {
  const accentPurple = "#b14ccf";
  const accentPink = "#d471e0";

 const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/573224042286",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
      </svg>
    ),
    color: "bg-[#25D366]",
    description: "+57 (322) 404-2286",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/perfestetic",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: "bg-[#1877F2]",
    description: "Perfestetic Medical",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/perfe_stetic",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    // Usamos un degradado radial de Tailwind que imita mejor el look de Instagram
    color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    description: "@perfe_stetic",
  },
];

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#fafafa] overflow-hidden">
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-100/40 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* ENCABEZADO */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[11px] font-bold uppercase tracking-[0.3em] text-purple-500 mb-4 block"
          >
            Contacto Directo
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-light text-slate-900 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Estamos a un <span className="italic" style={{ color: accentPurple }}>clic</span> de distancia
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-8" 
          />
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            Resuelve tus dudas de forma personalizada. Tu proceso de transformación comienza con una conversación honesta.
          </p>
        </div>

        {/* TARJETAS SOCIALES - GLASSMORPHISM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group p-[1px] rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Borde con degradado animado al hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-200 group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500" />
              
              <div className="relative bg-white/80 backdrop-blur-xl rounded-[29px] p-10 h-full flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl ${link.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {link.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{link.name}</h3>
                <p className="text-slate-500 font-light mb-6">{link.description}</p>
                <span className="text-xs font-bold uppercase tracking-widest text-purple-600 border-b border-purple-100 pb-1 group-hover:border-purple-500 transition-all">
                  Conectar ahora
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* BANNER PRINCIPAL (CALL TO ACTION) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative max-w-6xl mx-auto rounded-[40px] overflow-hidden shadow-2xl"
        >
          {/* Fondo con degradado animado */}
          <div 
            className="absolute inset-0 opacity-90"
            style={{ 
              background: `linear-gradient(135deg, ${accentPurple} 0%, ${accentPink} 50%, #8a2b9e 100%)`,
              backgroundSize: "200% 200%"
            }} 
          />
          
          <div className="relative z-10 p-10 md:p-20 text-center text-white">
            <h3 className="text-3xl md:text-5xl font-light mb-8 leading-tight">
              ¿Lista para ver <span className="italic">tu mejor versión</span>?
            </h3>
            <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Agenda tu valoración gratuita hoy mismo. Analizaremos tu caso y diseñaremos el protocolo láser ideal para tus objetivos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={generateWhatsAppURL("contact")}
                className="bg-white text-purple-700 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-white/20 transition-all flex items-center gap-3"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                Agendar Valoración Gratis
              </motion.a>
              
              <a 
                href="tel:+573224042286"
                className="text-white/90 hover:text-white font-medium flex items-center gap-2 transition-colors border-b border-white/20 hover:border-white pb-1"
              >
                O llámanos: +57 322 4042286
              </a>
            </div>
          </div>

          {/* Decoración abstracta en el banner */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />
        </motion.div>

        {/* FOOTER SIMPLE */}
        <div className="mt-32 pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-light tracking-tighter text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>
              Perfe<span style={{ color: accentPurple }}>stetic</span>
            </h4>
            <p className="text-slate-400 text-sm mt-1">Medicina Estética & Láser de Alta Precisión.</p>
          </div>
          
          <div className="flex gap-8 text-slate-400 text-sm uppercase tracking-widest font-bold">
            <a href="#services" className="hover:text-purple-600 transition-colors">Tratamientos</a>
            <a href="#gallery" className="hover:text-purple-600 transition-colors">Resultados</a>
            <a href="#testimonials" className="hover:text-purple-600 transition-colors">Opiniones</a>
          </div>

          <p className="text-slate-400 text-xs tracking-widest">
            © 2026 PERFESTETIC. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </section>
  );
}