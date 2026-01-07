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
  { title: "Diseño Web Profesional", desc: "Landing pages y sitios rápidos, claros y pro.", img: "/services/web-pro.webp" },
  { title: "Bots de Discord", desc: "Bots a medida: moderación, tickets, economía, automatizaciones.", img: "/services/discord-bot.webp" },
  { title: "Ecommerce", desc: "Tiendas optimizadas para conversión y experiencia.", img: "/services/ecommerce.webp" },
  { title: "Consultorías UX/UI", desc: "Mejoras prácticas en experiencia, arquitectura y diseño.", img: "/services/ux-ui.webp" },
  { title: "Imagen Corporativa Digital", desc: "Logo, iconografía, componentes y consistencia visual.", img: "/services/branding.webp" },
] as const;


export const demos = [
  {
    title: "Discord Dashboard",
    href: "/demos/discord-dashboard",
    desc: "Dashboard administrativo para la gestión y configuración de un bot de Discord.",
    image: {
      desktop: "/demos/discord-desktop.webp",
      mobile: "/demos/discord-mobile.webp",
    },
  },
  {
    title: "Reservas Dashboard",
    href: "/demos/reservas-dashboard",
    desc: "Panel administrativo para la gestión de reservas, calendario y estados.",
    image: {
      desktop: "/demos/dashboard-desktop.webp",
      mobile: "/demos/dashboard-mobile.webp",
    },
  },
  {
    title: "Landing Page",
    href: "/demos/landing-desktop",
    desc: "Landing page optimizada para conversión y presentación de servicios.",
    image: {
      desktop: "/demos/landing-desktop.webp",
      mobile: "/demos/landing-mobile.webp",
    },
  },
  {
    title: "Ecommerce",
    href: "/demos/ecommerce",
    desc: "Demo de tienda online con catálogo de productos y flujo de compra.",
    image: {
      desktop: "/demos/ecommerce-desktop.webp",
      mobile: "/demos/ecommerce-mobile.webp",
    },
  },
] as const;
