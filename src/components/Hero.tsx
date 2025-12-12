"use client";

import { colors } from "@/config/colors";
import Image from "next/image";
import { generateWhatsAppURL } from "@/utils/whatsapp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-pink-100 via-white to-purple-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/*izquierda*/}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/*logo*/}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div
                className="relative w-40 h-40 sm:w-44 sm:h-44 lg:w-52 lg:h-52 
                animate-logo-float 
                hover:rotate-3 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-full blur-xl bg-pink-300 opacity-40 -z-10 animate-pulse"></div>

                <Image
                  src="/logoperfesthetic.jpeg"
                  alt="Perfestetic Logo"
                  width={300}
                  height={200}
                  className="hero-logo h-32 sm:h-40 lg:h-48 w-32 sm:w-40 lg:w-48 object-cover rounded-full shadow-lg"
                  priority
                />
              </div>
            </div>

            {/* Línea decorativa */}
            <div
              className="w-24 h-1 mx-auto lg:mx-0 rounded-full mb-8"
              style={{ backgroundColor: colors.secondary }}
            ></div>

            {/* TITULOS */}
            <div className="mb-10 animate-slide-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-[#4b2c4f] font-lipolisis leading-tight">
                Lipólisis Laser | Solución definitiva para la grasa localizada
              </h2>

              <p className="text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 text-[#5c4a5e] opacity-90">
                Eliminación de grasa localizada sin cirugía, procedimiento
                seguro con tecnología láser médica que elimina adiposidad
                localizada sin dolor, sin incapacidad y con resultados desde la
                primera sesión.
              </p>
            </div>

            {/* WhatsApp Button - Botón mejorado */}
            <div className="flex justify-center lg:justify-start">
              <a
                href={generateWhatsAppURL("hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-whatsapp-btn relative overflow-hidden text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 text-lg w-full sm:w-auto justify-center"
                style={{ backgroundColor: colors.whatsapp }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.whatsappHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.whatsapp)
                }
              >
                <span className="hero-whatsapp-btn__glow" aria-hidden />
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Agenda tu evaluación por WhatsApp
              </a>
            </div>
          </div>

          {/* DERECHA — FOTO DOCTORA */}
          <div className="lg:w-1/2 flex justify-center animate-fade-in-slow">
            <div
              className="
                relative 
                w-[300px] h-[450px] 
                sm:w-[340px] sm:h-[500px] 
                lg:w-[380px] lg:h-[560px]
                rounded-3xl overflow-hidden shadow-2xl
              "
            >
              {/* Glow detrás de la foto */}
              <div
                className="
                  absolute inset-0 -z-10 
                  bg-pink-200 blur-3xl opacity-40
                  animate-pulse-slow
                "
              ></div>

              {/* Imagen */}
              <Image
                src="/adel.jpeg"
                alt="Dra. Adel"
                fill
                className="object-cover rounded-3xl scale-[1.07] transition-all duration-700"
              />

              {/* NOMBRE */}
              <div
                className="
                absolute bottom-4 left-1/2 -translate-x-1/2 
                bg-white/85 backdrop-blur-md 
                px-6 py-2 rounded-full shadow-md 
                text-pink-700 font-semibold text-lg 
                animate-fade-up
              "
              >
                Dra. Adel
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DECORATIVOS */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
    </section>
  );
}
