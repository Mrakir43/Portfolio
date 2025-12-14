"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Shield, Heart, Sparkles, Rocket, ExternalLink, ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            name: "AI Personal Healthcare Assistant",
            description: "Personalized AI healthcare assistant with Streamlit frontend and FastAPI backend. Features NLP-based conversational AI using LangChain and OpenAI GPT, with 90% accuracy on health predictions.",
            techStack: ["Python", "FastAPI", "LangChain", "OpenAI GPT", "Streamlit", "ML"],
            status: "In Development",
            stats: "100+ Users Validated",
            icon: <Heart className="w-6 h-6" />,
            gradient: "from-emerald-500 to-teal-500",
            shadowColor: "shadow-emerald-500/20",
        },
        {
            name: "VICTSI - Cyber Victim Support",
            description: "Community platform for cyber fraud victims with anonymous posting, real-time chat, IP masking, and PAM detection. Designed secure moderation tools.",
            techStack: ["ReactJS", "Node.js", "Firebase", "Tailwind CSS", "Security"],
            status: "Launched",
            stats: "500+ Users First Month",
            icon: <Shield className="w-6 h-6" />,
            gradient: "from-red-500 to-orange-500",
            shadowColor: "shadow-red-500/20",
        },
        {
            name: "WhatsGPT - AI WhatsApp Chatbot",
            description: "Intelligent WhatsApp chatbot using Python, Twilio API, and OpenAI GPT for real-time conversational AI. Deployed on Heroku with MongoDB for context.",
            techStack: ["Python", "Twilio API", "OpenAI GPT", "Heroku", "MongoDB"],
            status: "Deployed",
            stats: "24/7 Intelligent Responses",
            icon: <Bot className="w-6 h-6" />,
            gradient: "from-green-500 to-emerald-500",
            shadowColor: "shadow-green-500/20",
        },
    ];

    return (
        <section id="featured-projects" ref={ref} className="bg-[var(--surface)] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                        <Rocket className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">Highlight Projects</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">AI-powered applications solving real-world problems</p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                                <div className="flex items-start justify-between mb-5 mt-2 relative z-10">
                                    <div className="relative">
                                        <div className={`p-3.5 rounded-xl bg-gradient-to-br ${project.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                                            {project.icon}
                                        </div>
                                        {/* Glow */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                                    </div>
                                    <span className={`px-3 py-1.5 text-xs font-semibold rounded-full ${project.status === "Launched" || project.status === "Deployed" ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"}`}>
                                        {project.status}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors relative z-10">{project.name}</h3>
                                <p className="opacity-70 mb-4 flex-grow text-sm leading-relaxed relative z-10">{project.description}</p>

                                {/* Stats */}
                                <div className="flex items-center gap-2 mb-4 relative z-10">
                                    <Sparkles className="w-4 h-4 text-yellow-500" />
                                    <span className="text-sm font-medium">{project.stats}</span>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {project.techStack.map((tech, idx) => (
                                        <span key={idx} className="px-2.5 py-1 text-xs bg-white/5 hover:bg-white/10 rounded-lg font-medium transition-colors border border-white/5">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
