"use client";

import { motion } from "framer-motion";
import { Scale, FileText, CalendarClock, Briefcase } from "lucide-react";
import { GoldenParticles } from "./GoldenParticles";

const services = [
    {
        title: "Representación judicial",
        description: "Defensa profesional en todos los procedimientos judiciales con experiencia y dedicación completa.",
        icon: Scale,
    },
    {
        title: "Tramitación de escritos",
        description: "Gestión eficiente de toda la documentación legal necesaria para sus procedimientos.",
        icon: FileText,
    },
    {
        title: "Señalamientos y plazos",
        description: "Control exhaustivo de fechas y plazos procesales para garantizar el cumplimiento legal.",
        icon: CalendarClock,
    },
    {
        title: "Control procesal",
        description: "Seguimiento detallado de todos los expedientes y procedimientos en curso.",
        icon: Briefcase,
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="relative py-32 bg-slate-900 text-cream-50 overflow-hidden">

            {/* Golden Particles Effect - Background */}
            <GoldenParticles />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1),transparent_50%)] z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Header */}
                    <div className="lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-gold-400 tracking-widest uppercase text-sm font-semibold mb-4 block">
                                Servicios Exclusivos
                            </span>
                            <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
                                Excelencia en <br />
                                <span className="text-gold-500 italic">Cada Trámite.</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                                Gestión integral y meticulosa para garantizar el éxito de cada procedimiento judicial. Combinamos la experiencia con la agilidad digital.
                            </p>

                            <div className="mt-12 w-24 h-1 bg-gold-500/50" />
                        </motion.div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                // Floating Animation
                                animate={{ y: [0, -10, 0] }}
                                // Staggered float
                                // @ts-ignore
                                transition={{
                                    y: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.5
                                    }
                                }}
                                className="group relative rounded-xl p-[1px] overflow-hidden" // Padded for border
                            >
                                {/* BORDER BEAM IMPLEMENTATION */}
                                {/* This is the spinning gradient layer */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#0F172A_0%,#0F172A_50%,#D4AF37_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />

                                {/* Inner Card Content - Blocks the center of the beam */}
                                <div className="relative h-full bg-slate-800 rounded-xl p-8 z-10 border border-slate-700/50 group-hover:border-transparent transition-colors duration-300">

                                    {/* Inner Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                                    <div className="relative z-20">
                                        <div className="w-12 h-12 bg-slate-900 border border-slate-700 group-hover:border-gold-500 rounded-lg flex items-center justify-center mb-6 transition-colors duration-500 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                                            <service.icon className="w-6 h-6 text-gold-400 group-hover:text-gold-200 transition-colors duration-500" />
                                        </div>

                                        <h3 className="font-serif text-xl mb-3 text-cream-50 group-hover:text-gold-100 transition-colors">
                                            {service.title}
                                        </h3>

                                        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
