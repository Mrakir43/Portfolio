"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Shield, Heart, Sparkles } from "lucide-react";

export default function FeaturedProjects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            name: "AI Personal Healthcare Assistant",
            description: "Personalized AI healthcare assistant with Streamlit frontend and FastAPI backend. Features NLP-based conversational AI using LangChain and OpenAI GPT, with 90% accuracy on health predictions. Validated by 100+ users.",
            techStack: ["Python", "FastAPI", "LangChain", "OpenAI GPT", "Streamlit", "ML"],
            status: "In Development",
            icon: <Heart className="w-6 h-6" />,
            gradient: "from-emerald-500 to-teal-500",
        },
        {
            name: "VICTSI - Cyber Victim Support Platform",
            description: "Community platform for cyber fraud victims with anonymous posting, real-time chat, IP masking, and PAM detection. Designed secure moderation tools. Empowered 500+ users in the first month.",
            techStack: ["ReactJS", "Node.js", "Firebase", "Tailwind CSS", "Security"],
            status: "Launched",
            icon: <Shield className="w-6 h-6" />,
            gradient: "from-red-500 to-orange-500",
        },
        {
            name: "WhatsGPT - AI WhatsApp Chatbot",
            description: "Intelligent WhatsApp chatbot using Python, Twilio API, and OpenAI GPT for real-time conversational AI. Deployed on Heroku with MongoDB for context management. Enables 24/7 intelligent responses.",
            techStack: ["Python", "Twilio API", "OpenAI GPT", "Heroku", "MongoDB"],
            status: "Deployed",
            icon: <Bot className="w-6 h-6" />,
            gradient: "from-green-500 to-emerald-500",
        },
    ];

    return (
        <section id="featured-projects" ref={ref} className="bg-[var(--surface)]">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <Sparkles className="w-10 h-10 inline-block mr-2 text-yellow-500" />
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">AI-powered applications solving real-world problems</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.15, duration: 0.5 }} className="glass p-6 rounded-xl card-hover flex flex-col relative overflow-hidden">
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}></div>

                            <div className="flex items-start justify-between mb-4 mt-2">
                                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                                    {project.icon}
                                </div>
                                <span className={`px-3 py-1 text-xs rounded-full ${project.status === "Launched" || project.status === "Deployed" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                                    {project.status}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                            <p className="opacity-70 mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, idx) => (
                                    <span key={idx} className={`px-3 py-1.5 text-xs bg-gradient-to-r ${project.gradient} bg-opacity-10 rounded-full font-medium`}>{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
