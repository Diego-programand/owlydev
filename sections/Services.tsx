// components/sections/Services.tsx
import { services } from "@/lib/site";
import { ServiceCard } from "@/components/ui/service-cards";
import { Reveal } from "@/components/ui/reveal";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 bg-[#030712] py-20 md:py-32 overflow-hidden">
      {/* SCRIPT PARA GOOGLE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Desarrollo Web y Estrategia de Conversión",
            "provider": { "@type": "LocalBusiness", "name": "OwlyDev" },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Catálogo de Soluciones Digitales",
              "itemListElement": services.map((s) => ({
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": s.title, "description": s.desc }
              }))
            }
          })
        }}
      />

      <div className="absolute inset-0 bg-stars opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="relative flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="absolute -top-24 -z-10 h-[300px] w-[600px] bg-[#23ADCF]/5 blur-[120px] rounded-full" />

          <Reveal delay={0.2} direction="down">
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#23ADCF]/20 bg-[#23ADCF]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#23ADCF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#23ADCF] animate-pulse" />
                Nuestra Expertise
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl max-w-4xl mx-auto">
              Sistemas diseñados para{" "}
              <span className="bg-gradient-to-r from-[#23ADCF] to-[#0062cc] bg-clip-text text-transparent">
                escalar tu impacto
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.6}>
            <h2 className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl font-light">
              Construimos los cimientos de tu crecimiento. Convertimos problemas operativos en sistemas automáticos y visitas en clientes leales.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                desc={service.desc}
                img={service.img}
                href={service.href}
                index={index}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}