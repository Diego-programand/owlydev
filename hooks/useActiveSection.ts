"use client";

import { useEffect, useMemo, useState } from "react";

/**
 * Detecta la sección activa usando IntersectionObserver.
 * sectionIds: ids de las secciones (ej: ["hero","services","demos","contact"])
 * offsetPx: altura aprox del navbar para que el cálculo sea correcto
 */
export function useActiveSection(sectionIds: string[], offsetPx = 96) {
  const [active, setActive] = useState(sectionIds[0] ?? "hero");

  const ids = useMemo(() => sectionIds, [sectionIds]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Entre las visibles, elige la de mayor ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          );

        const top = visible[0]?.target as HTMLElement | undefined;
        if (top?.id) setActive(top.id);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        // arriba restamos el alto del navbar; abajo recortamos para evitar saltos raros
        rootMargin: `-${offsetPx}px 0px -55% 0px`,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, offsetPx]);

  return active;
}
