"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, TrendingUp, Cpu, ShoppingBag, LayoutDashboard } from "lucide-react";

interface Project {
    title: string;
    subtitle: string;
    metric: string;
    category: string;
    image: string;
    link: string;
    icon: React.ReactNode;
}

const projects: Project[] = [
    {
        title: "Grupo Leovoltaje",
        subtitle: "Plataforma corporativa de alta disponibilidad para el sector eléctrico e ingeniería.",
        metric: "Arquitectura optimizada para carga instantánea y confianza industrial.",
        category: "Corporate Web",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop",
        link: "https://grupoleovoltaje.com/",
        icon: <Cpu className="w-5 h-5" />,
    },
    {
        title: "Creaciones Vane",
        subtitle: "Landing page premium con enfoque en venta de anchetas personalizadas y desayunos sorpresa.",
        metric: "Interfaz mobile-first diseñada para convertir scroll en ventas.",
        category: "Landing Page",
        image: "https://creacionesvane.com/_next/image?url=%2Fcategorias%2Fanchetas.webp&w=3840&q=75",
        link: "https://creacionesvane.com/",
        icon: <ShoppingBag className="w-5 h-5" />,
    },
    {
        title: "Vane Mobiliarios Admin",
        subtitle: "Sistema de gestión interna y control de inventario para empresa de alquiler de mobiliario.",
        metric: "Reducción crítica de errores en reservaciones y control total de stock.",
        category: "Custom Software",
        image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoV1MH9qDYAe6nZnsiGknOL24hIuj458Xw_j80wr4LVoY3Ni6o0enGoHiSCA8XgRiLnSvxNdt9_8AGGhsiTuES_HE3XsFzrYI-dXhP0idJxzrPkBg0iBad1gigAy8gJT716IBMsB6qMNk0=s680-w680-h510-rw",
        link: "https://owlydev.vercel.app/",
        icon: <LayoutDashboard className="w-5 h-5" />,
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
};

export default function Portfolio() {
    return (
        <section className="relative w-full py-20 bg-[#00030A] overflow-hidden" id="portfolio">

            <div className="container relative z-10 mx-auto px-6">
                {/* Header de Sección */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[#23ADCF]  font-jakarta text-[10px] font-bold uppercase tracking-[0.4em] block mb-4"
                        >
                            Casos de Éxito Destacados
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-display font-bold text-white leading-tight"
                        >
                            Soluciones que <br />
                            <span className="bg-gradient-to-r from-[#23ADCF] to-[#0062cc] bg-clip-text text-transparent italic font-medium">ya están facturando.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-xs text-white/50 font-jakarta text-sm leading-relaxed border-l border-white/10 pl-6"
                    >
                        No son solo sitios web; son activos de software diseñados para resolver problemas específicos de negocio.
                    </motion.p>
                </div>

                {/* Grid de Proyectos */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative h-[550px] rounded-[1rem] border border-[#0062cc]/5 bg-white/[0.01] backdrop-blur-3xl overflow-hidden transition-all duration-500 hover:border-[#0062cc]/30"
                        >
                            {/* Imagen con Overlay Técnico */}
                            <div className="relative h-2/3 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={`Proyecto ${project.title} - Desarrollo de Software y Soluciones Digitales por OwlyDev`}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#00030A] via-[#00030A]/20 to-transparent" />

                                {/* Floating Badge */}
                                <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
                                    <div className="text-[#0062cc]">{project.icon}</div>
                                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">{project.category}</span>
                                </div>
                            </div>

                            {/* Contenido Elevado */}
                            <div className="absolute bottom-0 w-full p-8 transition-transform duration-500 group-hover:-translate-y-2">
                                <h3 className="text-2xl font-display font-bold text-white mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-white/60 font-jakarta mb-6 leading-relaxed">
                                    {project.subtitle}
                                </p>

                                {/* Metric Box con estilo WhyUs */}
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 mb-6">
                                    <div className="w-8 h-8 rounded-lg bg-[#BDE8F5]/10 flex items-center justify-center shrink-0">
                                        <TrendingUp className="w-4 h-4 text-white group-hover:text-[#0062cc] transition-colors duration-500" />
                                    </div>
                                    <p className="text-[12px] font-medium text-white/70 leading-snug">
                                        {project.metric}
                                    </p>
                                </div>

                                <button onClick={() => window.open(project.link, "_blank")} className="mt-8 flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-white/60 group-hover:text-white group-hover:underline group-hover:underline-offset-4 transition-all duration-500 group-hover:cursor-pointer hover:text-[#0062cc] hover:underline group-hover:text-[12px]">
                                    Analizar Caso
                                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}