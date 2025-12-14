"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    Code,
    Smartphone,
    Brain,
    Cloud,
    Bot,
    Webhook,
    PhoneCall,
    MessageSquare,
    Sparkles,
    ArrowRight,
    CheckCircle,
    Zap
} from "lucide-react";

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const services = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Full-Stack Development",
            description: "End-to-end web applications using React, Next.js, Node.js, and Spring Boot with modern architectures.",
            features: ["React & Next.js", "Node.js & Express", "Spring Boot", "Database Design"],
            color: "from-blue-500 to-cyan-500",
            shadowColor: "shadow-blue-500/20",
            delay: 0,
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Mobile App Development",
            description: "Native and cross-platform mobile apps for Android with stunning UI and seamless performance.",
            features: ["Android (Kotlin)", "Jetpack Compose", "React Native", "Material Design 3"],
            color: "from-green-500 to-emerald-500",
            shadowColor: "shadow-green-500/20",
            delay: 0.1,
        },
        {
            icon: <PhoneCall className="w-8 h-8" />,
            title: "AI Call Agents",
            description: "Intelligent voice AI agents for customer support, appointments, and lead qualification with natural conversations.",
            features: ["Voice AI", "Natural Language", "24/7 Availability", "CRM Integration"],
            color: "from-purple-500 to-pink-500",
            shadowColor: "shadow-purple-500/20",
            delay: 0.2,
        },
        {
            icon: <Brain className="w-8 h-8" />,
            title: "LLM & ChatGPT Integration",
            description: "Custom AI solutions using OpenAI GPT, LangChain, and RAG for intelligent automation and content generation.",
            features: ["ChatGPT 4o & o1", "LangChain", "RAG Systems", "Custom Fine-tuning"],
            color: "from-orange-500 to-red-500",
            shadowColor: "shadow-orange-500/20",
            delay: 0.3,
        },
        {
            icon: <Bot className="w-8 h-8" />,
            title: "Chatbot Development",
            description: "AI-powered chatbots for WhatsApp, Telegram, and websites that understand context and automate workflows.",
            features: ["WhatsApp Bots", "Telegram Bots", "Web Widgets", "Multi-language"],
            color: "from-indigo-500 to-purple-500",
            shadowColor: "shadow-indigo-500/20",
            delay: 0.4,
        },
        {
            icon: <Cloud className="w-8 h-8" />,
            title: "Cloud & DevOps",
            description: "Scalable cloud infrastructure on AWS and GCP with CI/CD pipelines and containerized deployments.",
            features: ["AWS & GCP", "Docker & K8s", "CI/CD Pipelines", "Infrastructure"],
            color: "from-cyan-500 to-teal-500",
            shadowColor: "shadow-cyan-500/20",
            delay: 0.5,
        },
        {
            icon: <Webhook className="w-8 h-8" />,
            title: "API Development",
            description: "RESTful and GraphQL APIs with robust authentication, documentation, and third-party integrations.",
            features: ["REST & GraphQL", "OAuth & JWT", "API Documentation", "Webhooks"],
            color: "from-rose-500 to-pink-500",
            shadowColor: "shadow-rose-500/20",
            delay: 0.6,
        },
        {
            icon: <MessageSquare className="w-8 h-8" />,
            title: "AI Automation",
            description: "Workflow automation using AI agents, n8n, and custom scripts to streamline business processes.",
            features: ["Workflow Bots", "Task Automation", "Email AI", "Data Processing"],
            color: "from-amber-500 to-orange-500",
            shadowColor: "shadow-amber-500/20",
            delay: 0.7,
        },
    ];

    return (
        <section id="services" ref={ref} className="relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">What I Offer</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        My <span className="gradient-text">Services</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
                    <p className="text-lg opacity-70 max-w-3xl mx-auto">
                        Transforming ideas into reality with cutting-edge technology solutions.
                        From AI-powered applications to scalable cloud infrastructure.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: service.delay, duration: 0.5 }}
                            className="group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className={`glass p-4 sm:p-5 md:p-6 rounded-2xl h-full flex flex-col transition-all duration-500 relative overflow-hidden border border-white/5 hover:border-white/20 ${hoveredIndex === index ? `scale-[1.03] ${service.shadowColor} shadow-2xl` : ''}`}>
                                {/* Animated Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                {/* Gradient Border Top */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                                {/* Icon with Glow */}
                                <div className="relative mb-5">
                                    <div className={`p-4 bg-gradient-to-br ${service.color} rounded-xl text-white w-fit group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                                        {service.icon}
                                    </div>
                                    {/* Glow Effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 w-16 h-16`}></div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>

                                {/* Description */}
                                <p className="opacity-70 text-sm leading-relaxed mb-5 flex-grow">
                                    {service.description}
                                </p>

                                {/* Features with Better Styling */}
                                <div className="space-y-2.5 mb-5">
                                    {service.features.map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="flex items-center gap-2.5 text-sm"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: service.delay + 0.1 + idx * 0.05 }}
                                        >
                                            <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                                                <CheckCircle className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="opacity-80">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Learn More Link */}
                                <a
                                    href={`mailto:er.aamirkhann@gmail.com?subject=${encodeURIComponent(`Inquiry: ${service.title}`)}&body=${encodeURIComponent(`Hi Aamir,

I am interested in your ${service.title} services.

My Requirements:
- Project Name: [Your Project Name]
- Timeline: [Expected Timeline]
- Budget Range: [Your Budget]

Brief Description:
[Please describe what you're looking to build]

Contact Details:
- Name: [Your Name]
- Phone: [Your Contact Number]
- Company: [Your Company/Organization]

Looking forward to hearing from you!

Best regards`)}`}
                                    className={`flex items-center gap-2 text-sm font-semibold mt-auto pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300`}
                                >
                                    <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>Get Started</span>
                                    <ArrowRight className={`w-4 h-4 group-hover:translate-x-2 transition-transform duration-300`} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-20"
                >
                    <div className="glass p-10 rounded-3xl max-w-4xl mx-auto relative overflow-hidden border border-white/10">
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full mb-6">
                                <Zap className="w-4 h-4 text-accent" />
                                <span className="text-sm font-medium">Custom Solutions</span>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
                            <p className="opacity-70 mb-8 max-w-xl mx-auto">
                                Every project is unique. Let&apos;s discuss your specific requirements and create something amazing together.
                            </p>
                            <a
                                href={`mailto:er.aamirkhann@gmail.com?subject=${encodeURIComponent('Request for Free Quote - Project Inquiry')}&body=${encodeURIComponent(`Hi Aamir,

I would like to get a free quote for my project.

Project Details:
- Project Name: [Your Project Name]
- Project Type: [Web App / Mobile App / AI Solution / API / Other]
- Timeline: [Expected Timeline]
- Budget Range: [Your Budget]

Description:
[Please describe your project requirements, features needed, and any specific technologies you'd like to use]

Contact Details:
- Name: [Your Name]
- Phone: [Your Contact Number]
- Company: [Your Company/Organization]
- Website: [Your Website (if any)]

Looking forward to your quote!

Best regards`)}`}
                                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/30"
                            >
                                <MessageSquare className="w-5 h-5" />
                                Get a Free Quote
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
