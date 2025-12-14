"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "SQL"],
            color: "from-blue-500 to-cyan-500",
        },
        {
            title: "Frontend",
            skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"],
            color: "from-purple-500 to-pink-500",
        },
        {
            title: "Backend & Frameworks",
            skills: ["Node.js", "Spring Boot", "FastAPI", "Flask", "Hibernate ORM", "REST APIs"],
            color: "from-green-500 to-emerald-500",
        },
        {
            title: "Cloud & DevOps",
            skills: ["AWS (EC2, S3, Lambda)", "Docker", "GitHub Actions", "Jenkins", "CI/CD", "Vercel"],
            color: "from-orange-500 to-red-500",
        },
        {
            title: "AI & Machine Learning",
            skills: ["TensorFlow", "LangChain", "OpenAI GPT", "NLP", "Prompt Engineering", "GitHub Copilot"],
            color: "from-cyan-500 to-blue-500",
        },
        {
            title: "Databases & Tools",
            skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "WordPress", "Figma"],
            color: "from-pink-500 to-rose-500",
        },
    ];

    return (
        <section id="skills" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div key={categoryIndex} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: categoryIndex * 0.1, duration: 0.5 }} className="glass p-6 rounded-xl card-hover">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></div>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span key={skillIndex} initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }} className={`px-3 py-1.5 bg-gradient-to-r ${category.color} bg-opacity-10 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default`}>
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
