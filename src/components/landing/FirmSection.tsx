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

            {/* Global Lady Justice Background - Optimized visibility */}
            <div className="absolute inset-0 w-full h-full pointer-events-none -z-5 opacity-10">
                <Image
                    src="/lady_justice_bg.png"
                    alt="Lady Justice Background"
                    fill
                    className="object-cover object-right-top md:object-contain md:object-right"
                    quality={90}
                />
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

                {/* Procurador Profile & Stats - Swapped Layout (Text Left, Image Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-start relative">

                    {/* Left Column: Text Content & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col space-y-8 relative z-10 order-2 lg:order-1"
                    >
                        <div>
                            <h3 className="text-4xl lg:text-5xl font-serif text-slate-900 mb-2">Juan Francisco Navarro Tomás</h3>
                            <span className="inline-block py-1 px-3 bg-gold-100/50 text-gold-700 text-xs tracking-widest uppercase font-semibold rounded-sm border border-gold-200">
                                Titular del Despacho
                            </span>
                        </div>

                        <div className="prose prose-lg text-slate-600 font-sans leading-relaxed">
                            <p>
                                <strong className="text-slate-900">Colegiado número 166</strong> del Ilustre Colegio de Procuradores de Valencia,
                                de alta en el Partido JUDICIAL DE LIRIA (Valencia) desde 1988.
                            </p>

                            <p className="uppercase tracking-wide font-medium text-slate-800 text-sm mt-6 mb-2">
                                EJERCIENDO ÚNICA Y EXCLUSIVAMENTE LA PROCURADURÍA.
                            </p>

                            <p>
                                Ha recibido diploma colegial en reconocimiento a sus <strong className="text-gold-600">más de 25 años de ejercicio impecable</strong>.
                            </p>
                            <p>
                                Esta experiencia nos ha permitido contar con los recursos técnicos y humanos necesarios para garantizar la satisfacción de los Letrados directores y los clientes que confían en nosotros.
                            </p>
                            <p>
                                Juan Fco Navarro Tomás se ha rodeado de un gran equipo para brindarles el mejor servicio profesional y humano.
                                <br />
                                <span className="block mt-4 text-slate-800 font-medium">Nuestro despacho, cada día más cerca de ustedes.</span>
                            </p>
                        </div>

                        {/* Stats - Moved to Bottom of Text Column */}
                        <div className="flex flex-wrap gap-12 pt-8 border-t border-gold-200/50">
                            <div>
                                <span className="block text-4xl font-serif text-slate-900 font-bold mb-1">37+</span>
                                <span className="text-xs uppercase tracking-widest text-slate-500">Años de Experiencia</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-serif text-slate-900 font-bold mb-1">90.000+</span>
                                <span className="text-xs uppercase tracking-widest text-slate-500">Clientes Satisfechos</span>
                            </div>
                        </div>

                        {/* Contact CTA */}
                        <div className="mt-4">
                            <h4 className="text-slate-900 font-bold text-lg mb-4">Contactar</h4>
                            <motion.a
                                href="#contact-section"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className="inline-flex items-center gap-3 text-slate-900 group cursor-pointer"
                            >
                                <span className="uppercase tracking-widest text-sm font-bold group-hover:text-gold-600 transition-colors">
                                    CONTACTAR AHORA
                                </span>
                                <div className="p-2 border border-slate-300 rounded-full group-hover:border-gold-500 group-hover:text-gold-600 transition-all">
                                    <Phone className="w-4 h-4" />
                                </div>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Column: Image - Clean & High Quality */}
                    <div className="relative w-full max-w-md mx-auto order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-2xl bg-slate-100"
                        >
                            <Image
                                src="/jfnt_refined_v2.png" // Using the new refined image
                                alt="Juan Francisco Navarro Tomás"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 500px"
                                priority
                            />
                        </motion.div>
                        {/* Subtle back decoration */}
                        <div className="absolute -z-10 top-8 -right-8 w-full h-full border border-gold-200 rounded-lg hidden md:block" />
                    </div>

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
