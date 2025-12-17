"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Phone, ShieldCheck } from "lucide-react"; // Replaced Award with ShieldCheck for a more confident look

export function FirmSection() {
    return (
        <section id="team" className="relative py-24 md:py-32 bg-cream-100 overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-100/30 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-[600px] opacity-20 pointer-events-none mix-blend-multiply">
                <Image src="/banner-luxury.png" alt="Luxury Background" fill className="object-cover object-top" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center md:text-left md:max-w-2xl"
                >
                    <span className="text-gold-600 tracking-widest uppercase text-sm font-semibold mb-2 block">
                        Nuestra Firma
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-slate-900 leading-tight">
                        Un legado de confianza <span className="italic text-gold-600">y profesionalidad.</span>
                    </h2>
                    <div className="w-24 h-1 bg-gold-400 mt-6 md:ml-0 mx-auto" />
                </motion.div>

                {/* Procurador Profile & Stats */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-start">

                    {/* Juan Francisco Image & Floating Stats */}
                    <div className="relative w-full max-w-sm mx-auto">
                        {/* Decorative Frame */}
                        <div className="absolute -inset-4 border-2 border-gold-400/30 -z-10 rounded-sm" />
                        <div className="absolute -inset-2 border border-gold-500/50 -z-10 rounded-sm translate-x-2 translate-y-2 bg-cream-100" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl shadow-gold-900/20 bg-cream-200"
                        >
                            <Image
                                src="/jfnt.png"
                                alt="Juan Francisco Navarro Tomás"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 400px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                        </motion.div>

                        {/* Floating Stat 1: Years - ANIMATED */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            animate={{ y: [0, -8, 0] }} // Float animation
                            // @ts-ignore
                            transition={{
                                y: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0
                                }
                            }}
                            className="absolute -bottom-8 -left-4 md:-left-8 bg-white p-6 shadow-xl shadow-slate-900/10 border-l-4 border-gold-500 max-w-[200px] z-20"
                        >
                            <span className="block text-4xl font-serif text-slate-900 font-bold">37+</span>
                            <span className="text-xs uppercase tracking-widest text-slate-500">Años de Experiencia</span>
                        </motion.div>

                        {/* Floating Stat 2: Clients - ANIMATED */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            animate={{ y: [0, -12, 0] }} // Float animation (different phase)
                            // @ts-ignore
                            transition={{
                                y: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }
                            }}
                            className="absolute -top-12 -right-8 md:-right-24 bg-slate-900 text-cream-50 p-6 shadow-2xl rounded-sm border border-gold-500/30 z-20"
                        >
                            <div className="flex items-center gap-3 mb-1">
                                <Users className="w-5 h-5 text-gold-400" />
                                <span className="text-3xl font-serif font-bold text-gold-100">+90.000</span>
                            </div>
                            <span className="text-xs uppercase tracking-widest text-gold-200/60 block text-right">Clientes Satisfechos</span>
                        </motion.div>
                    </div>

                    {/* Juan Francisco Bio (Unchanged) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col space-y-8 pt-4"
                    >
                        <div>
                            <h3 className="text-4xl font-serif text-slate-900 mb-2">Juan Francisco Navarro Tomás</h3>
                            <span className="inline-block py-1 px-3 bg-gold-100 text-gold-700 text-xs tracking-widest uppercase font-semibold rounded-sm">
                                Titular del Despacho
                            </span>
                        </div>

                        <div className="prose prose-lg text-slate-600 font-sans leading-relaxed">
                            <p>
                                <strong className="text-slate-800">Colegiado número 166</strong> del Ilustre Colegio de Procuradores de Valencia,
                                de alta en el Partido Judicial de Liria (Valencia) desde 1988.
                            </p>
                            <p className="font-serif text-xl text-slate-800 italic border-l-2 border-gold-400 pl-6 my-6">
                                "Ejerciendo única y exclusivamente la procuraduría."
                            </p>
                            <p>
                                Ha recibido diploma colegial en reconocimiento a sus <strong className="text-gold-600">más de 25 años de ejercicio impecable</strong>.
                            </p>
                            <p>
                                Esta experiencia nos ha permitido contar con los recursos técnicos y humanos necesarios para garantizar la satisfacción de los Letrados directores y los clientes que confían en nosotros.
                            </p>
                            <p>
                                Juan Francisco Navarro Tomás se ha rodeado de un gran equipo para brindarles el mejor servicio profesional y humano.
                                <br />
                                <span className="block mt-4 text-slate-800 font-medium">Nuestro despacho, cada día más cerca de ustedes.</span>
                            </p>
                        </div>

                        {/* Contact Bar CTA - Embedded */}
                        <div className="mt-8">
                            <motion.a
                                href="#contact-section"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-between bg-slate-900 text-white p-1 rounded-full pr-8 group cursor-pointer w-full md:w-auto md:inline-flex"
                            >
                                <div className="bg-gold-500 text-slate-900 p-3 rounded-full mr-4">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="uppercase tracking-widest text-sm font-semibold mr-4 group-hover:text-gold-200 transition-colors">
                                    Contactar Ahora
                                </span>
                                <span className="text-gold-500">→</span>
                            </motion.a>
                        </div>

                    </motion.div>

                </div>

                {/* The Team - Glassmorphism Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-10 md:p-16 rounded-sm border-t-4 border-gold-400 relative overflow-hidden group hover:border-gold-300 transition-colors duration-500"
                >
                    {/* Living Background Effect */}
                    <div className="absolute inset-0 -z-10">
                        {/* Subtle Gold Mesh Gradient Animation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-gold-50/30" />
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 5, 0],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-b from-gold-200/20 to-transparent rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.5, 1],
                                x: [0, 50, 0],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-t from-gold-300/10 to-transparent rounded-full blur-3xl"
                        />
                    </div>

                    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                        {/* Replaced Icon with ShieldCheck for elegance */}
                        <ShieldCheck className="w-48 h-48 text-slate-900" />
                    </div>

                    <div className="relative z-10 text-center">
                        <div className="inline-flex items-center justify-center p-4 bg-gold-100 rounded-full mb-8">
                            {/* Smaller centered icon */}
                            <ShieldCheck className="w-8 h-8 text-gold-600" />
                        </div>

                        <h3 className="text-2xl font-serif text-slate-800 mb-8">Equipo de Oficiales Habilitados</h3>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
                            La excelencia en la gestión diaria recae en nuestro equipo de oficiales altamente cualificadas,
                            que aseguran que cada trámite se realice con precisión y celeridad.
                        </p>

                        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                            {['Carolina Castaño', 'María Pilar Pérez', 'Yolanda Nieto'].map((name) => (
                                <div key={name} className="flex flex-col items-center space-y-2">
                                    <div className="w-2 h-2 bg-gold-400 rounded-full" />
                                    <span className="text-xl text-slate-900 font-serif font-medium">{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
