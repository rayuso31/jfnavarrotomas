"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
    {
        name: "Bufete Martínez & Asociados",
        role: "Abogados Penalistas",
        text: "La eficiencia y rapidez de Juan Francisco y su equipo son inigualables. En más de 20 años de colaboración, siempre han garantizado que nuestros procedimientos avancen sin dilaciones.",
        rating: 5,
    },
    {
        name: "Laura G.",
        role: "Cliente Particular",
        text: "Excelente trato humano y profesionalidad absoluta. Me explicaron cada paso del proceso judicial con claridad y me sentí muy respaldada.",
        rating: 5,
    },
    {
        name: "Carlos Velasco",
        role: "Despacho Velasco",
        text: "Profesionalidad, rigor y una atención al detalle que marca la diferencia. Su conocimiento de los juzgados de Valencia es exhaustivo.",
        rating: 5,
    },
    {
        name: "Ana María Soler",
        role: "Abogada Civilista",
        text: "Rapidez en las notificaciones y una gestión proactiva de los expedientes. Es un placer trabajar con profesionales que se anticipan a los problemas.",
        rating: 5,
    },
    // Duplicated for more content in loop
    {
        name: "Miguel Ángel R.",
        role: "Director Jurídico",
        text: "Un equipo de total confianza. Su capacidad de respuesta ante urgencias en los partidos judiciales de la provincia es impecable.",
        rating: 5,
    }
];

// Duplicate list for seamless loop
const allReviews = [...reviews, ...reviews, ...reviews];

export function ReviewsSection() {
    return (
        <section className="py-24 bg-slate-900 text-cream-50 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-gold-500 tracking-widest uppercase text-sm font-semibold mb-2 block">
                        Testimonios
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                        La voz de la <span className="text-gold-400 italic">excelencia.</span>
                    </h2>
                    <div className="w-24 h-1 bg-gold-500 mx-auto" />
                </motion.div>

                {/* Infinite Carousel Mask */}
                <div className="relative w-full overflow-hidden mask-gradient-sides">
                    {/* Gradient Masks for fading edges */}
                    <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none" />

                    {/* Moving Container */}
                    <div className="flex">
                        <motion.div
                            className="flex gap-8"
                            animate={{
                                x: ["0%", "-33.33%"] // Move 1/3 of total width (since we tripled the list)
                            }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 40 // Adjust speed here
                            }}
                        >
                            {allReviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="w-[350px] md:w-[450px] shrink-0 bg-white/5 backdrop-blur-sm border border-gold-500/20 p-8 rounded-sm hover:border-gold-500/40 transition-colors group relative select-none"
                                >
                                    <Quote className="absolute top-6 right-6 w-8 h-8 text-gold-500/20 group-hover:text-gold-500/40 transition-colors" />

                                    <div className="flex space-x-1 mb-6 text-gold-400">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>

                                    <p className="text-slate-300 font-light italic mb-6 leading-relaxed text-sm md:text-base">
                                        "{review.text}"
                                    </p>

                                    <div>
                                        <h4 className="font-serif text-lg text-gold-100">{review.name}</h4>
                                        <span className="text-xs uppercase tracking-widest text-slate-500">{review.role}</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://www.google.com/search?sa=X&sca_esv=8c6b6505ed11823e&rlz=1C5CHFA_enES981ES981&sxsrf=AE3TifMieeDAkn1qwKyHrTl2ZVNMK1Pj4Q:1766005216779&q=PROCURADOR+VALENCIA+-+Juan+Fco.+Navarro+Tom%C3%A1s+Rese%C3%B1as&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDA3Mze2MLIwNjYxtTAzMTU1MdvAyPiK0TwgyN85NMjRxT9IIczRx9XP2dNRQVfBqzQxT8EtOV9PwS-xLLGoKF8hJD_38MJihaDU4tTDGxOLF7GSqxMAcIRPBo8AAAA&rldimm=10767382833458645546&tbm=lcl&hl=es-ES&ved=2ahUKEwjBlfiMwsWRAxUMRKQEHZhkFwYQ9fQKegQIVhAG&biw=1920&bih=958&dpr=1#lkt=LocalPoiReviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-gold-400 hover:text-white transition-colors border-b border-gold-500/50 pb-1 hover:border-white"
                    >
                        <span>Ver todas las reseñas en Google</span>
                        <Star className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
