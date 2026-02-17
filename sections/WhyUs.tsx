"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { X, Check, Zap, Clock, TrendingUp, Shield, Sparkles, ArrowRight, Gauge } from "lucide-react";

const comparison = {
    competitors: [
        { text: "Entregas lentas (3-6 meses)" },
        { text: "Webs pesadas y poco optimizadas" },
        { text: "Cobros extras por cada pequeño ajuste" },
        { text: "Soporte nulo tras el pago final" },
    ],
    owlydev: [
        { text: "Primera versión funcional en 21 días", highlight: true },
        { text: "100/100 PageSpeed Garantizado", highlight: true },
        { text: "3 meses de soporte técnico incluido", highlight: true },
        { text: "Código limpio y escalable (Next.js/Laravel)", highlight: true },
    ],
};

const metrics = [
    { icon: Zap, label: "de Carga", value: "< 1s", color: "#0062cc" },
    { icon: TrendingUp, label: "de Conversión", value: "+35%", color: "#0062cc" },
    { icon: Shield, label: "de Garantía", value: "100/100", color: "#0062cc" },
];

export default function WhyUs() {
    return (
        <section id="why-us" className="relative py-20 lg:py-32 overflow-hidden bg-[#030B14]">
            {/* Orbes de fondo para mantener la estética del Hero */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 bg-[#0B1026] -z-10" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">

                {/* Header Conciso */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#BDE8F5]/20 bg-[#BDE8F5]/5 mb-4"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-[#BDE8F5]" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#BDE8F5]">¿Por qué elegirnos?</span>
                    </motion.div>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
                        Menos promesas, <span className="bg-gradient-to-r from-[#23ADCF] to-[#0062cc] bg-clip-text text-transparent">más resultados.</span>
                    </h2>
                </div>

                {/* Grid de Comparación Compacto */}
                <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch mb-15">

                    {/* El Problema (Otras agencias) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:col-span-2 p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-[#AD2405] hover:bg-[#AD2405]/10 transition-all"
                    >
                        <p className="text-[#AD2405]/80 font-bold text-sm mb-6 uppercase tracking-wider">El estándar del mercado</p>
                        <ul className="space-y-4">
                            {comparison.competitors.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white/50 text-sm">
                                    <X className="w-4 h-4 text-[#AD2405]/70" />
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* El Separador Visual (Opcional, solo en Desktop) */}
                    <div className="hidden lg:flex items-center justify-center">
                        <div className="h-20 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent" />
                    </div>

                    {/* La Solución (OwlyDev) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-2 p-8 rounded-2xl border border-[#0062cc]/20 bg-[#0062cc]/5 backdrop-blur-md hover:border-[#0062cc] hover:bg-[#0062cc]/10 transition-all"
                    >
                        <p className="text-[#0062cc] font-bold text-sm mb-6 uppercase tracking-wider">En OwlyDev</p>
                        <ul className="space-y-4">
                            {comparison.owlydev.map((item, i) => (
                                <li key={i} className={cn(
                                    "flex items-center gap-3 text-sm transition-all",
                                    item.highlight ? "text-white/90 font-medium" : "text-white/70"
                                )}>
                                    <Check className="w-4 h-4 text-[#0062cc]" />
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Métricas y Prueba Social combinada */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl border border-white/5 bg-white/[0.03] flex items-center gap-5"
                        >
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5" style={{ color: m.color }}>
                                <m.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white leading-none">{m.value}</p>
                                <p className="text-xs text-white/40 uppercase mt-1 tracking-tighter">{m.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bloque Final de Confianza: Lighthouse + Testimonio */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-12 p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.02] to-transparent flex flex-col md:flex-row items-center gap-8"
                >
                    <div className="flex-shrink-0 flex items-center gap-4 bg-black/40 p-4 rounded-2xl border border-green-500/20">
                        <div className="relative w-16 h-16 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/5" />
                                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="175.9" strokeDashoffset="0" className="text-green-500" />
                            </svg>
                            <span className="absolute text-green-500 font-bold text-xl">100</span>
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm leading-tight text-left">Optimización<br />Lighthouse</p>
                            <p className="text-green-500/80 text-[10px] font-bold">VERIFICADO</p>
                        </div>
                    </div>

                    <p className="text-white/70 italic text-sm md:text-base text-center md:text-left border-l border-white/10 md:pl-8">
                        "En OwlyDev no solo creamos páginas, construimos activos digitales. Si tu web no carga en menos de 1 segundo, estás perdiendo dinero cada minuto."
                    </p>
                </motion.div>

            </div>
        </section>
    );
}