"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const experiences = [
        {
            title: "Freelance Website Designer & Developer",
            company: "Self-employed",
            type: "Freelance",
            period: "2023 - Present",
            responsibilities: [
                "Design and develop custom websites using React, Next.js, and WordPress",
                "Provide end-to-end deployment services from design to domain setup and launch",
                "Built sairatimes.com, dcinterior.co.in, and renteases.lovable.app",
                "Increased client inquiries by 40% through optimized web presence",
                "Manage client relationships and ensure on-time project delivery",
            ],
        },
        {
            title: "AI & ML Intern",
            company: "Internshala Programs",
            type: "Internship",
            period: "4th Semester (2 Months)",
            responsibilities: [
                "Built and trained ML models (classification, regression, clustering) on real datasets",
                "Executed data preprocessing, feature engineering, and model evaluation",
                "Used Python libraries: scikit-learn, pandas, NumPy for analytical workflows",
                "Developed and presented project outcomes in Jupyter Notebook",
                "Enhanced practical understanding of AI/ML workflows through hands-on learning",
            ],
        },
        {
            title: "Software Development Projects",
            company: "Academic & Personal",
            type: "Projects",
            period: "2021 - 2025",
            responsibilities: [
                "Built 5+ scalable applications across cloud environments (AWS, Docker)",
                "Enhanced backend system throughput by 30% through optimized database and caching",
                "Improved API error handling and documentation, reducing debugging time by 25%",
                "Collaborated with global teams, ensuring 100% on-time project deliverables",
                "Ranked 2nd in College Aptitude Test Competition, 2022",
            ],
        },
    ];

    return (
        <section id="experience" ref={ref} className="bg-[var(--surface)]">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">My professional journey and key achievements</p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: index * 0.2, duration: 0.6 }} className="relative pl-8 pb-12 last:pb-0">
                            {index !== experiences.length - 1 && (
                                <div className="absolute left-0 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent"></div>
                            )}
                            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-[var(--background)] -translate-x-1.5"></div>

                            <div className="glass p-6 rounded-xl card-hover">
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                                        <p className="text-lg text-primary font-medium flex items-center gap-2">
                                            <Briefcase className="w-4 h-4" />
                                            {exp.company} • {exp.type}
                                        </p>
                                    </div>
                                    <div className="glass px-4 py-2 rounded-lg flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-secondary" />
                                        <span className="text-sm font-medium">{exp.period}</span>
                                    </div>
                                </div>

                                <ul className="space-y-2">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="flex items-start gap-2 opacity-80">
                                            <span className="text-primary mt-1.5">▸</span>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
