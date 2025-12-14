"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary opacity-20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary opacity-15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            <div className="container mx-auto px-4 text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary font-medium mb-4 text-lg">
                        👋 Welcome to my portfolio
                    </motion.p>

                    <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="text-5xl md:text-7xl font-bold mb-6">
                        Hi, I&apos;m <span className="gradient-text">Aamir Khan</span>
                    </motion.h1>

                    <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-2xl md:text-3xl font-semibold mb-6 opacity-90">
                        Freelance Web & Mobile Developer
                    </motion.h2>

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-70">
                        Crafting modern, high-performance digital experiences. Specialized in React, Next.js, and Android development with Kotlin & Jetpack Compose.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-wrap gap-4 justify-center">
                        <a href="#projects" className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/25">
                            <Briefcase className="w-5 h-5" />
                            View Projects
                        </a>
                        <a href="#contact" className="px-8 py-4 glass rounded-lg font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            <Mail className="w-5 h-5" />
                            Contact Me
                        </a>
                        <a href="/resume.pdf" download className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            <Download className="w-5 h-5" />
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="flex flex-col items-center opacity-50">
                        <span className="text-sm mb-2">Scroll Down</span>
                        <ArrowDown className="w-5 h-5" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
