// components/ui/smooth-link.tsx
"use client";

interface SmoothLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function SmoothLink({ href, children, className }: SmoothLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Solo actuamos si es un link interno (empieza con #)
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        
        // Opcional: Actualizar la URL sin saltar
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}