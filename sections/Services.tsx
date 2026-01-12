// components/sections/Services.tsx
import { services } from "@/lib/site";
import { FocusServiceCards } from "@/components/ui/focus-service-cards";
import { Reveal } from "@/components/ui/reveal";

export default function Services() {
  // Mapeamos los 5 servicios + 1 extra para completar el Bento Grid de 6 espacios
  const allCards = [
    ...services,
    {
      title: "Soluciones a Medida",
      desc: "¿Tienes una idea única? La convertimos en código sólido.",
      img: "/api/placeholder/400/320" // Reemplaza por una imagen real
    }
  ].map((s) => ({
    title: s.title,
    desc: s.desc,
    src: (s as any).img || (s as any).src,
  }));

  return (
    <section id="services" className="relative scroll-mt-24 bg-[#030712] py-24 overflow-hidden">
      {/* Estrellas de fondo sutiles */}
      <div className="absolute inset-0 bg-stars opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="relative flex flex-col items-center text-center mb-12 md:mb-12">
          {/* Decoración de fondo para inmersión (Halo de luz sutil) */}
          <div className="absolute -top-24 -z-10 h-[300px] w-[600px] bg-[#23ADCF]/5 blur-[120px] rounded-full" />

          {/* Badge de sección - Refuerza la organización */}
          <Reveal delay={0.2} direction="down">
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#23ADCF]/20 bg-[#23ADCF]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#23ADCF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#23ADCF] animate-pulse" />
                Especialidades
              </span>
            </div>
          </Reveal>

          {/* Título Estilo Hero */}
          <Reveal delay={0.4}>
            <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl max-w-4xl mx-auto">
              Soluciones diseñadas para <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[#23ADCF] to-[#0062cc] bg-clip-text text-transparent">
                liderar el mercado digital
              </span>
            </h2>
          </Reveal>

          {/* Subtítulo */}
          <Reveal delay={0.6}>
            <p className="mt-8 mx-auto max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl font-light">
              Combinamos ingeniería de software de alto nivel con una estética refinada.
              Construimos herramientas robustas que escalan al ritmo de tu empresa.
            </p>
          </Reveal>

          {/* Línea divisoria minimalista */}
          <Reveal delay={0.8} direction="scale">
            <div className="mt-12 h-px w-24 bg-gradient-to-r from-transparent via-[#23ADCF]/50 to-transparent" />
          </Reveal>
        </div>

        {/* Cards con reveal */}
        <Reveal delay={0.4}>
          <div className="min-h-[800px] w-full">
            <FocusServiceCards cards={allCards} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}