"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Zap, Rocket, Globe, Code2 } from "lucide-react";

const keywords = [
  { text: "100/100 PageSpeed", icon: <Zap className="w-4 h-4" /> },
  { text: "Diseño Premium", icon: <Sparkles className="w-4 h-4" /> },
  { text: "SEO Optimizado", icon: <Globe className="w-4 h-4" /> },
  { text: "Next.js & Tailwind", icon: <Code2 className="w-4 h-4" /> },
  { text: "Seguridad SSL", icon: <ShieldCheck className="w-4 h-4" /> },
  { text: "Escalabilidad Pro", icon: <Rocket className="w-4 h-4" /> },
];

export default function ServicesIntro() {
  // Combinamos para asegurar que el scroll sea infinito sin saltos
  const marqueeItems = [...keywords, ...keywords];

  return (
    <section className="relative bg-[#00101F] py-20 overflow-hidden border-y border-white/5">

      <div className="relative z-10">
        {/* Header minimalista */}
        <div className="text-center mb-12 px-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#23ADCF] font-jakarta text-[10px] font-bold uppercase tracking-[0.4em] block mb-4"
          >
            Estándares de Calidad
          </motion.span>
          <h2 className="font-display text-2xl md:text-4xl text-white/90 font-bold tracking-tight">
            Tecnología de vanguardia para <br />
            <span className="text-white">resultados exponenciales.</span>
          </h2>
        </div>

        {/* Contenedor de Cintas con Masking */}
        <div className="flex flex-col gap-4 md:gap-6 px-0 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">

          {/* Primera Cinta: Rápida y Sólida */}
          <div className="flex overflow-hidden select-none">
            <motion.div
              animate={{ x: [0, "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex flex-nowrap gap-4 items-center pr-4"
            >
              {marqueeItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md whitespace-nowrap"
                >
                  <span className="text-[#23ADCF]">{item.icon}</span>
                  <span className="text-white/80 font-jakarta text-sm font-bold tracking-wide">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Segunda Cinta: Lenta y Minimalista (Outline) */}
          <div className="flex overflow-hidden select-none">
            <motion.div
              animate={{ x: ["-50%", 0] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex flex-nowrap gap-4 items-center pr-4"
            >
              {marqueeItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-5 py-2.5 rounded-xl border border-white/5 bg-transparent whitespace-nowrap"
                >
                  <span className="text-white/20">{item.icon}</span>
                  <span className="text-white/30 font-jakarta text-sm font-medium tracking-wide">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}