"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden min-h-[98svh] max-h-[99svh] flex items-center bg-[#0A111A]"
    >
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url("/Background-Blue-Patterns.webp")`,
          filter: 'brightness(0.6) hue-rotate(20deg) opacity(1)'
        }}
      />
      <div className="absolute inset-0 bg-[#0b1220]/80 backdrop-blur-[3px]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_25%_45%,rgba(26, 35, 37, 0.12),transparent_60%)]" />

      {/* ✅ Imagen absoluta: “sale” por la izquierda */}
      <div className="group absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block
                pointer-events-auto
                w-[70vw] h-[70vh]">
        <div
          className={[
            "relative",
            // tamaño responsive (ajusta si quieres)
            "w-[56vw] max-w-[50vw] min-w-[45vw]",
            // ✅ sacar del lateral: se ve aprox 75–80%
            "-translate-x-[8%]",
            "-translate-y-[-10%]",
            // rotación / estética
            "rotate-[-9deg]",
            "origin-center",                  // al frente

          ].join(" ")}
        >
          {/* halo */}
          <div className="absolute -inset-10 -z-10 rounded-[48px] bg-[radial-gradient(closest-side,rgba(35,173,207,0.18),transparent_72%)] blur-2xl" />

          {/* panel */}
          <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_50%_0%,rgba(255,255,255,0.10),transparent_55%)]" />

            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/demos/landingPageExample.png"
                alt="OwlyDev — preview"
                fill
                priority
                className="object-cover scale-100 object-top "
                sizes="(min-width: 1024px) 900px, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Contenido: reservamos espacio a la izquierda para que el texto no sea tapado */}
      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-12">
          {/* Columna vacía para “colchón” (evita que la imagen tape el texto) */}
          <div className="hidden md:block md:col-span-5 lg:col-span-6" />

          {/* Texto */}
          <div className="md:col-span-7 lg:col-span-6 space-y-6">
            <p className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
              {site.name}
            </p>

            <h1 className="font-display text-3xl font-medium leading-tight text-white md:text-5xl">
              Diseño moderno + desarrollo serio para tu presencia digital.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              {site.tagline}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                className="rounded-full bg-[#23609b] hover:bg-[#0062cc]/90"
                onClick={() => scrollTo("demos")}
              >
                Ver demos
              </Button>

              <Button
                variant="outline"
                className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                onClick={() => scrollTo("services")}
              >
                Servicios
              </Button>
            </div>

            <div className="flex items-center gap-3 text-sm text-white/60">
              <span className="h-2 w-2 rounded-full bg-[#23ADCF]" />
              Performance • UX • Conversión
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
