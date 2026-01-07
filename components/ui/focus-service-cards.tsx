"use client";

import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";

export type FocusServiceCard = {
  title: string;
  desc: string;
  src: string;
};

type Props = {
  cards: FocusServiceCard[];
  className?: string;
};

export function FocusServiceCards({ cards, className }: Props) {
  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <div
      className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}
      onMouseLeave={() => setHovered(null)}
    >
      {cards.map((card, index) => {
        const isHovered = hovered === index;
        const isDimmed = hovered !== null && !isHovered;

        return (
          <article
            key={card.title}
            onMouseEnter={() => setHovered(index)}
            className={cn(
              // tamaño 4:3
              "group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10",
              // transiciones suaves
              "transition-all duration-300 ease-out will-change-transform",
              // estado normal
              "bg-white/5",
              // hover = sombra suave (no brusca)
              isHovered && "shadow-[0_18px_50px_rgba(0,0,0,0.55)] -translate-y-0.5 scale-[1.05]",
              // enfoque suave: atenua los demás
              isDimmed && "opacity-70 blur-[0.5px] saturate-75"
            )}
          >
            {/* Imagen / icono de fondo */}
            <Image
              src={card.src}
              alt={card.title}
              fill
              priority={false}
              className={cn(
                "object-cover",
                "transition-transform duration-500 ease-out",
                // zoom sutil al hover
                isHovered ? "scale-[1.06]" : "scale-100"
              )}
            />

            {/* Overlay para legibilidad */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

            {/* Contenido inferior: título + desc animados */}
            <div className="absolute inset-x-0 bottom-0 p-5">
              {/* Contenedor que sube suave */}
              <div className="transition-transform duration-300 ease-out group-hover:-translate-y-2">
                <h3 className="text-lg font-extrabold tracking-tight text-white drop-shadow">
                  {card.title}
                </h3>

                {/* Descripción aparece “subiendo” dentro de la tarjeta */}
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed text-white/75",
                    "transition-all duration-300 ease-out",
                    // oculto por defecto
                    "opacity-0 translate-y-2 max-h-0 overflow-hidden",
                    // visible al hover
                    "group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-24"
                  )}
                >
                  {card.desc}
                </p>
              </div>
            </div>

            {/* borde glow sutil al hover */}
            <div
              className={cn(
                "pointer-events-none absolute inset-0 rounded-2xl",
                "ring-1 ring-inset ring-white/10",
                "transition-all duration-300",
                isHovered && "ring-white/20"
              )}
            />
          </article>
        );
      })}
    </div>
  );
}
