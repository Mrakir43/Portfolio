"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, Mail, ChevronDown, Sparkles, Code, Smartphone, Brain, Cloud, Star, Users, CheckCircle } from "lucide-react";

export default function Hero() {
    const stats = [
        { value: "3+", label: "Years Experience", icon: <Star className="w-4 h-4" /> },
        { value: "20+", label: "Projects Completed", icon: <Code className="w-4 h-4" /> },
        { value: "15+", label: "Happy Clients", icon: <Users className="w-4 h-4" /> },
    ];

    const techStack = [
        "React", "Next.js", "Node.js", "Kotlin", "Python", "AWS", "AI/ML"
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary opacity-20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary opacity-15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium">Available for Freelance Work</span>
                        </motion.div>

                        {/* Name & Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
                        >
                            Hi, I&apos;m{" "}
                            <span className="gradient-text">Aamir Khan</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap items-center gap-3 mb-6"
                        >
                            <span className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full font-semibold flex items-center gap-2">
                                <Code className="w-4 h-4 text-primary" />
                                Software Engineer
                            </span>
                            <span className="px-4 py-2 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full font-semibold flex items-center gap-2">
                                <Smartphone className="w-4 h-4 text-secondary" />
                                Full Stack
                            </span>
                            <span className="px-4 py-2 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full font-semibold flex items-center gap-2">
                                <Brain className="w-4 h-4 text-accent" />
                                AI/ML
                            </span>
                            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full font-semibold flex items-center gap-2">
                                <Cloud className="w-4 h-4 text-cyan-500" />
                                Cloud
                            </span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg md:text-xl max-w-xl mb-8 opacity-80 leading-relaxed"
                        >
                            Crafting modern, high-performance digital experiences. Specialized in
                            <span className="text-primary font-medium"> React, Next.js</span>,
                            <span className="text-secondary font-medium"> Android with Kotlin</span>, and
                            <span className="text-accent font-medium"> AI-powered solutions</span>.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4 mb-10"
                        >
                            <a
                                href="#services"
                                className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-xl font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/25"
                            >
                                <Briefcase className="w-5 h-5" />
                                Explore Services
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 glass rounded-xl font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2"
                            >
                                <Mail className="w-5 h-5" />
                                Get in Touch
                            </a>
                            <a
                                href="/resume.pdf"
                                download
                                className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 flex items-center gap-2"
                            >
                                <Download className="w-5 h-5" />
                                Resume
                            </a>
                        </motion.div>

                        {/* Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <p className="text-sm opacity-60 mb-3">Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech, index) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 + index * 0.05 }}
                                        className="px-3 py-1 text-sm glass rounded-lg font-medium hover:scale-105 transition-transform cursor-default"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Stats & Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        {/* Decorative Card */}
                        <div className="relative">
                            {/* Main Visual */}
                            <div className="glass p-8 rounded-3xl relative overflow-hidden">
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl">
                                            <Sparkles className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">Ready to Build</h3>
                                            <p className="text-sm opacity-70">Your Next Project</p>
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        {stats.map((stat, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 + index * 0.1 }}
                                                className="text-center p-4 bg-[var(--surface-variant)] rounded-xl"
                                            >
                                                <div className="flex justify-center mb-2 text-primary">
                                                    {stat.icon}
                                                </div>
                                                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                                                <p className="text-xs opacity-70">{stat.label}</p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Services Preview */}
                                    <div className="space-y-3">
                                        <p className="text-sm font-medium opacity-70">Core Services</p>
                                        {[
                                            { name: "Full-Stack Development", color: "from-blue-500 to-cyan-500" },
                                            { name: "AI Call Agents & Chatbots", color: "from-purple-500 to-pink-500" },
                                            { name: "Mobile App Development", color: "from-green-500 to-emerald-500" },
                                        ].map((service, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.7 + index * 0.1 }}
                                                className="flex items-center gap-3 p-3 bg-[var(--surface-variant)] rounded-lg"
                                            >
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                                                <span className="text-sm font-medium">{service.name}</span>
                                                <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                                className="absolute -top-6 -right-6 p-4 glass rounded-2xl shadow-xl"
                            >
                                <Code className="w-8 h-8 text-primary" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                                className="absolute -bottom-4 -left-4 p-4 glass rounded-2xl shadow-xl"
                            >
                                <Brain className="w-8 h-8 text-accent" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <a href="#services" className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer group">
                        <span className="text-sm font-medium">Scroll to explore</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <ChevronDown className="w-6 h-6" />
                        </motion.div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
