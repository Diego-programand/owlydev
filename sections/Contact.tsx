"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Send, Mail, MessageSquare, Sparkles, Check, ArrowRight, ShieldCheck, Zap } from "lucide-react";

const interests = [
  "E-commerce de Alto Impacto",
  "Landing Page de Conversión",
  "Automatización & Bots",
  "Auditoría UX/UI",
  "Consultoría Técnica"
];

export default function Contact() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setFormData({ name: "", email: "", message: "" });
      setSelectedInterests([]);
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#0A0F1C] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#BDE8F5]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Columna Izquierda: El Valor */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#BDE8F5]/20 bg-[#BDE8F5]/5 mb-6">
                <Zap className="w-3.5 h-3.5 text-[#4988C4]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#4988C4]">Cupos limitados para Marzo</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                ¿Listo para escalar <br />
                <span className="bg-gradient-to-r from-[#23ADCF] to-[#4988C4] bg-clip-text text-transparent italic font-medium">tus resultados?</span>
              </h2>
              <p className="text-white/50 font-jakarta text-base leading-relaxed">
                No somos una fábrica de código. Somos el brazo tecnológico que tu negocio necesita para dejar de perder clientes.
              </p>
            </motion.div>

            {/* Garantías de Agencia */}
            <div className="space-y-4 ">
              {[
                { icon: ShieldCheck, title: "Propiedad Total", desc: "El código y dominio son 100% tuyos." },
                { icon: MessageSquare, title: "Soporte Directo", desc: "Hablas con nosotros, no con un bot." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <item.icon className="w-5 h-5 text-[#4988C4] shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-white leading-none">{item.title}</p>
                    <p className="text-xs text-white/40 mt-1 tracking-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Social */}
            <div className="pt-8 border-t border-white/5">
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] mb-4">Contacto Directo</p>
              <a href="mailto:owlydev.team@gmail.com" className="text-white/60 hover:text-[#4988C4] transition-colors font-jakarta text-sm">
                owlydev.team@gmail.com
              </a>
            </div>
          </div>

          {/* Columna Derecha: El Formulario (Modern Glass) */}
          <motion.div
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.01] backdrop-blur-3xl space-y-8 shadow-2xl">

              {/* Selector de Intereses */}
              <div>
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">¿Qué necesitas solucionar?</p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => setSelectedInterests(prev => prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest])}
                      className={cn(
                        "px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border",
                        selectedInterests.includes(interest)
                          ? "bg-gradient-to-r from-[#23ADCF]/90 to-[#4988C4]/90 text-[#0A0F1C] border-[#4988C4]"
                          : "bg-white/5 border-white/5 text-white/50 hover:border-white/20"
                      )}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase pl-1">Nombre</label>
                  <input
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#BDE8F5]/50 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase pl-1">Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#BDE8F5]/50 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/40 uppercase pl-1">Mensaje</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#BDE8F5]/50 transition-all resize-none"
                  placeholder="Háblame de tu proyecto..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status !== "idle"}
                className={cn(
                  "w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all duration-500 flex items-center justify-center gap-3",
                  status === "success" ? "bg-green-500 text-white" : "bg-gradient-to-r from-[#23ADCF] to-[#4988C4] text-[#0A0F1C] hover:scale-[1.02] shadow-lg shadow-[#BDE8F5]/10"
                )}
              >
                {status === "idle" && (
                  <>Enviar Solicitud <ArrowRight className="w-4 h-4" /></>
                )}
                {status === "submitting" && (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                    <Zap className="w-4 h-4" />
                  </motion.div>
                )}
                {status === "success" && (
                  <>Enviado con éxito <Check className="w-4 h-4" /></>
                )}
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}