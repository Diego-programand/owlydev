import { demos } from "@/lib/site";
import DemoCard from "@/components/DemoCard";

export default function Demos() {
  return (
    <section id="demos" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl font-extrabold text-white">Demos</h2>
        <p className="mt-2 text-white/70">
          Prototipos navegables para mostrar estilo y arquitectura.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {demos.map((d) => (
            <DemoCard
              key={d.title}
              title={d.title}
              desc={d.desc}
              href={d.href}
              // cuando tengas imágenes, descomenta y listo:
              // imageSrc={`/demos/${d.href.split("/").pop()}.webp`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
