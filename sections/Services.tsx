import { services } from "@/lib/site";
import { FocusServiceCards } from "@/components/ui/focus-service-cards";

export default function Services() {
  const cards = services.map((s) => ({
    title: s.title,
    desc: s.desc,
    src: (s as any).img, // si ya tipaste services con "img", quita el "as any"
  }));

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-black py-24"
    >

      <div className="mx-auto max-w-6xl px-4 py-16">
        <br />
        <h2 className="text-3xl font-extrabold text-white">Servicios</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Lo que construyo para que tu producto se vea pro y funcione mejor.
        </p>

        <div className="mt-8">
          <FocusServiceCards cards={cards} />
        </div>
      </div>
    </section>
  );
}
