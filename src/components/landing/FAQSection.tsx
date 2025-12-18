"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "¿En qué partidos judiciales actúan?",
        answer: "Actuamos directamente y sin intermediarios en Valencia capital, Llíria, Paterna, Torrent, Moncada, Quart de Poblet y Mislata. Para el resto de la provincia, contamos con una red de colaboradores de máxima confianza."
    },
    {
        question: "¿Cómo envían las notificaciones a los letrados?",
        answer: "Nuestro sistema está optimizado para la inmediatez. Las notificaciones se procesan y envían telemáticamente en tiempo real tras su recepción vía LexNET, asegurando que el letrado disponga de la documentación al instante."
    },
    {
        question: "¿Realizan gestiones presenciales en los juzgados?",
        answer: "Absolutamente. Aunque la justicia es cada vez más digital, la presencia física diaria en los decanatos y oficinas judiciales sigue siendo clave para agilizar trámites atascados. Nuestro equipo está allí cada mañana."
    },
    {
        question: "¿Cuál es vuestra tarifa o coste?",
        answer: "Nos regimos por los aranceles oficiales de los procuradores, pero ofrecemos presupuestos personalizados y transparentes según el volumen de asuntos o la complejidad del procedimiento. Consúltenos sin compromiso."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

    return (
        <section className="py-24 bg-cream-50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute left-0 top-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-slate-900 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-600 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-gold-600 tracking-widest uppercase text-sm font-semibold mb-2 block">
                        Dudas Frecuentes
                    </span>
                    <h2 className="font-serif text-4xl text-slate-900 mb-6 headline-display">
                        Respuestas Claras.
                    </h2>
                    <div className="w-16 h-1 bg-gold-400 mx-auto" />
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`border rounded-sm bg-white shadow-sm hover:shadow-md transition-all relative overflow-hidden ${openIndex === index
                                    ? 'border-gold-400 shadow-gold-100/50'
                                    : 'border-gold-200/50'
                                }`}
                        >
                            {/* Left border indicator */}
                            <motion.div
                                className="absolute left-0 top-0 w-1 bg-gold-500"
                                initial={{ height: 0 }}
                                animate={{ height: openIndex === index ? '100%' : 0 }}
                                transition={{ duration: 0.3 }}
                            />

                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left pl-8"
                            >
                                <span className={`font-serif text-lg ${openIndex === index ? 'text-gold-600' : 'text-slate-800'} transition-colors`}>
                                    {faq.question}
                                </span>
                                <motion.span
                                    className={`p-2 rounded-full ${openIndex === index ? 'bg-gold-100 text-gold-600' : 'bg-slate-100 text-slate-400'} transition-colors`}
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-4 h-4" />
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 pl-8 text-slate-600 leading-relaxed font-light">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
