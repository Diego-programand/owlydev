// lib/design-tokens.ts
export const colors = {
    brand: {
        navy: '#0F2854',
        blue: '#0062cc',
        sky: '#23ADCF',
        cyan: '#BDE8F5',
    },
    ui: {
        bg: '#0A0F1C',
        surface: '#0F1729',
        border: 'rgba(189, 232, 245, 0.1)',
    },
    semantic: {
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
    }
}

export const spacing = {
    section: 'py-16 md:py-24 lg:py-32', // Secciones principales
    card: 'p-6 md:p-8',                 // Cards/contenedores
    badge: 'px-4 py-1.5',               // Pills/badges
    cta: 'px-8 py-4',                   // Botones importantes
}

export const typography = {
    h1: 'font-display text-5xl md:text-6xl lg:text-7xl font-bold',
    h2: 'font-display text-4xl md:text-5xl lg:text-6xl font-bold',
    h3: 'font-display text-3xl md:text-4xl font-bold',
    body: 'font-jakarta text-base md:text-lg',
    small: 'font-jakarta text-sm',
}