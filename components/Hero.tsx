"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, Mail, ChevronDown, Sparkles, Code, Smartphone, Brain, Cloud, Star, Users, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
    const stats = [
        { value: "3+", label: "Years Experience", icon: <Star className="w-4 h-4" /> },
        { value: "20+", label: "Projects Completed", icon: <Code className="w-4 h-4" /> },
        { value: "15+", label: "Happy Clients", icon: <Users className="w-4 h-4" /> },
    ];

    const techStack = [
        "React", "Next.js", "Node.js", "Kotlin", "Python", "AWS", "AI/ML"
    ];

    const quotes = [
        "Crafting Exceptional Digital Experiences",
        "Building Scalable & Modern Web Solutions",
        "Transforming Ideas into Digital Reality",
        "Innovating the Future of Web Development",
        "Delivering Refreshing Digital Experiences",
        "Engineering High-Performance Applications"
    ];

    const [quote, setQuote] = useState("Crafting Exceptional Digital Experiences");

    useEffect(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-24">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary opacity-20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary opacity-15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    {/* Left Content */}
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col justify-center text-center lg:text-left">
                        {/* Status Badge - Premium */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center self-center lg:self-start gap-3 px-5 py-3 mb-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 rounded-2xl shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:scale-105 transition-all duration-300"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-primary to-secondary"></span>
                            </span>
                            <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                {quote}
                            </span>
                        </motion.div>

                        {/* Name & Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
                        >
                            Hi, I&apos;m{" "}
                            <span className="gradient-text">Aamir Khan</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-5"
                        >
                            <span className="px-3 py-1.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full font-semibold flex items-center gap-2 text-sm">
                                <Code className="w-4 h-4 text-primary" />
                                Software Engineer
                            </span>
                            <span className="px-3 py-1.5 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full font-semibold flex items-center gap-2 text-sm">
                                <Smartphone className="w-4 h-4 text-secondary" />
                                Full Stack
                            </span>
                            <span className="px-3 py-1.5 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full font-semibold flex items-center gap-2 text-sm">
                                <Brain className="w-4 h-4 text-accent" />
                                AI/ML
                            </span>
                            <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full font-semibold flex items-center gap-2 text-sm">
                                <Cloud className="w-4 h-4 text-cyan-500" />
                                Cloud
                            </span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-sm sm:text-base md:text-lg max-w-xl mb-6 opacity-80 leading-relaxed mx-auto lg:mx-0"
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
                            className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-8"
                        >
                            <a
                                href="#services"
                                className="px-5 py-3 sm:px-7 sm:py-3.5 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-xl font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/25 text-sm sm:text-base"
                            >
                                <Briefcase className="w-5 h-5" />
                                Explore Services
                            </a>
                            <a
                                href="#contact"
                                className="px-5 py-3 sm:px-7 sm:py-3.5 glass rounded-xl font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
                            >
                                <Mail className="w-5 h-5" />
                                Get in Touch
                            </a>
                            <a
                                href="/resume.pdf"
                                download
                                className="px-5 py-3 sm:px-7 sm:py-3.5 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
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
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
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
                        className="relative hidden lg:flex flex-col justify-center"
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
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
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

                {/* Scroll Indicator Removed */}
            </div>
        </section>
    );
}
