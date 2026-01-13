import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Outfit, Plus_Jakarta_Sans, Roboto } from "next/font/google";

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

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto", // Nombre de la variable CSS
  weight: ["400", "500", "700"],
  display: "swap",
});
// 1. Nueva exportación para configuración visual (Viewport)
export const viewport: Viewport = {
  themeColor: "#000000",
  // Opcional: puedes asegurar que el sitio no se deforme en móviles
  width: 'device-width',
  initialScale: 1,
};

// 2. Tu metadata actualizada (sin el themeColor)
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
    : 'https://owlydev.com'),
  
  applicationName: "OwlyDev",

  appleWebApp: {
    capable: true,
    title: "OwlyDev", 
    statusBarStyle: "black-translucent",
  },

  title: "OwlyDev | Expertos en Desarrollo Web y Estrategia de Conversión",
  description: "No solo creamos páginas, construimos activos digitales. Especialistas en Next.js, Ecommerce y automatización para negocios que buscan escalar.",
  keywords: ["Desarrollo web profesional", "Creación de Ecommerce", "Programador Next.js", "Automatización de procesos", "Diseño UX"],
  authors: [{ name: "OwlyDev" }],

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
  manifest: '/site.webmanifest',

  openGraph: {
    title: "OwlyDev | Code with Soul",
    description: "Innovación que cautiva. Software que escala.",
    url: "https://owlydev.com",
    siteName: "OwlyDev",
    images: [
      {
        url: "/api/og", 
        width: 1200,
        height: 630,
        alt: "OwlyDev - Premium Digital Solutions",
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OwlyDev",
    description: "Desarrollo web de alto rendimiento.",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
