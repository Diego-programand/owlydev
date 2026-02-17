"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Rocket,
    Atom,
    CreditCard,
    ShoppingCart,
    Layout,
    Cpu,
    Globe
} from "lucide-react";

const logos = [
    { name: "Next.js", icon: Rocket },
    { name: "React", icon: Atom },
    { name: "Stripe", icon: CreditCard },
    { name: "Shopify", icon: ShoppingCart },
    { name: "Figma", icon: Layout },
    { name: "Tailwind", icon: Cpu },
    { name: "Performance", icon: Globe },
];

// Duplicamos los logos para el efecto de scroll infinito
const duplicatedLogos = [...logos, ...logos, ...logos];

export default function TrustBar() {
    return (
        <section className="w-full py-12 bg-transparent group overflow-hidden">
            <div className="container mx-auto px-4 mb-8">
                <p className="text-center font-display uppercase tracking-[0.2em] text-[10px] sm:text-xs text-slate-400/80">
                    Tecnologías de alto rendimiento
                </p>
            </div>

            <div className="relative flex overflow-hidden">
                {/* Gradientes laterales para suavizar el scroll */}
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#16263a] to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#16263a] to-transparent pointer-events-none" />

                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-12 group/logo"
                        >
                            <logo.icon
                                className="w-6 h-6 sm:w-8 sm:h-8 grayscale opacity-50 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-cyan-400 group-hover:scale-110"
                            />
                            <span className="text-slate-50/50 font-medium text-sm sm:text-base grayscale opacity-50 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-slate-50">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
