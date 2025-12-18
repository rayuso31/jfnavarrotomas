"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactSection() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        zip: "",
        email: "",
        subject: "Consulta General",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('https://primary-xdh7-production.up.railway.app/webhook/contact-submitted', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: "", phone: "", zip: "", email: "", subject: "Consulta General", message: "" });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Error sending form:", error);
            setStatus('error');
        }
    };

    return (
        <footer id="contact-section" className="bg-slate-900 text-cream-50 pt-24 pb-10 relative overflow-hidden">

            {/* Golden accent line top */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-10"
                >
                    <div>
                        <span className="text-gold-500 tracking-widest uppercase text-sm font-semibold mb-6 block">
                            Contacto
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6">
                            Estamos a su disposición.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">

                        {/* Address */}
                        <div className="flex items-start space-x-4">
                            <MapPin className="w-5 h-5 text-gold-500 mt-1 shrink-0" />
                            <div>
                                <h4 className="text-gold-100 uppercase tracking-wider font-semibold mb-2">Ubicación</h4>
                                <p className="text-slate-300 leading-relaxed">
                                    Calle Serpis nº 68, 2º - 2ª<br />
                                    Edificio Arcade<br />
                                    46022 Valencia (España)
                                </p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="flex items-start space-x-4">
                            <Clock className="w-5 h-5 text-gold-500 mt-1 shrink-0" />
                            <div>
                                <h4 className="text-gold-100 uppercase tracking-wider font-semibold mb-2">Horario</h4>
                                <p className="text-slate-300">De Lunes a Viernes</p>
                                <p className="text-slate-300">09:00 - 20:00 Horas</p>
                            </div>
                        </div>

                        {/* Phones */}
                        <div className="flex items-start space-x-4">
                            <Phone className="w-5 h-5 text-gold-500 mt-1 shrink-0" />
                            <div>
                                <h4 className="text-gold-100 uppercase tracking-wider font-semibold mb-2">Teléfonos</h4>
                                <p className="text-slate-300 text-lg hover:text-white transition-colors block">+34 963 563 155</p>
                                <p className="text-slate-300 text-lg hover:text-white transition-colors block">+34 654 535 267</p>
                            </div>
                        </div>

                        {/* Mail/Web */}
                        <div className="flex items-start space-x-4">
                            <Mail className="w-5 h-5 text-gold-500 mt-1 shrink-0" />
                            <div>
                                <h4 className="text-gold-100 uppercase tracking-wider font-semibold mb-2">Email</h4>
                                <p className="text-slate-300 break-all hover:text-white transition-colors">jfnavarrotomas@jfnavarrotomas.com</p>
                                <p className="text-slate-300 hover:text-white transition-colors">www.jfnavarrotomas.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Google Map Widget */}
                    <div className="w-full h-48 md:h-64 rounded-sm overflow-hidden border border-slate-700/50 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.089456536561!2d-0.3540871235472898!3d39.46736271286994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048eca32289c5%3A0xe5323a137bc39c6b!2sCarrer%20del%20Serpis%2C%2068%2C%20Camins%20al%20Grau%2C%2046022%20Val%C3%A8ncia%2C%20Valencia!5e0!3m2!1sen!2ses!4v1701980000000!5m2!1sen!2ses"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-slate-800/50 p-10 border border-slate-700/50 rounded-sm backdrop-blur-sm relative"
                >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gold-400/10 rounded-bl-full pointer-events-none" />

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-1 md:col-span-2 space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gold-100/60">Nombre</label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    type="text"
                                    className="w-full bg-slate-900/50 border-b border-slate-600 focus:border-gold-500 text-white p-3 outline-none transition-colors"
                                    placeholder="Su nombre y apellidos"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gold-100/60">Teléfono</label>
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    type="tel"
                                    className="w-full bg-slate-900/50 border-b border-slate-600 focus:border-gold-500 text-white p-3 outline-none transition-colors"
                                    placeholder="+34"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gold-100/60">C.P.</label>
                                <input
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    type="text"
                                    className="w-full bg-slate-900/50 border-b border-slate-600 focus:border-gold-500 text-white p-3 outline-none transition-colors"
                                    placeholder="46..."
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gold-100/60">Email</label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                type="email"
                                className="w-full bg-slate-900/50 border-b border-slate-600 focus:border-gold-500 text-white p-3 outline-none transition-colors"
                                placeholder="correo@ejemplo.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gold-100/60">Asunto</label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full bg-slate-900/50 border-b border-slate-600 focus:border-gold-500 text-white p-3 outline-none transition-colors appearance-none"
                            >
                                <option>Consulta General</option>
                                <option>Nueva Designación</option>
                                <option>Estado de Expediente</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gold-100/60">Mensaje</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full bg-slate-900/50 border-b border-slate-600 focus:border-gold-500 text-white p-3 outline-none transition-colors resize-none"
                                placeholder="Breve descripción de su consulta..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting' || status === 'success'}
                            className="w-full py-4 bg-gold-600 hover:bg-gold-500 disabled:bg-slate-600 text-slate-900 font-bold uppercase tracking-widest transition-colors mt-4 flex justify-center items-center gap-2"
                        >
                            {status === 'submitting' ? (
                                <>
                                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-slate-900 border-t-transparent" />
                                    Enviando...
                                </>
                            ) : status === 'success' ? (
                                <>
                                    <span>¡Mensaje Enviado!</span>
                                </>
                            ) : (
                                "Enviar Solicitud"
                            )}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-400 text-sm text-center mt-2">
                                Hemos recibido su solicitud correctamente. Le contactaremos en breve.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-400 text-sm text-center mt-2">
                                Ha ocurrido un error. Por favor, inténtelo de nuevo o llámenos directamente.
                            </p>
                        )}

                    </form>
                </motion.div>
            </div>

            <div className="text-center text-slate-600 text-xs tracking-widest py-8 border-t border-slate-800">
                © 2025 J.F. NAVARRO TOMÁS PROCURADORES. TODOS LOS DERECHOS RESERVADOS.
            </div>
        </footer>
    );
}
