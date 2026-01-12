// components/ui/focus-service-cards.tsx
"use client";

import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export type FocusServiceCard = {
  title: string;
  desc: string;
  src: string;
};

export function FocusServiceCards({ cards }: { cards: FocusServiceCard[] }) {
  const [hovered, setHovered] = React.useState<number | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  // Detectar si es mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mapeo exacto de tu lógica de diseño a clases de Tailwind (4 columnas para llenar el ancho)
  const gridLayoutClasses = [
    "md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2", // div1 (Top Left)
    "md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-2", // div2 (Top Right)
    "md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-5", // div3 (Left Tall)
    "md:col-start-4 md:col-end-5 md:row-start-2 md:row-end-5", // div4 (Right Tall)
    "md:col-start-2 md:col-end-4 md:row-start-2 md:row-end-3", // div5 (Center Small)
    "md:col-start-2 md:col-end-4 md:row-start-3 md:row-end-5", // div6 (Center Big)
  ];

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 w-full h-full min-h-[800px]"
      onMouseLeave={() => !isMobile && setHovered(null)}
    >
      {cards.slice(0, 6).map((card, index) => {
        const isHovered = hovered === index;
        const isDimmed = hovered !== null && !isHovered;

        return (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => !isMobile && setHovered(index)}
            className={cn(
              "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5",
              isMobile ? "transition-all duration-300" : "transition-all duration-500",
              gridLayoutClasses[index],
              "min-h-[200px]",
              // Desktop: efecto hover tradicional
              !isMobile && isHovered && "ring-2 ring-[#000b18]/40 z-10 scale-[1.01] shadow-[0_0_40px_rgba(35,173,207,0.2)]",
              !isMobile && isDimmed && "opacity-40 blur-[2px]"
            )}
          >
            {/* Imagen con Overlay */}
            <Image
              src={card.src}
              alt={card.title}
              fill
              className={cn(
                "object-cover",
                isMobile 
                  ? "transition-transform duration-300" // Mobile: sin zoom
                  : "transition-transform duration-700 ease-in-out group-hover:scale-110" // Desktop: zoom al hover
              )}
            />
            
            {/* Gradiente - Más visible en mobile */}
            <div className={cn(
              "absolute inset-0 transition-opacity duration-300",
              isMobile
                ? "bg-gradient-to-t from-[#004898]/80 via-[#000b18]/50 to-transparent" // Mobile: gradiente siempre visible
                : "bg-gradient-to-t from-[#004898] via-[#000b18]/40 to-transparent" // Desktop: gradiente normal
            )} />

            {/* Contenido */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <div className={cn(
                "transition-all duration-300",
                isMobile
                  ? "" // Mobile: sin transformación
                  : "transform group-hover:-translate-y-2" // Desktop: sube al hover
              )}>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className={cn(
                  "text-sm text-white/60 leading-relaxed line-clamp-3",
                  isMobile
                    ? "opacity-100" // Mobile: descripción siempre visible
                    : "transition-opacity duration-300 opacity-0 group-hover:opacity-100" // Desktop: aparece al hover
                )}>
                  {card.desc}
                </p>
              </div>
            </div>

            {/* Indicador de interactividad solo en mobile */}
            {isMobile && (
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </motion.article>
        );
      })}
    </div>
  );
}