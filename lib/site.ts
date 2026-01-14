export const site = {
  name: "OwlyDev",
  // Frase corta, directa y orientada a resultados
  tagline: "Desarrollo de alto rendimiento para negocios que no se conforman con 'solo una web'.",
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
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contacto" },
] as const;

export const services = [
  {
    title: "Webs de Alto Impacto",
    desc: "Sitios ultrarrápidos diseñados para retener clientes y proyectar autoridad inmediata.",
    img: "/services/web-pro.webp",
    href: "/demos/landing-page"
  },
  {
    title: "Automatización & Bots",
    desc: "Bots inteligentes que gestionan tu comunidad y ahorran horas de trabajo operativo.",
    img: "/services/discord-bot.webp",
    href: "/demos/discord-dashboard"
  },
  {
    title: "Ecommerce de Élite",
    desc: "Tiendas online optimizadas con un solo objetivo: que el proceso de compra sea irresistible.",
    img: "/services/ecommerce.webp",
    href: "/demos/ecommerce"
  },
  {
    title: "Estrategia UX/UI",
    desc: "Analizamos el comportamiento de tu usuario para eliminar los obstáculos que te quitan ventas.",
    img: "/services/ux-ui.webp",
    href: "/demos/estrategia-ux-ui"
  },
  {
    title: "Identidad Digital",
    desc: "Diseño visual coherente que hace que tu marca se vea tan cara como el valor que entregas.",
    img: "/services/branding.webp",
    href: "/#contact"
  },
] as const;

export const demos = [
  {
    title: "Ecosistema de Gestión de Comunidades",
    href: "/demos/discord-dashboard",
    desc: "Automatización total de procesos y administración de usuarios. Diseñado para reducir el trabajo operativo y escalar comunidades sin esfuerzo manual.",
    image: {
      desktop: "/demos/discord-desktop.webp",
      mobile: "/demos/discord-mobile.webp",
    },
  },
  {
    title: "Sistema Inteligente de Reservas",
    href: "/demos/reservas-dashboard",
    desc: "Panel administrativo de alto rendimiento que elimina el caos de las citas manuales, centralizando calendarios y estados en una interfaz intuitiva.",
    image: {
      desktop: "/demos/dashboard-desktop.webp",
      mobile: "/demos/dashboard-mobile.webp",
    },
  },
  {
    title: "Landing Page de Alta Conversión",
    href: "/demos/landing-desktop",
    desc: "Estructura optimizada psicológicamente para transformar visitantes en clientes potenciales, priorizando la velocidad de carga y la claridad del mensaje.",
    image: {
      desktop: "/demos/landing-desktop.webp",
      mobile: "/demos/landing-mobile.webp",
    },
  },
  {
    title: "Arquitectura Ecommerce Premium",
    href: "/demos/ecommerce",
    desc: "Experiencia de compra fluida y profesional enfocada en maximizar el ticket promedio y reducir el abandono de carrito.",
    image: {
      desktop: "/demos/ecommerce-desktop.webp",
      mobile: "/demos/ecommerce-mobile.webp",
    },
  },
] as const;

export const faqs = [
  {
    question: "¿Para qué quiero una web si ya vendo por redes sociales?",
    answer: "Las redes son terreno alquilado; tu web es tu casa propia. Es el único lugar donde tú tienes el control total de tu marca, aseguras que tus clientes siempre te encuentren y evitas depender de algoritmos que cambian sin aviso."
  },
  {
    question: "¿Esto es un gasto o realmente me ayudará a vender más?",
    answer: "No es un gasto, es un vendedor que no duerme. Diseñamos tu web como un embudo estratégico que guía al visitante de la curiosidad a la compra, convirtiendo tu presencia digital en una máquina constante de generar clientes."
  },
  {
    question: "He visto opciones más baratas, ¿cuál es la diferencia real?",
    answer: "La diferencia es la rentabilidad. Una web barata que carga lento o no se ve bien en móviles te hace perder dinero cada segundo. Nosotros creamos tecnología de alto rendimiento: rápida, segura y optimizada para que aparezcas primero en Google."
  },
  {
    question: "¿Me quedaré solo cuando necesite hacer cambios después?",
    answer: "Nunca. Te entregamos una plataforma fácil de usar para que tengas autonomía en cambios básicos, y cuentas con nuestro soporte experto para lo complejo. Somos tu socio tecnológico, estamos aquí para que tu única preocupación sea ver crecer tu negocio."
  },
] as const;