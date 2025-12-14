"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe, Briefcase, ArrowUpRight, Sparkles, CheckCircle } from "lucide-react";

export default function FreelanceProjects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            name: "Saira Times",
            description: "Professional news and media website with modern design, optimized for performance and user engagement. Features responsive layout and seamless navigation.",
            techStack: ["Next.js", "Tailwind CSS", "SEO Optimized"],
            liveUrl: "https://sairatimes.com",
            gradient: "from-red-500 to-orange-500",
            shadowColor: "shadow-red-500/20",
            type: "News & Media",
            highlights: ["40% Faster Load Time", "Mobile Optimized"],
        },
        {
            name: "DC Interior",
            description: "Elegant interior design company website showcasing portfolio, services, and client testimonials. Built with focus on visual appeal and user experience.",
            techStack: ["React", "CSS3", "Responsive Design"],
            liveUrl: "https://dcinterior.co.in",
            gradient: "from-amber-500 to-yellow-500",
            shadowColor: "shadow-amber-500/20",
            type: "Business Website",
            highlights: ["Portfolio Showcase", "Contact Forms"],
        },
        {
            name: "RentEases",
            description: "Modern rental property management platform connecting landlords and tenants. Features property listings, tenant management, and payment tracking.",
            techStack: ["React", "Node.js", "PostgreSQL"],
            liveUrl: "https://renteases.lovable.app",
            gradient: "from-green-500 to-teal-500",
            shadowColor: "shadow-green-500/20",
            type: "SaaS Platform",
            highlights: ["Full CRUD", "Dashboard Analytics"],
        },
    ];

    return (
        <section id="freelance" ref={ref} className="bg-[var(--surface)] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                        <Briefcase className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">Client Work</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Freelance <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">Client websites and commercial projects I&apos;ve delivered</p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="group"
                        >
                            <div className={`glass p-6 rounded-2xl h-full flex flex-col relative overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:${project.shadowColor} hover:shadow-xl`}>
                                {/* Animated Gradient Top Border */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                {/* Header */}
                                <div className="flex items-start justify-between mb-5 relative z-10">
                                    <div className="relative">
                                        <div className={`p-3.5 rounded-xl bg-gradient-to-br ${project.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                                            <Globe className="w-6 h-6" />
                                        </div>
                                        {/* Glow */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                                    </div>
                                    <span className="px-3 py-1.5 glass rounded-full text-xs font-medium flex items-center gap-1.5 border border-white/10">
                                        <Briefcase className="w-3 h-3" />
                                        {project.type}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors relative z-10">{project.name}</h3>
                                <p className="opacity-70 mb-4 flex-grow leading-relaxed text-sm relative z-10">{project.description}</p>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                                    {project.highlights.map((highlight, idx) => (
                                        <span key={idx} className="flex items-center gap-1.5 text-xs opacity-70">
                                            <CheckCircle className="w-3 h-3 text-green-400" />
                                            {highlight}
                                        </span>
                                    ))}
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                                    {project.techStack.map((tech, idx) => (
                                        <span key={idx} className="px-2.5 py-1 text-xs bg-white/5 hover:bg-white/10 rounded-lg font-medium transition-colors border border-white/5">{tech}</span>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg relative z-10 group/btn`}
                                >
                                    <span>View Live Site</span>
                                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
