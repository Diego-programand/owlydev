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
  themeColor: "#16263a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/**
 * 3. METADATA (SEO & SOCIAL)
 */
const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://owlydev.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: "OwlyDev",
  title: {
    default: "OwlyDev | Desarrollo de Software y Soluciones Digitales",
    template: "%s | OwlyDev"
  },
  description: "Transforma tu negocio con desarrollo de software a medida y landing pages profesionales. Soluciones digitales escalables por OwlyDev Medellín.",
  keywords: ["desarrollo de software", "landing pages profesionales", "soluciones digitales", "OwlyDev Medellín", " Next.js", "ecommerce", "software"],
  authors: [{ name: "OwlyDev", url: baseUrl }],
  creator: "OwlyDev",
  alternates: {
    canonical: baseUrl,
  },

  // Icons
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon.ico' },
    ],
    apple: [
      { url: '/favicons/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // Manifest in public folder
  manifest: '/site.webmanifest',

  // OpenGraph (Facebook/LinkedIn)
  openGraph: {
    title: "OwlyDev | Desarrollo de Software y Soluciones Digitales",
    description: "Transforma tu negocio con desarrollo de software a medida y landing pages profesionales. Soluciones digitales escalables por OwlyDev Medellín.",
    url: baseUrl,
    siteName: "OwlyDev",
    locale: "es_ES",
    type: "website",
    images: [{
      url: "/branding/iso-tipo.webp",
      width: 1200,
      height: 630,
      alt: "OwlyDev - Desarrollo de Software y Soluciones Digitales",
    }],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "OwlyDev | Desarrollo de Software y Soluciones Digitales",
    description: "Transforma tu negocio con desarrollo de software a medida y landing pages profesionales.",
    images: ["/branding/iso-tipo.webp"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "OwlyDev",
              "url": baseUrl,
              "logo": `${baseUrl}/branding/iso-tipo.webp`,
              "email": "owlydev.team@gmail.com",
              "description": "Desarrollo de software y soluciones digitales en Medellín. Expertos en landing pages profesionales y desarrollo web a medida.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Medellín",
                "addressRegion": "Antioquia",
                "addressCountry": "CO"
              },
              "image": `${baseUrl}/branding/iso-tipo.webp`
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}