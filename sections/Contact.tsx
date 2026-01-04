import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-extrabold text-white">Contacto</h2>
          <p className="mt-2 text-white/70">
            Cuéntame qué necesitas y lo aterrizamos a un plan claro.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <input
              className="h-11 rounded-xl border border-white/10 bg-[#16263a] px-4 text-white outline-none placeholder:text-white/40"
              placeholder="Nombre"
            />
            <input
              className="h-11 rounded-xl border border-white/10 bg-[#16263a] px-4 text-white outline-none placeholder:text-white/40"
              placeholder="Email"
            />
            <input
              className="h-11 rounded-xl border border-white/10 bg-[#16263a] px-4 text-white outline-none placeholder:text-white/40"
              placeholder="Asunto"
            />
          </div>

          <textarea
            className="mt-3 min-h-28 w-full rounded-xl border border-white/10 bg-[#16263a] p-4 text-white outline-none placeholder:text-white/40"
            placeholder="Mensaje"
          />

          <div className="mt-4 flex flex-wrap gap-3">
            <Button className="rounded-full bg-[#0062cc] hover:bg-[#0062cc]/90">
              Enviar
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
            >
              WhatsApp (luego lo conectamos)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
