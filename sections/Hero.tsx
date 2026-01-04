"use client";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
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
                document.getElementById("demos")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver demos
            </Button>

            <Button
              variant="outline"
              className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
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
