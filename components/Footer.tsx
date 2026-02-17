"use client";

import { Mail, Phone, MapPin, Instagram, Music2, MessageCircle, ArrowUp, Globe2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/site";
import { SmoothLink } from "@/components/ui/smooth-link";



export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030712] border-t border-white/5 overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#23ADCF]/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 md:pt-24 pb-8 md:pb-12">
        {/* Grid Principal */}
        <div className="grid gap-x-8 gap-y-12 lg:grid-cols-4 md:grid-cols-2 mb-16">

          {/* Columna 1 – Branding & Manifiesto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start space-y-6"
          >
            <div className="space-y-4 w-full">
              <p className="text-3xl md:text-2xl font-display font-bold">
                <span className="text-white">Owly</span>
                <span className="bg-gradient-to-r from-[#23ADCF] to-[#0062cc] bg-clip-text text-transparent">Dev</span>
              </p>
              <p className="text-sm md:text-sm leading-relaxed text-white/50 max-w-xs">
                Diseñamos y desarrollamos productos digitales para quienes no se conforman con lo ordinario.
                <span className="text-white/80 block mt-2 italic font-medium">“Dinos tu marca, te daremos tu hogar”</span>
              </p>
            </div>

            {/* Badge de disponibilidad */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/5 border border-green-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-green-500/80">
                Cupos disponibles Q1 2026
              </span>
            </div>
          </motion.div>

          {/* Columna 2 – Navegación */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#23ADCF]" />
              Explorar
            </h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-4 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <SmoothLink
                    href={`#${item.id}`}
                    className="text-white/40 hover:text-[#23ADCF] transition-all duration-300 flex items-center gap-2 group py-1"
                  >
                    <span className="hidden md:block h-px w-0 bg-[#23ADCF] transition-all duration-300 group-hover:w-3" />
                    {item.label}
                  </SmoothLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 – Expertise */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 flex items-center gap-2">
              <Globe2 className="w-3.5 h-3.5 text-[#23ADCF]" />
              Soluciones
            </h4>
            <ul className="space-y-4 md:space-y-3 text-sm text-white/40">
              {["Diseño Web de Élite",
                "Ecosistemas Discord a Medida",
                "Ecommerce de Alta Conversión",
                "Auditoría Técnica de UX/UI"].map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#23ADCF]/20" />
                    {service}
                  </li>
                ))}
            </ul>
          </div>

          {/* Columna 4 – Contacto */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">Conectemos</h4>
            <div className="flex flex-col gap-5">
              <a
                href="mailto:owlydev.team@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] active:scale-[0.98] transition-all"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#23ADCF]/10 flex items-center justify-center group-hover:bg-[#23ADCF]/20">
                  <Mail className="w-5 h-5 text-[#23ADCF]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] uppercase text-white/40 font-black tracking-wider">Escríbenos</p>
                  <p className="text-sm text-white/80 truncate font-medium">owlydev.team@gmail.com</p>
                </div>
              </a>

              <a
                href="https://tiktok.com/@owlydev"
                className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] active:scale-[0.98] transition-all"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#23ADCF]/10 flex items-center justify-center group-hover:bg-[#23ADCF]/20">
                  <Music2 className="w-5 h-5 text-[#23ADCF]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] uppercase text-white/40 font-black tracking-wider">TikTok</p>
                  <p className="text-sm text-white/80 truncate font-medium">@owlydev</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Línea final - Muy optimizada para móvil */}
        <div className="pt-8 border-t border-white/5 flex flex-col-reverse md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-[10px] text-white/20 uppercase tracking-[0.2em] font-medium">
            <p>© {new Date().getFullYear()} OwlyDev</p>
            <p className="flex items-center gap-1.5">
              Hecho con <span className="text-[#23ADCF] animate-pulse">💙</span> en Latinoamerica
            </p>
          </div>

          <div className="flex items-center gap-8 w-full md:w-auto justify-center">
            <div className="flex gap-6 text-[10px] text-white/40 uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileTap={{ scale: 0.8 }}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center active:border-[#23ADCF]/50 transition-all"
            >
              <ArrowUp className="w-5 h-5 text-white/40" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}