// components/sections/Hero.tsx
"use client";

import Image from "next/image";
import { site } from "@/lib/site";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden min-h-screen flex items-center justify-center bg-[#0A111A]"
    >
      {/* Video de fondo */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="hero-video-bg"
      >
        <source src="/HeroBackground.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#0b1220]/70 backdrop-blur-[2px] z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1220]/40 to-[#0b1220]/90 z-[2]" />

      {/* Contenido centrado */}
      <div className="relative z-10 w-full px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl space-y-8 md:space-y-10 text-center">
          {/* Badge con animación inicial */}
          <Reveal delay={0.4} direction="down">
            <div className="flex justify-center mb-0">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#23ADCF] animate-pulse" />
                {site.name}
              </p>
            </div>
          </Reveal>

          {/* Título principal con reveal */}
          <Reveal delay={0.4}>
            <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl mx-auto">
              Transformamos ideas en{" "}
              <span className="bg-gradient-to-r from-[#23ADCF] to-[#0062cc] bg-clip-text text-transparent">
                experiencias digitales
              </span>{" "}
              que convierten
            </h1>
          </Reveal>

          {/* Subtítulo */}
          <Reveal delay={0.6}>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              Diseño moderno, código limpio y enfoque real en resultados.
              <br className="hidden md:block" />
              Construimos tu presencia digital con visión a largo plazo.
            </p>
          </Reveal>

          {/* Imagen demo desktop con efecto 3D */}
          <Reveal delay={0.8} direction="scale">
            <div className="hidden md:block mx-auto max-w-5xl mt-12 group [perspective:2000px]">
              <div className={cn(
                "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5",
                "transition-all duration-700 ease-out",
                "shadow-[0_30px_90px_rgba(0,0,0,0.6)] [transform:rotateX(15deg)_rotateY(-0deg)_translateZ(0)]",
                "group-hover:[transform:rotateX(2deg)_rotateY(0deg)_translateZ(50px)] group-hover:shadow-[0_50px_120px_rgba(24,46,120,0.25)]"
              )}>
                <div className="absolute -inset-10 -z-10 rounded-[48px] bg-[radial-gradient(closest-side,rgba(35,173,207,0.15),transparent_70%)] blur-3xl" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />

                <div className="relative aspect-video w-full">
                  <Image
                    src="/HeroLandingPage.png"
                    alt="Demo OwlyDev"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 1000px, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/50 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Features badge con stagger */}
          <Reveal delay={1}>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/60 pt-6">
              {["Performance", "UX/UI", "Conversión"].map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#23ADCF]" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Imagen demo mobile */}
      <Reveal delay={0.8} direction="up">
        <div className="md:hidden absolute bottom-0 left-0 right-0 z-[3] px-4 pb-8">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="relative aspect-video w-full">
              <Image
                src="/HeroPageDemo.webp"
                alt="Demo OwlyDev"
                fill
                priority
                className="object-cover object-top"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}