"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { navItems } from "@/lib/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const ids = useMemo(() => navItems.map((n) => n.id), []);
  const active = useActiveSection(ids, 96);

  // Fondo transparente -> fondo oscuro al hacer scroll
  const [scrolled, setScrolled] = useState(false);
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
    if (!el) return;
    const parent = el.offsetParent as HTMLElement | null;
    if (!parent) return;

    const left = el.offsetLeft;
    const width = el.offsetWidth;

    setIndicator({ left, width, ready: true });
  };

  useLayoutEffect(() => {
    measureIndicator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    const onResize = () => measureIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const headerClass = [
    "fixed inset-x-0 top-0 z-50 transition-colors",
    scrolled
      ? "border-b border-white/10 bg-[#0b1220]/70 backdrop-blur"
      : "border-b border-transparent bg-transparent",
  ].join(" ");


  return (
    <header className={headerClass}>
      {/* Grid 3 columnas: izquierda logo, centro nav, derecha CTA/menú */}
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4">
        {/* Izquierda: Logo */}
        <button
          onClick={() => scrollToId("hero")}
          className="flex items-center gap-2 justify-self-start"
          aria-label="Ir al inicio"
        >
          <Image
            src="/IsoTipoOwlyDev.webp" // ⬅️ cambia por tu archivo real en /public
            alt="OwlyDev"
            width={30}
            height={30}
            className="h-9 select-none"
            priority
          />
        </button>

        {/* Centro: Nav desktop */}
        <nav className="relative hidden items-center justify-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                ref={(node) => {
                  itemRefs.current[item.id] = node;
                }}
                onClick={() => scrollToId(item.id)}
                className={[
                  "relative text-sm font-medium transition-colors",
                  "text-white/90 hover:text-white",
                  isActive ? "text-white" : "",
                ].join(" ")}
              >
                {item.label}
              </button>
            );
          })}

          {/* Underline animado */}
          <span
            aria-hidden="true"
            className={[
              "absolute -bottom-2 h-[2px] rounded-full bg-[#FFFFFF]/60 transition-all duration-300",
              indicator.ready ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={{
              left: indicator.left,
              width: indicator.width,
            }}
          />
        </nav>

        {/* Derecha: Contacto desktop + trigger mobile */}
        <div className="flex items-center justify-self-end gap-2">
          {/* Desktop CTA */}
          <Button
            onClick={() => scrollToId("contact")}
            className="hidden rounded-full bg-[#0062cc] hover:bg-[#0062cc]/90 md:inline-flex"
          >
            Contacto
          </Button>

          {/* Mobile drawer */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                >
                  Menú
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className={[
                  "w-[88vw] border-white/10 text-white",
                  "bg-[#0b1220]/80 backdrop-blur",
                  "p-0", // control total del layout
                ].join(" ")}
              >
                {/* Contenedor full alto centrado */}
                <div className="relative flex h-full flex-col items-center justify-center transform -translate-y-6">

                  {/* Separación para que la X nunca pise el contenido */}
                  <div className="h-0" />
                  <div className="flex flex-1 items-center justify-center px-14">

                    <div className="flex w-full max-w-xs flex-col items-center gap-7">



                      {navItems.map((item) => {
                        const isActive = active === item.id;
                        return (
                          <SheetClose asChild key={item.id}>
                            <button
                              onClick={() => scrollToId(item.id)}
                              className={[
                                "text-center text-xl font-semibold tracking-tight",
                                "transition-colors",
                                isActive ? "text-white" : "text-white/75 hover:text-white",
                              ].join(" ")}
                            >
                              {item.label}
                            </button>
                          </SheetClose>
                        );
                      })}

                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
