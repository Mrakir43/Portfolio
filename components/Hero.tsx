"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, Mail, Sparkles, Code, Smartphone, Brain, Cloud, Star, Users, CheckCircle, ArrowRight, Zap } from "lucide-react";

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
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col justify-between">

                        {/* Main Content */}
                        <div>
                            {/* Greeting with Animation */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mb-4"
                            >
                                <span className="text-lg md:text-xl opacity-70">Hello, I&apos;m</span>
                            </motion.div>

                            {/* Name with Gradient */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight"
                            >
                                <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">Aamir</span>{" "}
                                <span className="gradient-text">Khan</span>
                            </motion.h1>

                            {/* Title with Typewriter Effect Appearance */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mb-6"
                            >
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                                    <span className="opacity-70">I craft </span>
                                    <span className="text-primary">Digital Experiences</span>
                                </h2>
                            </motion.div>

                            {/* Role Badges */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap items-center gap-2 mb-6"
                            >
                                <span className="px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-full font-medium flex items-center gap-2 text-sm backdrop-blur-sm">
                                    <Code className="w-4 h-4 text-primary" />
                                    Full-Stack Developer
                                </span>
                                <span className="px-4 py-2 bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/30 rounded-full font-medium flex items-center gap-2 text-sm backdrop-blur-sm">
                                    <Brain className="w-4 h-4 text-secondary" />
                                    AI/ML Engineer
                                </span>
                                <span className="px-4 py-2 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 rounded-full font-medium flex items-center gap-2 text-sm backdrop-blur-sm">
                                    <Smartphone className="w-4 h-4 text-accent" />
                                    Mobile Developer
                                </span>
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-base md:text-lg max-w-xl mb-8 opacity-70 leading-relaxed"
                            >
                                Transforming ideas into <span className="text-primary font-medium">powerful web applications</span>,
                                <span className="text-secondary font-medium"> mobile experiences</span>, and
                                <span className="text-accent font-medium"> AI-driven solutions</span> that drive business growth.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="flex flex-wrap gap-4 mb-8"
                            >
                                <a
                                    href="#services"
                                    className="group px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-2xl font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-xl shadow-primary/20"
                                >
                                    <Zap className="w-5 h-5" />
                                    View My Work
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="#contact"
                                    className="px-8 py-4 glass border border-white/20 rounded-2xl font-bold hover:scale-105 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                                >
                                    <Mail className="w-5 h-5" />
                                    Let&apos;s Talk
                                </a>
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="px-8 py-4 border-2 border-primary/50 hover:border-primary text-primary rounded-2xl font-bold hover:bg-primary/10 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                                >
                                    <Download className="w-5 h-5" />
                                    Resume
                                </a>
                            </motion.div>
                        </div>

                        {/* Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <p className="text-xs uppercase tracking-widest opacity-40 mb-3">Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech, index) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.9 + index * 0.05 }}
                                        className="px-4 py-1.5 text-sm glass rounded-xl font-medium hover:scale-105 transition-transform cursor-default border border-white/10"
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
                        className="relative hidden lg:flex lg:flex-col lg:justify-between"
                    >
                        {/* Decorative Card */}
                        <div className="relative flex-1 flex items-center">
                            {/* Main Visual */}
                            <div className="glass p-8 rounded-3xl relative overflow-hidden w-full border border-white/10">
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-3 gap-4 mb-8">
                                        {stats.map((stat, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 + index * 0.1 }}
                                                className="text-center p-4 glass rounded-2xl border border-white/10"
                                            >
                                                <div className="flex justify-center mb-2 text-primary">{stat.icon}</div>
                                                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                                                <div className="text-xs opacity-60">{stat.label}</div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Featured Items */}
                                    <div className="space-y-3">
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.8 }}
                                            className="flex items-center gap-3 p-4 glass rounded-xl border border-white/10"
                                        >
                                            <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                                                <Code className="w-5 h-5 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold">Web & Mobile Apps</p>
                                                <p className="text-sm opacity-60">React, Next.js, Kotlin</p>
                                            </div>
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.9 }}
                                            className="flex items-center gap-3 p-4 glass rounded-xl border border-white/10"
                                        >
                                            <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                                                <Brain className="w-5 h-5 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold">AI & Automation</p>
                                                <p className="text-sm opacity-60">GPT, LangChain, Chatbots</p>
                                            </div>
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1 }}
                                            className="flex items-center gap-3 p-4 glass rounded-xl border border-white/10"
                                        >
                                            <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                                                <Cloud className="w-5 h-5 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold">Cloud & DevOps</p>
                                                <p className="text-sm opacity-60">AWS, Docker, CI/CD</p>
                                            </div>
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 p-3 glass rounded-2xl border border-white/20"
                            >
                                <Sparkles className="w-6 h-6 text-yellow-500" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -bottom-4 -left-4 p-3 glass rounded-2xl border border-white/20"
                            >
                                <Star className="w-6 h-6 text-primary fill-primary" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator - Premium */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2"
                >
                    <a href="/#services" className="flex flex-col items-center gap-3 group cursor-pointer">
                        <div className="relative">
                            {/* Glowing border */}
                            <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity"></div>
                            <div className="relative w-7 h-12 border-2 border-white/30 group-hover:border-primary/50 rounded-full flex justify-center pt-2 transition-colors">
                                <motion.div
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                                    className="w-1.5 h-3 bg-gradient-to-b from-primary to-secondary rounded-full"
                                ></motion.div>
                            </div>
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
