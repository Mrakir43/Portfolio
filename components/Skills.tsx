"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Server, Cloud, Brain, Database, Sparkles } from "lucide-react";

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code className="w-5 h-5" />,
            skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "SQL"],
            color: "from-blue-500 to-cyan-500",
            shadowColor: "shadow-blue-500/20",
        },
        {
            title: "Frontend",
            icon: <Palette className="w-5 h-5" />,
            skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"],
            color: "from-purple-500 to-pink-500",
            shadowColor: "shadow-purple-500/20",
        },
        {
            title: "Backend & Frameworks",
            icon: <Server className="w-5 h-5" />,
            skills: ["Node.js", "Spring Boot", "FastAPI", "Flask", "Hibernate ORM", "REST APIs"],
            color: "from-green-500 to-emerald-500",
            shadowColor: "shadow-green-500/20",
        },
        {
            title: "Cloud & DevOps",
            icon: <Cloud className="w-5 h-5" />,
            skills: ["AWS (EC2, S3, Lambda)", "Docker", "GitHub Actions", "Jenkins", "CI/CD", "Vercel"],
            color: "from-orange-500 to-red-500",
            shadowColor: "shadow-orange-500/20",
        },
        {
            title: "AI & Machine Learning",
            icon: <Brain className="w-5 h-5" />,
            skills: ["TensorFlow", "LangChain", "OpenAI GPT", "NLP", "Prompt Engineering", "GitHub Copilot"],
            color: "from-cyan-500 to-blue-500",
            shadowColor: "shadow-cyan-500/20",
        },
        {
            title: "Databases & Tools",
            icon: <Database className="w-5 h-5" />,
            skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "WordPress", "Figma"],
            color: "from-pink-500 to-rose-500",
            shadowColor: "shadow-pink-500/20",
        },
    ];

    return (
        <section id="skills" ref={ref} className="relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/3 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">Technical Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                            className="group"
                        >
                            <div className={`glass p-6 rounded-2xl h-full relative overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:${category.shadowColor} hover:shadow-xl`}>
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                {/* Gradient Top Border */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                                {/* Header */}
                                <div className="flex items-center gap-3 mb-5 relative z-10">
                                    <div className={`p-2.5 bg-gradient-to-br ${category.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{category.title}</h3>
                                </div>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skillIndex}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                            className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium cursor-default transition-all duration-300 hover:scale-105 border border-white/5 hover:border-white/20"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-8 mt-16"
                >
                    <div className="text-center">
                        <div className="text-4xl font-bold gradient-text">30+</div>
                        <div className="text-sm opacity-60">Technologies</div>
                    </div>
                    <div className="w-px h-12 bg-white/10"></div>
                    <div className="text-center">
                        <div className="text-4xl font-bold gradient-text">6</div>
                        <div className="text-sm opacity-60">Categories</div>
                    </div>
                    <div className="w-px h-12 bg-white/10"></div>
                    <div className="text-center">
                        <div className="text-4xl font-bold gradient-text">∞</div>
                        <div className="text-sm opacity-60">Learning</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
