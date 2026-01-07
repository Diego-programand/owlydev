import { Mail, Phone, MapPin, Instagram, Music2, MessageCircle } from "lucide-react";
import SocialPill from "@/components/ui/social-pill";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* GRID PRINCIPAL */}
        <div className="grid gap-12 md:grid-cols-3">
          
          {/* COLUMNA 1 – BRAND */}
          <div className="space-y-4">
            <p className="text-xl font-extrabold text-white">
              Owly<span className="text-white/70">Dev</span>
            </p>

            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              Desarrollo web moderno, interfaces limpias y soluciones pensadas
              para escalar.
            </p>

            {/* REDES */}
            <div className="flex gap-4 pt-2">
              <SocialPill
                icon={<Instagram size={22} />}
                label="Instagram"
                href="#"
                color="linear-gradient(45deg,#405DE6,#833AB4,#C13584,#E1306C,#FD1D1D)"
              />

              <SocialPill
                icon={<Music2 size={22} />}
                label="TikTok"
                href="#"
                color="#000000"
              />

              <SocialPill
                icon={<MessageCircle size={22} />}
                label="WhatsApp"
                href="#"
                color="#25D366"
              />
            </div>
          </div>

          {/* COLUMNA 2 – LINKS */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="mb-3 font-semibold text-white">Secciones</p>
              <ul className="space-y-2 text-white/60">
                <li><a className="hover:text-white" href="#">Inicio</a></li>
                <li><a className="hover:text-white" href="#">Servicios</a></li>
                <li><a className="hover:text-white" href="#">Demos</a></li>
                <li><a className="hover:text-white" href="#">Contacto</a></li>
              </ul>
            </div>

            <div>
              <p className="mb-3 font-semibold text-white">Servicios</p>
              <ul className="space-y-2 text-white/60">
                <li><a className="hover:text-white" href="#">Diseño Web</a></li>
                <li><a className="hover:text-white" href="#">Bots & Automatización</a></li>
                <li><a className="hover:text-white" href="#">Ecommerce</a></li>
                <li><a className="hover:text-white" href="#">Consultoría</a></li>
              </ul>
            </div>
          </div>

          {/* COLUMNA 3 – CONTACTO */}
          <div className="space-y-4 text-sm text-white/60">
            <p className="font-semibold text-white">Contacto</p>

            <div className="flex items-center gap-3">
              <Mail size={16} />
              <span>owlydev.team@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} />
              <span>+57 300 000 0000</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={16} />
              <span>Latam / Remoto</span>
            </div>
          </div>
        </div>

        {/* DIVISOR */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} OwlyDev — Next.js • Tailwind • shadcn/ui
        </div>
      </div>
    </footer>
  );
}
