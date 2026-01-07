import { ReactNode } from "react";

type SocialPillProps = {
  icon: ReactNode;
  label: string;
  href?: string;
  color: string; // ej: "#25D366"
};

export default function SocialPill({
  icon,
  label,
  href = "#",
  color,
}: SocialPillProps) {
  return (
    <div className="relative group">
      {/* BOTÓN */}
      <a
        href={href}
        aria-label={label}
        className="
          relative
          flex h-12 w-12 items-center justify-center
          overflow-hidden
          rounded-full
          border border-white/10
          bg-white
          text-neutral-600
          transition-all duration-300 ease-in-out
          hover:text-white
        "
      >
        {/* FILL */}
        <span
          className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 ease-in-out group-hover:h-full"
          style={{ background: color }}
        />

        {/* ICONO */}
        <span className="relative z-10 flex items-center justify-center">
          {icon}
        </span>
      </a>

      {/* TOOLTIP */}
      <div
        className="
          pointer-events-none
          absolute -top-10 left-1/2
          -translate-x-1/2
          rounded-md
          px-2 py-1
          text-xs
          text-white
          opacity-0
          transition-all duration-300
          group-hover:-top-12
          group-hover:opacity-100
        "
        style={{ background: color }}
      >
        {label}
      </div>
    </div>
  );
}
