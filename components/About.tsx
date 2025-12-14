"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Rocket, Target, Users, ExternalLink, Sparkles, Award, TrendingUp, Zap } from "lucide-react";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const strengths = [
        {
            icon: <Code className="w-6 h-6" />,
            title: "Full-Stack Development",
            desc: "Building complete web and mobile applications from frontend to backend, databases, and deployment.",
            tags: ["React", "Next.js", "Node.js"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Fast Delivery",
            desc: "Efficient project execution with agile methodologies to meet deadlines without compromising quality.",
            tags: ["Agile", "On-Time", "Quality"],
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Client-Focused",
            desc: "Understanding your business needs deeply to deliver solutions that truly solve your problems.",
            tags: ["Custom", "Tailored", "Results"],
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Collaboration",
            desc: "Transparent communication and regular updates to keep you involved throughout the development process.",
            tags: ["Support", "Updates", "Partnership"],
            color: "from-green-500 to-emerald-500"
        },
    ];


    const projects = [
        { name: "sairatimes.com", url: "https://sairatimes.com", type: "News Portal" },
        { name: "dcinterior.co.in", url: "https://dcinterior.co.in", type: "Business Website" },
        { name: "renteases.lovable.app", url: "https://renteases.lovable.app", type: "Web Application" },
    ];

    return (
        <section id="about" ref={ref} className="bg-[var(--surface)] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">Get to Know Me</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">
                        Passionate developer crafting digital experiences that make a difference
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Story */}
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
                        <div className="glass p-8 rounded-2xl h-full">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-white">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                My Journey
                            </h3>
                            <div className="space-y-4 mb-8">
                                <p className="text-lg opacity-80 leading-relaxed text-justify">
                                    I&apos;m a <strong className="text-primary">passionate freelance developer</strong> with expertise in building modern, scalable web and mobile applications. From custom React/Next.js apps to WordPress websites, I deliver complete digital solutions tailored to your needs.
                                </p>
                                <p className="text-lg opacity-80 leading-relaxed text-justify">
                                    Currently working as a <strong className="text-primary">Freelance Website Designer & Developer</strong>, I provide <strong>end-to-end website deployment</strong> services—from design and development to domain setup, hosting, and launch.
                                </p>
                                <p className="text-lg opacity-80 leading-relaxed text-justify">
                                    Whether you need a custom-coded website, a WordPress site, or a full-stack application, I help businesses establish a strong digital presence with high-quality, performant solutions that drive results.
                                </p>
                            </div>

                            {/* Delivered Projects */}
                            <div className="pt-6 border-t border-white/10">
                                <h4 className="text-sm font-semibold uppercase tracking-wider opacity-60 mb-4">Successfully Delivered Projects</h4>
                                <div className="flex flex-wrap gap-3">
                                    {projects.map((project, index) => (
                                        <a
                                            key={index}
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 glass rounded-full hover:bg-primary/20 hover:scale-105 border border-white/10 hover:border-primary/30 transition-all flex items-center gap-2 text-sm font-medium group"
                                        >
                                            {project.name}
                                            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Strengths */}
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                            {strengths.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="glass p-6 rounded-2xl group hover:scale-105 transition-all duration-300 relative overflow-hidden flex flex-col"
                                >
                                    {/* Gradient Background on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className={`p-4 bg-gradient-to-br ${item.color} rounded-xl text-white inline-block mb-4 shadow-lg w-fit`}>
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                        <p className="opacity-70 text-sm mb-4 flex-1">{item.desc}</p>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {item.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="px-2 py-1 text-xs bg-white/5 rounded-md opacity-60">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
