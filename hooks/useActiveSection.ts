"use client";

import { useEffect, useMemo, useState } from "react";

export function useActiveSection(sectionIds: string[], offsetPx = 100) {
  const [active, setActive] = useState(sectionIds[0] ?? "hero");

  // Memorizamos los IDs para evitar re-suscripciones innecesarias
  const ids = useMemo(() => sectionIds, [sectionIds]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si la sección está cruzando el margen superior (rootMargin)
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        // Threshold en 0 para que detecte apenas toque el margen
        threshold: 0,
        // IMPORTANTE: Detectamos cuando la sección entra en el 25% superior de la pantalla
        rootMargin: `-${offsetPx}px 0px -75% 0px`,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, offsetPx]);

  return active;
}