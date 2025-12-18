"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "¡Hola! Soy el asistente virtual de Juan Francisco Navarro Tomás. ¿En qué puedo ayudarte hoy?" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId] = useState(() => Math.random().toString(36).substring(7));
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMessage = inputValue.trim();
        setInputValue("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch("https://primary-xdh7-production.up.railway.app/webhook/f7c37974-ed66-49d5-9603-5403bfa003e8", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: userMessage,
                    sessionId: sessionId,
                    timestamp: new Date().toISOString()
                }),
            });

            const data = await response.json();
            // Assuming the n8n webhook returns { output: "response text" } or similar. 
            // Adjusting to handle generic structure, usually strictly mapped.
            // If it returns text directly or JSON. Let's assume standard { output: string } or check structure.
            // Common pattern: { text: "..." } or { output: "..." }

            const botResponse = data.output || data.text || data.message || "Disculpa, no he podido procesar tu solicitud en este momento.";

            setMessages((prev) => [...prev, { role: "assistant", content: botResponse }]);
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages((prev) => [...prev, { role: "assistant", content: "Lo siento, ha ocurrido un error de conexión. Por favor, inténtelo de nuevo más tarde." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="fixed bottom-24 right-6 z-50">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-16 right-0 w-[350px] md:w-[400px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gold-200 flex flex-col max-h-[600px]"
                        >
                            {/* Header */}
                            <div className="bg-slate-900 p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-gold-500/20 p-2 rounded-full border border-gold-500/50">
                                        <Bot className="w-5 h-5 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-serif font-medium">Asistente Virtual</h3>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            <span className="text-slate-400 text-xs">En línea</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Messages Area */}
                            <div className="flex-1 bg-slate-50 p-4 overflow-y-auto h-[400px] space-y-4 scroll-smooth">
                                {messages.map((msg, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === "user"
                                                    ? "bg-slate-900 text-white rounded-br-none"
                                                    : "bg-white border border-gold-100 text-slate-700 rounded-bl-none shadow-sm"
                                                }`}
                                        >
                                            {msg.content}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-white border border-gold-100 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-100">
                                <div className="relative flex items-center">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="Escribe tu consulta..."
                                        className="w-full bg-slate-50 border border-slate-200 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all text-slate-700 placeholder:text-slate-400"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!inputValue.trim() || isLoading}
                                        className="absolute right-2 p-2 bg-slate-900 text-gold-400 rounded-full hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="text-center mt-2">
                                    <span className="text-[10px] text-slate-400">Powered by AI agents</span>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Toggle Button */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-14 h-14 bg-slate-900 border border-gold-500/30 text-gold-400 rounded-full shadow-lg shadow-slate-900/20 hover:shadow-xl transition-all"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
                </motion.button>
            </div>
        </>
    );
}
