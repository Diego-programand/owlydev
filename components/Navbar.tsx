"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { navItems } from "@/lib/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 85;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = el.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

export default function Navbar() {
  const ids = useMemo(() => navItems.map((n) => n.id), [navItems]);
  const active = useActiveSection(ids, 96);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  useLayoutEffect(() => {
    const activeEl = itemRefs.current[active];
    if (activeEl && active !== "contact") {
      setIndicator({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        opacity: 1
      });
    } else {
      setIndicator(prev => ({ ...prev, opacity: 0 }));
    }
  }, [active, scrolled]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-all duration-300",
          scrolled || mobileMenuOpen
            ? "py-3 bg-[#030712]/90 backdrop-blur-xl border-b border-white/5"
            : "py-5 bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">

            {/* LOGOTIPO OWLYDEV */}
            <motion.button
              onClick={() => scrollToId("hero")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 group z-[70]"
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

            {/* NAV DESKTOP: FOCO EN SECCIÓN ACTIVA */}
            <nav className="relative hidden md:flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/5">
              {navItems
                .filter((item) => item.id !== "contact")
                .map((item) => {
                  const isActive = active === item.id;
                  return (
                    <button
                      key={item.id}
                      ref={(node) => { itemRefs.current[item.id] = node; }}
                      onClick={() => scrollToId(item.id)}
                      className={cn(
                        "relative px-4 py-2 text-[10px] uppercase tracking-widest transition-all duration-500 z-10",
                        isActive
                          ? "text-white font-black scale-105"
                          : "text-white/20 font-bold hover:text-white/50"
                      )}
                    >
                      {item.label}
                    </button>
                  );
                })}

              <motion.span
                className="absolute bottom-1 h-0.5 rounded-full bg-gradient-to-r from-[#23ADCF] to-[#0062cc] shadow-[0_0_15px_rgba(35,173,207,0.8)]"
                animate={{
                  left: indicator.left,
                  width: indicator.width,
                  opacity: indicator.opacity,
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
                className="hidden md:inline-flex px-6 py-2 rounded-xl bg-gradient-to-r from-[#23ADCF] to-[#0062cc] text-white text-[11px] font-black uppercase tracking-widest shadow-lg shadow-[#23ADCF]/20"
              >
                Contacto
              </motion.button>

              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
                className="md:hidden h-10 px-3 rounded-xl flex items-center gap-2 border bg-white/5 border-white/10 z-[70]"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-white/90">
                  {mobileMenuOpen ? "Cerrar" : "Menú"}
                </span>
                {mobileMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MENU MÓVIL: SECCIÓN ACTIVA GIGANTE */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] bg-[#030712] flex flex-col pt-32 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item, index) => {
                const isActive = active === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => { setMobileMenuOpen(false); setTimeout(() => scrollToId(item.id), 300); }}
                    className={cn(
                      "flex items-center justify-between py-5 text-4xl transition-all duration-300",
                      isActive
                        ? "text-white font-black translate-x-2"
                        : "text-white/10 font-bold"
                    )}
                  >
                    {item.label}
                    <ArrowRight className={cn(
                      "w-6 h-6 transition-all",
                      isActive ? "text-[#23ADCF] opacity-100" : "opacity-0"
                    )} />
                  </motion.button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}