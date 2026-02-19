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
            ? "py-3 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5"
            : "py-5 bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">

            {/* LOGOTIPO OWLYDEV */}
            <motion.button
              onClick={() => { setMobileMenuOpen(false); scrollToId("hero"); }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 group relative z-[70]"
            >
              <div className="relative w-8 h-10 flex items-center justify-center">
                <Image
                  src="/branding/iso-tipo.webp"
                  alt="Logo OwlyDev"
                  width={32}
                  height={40}
                  className="object-contain transition-transform group-hover:rotate-6"
                  priority
                />
              </div>
              <span className="font-display text-lg font-bold">
                <span className="text-white">Owly</span>
                <span className="bg-gradient-to-r from-[#23ADCF] to-[#0062cc] bg-clip-text text-transparent">Dev</span>
              </span>
            </motion.button>

            {/* NAV DESKTOP (LG+): FOCO EN SECCIÓN ACTIVA */}
            <nav className="relative hidden lg:flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/5">
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
                        "relative px-5 py-2.5 text-[11px] uppercase tracking-widest transition-all duration-500 z-10 flex items-center h-full",
                        isActive
                          ? "text-white font-black scale-105"
                          : "text-white/40 font-bold hover:text-white"
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
                className="hidden lg:inline-flex px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#23ADCF] to-[#0062cc] text-white text-[11px] font-black uppercase tracking-widest shadow-lg shadow-[#23ADCF]/20 hover:shadow-[#23ADCF]/40 transition-shadow"
              >
                Contacto
              </motion.button>

              {/* Toggle Menu Mobile (Visible < LG) */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden relative z-[70] px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-white/90">
                  {mobileMenuOpen ? "Cerrar" : "Menú"}
                </span>
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <X className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MENU MÓVIL: FULL SCREEN PREMIUM OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ type: "spring", damping: 25, stiffness: 100 }}
            className="fixed inset-0 z-[65] bg-[#030712] lg:hidden flex flex-col justify-center items-center h-[100dvh]"
          >
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#23ADCF]/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#0062cc]/20 rounded-full blur-[100px] pointer-events-none" />

            <nav className="relative z-10 flex flex-col gap-6 w-full max-w-xs px-6">
              {navItems.map((item, index) => {
                const isActive = active === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                    onClick={() => { setMobileMenuOpen(false); setTimeout(() => scrollToId(item.id), 300); }}
                    className={cn(
                      "group flex items-center justify-between py-2 text-3xl font-display font-medium transition-all duration-300",
                      isActive
                        ? "text-white"
                        : "text-white/30 hover:text-white"
                    )}
                  >
                    <span className="relative text-start">
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="mobileActiveLine"
                          className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#23ADCF]"
                        />
                      )}
                    </span>
                    <ArrowRight className={cn(
                      "w-6 h-6 transform transition-all duration-300 group-hover:translate-x-2",
                      isActive ? "text-[#23ADCF] opacity-100" : "opacity-0 group-hover:opacity-100 group-hover:text-white"
                    )} />
                  </motion.button>
                );
              })}
            </nav>

            {/* Explicit Close Button inside Menu Overlay */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-4 rounded-full bg-white/10 text-white z-20 hover:bg-white/20 active:scale-90 transition-all border border-white/20"
            >
              <X className="w-4 h-4" />
            </motion.button>


            {/* Close functionality via header button (which is z-70 above this z-65 overlay) */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}