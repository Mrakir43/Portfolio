"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const education = [
        {
            degree: "Bachelor of Technology (B.Tech)",
            field: "Computer Science & Engineering",
            institution: "NIET (Noida Institute of Engineering and Technology)",
            period: "2018 - 2022",
            description: "Graduated with focus on software development, data structures, algorithms, and modern programming paradigms.",
        },
        {
            degree: "Higher Secondary Education",
            field: "Science (PCM)",
            institution: "CBSE Board",
            period: "2016 - 2018",
            description: "Completed 12th grade with focus on Physics, Chemistry, and Mathematics.",
        },
    ];

    const certifications = [
        { name: "Google Cloud Platform Fundamentals", issuer: "Google Cloud" },
        { name: "Google Analytics Certification", issuer: "Google" },
        { name: "Python Programming", issuer: "Coursera" },
        { name: "Web Development Bootcamp", issuer: "Udemy" },
        { name: "Android Development with Kotlin", issuer: "Google" },
        { name: "Machine Learning Basics", issuer: "Coursera" },
    ];

    return (
        <section id="education" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Education & <span className="gradient-text">Certifications</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <GraduationCap className="w-7 h-7 text-primary" />
                            Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div key={index} initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: index * 0.2, duration: 0.5 }} className="glass p-6 rounded-xl card-hover">
                                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">{edu.period}</span>
                                    </div>
                                    <p className="text-lg text-secondary font-medium mb-1">{edu.field}</p>
                                    <p className="opacity-70 mb-3">{edu.institution}</p>
                                    <p className="text-sm opacity-60">{edu.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Award className="w-7 h-7 text-accent" />
                            Certifications
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {certifications.map((cert, index) => (
                                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: index * 0.1, duration: 0.4 }} className="glass p-4 rounded-xl card-hover">
                                    <h4 className="font-semibold mb-1">{cert.name}</h4>
                                    <p className="text-sm text-primary opacity-80">{cert.issuer}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
