// components/Navbar.tsx
"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { navItems } from "@/lib/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const ids = useMemo(() => navItems.map((n) => n.id), []);
  const active = useActiveSection(ids, 96);

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 1. BLOQUEO DE SCROLL SIN SALTOS
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0px";
    };
  }, [mobileMenuOpen]);

  // 2. SCROLL LISTENER PARA ESTILOS
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 3. LÓGICA DE INDICADOR DINÁMICO (DESKTOP)
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  const measureIndicator = () => {
    const el = itemRefs.current[active];
    if (!el) {
      setIndicator((prev) => ({ ...prev, ready: false }));
      return;
    }
    setIndicator({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
  };

  useLayoutEffect(() => {
    measureIndicator();
  }, [active]);

  useEffect(() => {
    window.addEventListener("resize", measureIndicator);
    return () => window.removeEventListener("resize", measureIndicator);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => scrollToId(id), 10);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/5 bg-[#030712]/80 backdrop-blur-xl shadow-lg shadow-black/5"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            
            {/* LOGO: Visible en todos los dispositivos */}
            <motion.button
              onClick={() => scrollToId("hero")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 group"
            >
              <div className="relative w-7 h-9 md:w-8 md:h-10 flex items-center justify-center">
                <Image
                  src="/IsoTipoOwlyDev.webp"
                  alt="Logo OwlyDev"
                  width={32}
                  height={40}
                  className="object-contain transition-transform group-hover:rotate-6"
                  priority
                />
              </div>
              <span className="font-display text-base md:text-lg font-bold">
                <span className="text-white">Owly</span>
                <span className="bg-gradient-to-r from-[#23ADCF] to-[#0062cc] bg-clip-text text-transparent">Dev</span>
              </span>
            </motion.button>

            {/* NAV DESKTOP */}
            <nav className="relative hidden md:flex items-center gap-1">
              {navItems
                .filter((item) => item.id !== "contact")
                .map((item) => (
                  <button
                    key={item.id}
                    ref={(node) => { itemRefs.current[item.id] = node; }}
                    onClick={() => scrollToId(item.id)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg",
                      active === item.id ? "text-white" : "text-white/60 hover:text-white"
                    )}
                  >
                    {item.label}
                  </button>
                ))}

              {/* Underline animado */}
              <motion.span
                className="absolute bottom-0 h-0.5 rounded-full bg-gradient-to-r from-[#23ADCF] to-[#0062cc]"
                animate={{
                  left: indicator.left,
                  width: indicator.width,
                  opacity: indicator.ready ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            </nav>

            {/* BOTONES DERECHA */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={() => scrollToId("contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:inline-flex px-6 py-2 rounded-xl bg-gradient-to-r from-[#23ADCF] to-[#0062cc] text-white text-sm font-bold shadow-lg shadow-[#23ADCF]/10"
              >
                Contacto
              </motion.button>

              {/* BOTÓN MENÚ MÓVIL: Con etiqueta "Menú" */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "md:hidden h-10 px-3 rounded-xl flex items-center gap-2 border transition-all duration-300",
                  mobileMenuOpen 
                    ? "bg-white/10 border-white/20" 
                    : "bg-white/5 border-white/10"
                )}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-white/90">
                  {mobileMenuOpen ? "Cerrar" : "Menú"}
                </span>
                {mobileMenuOpen ? (
                  <X className="w-4 h-4 text-white" />
                ) : (
                  <Menu className="w-4 h-4 text-white" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[80%] bg-[#030712] border-l border-white/10 md:hidden"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-12">
                  <span className="font-display text-xl font-bold text-white">
                    Owly<span className="text-[#23ADCF]">Dev</span>
                  </span>
                  <button onClick={() => setMobileMenuOpen(false)}>
                    <X className="w-6 h-6 text-white/50" />
                  </button>
                </div>

                <nav className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        "w-full text-left py-4 text-2xl font-bold transition-colors",
                        active === item.id ? "text-[#23ADCF]" : "text-white/40"
                      )}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>

                <div className="mt-auto">
                  <button
                    onClick={() => handleNavClick("contact")}
                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#23ADCF] to-[#0062cc] text-white font-bold"
                  >
                    Empezar Proyecto
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}