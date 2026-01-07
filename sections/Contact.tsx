import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black scroll-mt-24 py-24"
    >
      {/* Glow sutil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0062cc]/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-20 md:grid-cols-2">

          {/* ===================== */}
          {/* TEXTO IZQUIERDO (LIBRE) */}
          {/* ===================== */}
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-4xl font-extrabold text-white">
              Hablemos de tu proyecto
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
              Si tienes una idea, negocio o problema digital que necesita
              una solución clara, funcional y bien pensada,
              este es el punto de inicio.
            </p>

            <ul className="mt-10 space-y-6 text-sm text-white/80">
              <li className="flex items-start gap-4">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#325888]" />
                Diseño con intención, no solo apariencia
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#325888]" />
                Arquitectura pensada para crecer
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#325888]" />
                Comunicación directa y honesta
              </li>
            </ul>

            <div className="mt-12">
              <p className="text-sm text-white/50">
                ¿Prefieres algo inmediato?
              </p>

              <Button
                variant="outline"
                className="mt-3 rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                Escríbeme por WhatsApp
              </Button>
            </div>

            <div className="mt-6 flex gap-3">
              <SocialButton
                label="Instagram"
                color="#E1306C"
                href="#"
                icon={
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.506 5.506 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 13 3.504 3.504 0 0 1 12 16.5zm4.75-9.75a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25z" />
                  </svg>
                }
              />

              <SocialButton
                label="TikTok"
                color="#25F4EE"
                href="#"
                icon={
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M21 8.05a6.47 6.47 0 0 1-3.77-1.19v6.54a6.5 6.5 0 1 1-6.5-6.5c.22 0 .44.01.66.03v3.17a3.34 3.34 0 1 0 2.17 3.14V2h3.1a6.45 6.45 0 0 0 3.34 3.34z" />
                  </svg>
                }
              />

              <SocialButton
                label="WhatsApp"
                color="#25D366"
                href="#"
                icon={
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M20.52 3.48A11.78 11.78 0 0 0 12.01 0 11.8 11.8 0 0 0 1.9 17.78L0 24l6.4-1.86A11.82 11.82 0 0 0 12 24a11.8 11.8 0 0 0 8.52-20.52zm-8.52 18a9.8 9.8 0 0 1-5-1.38l-.36-.22-3.8 1.1 1.02-3.7-.24-.38A9.79 9.79 0 1 1 12 21.48zm5.38-7.28c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15s-.76.97-.93 1.17-.34.22-.64.07a8.02 8.02 0 0 1-2.36-1.45 8.83 8.83 0 0 1-1.63-2.03c-.17-.3 0-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.5h-.56a1.08 1.08 0 0 0-.78.36 3.27 3.27 0 0 0-1.02 2.43c0 1.44 1.05 2.83 1.2 3.03.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.61.7.22 1.33.19 1.83.12.56-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.56-.35z" />
                  </svg>
                }
              />
            </div>

          </div>

          {/* ===================== */}
          {/* FORMULARIO (ÚNICO RECUADRO) */}
          {/* ===================== */}
          <div className="relative">
            <div className="rounded-3xl border border-white/8 bg-[#16263a]/80 p-8 backdrop-blur-xl hover:bg-[#16263a]/90 transition-colors border-white">
              <p className="mb-6 text-xs uppercase tracking-wide text-white/40">
                Contacto
              </p>

              {/* Intereses */}
              <div className="mb-6 flex flex-wrap gap-3">
                {["Diseño Web", "Bots", "Ecommerce", "Consultoría"].map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80 transition hover:border-[#FFFFFF]/60 hover:text-white scale-100 hover:scale-[1.03]"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>

              <form className="space-y-4">
                <input
                  placeholder="Nombre"
                  className="h-11 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none placeholder:text-white/40 focus:border-[#FFFFFF]/30"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="h-11 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none placeholder:text-white/40 focus:border-[#FFFFFF]/30"
                />

                <input
                  placeholder="Asunto"
                  className="h-11 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none placeholder:text-white/40 focus:border-[#FFFFFF]/30"
                />

                <textarea
                  rows={5}
                  placeholder="Cuéntame brevemente qué necesitas"
                  className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none placeholder:text-white/40 focus:border-[#FFFFFF]/30"
                />

                {/* Botón alineado a la derecha */}
                <div className="flex justify-end pt-2">
                  <Button className="h-11 rounded-full bg-[#325888] px-8 hover:bg-[#325888]/80">
                    Enviar mensaje
                  </Button>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );

  function SocialButton({
    icon,
    label,
    color,
    href,
  }: {
    icon: React.ReactNode;
    label: string;
    color: string;
    href: string;
  }) {
    return (
      <a
        href={href}
        className="group relative flex h-11 w-11 items-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-3 text-white transition-all duration-300 hover:w-36"
        style={{ color }}
      >
        <span className="flex min-w-[20px] justify-center transition-transform duration-300 group-hover:-translate-x-1">
          {icon}
        </span>

        <span className="ml-3 whitespace-nowrap text-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {label}
        </span>
      </a>
    );
  }

}
