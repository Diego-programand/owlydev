export const site = {
  name: "OwlyDev",
  tagline: "Soluciones web con diseño, performance y enfoque real en conversión.",
  colors: {
    bg: "#16263a",
    blue: "#0062cc",
    cyan: "#23ADCF",
    white: "#ffffff",
  },
};

export const navItems = [
  { id: "hero", label: "Inicio" },
  { id: "services", label: "Servicios" },
  { id: "demos", label: "Demos" },
  { id: "contact", label: "Contacto" },
] as const;

export const services = [
  { title: "Diseño Web Profesional", desc: "Landing pages y sitios rápidos, claros y pro." },
  { title: "Bots de Discord", desc: "Bots a medida: moderación, tickets, economía, automatizaciones." },
  { title: "Ecommerce", desc: "Tiendas optimizadas para conversión y experiencia." },
  { title: "Consultorías UX/UI", desc: "Mejoras prácticas en experiencia, arquitectura y diseño." },
  { title: "Imagen Corporativa Digital", desc: "Logo, iconografía, componentes y consistencia visual." },
] as const;

export const demos = [
  { title: "Discord Dashboard", href: "/demos/discord-dashboard", desc: "Panel de control del bot." },
  { title: "Reservas Dashboard", href: "/demos/reservas-dashboard", desc: "Panel tipo Sneat para reservas." },
  { title: "Landing Page", href: "/demos/landing-page", desc: "Landing enfocada en conversión." },
  { title: "Ecommerce", href: "/demos/ecommerce", desc: "Catálogo + carrito (demo)." },
] as const;
