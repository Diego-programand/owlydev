import DemosCarousel from "@/components/DemosCarousel";

export default function Demos() {
  return (
    <section
      id="demos"
      className="scroll-mt-24 min-h-[100svh] flex flex-col justify-center"
    >
      {/* contenedor con menos margen lateral */}
      <div className="w-full px-4 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-display text-3xl font-extrabold text-white">
            Demos
          </h2>
          <p className="mt-2 text-white/70">
            Prototipos navegables para mostrar estilo y arquitectura.
          </p>
        </div>

        {/* Carrusel casi a todo lo ancho */}
        <div className="mt-10">
          <DemosCarousel />
        </div>

              <p className="mt-2 px-2 text-xs text-white/50">
        Hover sobre una card (centrada) para pausar suavemente.
      </p>
      </div>
    </section>
  );
}
