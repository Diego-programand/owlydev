import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

/**
 * 1. CONFIGURACIÓN DE FUENTES
 * Usamos variables CSS para aplicarlas de forma flexible en Tailwind.
 */
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/**
 * 2. VIEWPORT & TEMA
 */
export const viewport: Viewport = {
  themeColor: "#16263a", // Ajustado al color de tu fondo de marca
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Permite accesibilidad pero evita zoom accidental
};

/**
 * 3. METADATA (SEO & SOCIAL)
 */
const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://owlydev.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: "OwlyDev",
  title: {
    default: "OwlyDev | Expertos en Desarrollo Web y Estrategia de Conversión",
    template: "%s | OwlyDev"
  },
  description: "Transformamos visiones en activos digitales de alto rendimiento. Especialistas en Next.js, eCommerce y UX/UI para negocios que buscan escalar.",
  keywords: ["OwlyDev", "Desarrollo web Next.js", "Diseño UX/UI", "Ecommerce profesional", "Paneles administrativos"],
  authors: [{ name: "OwlyDev", url: baseUrl }],
  creator: "OwlyDev",

  // Icons
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: `${baseUrl}/site.webmanifest`,

  // OpenGraph (Facebook/LinkedIn)
  openGraph: {
    title: "OwlyDev | Code with Soul",
    description: "Innovación digital que cautiva. Software robusto que escala.",
    url: baseUrl,
    siteName: "OwlyDev",
    locale: "es_ES",
    type: "website",
    images: [{
      url: "/api/og",
      width: 1200,
      height: 630,
      alt: "OwlyDev - Soluciones Digitales Premium",
    }],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "OwlyDev | Desarrollo Web Pro",
    description: "Creamos la tecnología que tu negocio necesita para crecer.",
    images: ["/api/og"],
  },

  // Mobile Web App
  appleWebApp: {
    capable: true,
    title: "OwlyDev",
    statusBarStyle: "black-translucent",
  },
};

/**
 * 4. LAYOUT COMPONENT
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${jakarta.variable} scroll-smooth`}
      suppressHydrationWarning // Evita avisos de extensiones del navegador
    >
      <body
        className={`
          font-jakarta 
          antialiased 
          bg-[#16263a] 
          text-slate-50
          selection:bg-cyan-500/30 
          selection:text-cyan-200
          overflow-x-hidden
        `}
      >
        {children}
      </body>
    </html>
  );
}