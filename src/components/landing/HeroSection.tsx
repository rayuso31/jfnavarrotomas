"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export function HeroSection() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-cream-50">
            {/* Background Sketch */}
            <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-multiply z-0">
                <Image
                    src="/header-sketch.png"
                    alt="Valencia Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-tr from-cream-100 via-cream-50 to-gold-50 opacity-40" />

            {/* Floating Elements (Abstract 3D-like shapes) */}
            <FloatingShape
                className="absolute top-1/4 left-10 w-64 h-64 bg-gold-200/20 rounded-full blur-3xl"
                delay={0}
            />
            <FloatingShape
                className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-300/10 rounded-full blur-3xl"
                delay={2}
            />

            {/* Golden Rings/Accents */}
            <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-[600px] h-[600px] border border-gold-200/30 rounded-full z-0 pointer-events-none"
            />
            <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: -360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-40 -left-20 w-[800px] h-[800px] border border-gold-200/20 rounded-full z-0 pointer-events-none"
            />

            {/* Top Navigation - Sticky */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center text-slate-800 bg-cream-50/80 backdrop-blur-md border-b border-gold-500/10 shadow-sm transition-all duration-300"
            >
                <div className="text-sm tracking-widest font-bold uppercase border-b-2 border-gold-500 pb-1">
                    Juan Fco. Navarro Tomás
                </div>
                <div className="hidden md:flex space-x-8 text-xs font-semibold tracking-widest uppercase">
                    <a href="#services" className="hover:text-gold-600 transition-colors">Servicios</a>
                    <a href="#team" className="hover:text-gold-600 transition-colors">Equipo</a>
                    <a href="#contact-section" className="hover:text-gold-600 transition-colors">Contacto</a>
                </div>
            </motion.nav>

            {/* Content Container */}
            <div className="relative z-10 text-center max-w-5xl px-4 mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 mb-6 border border-gold-400/30 rounded-full text-gold-600 text-sm tracking-[0.2em] uppercase bg-white/50 backdrop-blur-sm">
                        Ejerciente desde el año 1988
                    </span>

                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-slate-900 leading-tight mb-4">
                        <span className="block text-slate-800">Soluciones jurídicas</span>
                        <span className="block bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 bg-clip-text text-transparent">
                            Ágiles y Eficientes
                        </span>
                    </h1>

                    <div className="w-24 h-1 bg-gold-400 mx-auto mb-8" />

                    <p className="font-sans text-lg md:text-xl text-slate-600 mb-2 max-w-2xl mx-auto leading-relaxed font-light">
                        Procuradores en Valencia comprometidos con <strong className="text-slate-800 font-medium">abogados y clientes.</strong>
                    </p>
                    <p className="text-sm text-slate-500 uppercase tracking-widest mb-10">
                        Colegiado número 166 ICPV
                    </p>

                    <motion.a
                        href="#contact-section"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative px-8 py-4 bg-gradient-to-br from-gold-500 to-gold-600 text-white font-sans text-sm tracking-widest uppercase rounded shadow-lg shadow-gold-500/20 overflow-hidden inline-block cursor-pointer"
                    >
                        <span className="relative z-10 font-semibold">Contactar</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-400"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gold-400 to-transparent" />
            </motion.div>
        </section>
    );
}

function FloatingShape({ className, delay }: { className: string; delay: number }) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -20, 0],
                scale: [1, 1.05, 1],
            }}
            transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                delay: delay,
            }}
        />
    );
}
