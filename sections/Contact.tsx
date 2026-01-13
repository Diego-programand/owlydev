"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Send, Mail, MessageSquare, Sparkles, Check, ArrowRight } from "lucide-react";

// Marketing: Intereses enfocados en RESULTADOS, no solo en tareas técnicas
const interests = [
  "Ecosistema de Ventas (E-commerce)",
  "Plataformas Web de Alto Rendimiento",
  "Automatización con Bots (Discord/Web)",
  "Auditoría y Estrategia UX/UI",
  "Rediseño de Marca Digital",
  "Consultoría Tecnológica"
];

const socialLinks = [
  {
    name: "WhatsApp Directo",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M20.52 3.48A11.78 11.78 0 0 0 12.01 0 11.8 11.8 0 0 0 1.9 17.78L0 24l6.4-1.86A11.82 11.82 0 0 0 12 24a11.8 11.8 0 0 0 8.52-20.52zm-8.52 18a9.8 9.8 0 0 1-5-1.38l-.36-.22-3.8 1.1 1.02-3.7-.24-.38A9.79 9.79 0 1 1 12 21.48zm5.38-7.28c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15s-.76.97-.93 1.17-.34.22-.64.07a8.02 8.02 0 0 1-2.36-1.45 8.83 8.83 0 0 1-1.63-2.03c-.17-.3 0-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.5h-.56a1.08 1.08 0 0 0-.78.36 3.27 3.27 0 0 0-1.02 2.43c0 1.44 1.05 2.83 1.2 3.03.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.61.7.22 1.33.19 1.83.12.56-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.56-.35z" />
      </svg>
    ),
    href: "https://wa.me/tu-numero",
    color: "#25D366",
    status: "Atención prioritaria"
  },
  {
    name: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.506 5.506 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 13 3.504 3.504 0 0 1 12 16.5zm4.75-9.75a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25z" />
      </svg>
    ),
    href: "https://instagram.com/owlydev",
    color: "#E1306C",
    status: "Nuestro día a día"
  },
  {
    name: "Correo Directo",
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:owlydev.team@gmail.com",
    color: "#23ADCF",
    status: "Propuestas formales"
  }
];

export default function Contact() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", email: "", message: "" });
      setSelectedInterests([]);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 bg-[#030712] py-20 md:py-32 overflow-hidden"
    >
      {/* SCRIPT SEO: Metadata de contacto para Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contacto OwlyDev",
            "description": "Agenda una consultoría estratégica con los expertos en desarrollo web de OwlyDev.",
            "mainEntity": {
              "@type": "Organization",
              "name": "OwlyDev",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "owlydev.team@gmail.com",
                "contactType": "customer service"
              }
            }
          })
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#0A111A] to-[#030712]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#23ADCF]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#0062cc]/10 rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Header: Enfocado en el inicio de la transformación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#23ADCF]/30 bg-[#23ADCF]/5 px-4 py-1.5 mb-6 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 text-[#23ADCF]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#23ADCF]">
              Inicia tu fase de crecimiento
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Convirtamos tu visión en una{" "}
            <span className="bg-gradient-to-r from-[#23ADCF] to-[#0062cc] bg-clip-text text-transparent">
              ventaja competitiva
            </span>
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            No buscamos clientes, buscamos socios estratégicos. Cuéntanos qué quieres lograr y diseñaremos el camino técnico para llegar allí.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-2 gap-8 max-w-6xl mx-auto">
          
          {/* Card: Compromiso de Calidad (Autoridad) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0A111A]/60 backdrop-blur-xl p-6 md:p-8 h-full">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#23ADCF] to-[#0062cc] flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Nuestra Promesa
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Elevamos el estándar de lo que esperas de una agencia de desarrollo.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Análisis de viabilidad sin costo inicial",
                  "Transparencia radical en tiempos y costos",
                  "Enfoque en ROI (Retorno de Inversión)",
                  "Sistemas escalables y de propiedad total"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#23ADCF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#23ADCF]" />
                    </div>
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Social Links: Canales de atención (Prueba Social/Disponibilidad) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 order-3 lg:order-none"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0A111A]/60 backdrop-blur-xl p-6 md:p-8 h-full">
              <h3 className="font-display text-lg font-bold text-white mb-4">
                Vías de comunicación directa
              </h3>
              
              <div className="space-y-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-3 rounded-xl p-3 border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                      style={{ backgroundColor: `${social.color}20`, color: social.color }}
                    >
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{social.name}</p>
                      <p className="text-xs text-white/50">{social.status}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulario: El Motor de Conversión */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-3 order-2 lg:order-none"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0A111A]/60 backdrop-blur-xl p-6 md:p-8 relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#23ADCF]/50 to-transparent" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    ¿Cuál es tu prioridad actual? (Selecciona una o varias)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => {
                      const isSelected = selectedInterests.includes(interest);
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleInterest(interest)}
                          className={cn(
                            "px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border backdrop-blur-sm",
                            isSelected
                              ? "border-[#23ADCF]/50 bg-[#23ADCF]/10 text-[#23ADCF]"
                              : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10"
                          )}
                        >
                          {interest}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Nombre o Empresa</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej: Elon de Tesla"
                      className="w-full h-12 rounded-xl px-4 bg-[#030712]/60 border border-white/10 text-white focus:outline-none focus:border-[#23ADCF]/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Correo Personal o Corporativo</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@negocio.com"
                      className="w-full h-12 rounded-xl px-4 bg-[#030712]/60 border border-white/10 text-white focus:outline-none focus:border-[#23ADCF]/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Desafío del proyecto</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    placeholder="Cuéntanos: ¿Qué quieres solucionar y por qué ahora es el momento?"
                    className="w-full rounded-xl p-4 resize-none bg-[#030712]/60 border border-white/10 text-white focus:outline-none focus:border-[#23ADCF]/50 transition-all"
                  />
                </div>

                <div className="flex justify-end">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "group relative inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-white transition-all duration-300",
                      isSuccess
                        ? "bg-green-500/20 border border-green-500/50"
                        : "bg-gradient-to-r from-[#23ADCF] to-[#0062cc] hover:shadow-[0_0_30px_rgba(35,173,207,0.4)]"
                    )}
                  >
                    {isSuccess ? (
                      <>
                        <Check className="w-5 h-5" />
                        Solicitud Recibida
                      </>
                    ) : isSubmitting ? (
                      <>
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                          <Send className="w-5 h-5" />
                        </motion.div>
                        Procesando...
                      </>
                    ) : (
                      <>
                        Agendar Consultoría
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}