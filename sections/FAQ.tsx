// components/sections/FAQ.tsx
"use client";

import { faqs } from "@/lib/site";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles, Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 bg-[#0A111A] py-20 md:py-32 overflow-hidden"
    >
      {/* Video de fondo estático (sin parallax) */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-5"
        >
          <source src="/DemosBackground.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlays simples */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A111A] via-[#0A111A]/90 to-[#0A111A]" />

      {/* Orbes de fondo - Estáticos, sin animación */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#23ADCF]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#0062cc]/10 rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        {/* Header minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#23ADCF]/30 bg-[#23ADCF]/5 px-4 py-1.5 mb-6 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 text-[#23ADCF]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#23ADCF]">
              FAQ
            </span>
          </div>

          {/* Título */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Preguntas{" "}
            <span className="bg-gradient-to-r from-[#23ADCF] to-[#0062cc] bg-clip-text text-transparent">
              frecuentes
            </span>
          </h2>

          {/* Subtítulo */}
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Todo lo que necesitas saber antes de empezar
          </p>
        </motion.div>

        {/* Grid de FAQs */}
        <div className="grid grid-cols-1 gap-3 md:gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={cn(
                    "group relative w-full text-left rounded-xl border backdrop-blur-xl transition-all duration-300",
                    "hover:border-[#23ADCF]/40",
                    isOpen
                      ? "border-[#23ADCF]/40 bg-[#23ADCF]/5 shadow-[0_8px_32px_rgba(35,173,207,0.15)]"
                      : "border-white/10 bg-[#0A111A]/60"
                  )}
                >
                  {/* Barra de acento izquierda */}
                  <div
                    className={cn(
                      "absolute left-0 top-0 bottom-0 w-1 rounded-l-xl transition-all duration-300",
                      isOpen
                        ? "bg-gradient-to-b from-[#23ADCF] to-[#0062cc]"
                        : "bg-transparent group-hover:bg-[#23ADCF]/30"
                    )}
                  />

                  <div className="p-5 md:p-6">
                    {/* Header de la pregunta */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 md:gap-4 flex-1">
                        {/* Número */}
                        <div
                          className={cn(
                            "flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-sm md:text-base font-bold transition-all duration-300",
                            isOpen
                              ? "bg-gradient-to-br from-[#23ADCF] to-[#0062cc] text-white"
                              : "bg-white/5 text-white/50 group-hover:bg-white/10"
                          )}
                        >
                          {index + 1}
                        </div>

                        {/* Pregunta */}
                        <h3
                          className={cn(
                            "font-display text-base md:text-xl font-semibold transition-colors duration-300",
                            isOpen ? "text-white" : "text-white/90"
                          )}
                        >
                          {faq.question}
                        </h3>
                      </div>

                      {/* Ícono +/- */}
                      <div
                        className={cn(
                          "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
                          isOpen
                            ? "bg-[#23ADCF]/20 text-[#23ADCF] rotate-180"
                            : "bg-white/5 text-white/60 group-hover:bg-white/10"
                        )}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    </div>

                    {/* Respuesta con animación simple */}
                    <div
                      className={cn(
                        "grid transition-all duration-300 ease-in-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-4 md:pt-5 pl-11 md:pl-14">
                          {/* Separador */}
                          <div className="h-px bg-gradient-to-r from-[#23ADCF]/30 to-transparent mb-4" />
                          
                          {/* Texto */}
                          <p className="text-sm md:text-base text-white/70 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* CTA simple */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-white/60 mb-6">
            ¿Tienes otra pregunta?
          </p>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className={cn(
              "group inline-flex items-center gap-2 rounded-full px-8 py-3",
              "border border-[#23ADCF]/30 bg-[#23ADCF]/5",
              "text-white font-medium backdrop-blur-sm",
              "transition-all duration-300",
              "hover:border-[#23ADCF]/50 hover:bg-[#23ADCF]/10",
              "hover:shadow-[0_0_30px_rgba(35,173,207,0.3)]"
            )}
          >
            Contáctanos
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}