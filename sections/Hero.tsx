"use client";

import { Suspense, lazy } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ArrowRight, Rocket } from "lucide-react";

const AnimatedBackground = lazy(() => import("@/components/ui/animated-background"));


export default function Hero() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      // CAMBIO: pt-36 para dar aire superior y pb-24 para separar del indicador inferior
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#0A0F1C] px-6 sm:px-8 lg:px-16 xl:px-8 pt-28 pb-20 md:pt-24 lg:pt-20"
    >
      {/* Background & Effects */}
      <Suspense fallback={<div className="absolute inset-0 bg-[#0A0F1C]" />}>
        <AnimatedBackground />
      </Suspense>

      <div className="relative z-20 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Columna Izquierda (Texto) */}
          <div className="flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left md:space-y-6 xl:space-y-8">

            {/* Badge de Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#BDE8F5]/30 bg-[#BDE8F5]/5 px-4 py-2 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#BDE8F5] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#BDE8F5]" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#BDE8F5]">
                +47 proyectos entregados en 2025
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-4xl xl:text-6xl">
                Desarrollo de <span className="text-[#23ADCF]">Software</span> y <br className="hidden lg:block xl:hidden 2xl:block" />
                <span className="bg-gradient-to-r from-[#23ADCF] to-[#0062cc] bg-clip-text text-transparent">
                  Landing Pages Profesionales
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl font-jakarta text-base text-white/60 md:text-lg xl:text-xl leading-relaxed"
            >
              Sin procesos largos. Sin estafas. Solo resultados medibles en 30 días. Desarrollo de alto rendimiento con garantía de velocidad.
            </motion.p>

            {/* Botones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex w-full flex-col items-center justify-center lg:justify-start gap-3 sm:flex-row sm:gap-4"
            >
              <a
                href="#portfolio"
                onClick={(e) => { e.preventDefault(); scrollToId("portfolio"); }}
                title="Ver casos reales de éxito"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#23ADCF] to-[#0062cc] px-6 py-3 xl:px-8 xl:py-4 font-bold text-white shadow-xl transition-all hover:scale-[1.02] active:scale-95 sm:w-auto text-sm xl:text-base"
              >
                Ver casos reales
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToId("contact"); }}
                title="Solicitar asesoría gratis y revisión de negocio"
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 xl:px-8 xl:py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95 sm:w-auto text-sm xl:text-base"
              >
                <Rocket className="h-5 w-5 text-[#23ADCF]" />
                Asesoría gratis
              </a>
            </motion.div>
          </div>

          {/* Columna Derecha (Imagen) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            {/* Contenedor con aspect ratio proporcional a la imagen original (687x632) */}
            <div className="relative w-full max-w-[85%] sm:max-w-[65%] lg:max-w-[85%] xl:max-w-full aspect-[687/632] mx-auto lg:mr-0">
              <Image
                src="/images/hero-image.webp"
                alt="OwlyDev Software Development and Landing Pages"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 1024px) 85vw, (max-width: 1280px) 40vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Z-30 y ajustado para no chocar con las tarjetas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        // CAMBIO: bottom-6 para dar más espacio y sm:block para tu ancho de 639px
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block z-30 pointer-events-none"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">Descubre</span>
          <div className="flex h-7 w-4 justify-center rounded-full border border-white/10 p-1 bg-[#0A0F1C]/50 backdrop-blur-md">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-1 w-1 rounded-full bg-[#BDE8F5]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}