import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
    return (
        <main className="min-h-screen bg-[#030712] py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#23ADCF]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0062cc]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/40 hover:text-[#23ADCF] transition-colors mb-12 text-sm uppercase tracking-widest font-bold"
                >
                    <ArrowLeft className="w-4 h-4" /> Volver al inicio
                </Link>

                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                    Política de Privacidad
                </h1>

                <p className="text-white/60 text-sm font-jakarta mb-12">
                    Última actualización: {new Date().getFullYear()}
                </p>

                <div className="space-y-12 text-white/80 font-jakarta leading-relaxed">
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">1. Introducción</h2>
                        <p>
                            En OwlyDev, nos comprometemos a proteger la privacidad de nuestros usuarios y clientes. Esta política detalla cómo recopilamos, usamos y protegemos la información personal que nos proporcionas a través de nuestro sitio web y servicios.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">2. Información que Recopilamos</h2>
                        <p>
                            Podemos recopilar la siguiente información cuando interactúas con nuestro sitio (por ejemplo, al completar el formulario de contacto):
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-white/60 bg-white/5 p-6 rounded-2xl border border-white/5">
                            <li>Nombre completo</li>
                            <li>Dirección de correo electrónico</li>
                            <li>Información sobre tu proyecto o empresa</li>
                            <li>Cualquier otro dato que decidas compartir en tu mensaje</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">3. Uso de la Información</h2>
                        <p>
                            Utilizamos la información recopilada exclusivamente para:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-white/60">
                            <li>Responder a tus consultas y solicitudes de presupuesto.</li>
                            <li>Proveer los servicios de desarrollo y consultoría contratados.</li>
                            <li>Mejorar la experiencia de usuario en nuestro sitio web.</li>
                            <li>Enviar comunicaciones relacionadas con tu proyecto.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">4. Protección de Datos</h2>
                        <p>
                            Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra el acceso no autorizado, la alteración, divulgación o destrucción. No vendemos ni compartimos tu información personal con terceros con fines comerciales.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">5. Tus Derechos</h2>
                        <p>
                            Tienes derecho a solicitar el acceso, rectificación o eliminación de tus datos personales en cualquier momento. Para ejercer estos derechos, por favor contáctanos directamente.
                        </p>
                    </section>

                    <section className="space-y-4 pt-8 border-t border-white/10">
                        <h2 className="text-xl font-bold text-white">Contacto</h2>
                        <p>
                            Si tienes preguntas sobre esta política, puedes escribirnos a: <br />
                            <a href="mailto:owlydev.team@gmail.com" className="text-[#23ADCF] hover:underline">owlydev.team@gmail.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
