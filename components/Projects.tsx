"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Star } from "lucide-react";

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            name: "SmartRentalManager",
            description: "A modular, Clean Architecture Android application for managing rental properties, tenants, and payments with comprehensive financial tracking.",
            techStack: ["Kotlin", "Jetpack Compose", "Room Database", "MVVM", "Hilt"],
            github: "https://github.com/Mrakir43/SmartRentalManager",
            stars: 0,
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            name: "Kiraya-Book",
            description: "Comprehensive Android application for landlords and tenants to manage rental properties efficiently with modern Material Design 3 UI.",
            techStack: ["Kotlin", "Jetpack Compose", "Material Design 3", "Room", "Coroutines"],
            github: "https://github.com/Mrakir43/Kiraya-Book",
            stars: 0,
            gradient: "from-purple-500 to-pink-500",
        },
        {
            name: "Application-Tracking-System",
            description: "Resume optimization and ATS analysis tool to help job seekers improve their resume compatibility with applicant tracking systems.",
            techStack: ["Python", "Machine Learning", "NLP"],
            github: "https://github.com/Mrakir43/Application-Tracking-System-ATS-",
            stars: 0,
            gradient: "from-green-500 to-emerald-500",
        },
        {
            name: "3D-Circle-Turtle",
            description: "3D visualization project using Python Turtle graphics for creating beautiful animated circle patterns and geometric art.",
            techStack: ["Python", "Turtle Graphics", "Animation"],
            github: "https://github.com/Mrakir43/3D-Circle-Turtle-",
            stars: 2,
            gradient: "from-orange-500 to-red-500",
        },
        {
            name: "Schedule-Whatsapp-Message",
            description: "Automation tool for scheduling WhatsApp messages to improve communication management and productivity.",
            techStack: ["Python", "Automation", "PyAutoGUI"],
            github: "https://github.com/Mrakir43/Schedule-Whatsapp-Message",
            stars: 1,
            gradient: "from-yellow-500 to-orange-500",
        },
        {
            name: "QR-Generator",
            description: "Simple yet powerful QR code generation tool for creating custom QR codes for various use cases.",
            techStack: ["Python", "QR Code", "PIL"],
            github: "https://github.com/Mrakir43/QR-Generator",
            stars: 1,
            gradient: "from-indigo-500 to-purple-500",
        },
    ];

    return (
        <section id="projects" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        GitHub <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">Open-source projects and personal experiments</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1, duration: 0.5 }} className="glass p-6 rounded-xl card-hover flex flex-col h-full">
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                                    <Github className="w-6 h-6" />
                                </div>
                                {project.stars > 0 && (
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span className="text-sm font-medium">{project.stars}</span>
                                    </div>
                                )}
                            </div>

                            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                            <p className="opacity-70 mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.slice(0, 3).map((tech, idx) => (
                                    <span key={idx} className={`px-2 py-1 text-xs bg-gradient-to-r ${project.gradient} bg-opacity-10 rounded-md`}>{tech}</span>
                                ))}
                                {project.techStack.length > 3 && <span className="px-2 py-1 text-xs opacity-50">+{project.techStack.length - 3}</span>}
                            </div>

                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 glass rounded-lg text-sm font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                <Github className="w-4 h-4" />
                                View Code
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
