"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [isVisible]);

    return (
        <motion.div
            className="fixed pointer-events-none z-[9999] hidden md:block"
            animate={{
                x: mousePosition.x - 200,
                y: mousePosition.y - 200,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                mass: 0.5,
            }}
        >
            {/* Outer glow - larger, more diffuse */}
            <div
                className="w-[400px] h-[400px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 30%, transparent 70%)",
                }}
            />
        </motion.div>
    );
}
