import { services } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold text-white">Servicios</h2>
        <p className="mt-2 text-white/70">
          Lo que construyo para que tu producto se vea pro y funcione mejor.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
