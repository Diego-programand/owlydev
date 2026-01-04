"use client";

import { useMemo } from "react";
import { navItems } from "@/lib/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const ids = useMemo(() => navItems.map((n) => n.id), []);
  const active = useActiveSection(ids, 96);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#16263a]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Brand */}
        <button
          onClick={() => scrollToId("hero")}
          className="font-display select-none text-lg text-white"
          aria-label="Ir al inicio"
        >
          <span className="font-extrabold">Owly</span>
          <span className="font-semibold opacity-90">Dev</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className={[
                  "rounded-full px-4 py-2 text-sm transition",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5",
                ].join(" ")}
              >
                {item.label}
              </button>
            );
          })}

          <Button
            onClick={() => scrollToId("contact")}
            className="ml-2 rounded-full bg-[#0062cc] hover:bg-[#0062cc]/90"
          >
            Hablemos
          </Button>
        </nav>

        {/* Mobile drawer (90%) */}
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
              className="w-[90vw] border-white/10 bg-[#16263a] text-white"
            >
              <div className="mt-6 grid gap-2">
                {navItems.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToId(item.id)}
                      className={[
                        "w-full rounded-xl px-4 py-3 text-left text-base transition",
                        isActive
                          ? "bg-white/10"
                          : "bg-white/5 hover:bg-white/10",
                      ].join(" ")}
                    >
                      {item.label}
                    </button>
                  );
                })}

                <button
                  onClick={() => scrollToId("contact")}
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#0062cc] px-4 py-3 font-medium hover:bg-[#0062cc]/90"
                >
                  Hablemos
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
