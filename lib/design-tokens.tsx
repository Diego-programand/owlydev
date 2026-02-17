/**
 * OWLYDEV DESIGN SYSTEM
 * Sistema de diseño centralizado para mantener consistencia visual
 * Basado en la paleta Navy Blue Gradient + Cyan
 */

// ============================================
// 🎨 COLORES
// ============================================

export const colors = {
  // Colores de marca principales
  brand: {
    navy: '#0F2854',      // Navy oscuro - Backgrounds, textos principales
    blueMid: '#1C4D8D',   // Azul medio - Acentos, hover states
    blueLight: '#4988C4', // Azul claro - Highlights, bordes activos
    cyan: '#BDE8F5',      // Cyan - Acentos brillantes, CTAs secundarios
  },

  // Colores de interfaz (UI)
  ui: {
    bgPrimary: '#0A0F1C',    // Background principal (más oscuro que navy)
    bgSecondary: '#0F1729',  // Background secundario (cards, modals)
    bgTertiary: '#152033',   // Background terciario (hover states)

    border: {
      subtle: 'rgba(189, 232, 245, 0.1)',   // Bordes sutiles
      default: 'rgba(189, 232, 245, 0.2)',  // Bordes normales
      strong: 'rgba(189, 232, 245, 0.3)',   // Bordes destacados
      accent: 'rgba(73, 136, 196, 0.5)',    // Bordes con color
    },

    overlay: {
      light: 'rgba(10, 15, 28, 0.8)',       // Overlays claros
      medium: 'rgba(10, 15, 28, 0.9)',      // Overlays medios
      heavy: 'rgba(10, 15, 28, 0.95)',      // Overlays pesados
    },
  },

  // Colores semánticos (feedback)
  semantic: {
    success: '#10B981',     // Verde - Éxito
    successBg: 'rgba(16, 185, 129, 0.1)',
    warning: '#F59E0B',     // Amarillo - Advertencia
    warningBg: 'rgba(245, 158, 11, 0.1)',
    error: '#EF4444',       // Rojo - Error
    errorBg: 'rgba(239, 68, 68, 0.1)',
    info: '#3B82F6',        // Azul - Info
    infoBg: 'rgba(59, 130, 246, 0.1)',
  },

  // Escala de grises (texto)
  text: {
    primary: 'rgba(255, 255, 255, 1)',      // Texto principal
    secondary: 'rgba(255, 255, 255, 0.8)',  // Texto secundario
    tertiary: 'rgba(255, 255, 255, 0.6)',   // Texto terciario
    disabled: 'rgba(255, 255, 255, 0.4)',   // Texto deshabilitado
    placeholder: 'rgba(255, 255, 255, 0.3)', // Placeholders
  },

  // Gradientes pre-definidos
  gradients: {
    primary: 'linear-gradient(135deg, #1C4D8D 0%, #4988C4 100%)',
    secondary: 'linear-gradient(135deg, #0F2854 0%, #1C4D8D 100%)',
    accent: 'linear-gradient(135deg, #4988C4 0%, #BDE8F5 100%)',
    overlay: 'linear-gradient(180deg, rgba(10, 15, 28, 0) 0%, rgba(10, 15, 28, 0.8) 100%)',
    glow: 'radial-gradient(circle at center, rgba(189, 232, 245, 0.15) 0%, transparent 70%)',
  },
} as const;

// ============================================
// 📏 ESPACIADOS
// ============================================

export const spacing = {
  // Espaciados de secciones completas
  section: {
    mobile: 'py-16',
    desktop: 'md:py-24 lg:py-32',
    full: 'py-16 md:py-24 lg:py-32',
  },

  // Espaciados de contenedores/cards
  container: {
    mobile: 'p-6',
    desktop: 'md:p-8',
    full: 'p-6 md:p-8',
    large: 'p-8 md:p-12',
  },

  // Espaciados para elementos pequeños
  element: {
    badge: 'px-4 py-1.5',
    pill: 'px-3 py-1',
    input: 'px-4 py-3',
  },

  // Espaciados para botones
  button: {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4',
    xl: 'px-10 py-5',
  },

  // Gaps (espacios entre elementos)
  gap: {
    xs: 'gap-2',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  },

  // Márgenes comunes
  margin: {
    sectionHeader: 'mb-12 md:mb-16',
    cardStack: 'space-y-4 md:space-y-6',
  },
} as const;

// ============================================
// 🔤 TIPOGRAFÍA
// ============================================

export const typography = {
  // Headings (Títulos)
  h1: {
    mobile: 'text-4xl md:text-5xl lg:text-7xl',
    weight: 'font-bold',
    font: 'font-display',
    full: 'font-display text-4xl md:text-5xl lg:text-7xl font-bold',
  },
  h2: {
    mobile: 'text-3xl md:text-4xl lg:text-6xl',
    weight: 'font-bold',
    font: 'font-display',
    full: 'font-display text-3xl md:text-4xl lg:text-6xl font-bold',
  },
  h3: {
    mobile: 'text-2xl md:text-3xl lg:text-4xl',
    weight: 'font-bold',
    font: 'font-display',
    full: 'font-display text-2xl md:text-3xl lg:text-4xl font-bold',
  },
  h4: {
    mobile: 'text-xl md:text-2xl',
    weight: 'font-semibold',
    font: 'font-display',
    full: 'font-display text-xl md:text-2xl font-semibold',
  },

  // Body (Textos)
  body: {
    lg: 'font-jakarta text-lg md:text-xl',
    base: 'font-jakarta text-base md:text-lg',
    sm: 'font-jakarta text-sm md:text-base',
  },

  // Labels y badges
  label: {
    base: 'font-jakarta text-sm font-medium',
    small: 'font-jakarta text-xs font-medium',
    badge: 'font-jakarta text-xs font-bold uppercase tracking-wider',
  },

  // Utilidades
  gradient: 'bg-gradient-to-r from-[#4988C4] to-[#BDE8F5] bg-clip-text text-transparent',
  leading: {
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
  },
} as const;

// ============================================
// 🎭 EFECTOS Y SOMBRAS
// ============================================

export const effects = {
  // Sombras
  shadow: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    glow: 'shadow-[0_0_30px_rgba(189,232,245,0.3)]',
    glowStrong: 'shadow-[0_0_50px_rgba(73,136,196,0.4)]',
    card: 'shadow-[0_8px_32px_rgba(15,40,84,0.3)]',
  },

  // Blur
  blur: {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  },

  // Bordes redondeados
  rounded: {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
    full: 'rounded-full',
  },

  // Transiciones
  transition: {
    fast: 'transition-all duration-150',
    base: 'transition-all duration-300',
    slow: 'transition-all duration-500',
    smooth: 'transition-all duration-300 ease-in-out',
  },

  // Animaciones de hover
  hover: {
    scale: 'hover:scale-105 active:scale-95',
    scaleSubtle: 'hover:scale-102 active:scale-98',
    lift: 'hover:-translate-y-1',
    glow: 'hover:shadow-[0_0_30px_rgba(189,232,245,0.3)]',
  },
} as const;

// ============================================
// 🧩 COMPONENTES PRE-DEFINIDOS
// ============================================

export const components = {
  // Badges
  badge: {
    base: `inline-flex items-center gap-2 ${spacing.element.badge} ${effects.rounded.full} ${effects.blur.sm}`,
    primary: `border border-[${colors.brand.cyan}]/30 bg-[${colors.brand.cyan}]/5 text-[${colors.brand.cyan}]`,
    secondary: `border ${colors.ui.border.subtle} bg-white/5 ${colors.text.secondary}`,
    success: `border border-${colors.semantic.success}/30 bg-${colors.semantic.successBg} text-${colors.semantic.success}`,
  },

  // Botones
  button: {
    base: `inline-flex items-center justify-center gap-2 font-bold ${effects.rounded.md} ${effects.transition.base}`,
    primary: `bg-gradient-to-r from-[${colors.brand.blueMid}] to-[${colors.brand.blueLight}] text-white ${effects.hover.scale} ${effects.shadow.glow}`,
    secondary: `border ${colors.ui.border.default} bg-white/5 text-white ${effects.hover.glow}`,
    ghost: `text-white ${effects.hover.scaleSubtle}`,
  },

  // Cards
  card: {
    base: `${effects.rounded.lg} border ${colors.ui.border.subtle} bg-[${colors.ui.bgSecondary}]/60 ${effects.blur.xl} ${effects.transition.smooth}`,
    hover: `hover:border-[${colors.brand.cyan}]/40 ${effects.hover.lift}`,
    interactive: `${effects.rounded.lg} border ${colors.ui.border.subtle} bg-[${colors.ui.bgSecondary}]/60 ${effects.blur.xl} ${effects.transition.smooth} hover:border-[${colors.brand.cyan}]/40 ${effects.hover.lift} cursor-pointer`,
  },

  // Inputs
  input: {
    base: `w-full ${spacing.element.input} ${effects.rounded.md} border ${colors.ui.border.default} bg-[${colors.ui.bgPrimary}]/60 text-white placeholder:${colors.text.placeholder} ${effects.transition.base}`,
    focus: `focus:outline-none focus:border-[${colors.brand.blueLight}]/50 focus:${effects.shadow.glow}`,
  },

  // Containers
  container: {
    base: 'mx-auto max-w-7xl px-4',
    narrow: 'mx-auto max-w-5xl px-4',
    wide: 'mx-auto max-w-screen-2xl px-4',
  },
} as const;

// ============================================
// 📱 BREAKPOINTS
// ============================================

export const breakpoints = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
  ultrawide: '1536px',
} as const;

// ============================================
// 🎬 ANIMACIONES (Framer Motion)
// ============================================

export const animations = {
  // Fade in desde abajo
  fadeInUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },

  // Fade in desde arriba
  fadeInDown: {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },

  // Scale in
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },

  // Stagger children
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  },

  // Hover states comunes
  hoverScale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },

  hoverLift: {
    whileHover: { y: -4 },
    transition: { duration: 0.2 },
  },
} as const;

// ============================================
// 🛠️ UTILIDADES
// ============================================

/**
 * Helper para combinar clases de Tailwind de forma segura
 * Usa esto en lugar de template strings cuando combines design tokens
 */
export const combineClasses = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Genera una clase de gradiente personalizado
 */
export const createGradient = (from: string, to: string, direction: 'r' | 'l' | 't' | 'b' = 'r') => {
  return `bg-gradient-to-${direction} from-[${from}] to-[${to}]`;
};

/**
 * Genera un color con opacidad
 */
export const withOpacity = (color: string, opacity: number) => {
  return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
};

// ============================================
// 📦 EXPORT DEFAULT
// ============================================

export const designTokens = {
  colors,
  spacing,
  typography,
  effects,
  components,
  breakpoints,
  animations,
  utils: {
    combineClasses,
    createGradient,
    withOpacity,
  },
} as const;

export default designTokens;