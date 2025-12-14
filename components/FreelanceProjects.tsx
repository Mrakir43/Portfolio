"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe, Briefcase } from "lucide-react";

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
            type: "News & Media",
        },
        {
            name: "DC Interior",
            description: "Elegant interior design company website showcasing portfolio, services, and client testimonials. Built with focus on visual appeal and user experience.",
            techStack: ["React", "CSS3", "Responsive Design"],
            liveUrl: "https://dcinterior.co.in",
            gradient: "from-amber-500 to-yellow-500",
            type: "Business Website",
        },
        {
            name: "RentEases",
            description: "Modern rental property management platform connecting landlords and tenants. Features property listings, tenant management, and payment tracking.",
            techStack: ["React", "Node.js", "PostgreSQL"],
            liveUrl: "https://renteases.lovable.app",
            gradient: "from-green-500 to-teal-500",
            type: "SaaS Platform",
        },
    ];

    return (
        <section id="freelance" ref={ref} className="bg-[var(--surface)]">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Freelance <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">Client websites and commercial projects I&apos;ve delivered</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.15, duration: 0.5 }} className="glass p-6 rounded-xl card-hover flex flex-col group relative overflow-hidden">
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}></div>

                            <div className="flex items-start justify-between mb-4 mt-2">
                                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                                    <Globe className="w-6 h-6" />
                                </div>
                                <span className="px-3 py-1 glass rounded-full text-xs font-medium flex items-center gap-1">
                                    <Briefcase className="w-3 h-3" />
                                    {project.type}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                            <p className="opacity-70 mb-4 flex-grow leading-relaxed">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.techStack.map((tech, idx) => (
                                    <span key={idx} className={`px-3 py-1.5 text-sm bg-gradient-to-r ${project.gradient} bg-opacity-10 rounded-full font-medium`}>{tech}</span>
                                ))}
                            </div>

                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg`}>
                                <ExternalLink className="w-4 h-4" />
                                View Live Site
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
