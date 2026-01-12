// components/sections/Footer.tsx
"use client";

import { Mail, Phone, MapPin, Instagram, Music2, MessageCircle, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/site";
import { SmoothLink } from "@/components/ui/smooth-link";

const socialLinks = [
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
    gradient: "from-[#833AB4] to-[#E1306C]"
  },
  {
    icon: Music2,
    href: "#",
    label: "TikTok",
    gradient: "from-[#00F2EA] to-[#FF0050]"
  },
  {
    icon: MessageCircle,
    href: "#",
    label: "WhatsApp",
    gradient: "from-[#25D366] to-[#128C7E]"
  }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-[#030712] border-t border-white/5">
      {/* Orbe de fondo muy sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#23ADCF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Grid principal */}
        <div className="grid gap-8 md:grid-cols-3 mb-10">
          
          {/* Columna 1 – Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-xl font-display font-bold">
              <span className="text-white">Owly</span>
              <span className="bg-gradient-to-r from-[#23ADCF] to-[#0062cc] bg-clip-text text-transparent">Dev</span>
            </p>

            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              Transformamos ideas en experiencias digitales que convierten.
            </p>

            {/* Redes sociales */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center transition-all duration-300 hover:border-white/20"
                >
                  <div className={cn(
                    "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg",
                    `bg-gradient-to-br ${social.gradient}`
                  )} />
                  <social.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors relative z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Columna 2 – Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-6 text-sm"
          >
            <div>
              <p className="mb-3 font-semibold text-white text-sm">Secciones</p>
              <ul className="space-y-2 text-white/60">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <SmoothLink
                      href={`#${item.id}`}
                      className="hover:text-[#23ADCF] transition-colors duration-300"
                    >
                      {item.label}
                    </SmoothLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 font-semibold text-white text-sm">Servicios</p>
              <ul className="space-y-2 text-white/60">
                <li>
                  <SmoothLink
                    href="#services"
                    className="hover:text-[#23ADCF] transition-colors duration-300"
                  >
                    Diseño Web
                  </SmoothLink>
                </li>
                <li>
                  <SmoothLink
                    href="#services"
                    className="hover:text-[#23ADCF] transition-colors duration-300"
                  >
                    Bots Discord
                  </SmoothLink>
                </li>
                <li>
                  <SmoothLink
                    href="#services"
                    className="hover:text-[#23ADCF] transition-colors duration-300"
                  >
                    Ecommerce
                  </SmoothLink>
                </li>
                <li>
                  <SmoothLink
                    href="#services"
                    className="hover:text-[#23ADCF] transition-colors duration-300"
                  >
                    Consultoría
                  </SmoothLink>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Columna 3 – Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3 text-sm"
          >
            <p className="font-semibold text-white text-sm mb-4">Contacto</p>

            <a 
              href="mailto:owlydev.team@gmail.com"
              className="flex items-center gap-3 text-white/60 hover:text-[#23ADCF] transition-colors duration-300 group"
            >
              <Mail className="w-4 h-4" />
              <span>owlydev.team@gmail.com</span>
            </a>

            <a 
              href="tel:+573000000000"
              className="flex items-center gap-3 text-white/60 hover:text-[#23ADCF] transition-colors duration-300 group"
            >
              <Phone className="w-4 h-4" />
              <span>+57 300 000 0000</span>
            </a>

            <div className="flex items-center gap-3 text-white/60">
              <MapPin className="w-4 h-4" />
              <span>Latam · Remoto</span>
            </div>
          </motion.div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40"
        >
          <p>
            © {new Date().getFullYear()} OwlyDev — Next.js · Tailwind · Framer Motion
          </p>

          {/* Botón scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:border-[#23ADCF]/50 hover:bg-[#23ADCF]/10 transition-all duration-300 group"
          >
            <ArrowUp className="w-4 h-4 text-white/60 group-hover:text-[#23ADCF] transition-colors" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}