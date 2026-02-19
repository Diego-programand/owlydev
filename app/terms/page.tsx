import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
    return (
        <main className="min-h-screen bg-[#030712] py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#23ADCF]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0062cc]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/40 hover:text-[#23ADCF] transition-colors mb-12 text-sm uppercase tracking-widest font-bold"
                >
                    <ArrowLeft className="w-4 h-4" /> Volver al inicio
                </Link>

                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                    Términos y Condiciones
                </h1>

                <p className="text-white/60 text-sm font-jakarta mb-12">
                    Última actualización: {new Date().getFullYear()}
                </p>

                <div className="space-y-12 text-white/80 font-jakarta leading-relaxed">
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">1. Aceptación de los Términos</h2>
                        <p>
                            Al acceder y utilizar los servicios de OwlyDev, aceptas cumplir con estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de los términos, te recomendamos no utilizar nuestros servicios.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">2. Descripción del Servicio</h2>
                        <p>
                            OwlyDev ofrece servicios de desarrollo web, diseño UX/UI, automatización y soluciones de comercio electrónico. Los detalles específicos, plazos y costos de cada proyecto se acordarán mediante una propuesta comercial formal aceptada por ambas partes.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">3. Propiedad Intelectual</h2>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-4">
                            <p>
                                <strong>Código y Diseño Final:</strong> Al completar el pago total acordado, el Cliente obtiene la propiedad intelectual completa sobre el producto final entregado (sitio web, código fuente, diseño).
                            </p>
                            <p>
                                <strong>Herramientas y Librerías:</strong> Nos reservamos el derecho de reutilizar fragmentos de código genérico, librerías de terceros o herramientas internas que no sean específicas del negocio del Cliente.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">4. Pagos y Cancelaciones</h2>
                        <p>
                            Los proyectos requieren un anticipo (generalmente del 40-50%) para iniciar. El saldo restante se abona contra entrega final. En caso de cancelación por parte del cliente una vez iniciado el trabajo, el anticipo no será reembolsable para cubrir horas de trabajo y recursos asignados.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">5. Limitación de Responsabilidad</h2>
                        <p>
                            OwlyDev no será responsable por daños indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso de los productos entregados una vez han sido aprobados y transferidos al cliente. No garantizamos resultados específicos de ventas o tráfico, ya que estos dependen de múltiples factores externos.
                        </p>
                    </section>

                    <section className="space-y-4 pt-8 border-t border-white/10">
                        <h2 className="text-xl font-bold text-white">Contacto Legal</h2>
                        <p>
                            Para cualquier asunto relacionado con estos términos, contáctanos en: <br />
                            <a href="mailto:owlydev.team@gmail.com" className="text-[#23ADCF] hover:underline">owlydev.team@gmail.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
