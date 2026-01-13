// components/ui/service-card.tsx
"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  desc: string;
  img: string;
  index: number;
}

export function ServiceCard({ title, desc, img, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isInCenter, setIsInCenter] = useState(false);

  // Detectar si es mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Detectar si la card está en el centro del viewport (solo mobile)
  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Centro del viewport
      const viewportCenter = viewportHeight / 2;
      
      // Centro de la card
      const cardCenter = rect.top + rect.height / 2;
      
      // Margen de tolerancia (30% del viewport)
      const tolerance = viewportHeight * 0.3;
      
      // La card está en el centro si su centro está cerca del centro del viewport
      const inCenter = Math.abs(cardCenter - viewportCenter) < tolerance;
      
      setIsInCenter(inCenter);
    };

    handleScroll(); // Check inicial
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // En mobile, usar isInCenter; en desktop, usar hover nativo
  const isActive = isMobile ? isInCenter : undefined; // undefined = CSS hover nativo

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-[#030712] h-full flex flex-col border cursor-pointer transition-all duration-300",
        // Estados condicionales para mobile
        isMobile && isActive
          ? "border-[#0062cc]/50 shadow-lg shadow-[#0062cc]/50"
          : "border-white/20 hover:shadow-lg hover:shadow-[#0062cc]/50 hover:border-[#0062cc]/40"
      )}
    >
      {/* Imagen con zoom */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={img}
          alt={title}
          fill
          className={cn(
            "object-cover transition-transform duration-700 ease-out",
            isMobile && isActive
              ? "scale-110"
              : "group-hover:scale-110"
          )}
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <h3
          className={cn(
            "font-display text-xl md:text-2xl font-bold mb-3 transition-colors duration-300",
            isMobile && isActive
              ? "text-[#0062cc]"
              : "text-white group-hover:text-[#0062cc]"
          )}
        >
          {title}
        </h3>
        <p className="text-sm md:text-base text-white/60 leading-relaxed mb-6 flex-1">
          {desc}
        </p>

        {/* Link con flecha */}
        <div
          className={cn(
            "flex items-center gap-2 text-sm font-semibold transition-colors duration-300",
            isMobile && isActive
              ? "text-[#0062cc]"
              : "text-white group-hover:text-[#0062cc]"
          )}
        >
          <span>Ver detalles</span>
          <ArrowRight
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              isMobile && isActive
                ? "translate-x-1"
                : "group-hover:translate-x-1"
            )}
          />
        </div>
      </div>
    </motion.article>
  );
}