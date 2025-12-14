"use client";

import { motion } from "framer-motion";
import { Download, Mail, Sparkles, Code, Brain, Cloud, Star, Users, CheckCircle, ArrowRight, Zap, Globe, Rocket } from "lucide-react";

export default function Hero() {
    const stats = [
        { value: "3+", label: "Years", color: "from-yellow-500 to-orange-500" },
        { value: "20+", label: "Projects", color: "from-blue-500 to-cyan-500" },
        { value: "15+", label: "Clients", color: "from-green-500 to-emerald-500" },
    ];

    const services = [
        { icon: <Globe className="w-5 h-5" />, title: "Web Development", tech: "React • Next.js • Node.js", color: "from-blue-500 to-cyan-500" },
        { icon: <Brain className="w-5 h-5" />, title: "AI Solutions", tech: "GPT • LangChain • Python", color: "from-purple-500 to-pink-500" },
        { icon: <Cloud className="w-5 h-5" />, title: "Cloud & DevOps", tech: "AWS • Docker • CI/CD", color: "from-orange-500 to-red-500" },
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 md:py-24 lg:py-28">
            {/* Premium Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-64 md:w-96 lg:w-[500px] h-64 md:h-96 lg:h-[500px] bg-primary/30 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 lg:w-[400px] h-48 md:h-80 lg:h-[400px] bg-secondary/25 rounded-full blur-[60px] md:blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-[400px] lg:w-[600px] h-72 md:h-[400px] lg:h-[600px] bg-accent/15 rounded-full blur-[100px] md:blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left w-full"
                    >
                        {/* Premium Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Open to Opportunities</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mb-4 md:mb-6"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                                <span className="block text-white/90">Building the</span>
                                <span className="block mt-1 md:mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                                    Future of Digital
                                </span>
                            </h1>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg sm:text-xl md:text-2xl font-light mb-4 md:mb-6 text-white/60"
                        >
                            Hi, I&apos;m <span className="font-semibold text-white">Aamir Khan</span>
                            <br className="sm:hidden" />
                            <span className="hidden sm:inline"> — </span>
                            <span className="text-primary">Full-Stack Developer</span> &
                            <span className="text-secondary"> AI Engineer</span>
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-sm sm:text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-6 md:mb-8 text-white/50 leading-relaxed"
                        >
                            I design and build exceptional digital experiences that are fast, accessible, and powered by cutting-edge AI technology.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 md:mb-10"
                        >
                            <a
                                href="#services"
                                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl sm:rounded-2xl font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 flex items-center justify-center gap-2"
                            >
                                <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span>Explore My Work</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold border-2 border-white/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
                            >
                                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span>Contact Me</span>
                            </a>
                            <a
                                href="/resume.pdf"
                                download
                                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
                            >
                                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span>Resume</span>
                            </a>
                        </motion.div>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex justify-center lg:justify-start gap-6 sm:gap-8 md:gap-10"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                >
                                    <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-white/40 mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Services Card (Visible on mobile too!) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full"
                    >
                        <div className="relative">
                            {/* Glowing Background */}
                            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl sm:rounded-[2rem] blur-xl sm:blur-2xl"></div>

                            {/* Main Card */}
                            <div className="relative glass p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 backdrop-blur-xl">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-5 sm:mb-6 md:mb-8">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg sm:rounded-xl">
                                            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base sm:text-lg">What I Do</h3>
                                            <p className="text-xs sm:text-sm text-white/50">Core Services</p>
                                        </div>
                                    </div>
                                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                                </div>

                                {/* Services */}
                                <div className="space-y-3 sm:space-y-4">
                                    {services.map((service, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.6 + index * 0.1 }}
                                            className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300"
                                        >
                                            <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                                                {service.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">{service.title}</h4>
                                                <p className="text-xs sm:text-sm text-white/40 truncate">{service.tech}</p>
                                            </div>
                                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Bottom CTA */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="mt-5 sm:mt-6 md:mt-8 pt-4 sm:pt-5 md:pt-6 border-t border-white/10"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs sm:text-sm text-white/40">Ready to build something?</p>
                                            <p className="font-semibold text-sm sm:text-base text-primary">Let&apos;s collaborate</p>
                                        </div>
                                        <a
                                            href="#contact"
                                            className="p-2 sm:p-3 bg-gradient-to-r from-primary to-secondary rounded-full hover:scale-110 transition-transform"
                                        >
                                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                        </a>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Floating Elements - Responsive */}
                            <motion.div
                                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 p-2 sm:p-3 md:p-4 glass rounded-xl sm:rounded-2xl border border-white/20 shadow-xl"
                            >
                                <Code className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 p-2 sm:p-3 md:p-4 glass rounded-xl sm:rounded-2xl border border-white/20 shadow-xl"
                            >
                                <Brain className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2"
                >
                    <a href="/#services" className="flex flex-col items-center group">
                        <div className="relative w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/20 group-hover:border-primary/50 rounded-full flex justify-center pt-1.5 sm:pt-2 transition-colors">
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                className="w-1 h-1.5 sm:h-2 bg-gradient-to-b from-primary to-secondary rounded-full"
                            />
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
