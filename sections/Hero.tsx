"use client";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section
  id="hero"
  className="relative scroll-mt-24 overflow-hidden min-h-[88svh] flex items-center"
      style={{
        backgroundColor: "#0A111A",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23003671' stroke-width='1.2'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23125869'%3E%3Ccircle cx='769' cy='229' r='8'/%3E%3Ccircle cx='539' cy='269' r='8'/%3E%3Ccircle cx='603' cy='493' r='8'/%3E%3Ccircle cx='731' cy='737' r='8'/%3E%3Ccircle cx='520' cy='660' r='8'/%3E%3Ccircle cx='309' cy='538' r='8'/%3E%3Ccircle cx='295' cy='764' r='8'/%3E%3Ccircle cx='40' cy='599' r='8'/%3E%3Ccircle cx='102' cy='382' r='8'/%3E%3Ccircle cx='127' cy='80' r='8'/%3E%3Ccircle cx='370' cy='105' r='8'/%3E%3Ccircle cx='578' cy='42' r='8'/%3E%3Ccircle cx='237' cy='261' r='8'/%3E%3Ccircle cx='390' cy='382' r='8'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      {/* Overlay para controlar contraste y unificar con la paleta */}
      <div className="absolute inset-0 bg-[#16263a]/80" />

      {/* Contenido */}
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        {/* Texto */}
        <div className="space-y-5">
          <p className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            {site.name}
          </p>

          <h1 className="font-display text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Diseño moderno + desarrollo serio para tu presencia digital.
          </h1>

          <p className="text-base leading-relaxed text-white/70 md:text-lg">
            {site.tagline}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              className="rounded-full bg-[#0062cc] hover:bg-[#0062cc]/90"
              onClick={() =>
                document
                  .getElementById("demos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver demos
            </Button>

            <Button
              variant="outline"
              className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Servicios
            </Button>
          </div>

          <div className="flex items-center gap-3 text-sm text-white/60">
            <span className="h-2 w-2 rounded-full bg-[#23ADCF]" />
            Performance • UX • Conversión
          </div>
        </div>

        {/* Card visual */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
          <div className="rounded-2xl bg-[#16263a] p-5 text-white/80">
            <p className="text-sm text-white/60">Preview</p>
            <p className="mt-2 text-lg font-semibold text-white">
              “Owly” más peso que “Dev”
            </p>
            <div className="mt-4 grid gap-3">
              <div className="h-10 rounded-xl bg-white/5" />
              <div className="h-24 rounded-xl bg-white/5" />
              <div className="h-10 rounded-xl bg-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
