"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Star, GitFork, Code, Sparkles, ArrowUpRight } from "lucide-react";

export default function GithubProjects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            name: "Renteases",
            description: "Full-stack rental management platform built with TypeScript for seamless property and tenant management.",
            techStack: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"],
            github: "https://github.com/Mrakir43/renteases",
            stars: 1,
            gradient: "from-violet-500 to-purple-500",
        },
        {
            name: "SmartRentalManager",
            description: "Clean Architecture Android app for managing rental properties, tenants, and payments with comprehensive financial tracking.",
            techStack: ["Kotlin", "Jetpack Compose", "Room DB", "Hilt"],
            github: "https://github.com/Mrakir43/SmartRentalManager",
            stars: 1,
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            name: "Kiraya-Book",
            description: "Android application for landlords and tenants to manage rentals efficiently with modern Material Design 3 UI.",
            techStack: ["Kotlin", "Jetpack Compose", "Material Design 3"],
            github: "https://github.com/Mrakir43/Kiraya-Book",
            stars: 1,
            gradient: "from-purple-500 to-pink-500",
        },
        {
            name: "Application Tracking System",
            description: "Resume optimization and ATS analysis tool helping job seekers improve resume compatibility.",
            techStack: ["Python", "Machine Learning", "NLP"],
            github: "https://github.com/Mrakir43/Application-Tracking-System-ATS-",
            stars: 1,
            gradient: "from-green-500 to-emerald-500",
        },
        {
            name: "3D-Circle-Turtle",
            description: "3D visualization using Python Turtle graphics for creating animated circle patterns.",
            techStack: ["Python", "Turtle Graphics", "Animation"],
            github: "https://github.com/Mrakir43/3D-Circle-Turtle-",
            stars: 2,
            gradient: "from-orange-500 to-red-500",
        },
        {
            name: "WhatsApp Scheduler",
            description: "Automation tool for scheduling WhatsApp messages to improve communication.",
            techStack: ["Python", "Automation", "PyAutoGUI"],
            github: "https://github.com/Mrakir43/Schedule-Whatsapp-Message",
            stars: 1,
            gradient: "from-yellow-500 to-orange-500",
        },
        {
            name: "QR-Generator",
            description: "Simple yet powerful QR code generation tool for various use cases.",
            techStack: ["Python", "QR Code", "PIL"],
            github: "https://github.com/Mrakir43/QR-Generator",
            stars: 1,
            gradient: "from-indigo-500 to-purple-500",
        },
        {
            name: "WiFi Password Revealer",
            description: "Python script to retrieve saved WiFi passwords from your system securely.",
            techStack: ["Python", "Subprocess", "Network"],
            github: "https://github.com/Mrakir43/WifiPassword",
            stars: 1,
            gradient: "from-teal-500 to-green-500",
        },
        {
            name: "Portfolio",
            description: "Modern personal portfolio website built with Next.js, showcasing projects, skills, and experience.",
            techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
            github: "https://github.com/Mrakir43/Portfolio",
            stars: 1,
            gradient: "from-rose-500 to-pink-500",
        },
    ];

    return (
        <section id="github-projects" ref={ref} className="relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                        <Code className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">Open Source</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        GitHub <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">Open-source projects and personal experiments</p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                            className="group"
                        >
                            <div className="glass p-5 rounded-2xl h-full flex flex-col relative overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500">
                                {/* Animated Gradient Top Border */}
                                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                {/* Header */}
                                <div className="flex items-start justify-between mb-4 relative z-10">
                                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${project.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                                        <Github className="w-5 h-5" />
                                    </div>
                                    {project.stars > 0 && (
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-yellow-500/10 rounded-full text-yellow-500 border border-yellow-500/20">
                                            <Star className="w-3.5 h-3.5 fill-current" />
                                            <span className="text-xs font-semibold">{project.stars}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors relative z-10">{project.name}</h3>
                                <p className="opacity-70 mb-4 flex-grow text-sm leading-relaxed relative z-10">{project.description}</p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1.5 mb-4 relative z-10">
                                    {project.techStack.map((tech, idx) => (
                                        <span key={idx} className="px-2 py-0.5 text-xs bg-white/5 rounded-md opacity-70">{tech}</span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2.5 glass rounded-xl text-sm font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 relative z-10 border border-white/10 hover:border-white/20 group/btn"
                                >
                                    <Github className="w-4 h-4" />
                                    <span>View Code</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* GitHub Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/Mrakir43"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        <Github className="w-5 h-5" />
                        View All on GitHub
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
