import DemosCarousel from "@/components/DemosCarousel";

export default function Demos() {
  return (
    <section
      id="demos"
      className="scroll-mt-24 relative py-24 overflow-hidden"
    >
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url("/Background-Blue-PatternsDemos.webp")`,
          filter: "brightness(0.3) hue-rotate(10deg) opacity(0.85)",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-display text-3xl font-extrabold text-white">
            Demos
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Prototipos navegables para mostrar estilo y arquitectura.
          </p>
        </div>

        {/* Carrusel */}
        <div className="mt-12">
          <DemosCarousel />
        </div>

        <p className="mt-3 px-2 text-xs text-white/50">
          Hover sobre una card (centrada) para pausar suavemente.
        </p>
      </div>
    </section>
  );
}
