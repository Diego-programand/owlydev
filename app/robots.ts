import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Definimos la URL base dependiendo de si estás en desarrollo o producción
  const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
    : 'https://owlydev.com'

  return {
    rules: {
      userAgent: '*', // Reglas para TODOS los robots (Google, Bing, DuckDuckGo, etc.)
      allow: '/',     // Permitimos que rastreen toda la web pública
      disallow: [     // Carpetas prohibidas para los buscadores
        '/admin',     // Si llegas a tener un panel de administración
        '/api/',      // No queremos que indexen tus rutas de API internas
        '/_next/',    // Archivos internos de funcionamiento de Next.js
        '/private',   // Cualquier carpeta de archivos privados
      ],
    },
    // Le decimos dónde encontrar el mapa del sitio para que lo recorra eficientemente
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}