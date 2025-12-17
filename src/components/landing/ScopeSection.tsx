"use client";

import { motion } from "framer-motion";
import { Cpu, Globe } from "lucide-react";

// Updated coordinates: Valencia centered (50, 50) and others radial
const locations = [
    { name: "VALENCIA", x: 50, y: 50, main: true },
    { name: "LLÍRIA", x: 25, y: 30 },   // Top Left
    { name: "MISLATA", x: 75, y: 30 },  // Top Right
    { name: "MONCADA", x: 50, y: 20 },  // Top Center
    { name: "PATERNA", x: 20, y: 50 },  // Left
    { name: "QUART", x: 80, y: 50 },    // Right
    { name: "TORRENT", x: 50, y: 80 },  // Bottom
];

export function ScopeSection() {
    return (
        <section className="relative py-32 bg-slate-950 overflow-hidden">
            {/* Background Tech Mesh */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute w-full h-full bg-[linear-gradient(rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center space-x-2 text-gold-400 mb-4">
                        <Cpu className="w-5 h-5 animate-pulse" />
                        <span className="tracking-widest uppercase text-sm font-semibold">
                            Red de Gestión Integral
                        </span>
                    </div>

                    <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-8">
                        Servicio integral en los <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-200 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                            partidos judiciales de Valencia y provincia
                        </span>
                    </h2>

                    <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-gold-500/30 pl-6">
                        Desde nuestra sede en <strong className="text-gold-200">Valencia</strong>, coordinamos un servicio integral en los partidos judiciales de <strong className="text-white">Llíria, Paterna, Torrent, Moncada, Quart y Mislata.</strong>
                        <br /><br />
                        Garantizamos una gestión procesal unificada, sin intermediarios, asegurando presencia directa y control absoluto en cada expediente.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-slate-900/50 p-4 border border-gold-500/20 rounded-sm hover:border-gold-500/50 transition-colors">
                            <Globe className="w-8 h-8 text-gold-500 mb-2" />
                            <h4 className="text-white font-serif">Presencia Directa</h4>
                            <p className="text-xs text-slate-500">Sin intermediarios</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 border border-gold-500/20 rounded-sm hover:border-gold-500/50 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center mb-2">
                                <div className="w-3 h-3 bg-gold-500 rounded-full animate-ping" />
                            </div>
                            <h4 className="text-white font-serif">Control Total</h4>
                            <p className="text-xs text-slate-500">Gestión centralizada</p>
                        </div>
                    </div>
                </motion.div>

                {/* Neon Network Visualization */}
                <div className="relative h-[500px] w-full bg-slate-900/80 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-800 backdrop-blur-xl overflow-hidden group">

                    {/* Glowing Grid Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]" />

                    {/* Connecting Lines - ALL CONNECTED TO CENTER */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <defs>
                            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
                                <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
                                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.2" />
                            </linearGradient>
                        </defs>
                        {locations.filter(l => !l.main).map((loc, i) => (
                            <motion.line
                                key={i}
                                x1="50%"
                                y1="50%"
                                x2={`${loc.x}%`}
                                y2={`${loc.y}%`}
                                stroke="url(#gradient-line)"
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.6 }}
                                transition={{ duration: 1.5, delay: i * 0.1 }}
                            />
                        ))}
                    </svg>

                    {/* Nodes */}
                    {locations.map((loc, i) => (
                        <motion.div
                            key={loc.name}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                            style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ scale: 1.2, zIndex: 10 }}
                        >
                            {/* Glow Effect */}
                            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none ${loc.main ? 'opacity-40 animate-pulse' : ''}`} />

                            {/* Node Point */}
                            <div className={`relative flex items-center justify-center ${loc.main ? 'w-14 h-14' : 'w-6 h-6'}`}>
                                <div className={`absolute inset-0 rounded-full bg-gold-500 animate-ping opacity-20`} />
                                <div className={`relative w-full h-full rounded-full border border-gold-300 shadow-[0_0_20px_#D4AF37] ${loc.main ? 'bg-gold-500' : 'bg-slate-900 group-hover:bg-gold-400 transition-colors'}`} />
                            </div>

                            {/* Label */}
                            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 whitespace-nowrap px-3 py-1 rounded bg-black/80 border border-gold-500/30 backdrop-blur-md text-[10px] tracking-widest font-bold text-gold-100 ${loc.main ? 'scale-110 border-gold-500' : 'opacity-60 hover:opacity-100 hover:scale-110 transition-all'}`}>
                                {loc.name}
                            </div>
                        </motion.div>
                    ))}

                    {/* Floating Scanner Line */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent shadow-[0_0_20px_#D4AF37]"
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                    />
                </div>
            </div>
        </section>
    );
}
