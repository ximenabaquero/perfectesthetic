"use client";

import { motion } from "framer-motion";
import { generateWhatsAppURL } from "@/utils/whatsapp";
import Image from "next/image";

type ChatMessage = {
  name: string;
  time: string;
  text: string;
  highlight: string;
  side: "left" | "right";
};

const messages: ChatMessage[] = [
  {
    name: "Carolina G.",
    time: "Hoy 10:14 a. m.",
    text: "18 días después y el resultado es genial. Me siento feliz frente al espejo, la cintura se marcó un montón.",
    highlight: "18 días después y el resultado es genial",
    side: "left",
  },
  {
    name: "María P.",
    time: "Ayer 7:52 p. m.",
    text: "Gracias por la seguridad y acompañamiento. No sentí dolor y ya veo la piel más firme desde la primera sesión.",
    highlight: "Gracias por la seguridad y acompañamiento",
    side: "left",
  },
  {
    name: "Laura C.",
    time: "Lun 4:21 p. m.",
    text: "Me siento feliz frente al espejo. La grasa localizada bajó y el abdomen está más liso sin incapacidad.",
    highlight: "Me siento feliz frente al espejo",
    side: "left",
  },
  {
    name: "Perfestetic",
    time: "Lun 4:23 p. m.",
    text: "¡Qué alegría leer esto! Seguimos acompañándote para mantener los resultados y prevenir fibrosis.",
    highlight: "Seguimos acompañándote",
    side: "right",
  },
];

const Highlighted = ({ text, highlight }: { text: string; highlight: string }) => {
  if (!highlight || !text.includes(highlight)) return <>{text}</>;
  const parts = text.split(highlight);
  return (
    <>
      {parts[0]}
      <span className="font-semibold text-[#8a2b9e]">{highlight}</span>
      {parts[1]}
    </>
  );
};

export default function Testimonials() {
  const accentPurple = "#b14ccf";

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabecera Unificada */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Testimonios en <span className="italic" style={{ color: accentPurple }}>WhatsApp</span>
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
            Experiencias reales compartidas por nuestras pacientes sobre sus procesos y resultados.
          </motion.p>
        </div>

        {/* Contenedor del Chat Personalizado */}
        <div className="mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[32px] overflow-hidden shadow-2xl border border-purple-100 bg-white"
          >
            {/* Header del Chat - AHORA MORADO/ROSADO */}
            <div 
              className="flex items-center gap-3 px-6 py-5 text-white"
              style={{ background: `linear-gradient(135deg, ${accentPurple} 0%, #d471e0 100%)` }}
            >
              <div className="h-11 w-11 rounded-full overflow-hidden bg-white p-0.5 border border-white/30">
                <Image
                  src="/logoperfesthetic.jpeg"
                  alt="Perfestetic"
                  width={44}
                  height={44}
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm md:text-base leading-tight">Perfestetic Medical</p>
                <p className="text-[11px] text-white/90 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 bg-pink-300 rounded-full animate-pulse" />
                  en línea para ti
                </p>
              </div>
            </div>

            {/* Cuerpo del Chat - FONDO ROSADO SUTIL CON PATRÓN */}
            <div 
              className="p-4 md:p-10 space-y-6 min-h-[450px] relative"
              style={{ backgroundColor: "#fdf6fb" }}
            >
              {/* Patrón de fondo opaco */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat" />

              {messages.map((msg, idx) => (
                <motion.div 
                  key={`${msg.name}-${idx}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex relative z-10 ${msg.side === "right" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`relative max-w-[85%] md:max-w-[70%] px-5 py-3.5 rounded-2xl shadow-sm border ${
                      msg.side === "right" 
                        ? "bg-[#fce7f3] border-pink-200 text-gray-800 rounded-tr-none" 
                        : "bg-white border-gray-100 text-gray-800 rounded-tl-none"
                    }`}
                  >
                    <p className={`text-[11px] font-bold mb-1 uppercase tracking-wider ${msg.side === "right" ? "text-pink-600" : "text-[#b14ccf]"}`}>
                      {msg.name}
                    </p>
                    <p className="text-sm md:text-base leading-relaxed text-slate-700">
                      <Highlighted text={msg.text} highlight={msg.highlight} />
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1.5">
                      <p className="text-[10px] text-gray-400 font-medium">
                        {msg.time}
                      </p>
                      {msg.side === "right" && (
                        <svg className="w-3 h-3 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.41 5.93l-1.42-1.42-12.03 12.03-5.33-5.32-1.42 1.42 6.75 6.75zM17.41 5.93l-1.42-1.42-6.04 6.04 1.42 1.42z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer / CTA - ROSADO CLARO */}
            <div className="bg-gradient-to-r from-[#fdf6fb] to-white border-t border-purple-50 px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-slate-800 font-medium text-base">¿Tienes dudas sobre tu proceso?</p>
                <p className="text-slate-500 text-sm">Resuelve tus inquietudes directamente con nosotros.</p>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={generateWhatsAppURL("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full px-10 py-4 text-white font-bold shadow-xl transition-all"
                style={{ background: `linear-gradient(135deg, ${accentPurple} 0%, #d471e0 100%)` }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                </svg>
                Escríbenos ahora
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}