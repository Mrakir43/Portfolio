"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollButton() {
    const [showButton, setShowButton] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling 300px
            setShowButton(window.scrollY > 300);

            // Check if near bottom (within 200px of bottom)
            const scrollPosition = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;
            setIsAtBottom(pageHeight - scrollPosition < 200);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        if (isAtBottom) {
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Scroll to bottom
            window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            {showButton && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClick}
                    className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow duration-300"
                    aria-label={isAtBottom ? "Scroll to top" : "Scroll to bottom"}
                >
                    <motion.div
                        key={isAtBottom ? "up" : "down"}
                        initial={{ rotate: 180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isAtBottom ? (
                            <ArrowUp className="w-6 h-6" />
                        ) : (
                            <ArrowDown className="w-6 h-6" />
                        )}
                    </motion.div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
