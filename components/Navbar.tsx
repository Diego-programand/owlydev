// components/Navbar.tsx
"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { navItems } from "@/lib/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
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

  // 1. LÓGICA DE BLOQUEO DE SCROLL SIN SALTOS
  useEffect(() => {
    if (mobileMenuOpen) {
      // Calculamos el ancho de la barra de scroll para compensar
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

  // Scroll listener para el fondo del header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Underline dinámico (desktop)
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  const measureIndicator = () => {
    const el = itemRefs.current[active];
    if (!el) {
      setIndicator((prev) => ({ ...prev, ready: false }));
      return;
    }
    const left = el.offsetLeft;
    const width = el.offsetWidth;
    setIndicator({ left, width, ready: true });
  };

  useLayoutEffect(() => {
    measureIndicator();
  }, [active]);

  useEffect(() => {
    const onResize = () => measureIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      scrollToId(id);
    }, 10);
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
            ? "border-b border-white/3 bg-[#030712]/80 backdrop-blur-xl shadow-lg shadow-black/5"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <motion.button
              onClick={() => scrollToId("hero")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2.5 group"
              aria-label="Ir al inicio"
            >
              <div className="relative w-8 h-10 flex items-center justify-center">
                <Image
                  src="/IsoTipoOwlyDev.webp"
                  alt="OwlyDev"
                  width={32}
                  height={40}
                  className="object-contain transition-transform group-hover:scale-110"
                  priority
                />
              </div>
              <span className="font-display text-lg font-bold hidden sm:block">
                <span className="text-white">Owly</span>
                <span className="bg-gradient-to-r from-[#23ADCF] to-[#0062cc] bg-clip-text text-transparent">Dev</span>
              </span>
            </motion.button>

            {/* Nav Desktop */}
            <nav className="relative hidden md:flex items-center gap-1">
              {navItems
                .filter((item) => item.id !== "contact")
                .map((item) => {
                  const isActive = active === item.id;
                  return (
                    <button
                      key={item.id}
                      ref={(node) => {
                        itemRefs.current[item.id] = node;
                      }}
                      onClick={() => scrollToId(item.id)}
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                        isActive
                          ? "text-white"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.label}
                    </button>
                  );
                })}

              {/* Underline animado */}
              <motion.span
                className="absolute bottom-0 h-0.5 rounded-full bg-gradient-to-r from-[#23ADCF] to-[#0062cc]"
                initial={false}
                animate={{
                  left: indicator.left,
                  width: indicator.width,
                  opacity: indicator.ready ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            </nav>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* CTA Desktop */}
              <motion.button
                onClick={() => scrollToId("contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "hidden md:inline-flex items-center gap-2 px-6 py-2 rounded-xl",
                  "bg-gradient-to-r from-[#23ADCF] to-[#0062cc]",
                  "text-white text-sm font-semibold",
                  "transition-all duration-300",
                  "hover:shadow-[0_0_20px_rgba(35,173,207,0.4)]"
                )}
              >
                Contacto
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "md:hidden w-10 h-10 rounded-xl flex items-center justify-center",
                  "border border-white/10 bg-white/5",
                  "transition-all duration-300",
                  mobileMenuOpen ? "bg-white/10" : "hover:bg-white/10"
                )}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={cn(
                "fixed right-0 top-0 bottom-0 z-50 w-[85%] max-w-none",
                "bg-[#030712]/95 backdrop-blur-xl border-l border-white/10",
                "md:hidden"
              )}
            >
              <div className="flex flex-col h-full">
                {/* Header del menu */}
                <div className="flex items-center justify-between p-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-lg font-bold">
                      <span className="text-white">Owly</span>
                      <span className="bg-gradient-to-r from-[#23ADCF] to-[#0062cc] bg-clip-text text-transparent">Dev</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Nav Items */}
                <nav className="flex-1 flex flex-col justify-center px-8 py-8">
                  <div className="space-y-2">
                    {navItems
                      .filter((item) => item.id !== "contact")
                      .map((item, index) => {
                        const isActive = active === item.id;
                        return (
                          <motion.button
                            key={item.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => handleNavClick(item.id)}
                            className={cn(
                              "w-full text-left px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300",
                              isActive
                                ? "bg-[#030712]/15 text-white/70 border border-[#030712]/12"
                                : "text-white/70 hover:text-white hover:bg-white/5"
                            )}
                          >
                            {item.label}
                          </motion.button>
                        );
                      })}
                  </div>
                </nav>

                {/* Footer del menu con CTA */}
                <div className="p-6 border-t border-white/10">
                  <motion.button
                    onClick={() => handleNavClick("contact")}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl",
                      "bg-gradient-to-r from-[#23ADCF] to-[#0062cc]",
                      "text-white font-semibold",
                      "transition-all duration-300",
                      "hover:shadow-[0_0_30px_rgba(35,173,207,0.4)]"
                    )}
                  >
                    Contáctanos
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}