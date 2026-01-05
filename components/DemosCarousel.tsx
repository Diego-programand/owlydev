"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { demos } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  AnimatePresence,
  motion,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";

/* ----------------------------- Card UI ----------------------------- */

function DemoCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      {/* Placeholder (más alto) */}
      <div className="relative aspect-[16/10] w-full bg-black/20">
        <div className="flex h-full w-full items-center justify-center text-sm text-white/50">
          Screenshot pendiente (WebP)
        </div>

        {/* Overlay CTA al hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
            <span className="text-xs text-white/80">Ver demo</span>
            <Button
              asChild
              className="pointer-events-auto h-9 rounded-full bg-[#23ADCF] px-4 text-black hover:bg-[#23ADCF]/90"
            >
              <Link href={href}>Abrir</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-lg font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{desc}</p>
      </div>
    </div>
  );
}

/* ------------------------- Desktop Infinite ------------------------ */

function EdgeAwareCard({
  title,
  desc,
  href,
  containerRef,
  onPauseRequest,
}: {
  title: string;
  desc: string;
  href: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onPauseRequest: (pause: boolean) => void;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  // 0 = centro, 1 = borde
  const centerNRef = useRef(1);

  useEffect(() => {
    const tick = () => {
      const container = containerRef.current;
      const card = cardRef.current;
      if (!container || !card) return;

      const c = container.getBoundingClientRect();
      const r = card.getBoundingClientRect();

      const centerX = c.left + c.width / 2;
      const cardCenterX = r.left + r.width / 2;

      const dist = Math.abs(cardCenterX - centerX);
      const maxDist = c.width / 2;

      // 0 (centro) -> 1 (borde)
      const n = Math.min(dist / maxDist, 1);
      centerNRef.current = n;

      // escala: baja al borde
      const s = 1 - n * 0.14; // 14% menos en borde (ajustable)
      setScale(s);
    };

    const id = window.setInterval(tick, 60);
    return () => window.clearInterval(id);
  }, [containerRef]);

  const opacity = 1 - (1 - scale) * 1.4; // oscurece un poco al borde

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className="shrink-0"
      onMouseEnter={() => {
        // Pausar SOLO si está “lo suficientemente centrada”
        const n = centerNRef.current;
        const threshold = 0.38; // ↓ más estricto, ↑ pausa más fácil
        if (n < threshold) onPauseRequest(true);
      }}
      onMouseLeave={() => onPauseRequest(false)}
    >
      {/* Tamaño grande y responsivo */}
      <div className="w-[clamp(380px,48vw,820px)]">
        <DemoCard title={title} desc={desc} href={href} />
      </div>
    </motion.div>
  );
}

function DesktopInfiniteDemos() {
  const items = demos;
  const doubled = useMemo(() => [...items, ...items], [items]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);

  // velocidad base (px/seg)
  const baseSpeed = 160;

  // speed actual y objetivo (para freno suave)
  const speedCurrent = useRef(baseSpeed);
  const speedTarget = useRef(baseSpeed);

  useAnimationFrame((t, delta) => {
    // suavidad del freno/aceleración (0.08–0.18)
    const ease = 0.12;

    // interpolación suave hacia el objetivo (inercia)
    speedCurrent.current += (speedTarget.current - speedCurrent.current) * ease;

    const moveBy = (speedCurrent.current * delta) / 1000;
    x.set(x.get() - moveBy);

    const track = trackRef.current;
    if (!track) return;

    // loop perfecto: cuando recorres media pista, vuelves a 0
    const halfWidth = track.scrollWidth / 2;
    if (Math.abs(x.get()) >= halfWidth) {
      x.set(0);
    }
  });

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden pt-4">
      {/* Sombras laterales (efecto entrar/salir) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#16263a] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#16263a] to-transparent z-10" />

      {/* Track */}
      <motion.div ref={trackRef} style={{ x }} className="flex gap-10 py-6">
        {doubled.map((d, idx) => (
          <EdgeAwareCard
            key={`${d.title}-${idx}`}
            title={d.title}
            desc={d.desc}
            href={d.href}
            containerRef={containerRef}
            onPauseRequest={(pause) => {
              // pausa suave: target a 0
              // Si quieres “pausa premium” (casi quieto): cambia 0 por 18 o 25
              speedTarget.current = pause ? 18 : baseSpeed;
            }}
          />
        ))}
      </motion.div>


    </div>
  );
}

/* ------------------------------ Main ------------------------------- */

export default function DemosCarousel() {
  const items = demos;

  // Mobile slider
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <div className="w-full">
      {/* Desktop */}
      <div className="hidden md:block">
        <DesktopInfiniteDemos />
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={items[index].href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
              >
                <DemoCard
                  title={items[index].title}
                  desc={items[index].desc}
                  href={items[index].href}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Botones circulares */}
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={prev}
              className="h-10 w-10 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10"
              aria-label="Anterior"
            >
              ‹
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={[
                    "h-2.5 w-2.5 rounded-full transition",
                    i === index ? "bg-[#23ADCF]" : "bg-white/20",
                  ].join(" ")}
                  aria-label={`Ir al demo ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="h-10 w-10 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10"
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
