"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Trophy, School, BookOpen, Sparkles, CheckCircle, Star } from "lucide-react";

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const education = {
        degree: "B.Tech in Computer Science Engineering",
        field: "AI & ML Specialization",
        institution: "Noida Institute of Engineering and Technology (AKTU)",
        period: "2021 - 2025",
        grade: "CGPA: 8.2/10",
        location: "Greater Noida",
    };

    const schoolEducation = [
        {
            level: "Intermediate (12th)",
            board: "CBSE",
            institution: "Govt. Boys Senior Secondary School (Rama Krishna)",
            period: "2019 - 2020",
            grade: "Percentage: 75%",
            stream: "Science (PCM)",
            icon: BookOpen,
            color: "from-blue-500 to-cyan-500",
        },
        {
            level: "High School (10th)",
            board: "CBSE",
            institution: "Govt. Boys Senior Secondary School (Rama Krishna)",
            period: "2017 - 2018",
            grade: "Percentage: 82%",
            stream: "All Subjects",
            icon: School,
            color: "from-green-500 to-emerald-500",
        },
    ];

    const certifications = [
        { name: "Artificial Intelligence", issuer: "Infosys Springboard", year: "2025", color: "from-purple-500 to-indigo-500" },
        { name: "Java, JavaScript, Spring Boot & NLP", issuer: "Infosys Springboard", year: "2024", color: "from-orange-500 to-red-500" },
        { name: "Human-Centered Design", issuer: "University of Toronto", year: "2023", color: "from-blue-500 to-cyan-500" },
        { name: "NoSQL Database", issuer: "IBM", year: "2023", color: "from-green-500 to-emerald-500" },
        { name: "Google Cloud Platform", issuer: "Google Cloud", year: "2023", color: "from-yellow-500 to-orange-500" },
        { name: "Android Development", issuer: "Google", year: "2023", color: "from-pink-500 to-rose-500" },
    ];

    const achievements = [
        { icon: "🏆", text: "Ranked 2nd in College Aptitude Test Competition", color: "from-yellow-500 to-orange-500" },
        { icon: "⚡", text: "Enhanced backend throughput by 30%", color: "from-blue-500 to-cyan-500" },
        { icon: "🌍", text: "100% on-time global project deliverables", color: "from-green-500 to-emerald-500" },
        { icon: "🚀", text: "5+ scalable cloud applications deployed", color: "from-purple-500 to-pink-500" },
    ];

    return (
        <section id="education" ref={ref} className="relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/3 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                        <GraduationCap className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">Academic Background</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Education & <span className="gradient-text">Certifications</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
                </motion.div>

                {/* Main Education Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="glass p-8 rounded-2xl mb-12 max-w-4xl mx-auto relative overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 group"
                >
                    {/* Gradient Top Border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>

                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="flex items-start gap-6 relative z-10">
                        <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl hidden sm:block group-hover:scale-110 transition-transform duration-300">
                            <GraduationCap className="w-12 h-12 text-white" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{education.degree}</h3>
                            <p className="text-xl text-secondary font-medium mb-2">{education.field}</p>
                            <p className="opacity-70 mb-4">{education.institution}</p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-xl text-sm font-semibold border border-primary/20">{education.period}</span>
                                <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-500/10 text-green-400 rounded-xl text-sm font-semibold border border-green-500/20">{education.grade}</span>
                                <span className="px-4 py-2 glass rounded-xl text-sm border border-white/10">{education.location}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* School Education */}
                <div className="mb-16 max-w-4xl mx-auto">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3"
                    >
                        <div className="p-2 bg-gradient-to-r from-secondary to-accent rounded-lg">
                            <School className="w-5 h-5 text-white" />
                        </div>
                        School Education
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {schoolEducation.map((school, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                className="group"
                            >
                                <div className="glass p-6 rounded-2xl h-full relative overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500">
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${school.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${school.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                    <div className="flex items-start gap-4 relative z-10">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${school.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                                            <school.icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{school.level}</h4>
                                            <p className="opacity-70 text-sm mb-3">{school.institution}</p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1 bg-primary/20 text-primary rounded-lg text-xs font-semibold">{school.period}</span>
                                                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs font-semibold">{school.grade}</span>
                                                <span className="px-3 py-1 glass rounded-lg text-xs">{school.board}</span>
                                                <span className="px-3 py-1 glass rounded-lg text-xs">{school.stream}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Grid */}
                <div className="mb-16">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 }}
                        className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3"
                    >
                        <div className="p-2 bg-gradient-to-r from-accent to-primary rounded-lg">
                            <Award className="w-5 h-5 text-white" />
                        </div>
                        Professional Certifications
                    </motion.h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.5 + index * 0.08, duration: 0.4 }}
                                className="group"
                            >
                                <div className="glass p-5 rounded-2xl h-full relative overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500">
                                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cert.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-3">
                                            <h4 className="font-bold text-base leading-tight pr-2 group-hover:text-primary transition-colors">{cert.name}</h4>
                                            <span className="px-2 py-0.5 bg-white/10 rounded text-xs opacity-60 whitespace-nowrap">{cert.year}</span>
                                        </div>
                                        <p className={`text-sm font-medium bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>{cert.issuer}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="max-w-4xl mx-auto">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 }}
                        className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3"
                    >
                        <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                            <Trophy className="w-5 h-5 text-white" />
                        </div>
                        Key Achievements
                    </motion.h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                                className="group"
                            >
                                <div className="glass p-5 rounded-2xl flex items-center gap-4 relative overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500">
                                    <div className={`absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b ${achievement.color}`}></div>
                                    <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                    <span className="text-3xl relative z-10">{achievement.icon}</span>
                                    <span className="font-medium relative z-10">{achievement.text}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
