"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Sparkles,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Landing Pages de Alto Impacto",
    problem: "Tu web actual no retiene usuarios",
    description: "Desarrollamos sitios con Next.js enfocados en la conversión. Optimizamos la ruta del cliente para eliminar la fricción de compra.",
    benefits: ["Carga inferior a 1s", "SEO Técnico Avanzado", "Arquitectura Mobile-First"],
    metric: "100/100 Lighthouse",
  },
  {
    icon: Clock,
    title: "Automatización de Procesos",
    problem: "Tareas repetitivas frenan tu crecimiento",
    description: "Sistemas inteligentes (Bots/APIs) que gestionan leads y operaciones 24/7 sin intervención humana.",
    benefits: ["Tecnología n8n", "Integración con APIs", "Dashboard de Métricas", "Atención Automatizada"],
    metric: "-15h trabajo/semana",
  },
  {
    icon: TrendingUp,
    title: "Ecommerce Escalable",
    problem: "Fugas de dinero en el checkout",
    description: "Tiendas optimizadas para aumentar el ticket promedio y reducir el abandono de carrito mediante UX estratégica.",
    benefits: ["Pagos Seguros (Stripe)", "Gestión de Inventario", "Upselling Integrado"],
    metric: "+25% Ticket Promedio",
  },
  {
    icon: Shield,
    title: "Auditoría & Consultoría UX",
    problem: "No sabes por qué tus potenciales clientes no cierran",
    description: "Análisis de comportamiento real del usuario. Identificamos cuellos de botella técnicos y de diseño que te cuestan ventas.",
    benefits: ["Mapas de Calor", "Análisis de Competencia", "Plan de Acción Inmediato"],
    metric: "ROI Proyectado",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isActive = isMobile && isInView;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#0062cc]/10 transition-all duration-300 ${isActive ? "bg-white/[0.04] border-[#0062cc]/10" : ""
        }`}
    >
      {/* Icon & Metric */}
      <div className="flex items-start justify-between mb-8">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center bg-white/5 text-[#0062cc] group-hover:bg-[#0062cc] group-hover:text-[#0A0F1C] transition-colors duration-500 ${isActive ? "bg-[#0062cc] text-[#0A0F1C]" : ""
            }`}
        >
          <service.icon className="w-6 h-6" />
        </div>
        <span
          className={`text-[10px] font-bold py-1 px-3 rounded-md bg-white/5 text-white/60 border border-white/5 tracking-wider group-hover:text-[#0062cc] transition-colors duration-500 ${isActive ? "text-[#0062cc]" : ""
            }`}
        >
          {service.metric}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <p className="text-[white]/70 text-[10px] font-bold uppercase tracking-[0.2em]">
          {service.problem}
        </p>
        <h3
          className={`text-xl font-bold text-white group-hover:text-[#0062cc] transition-colors ${isActive ? "text-[#0062cc]" : ""
            }`}
        >
          {service.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed font-jakarta">
          {service.description}
        </p>

        {/* Benefits List */}
        <div className="grid grid-cols-1 gap-2 pt-4">
          {service.benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#0062cc]/40" />
              <span className="text-xs text-white/80 font-jakarta">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Minimal Arrow */}
      <a
        href="#contact"
        className={`mt-8 flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-white/70 group-hover:text-white group-hover:underline group-hover:underline-offset-4 transition-all duration-500 group-hover:cursor-pointer hover:text-[#0062cc] hover:underline group-hover:text-[14px] ${isActive ? "text-white underline underline-offset-4 text-[14px]" : ""
          }`}
      >
        <span>Solicitar información</span>
        <ArrowRight
          className={`w-3 h-3 transform group-hover:translate-x-1 transition-transform ${isActive ? "translate-x-1" : ""
            }`}
        />
      </a>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#00070D]">

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Header - Alineado con WhyUs */}
        <div className="text-left mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#BDE8F5]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Servicios OwlyDev</span>
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Estrategia digital con <br />
              <span className="bg-gradient-to-r from-[#23ADCF] to-[#0062cc] bg-clip-text text-transparent italic">enfoque en resultados.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-jakarta text-white/70 text-sm md:text-base max-w-xs">
            No creamos sitios web. Construimos herramientas de venta de alto rendimiento.
          </p>
        </div>

        {/* Services Grid - Tarjetas limpias y técnicas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Minimal Tech Stack Banner */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Stack Profesional:</span>
          {["Next.js", "Laravel", "React", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS", "Python", "n8n", "AWS", "Vercel"].map((tech) => (
            < span key={tech} className="text-xs font-jakarta text-white font-semibold" > {tech}</span>
          ))}
        </div>

      </div>
    </section >
  );
}