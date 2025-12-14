"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Trophy, ExternalLink, School, BookOpen } from "lucide-react";

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
        { icon: "🏆", text: "Ranked 2nd in College Aptitude Test Competition" },
        { icon: "⚡", text: "Enhanced backend throughput by 30%" },
        { icon: "🌍", text: "100% on-time global project deliverables" },
        { icon: "🚀", text: "5+ scalable cloud applications deployed" },
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

                {/* Education Card */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="glass p-8 rounded-2xl mb-12 max-w-4xl mx-auto">
                    <div className="flex items-start gap-6">
                        <div className="p-4 bg-primary/20 rounded-xl hidden sm:block">
                            <GraduationCap className="w-12 h-12 text-primary" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
                            <p className="text-xl text-secondary font-medium mb-2">{education.field}</p>
                            <p className="opacity-70 mb-4">{education.institution}</p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-semibold">{education.period}</span>
                                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-semibold">{education.grade}</span>
                                <span className="px-4 py-2 glass rounded-lg text-sm">{education.location}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* School Education */}
                <div className="mb-12 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                        <School className="w-7 h-7 text-secondary" />
                        School Education
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {schoolEducation.map((school, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                                className="glass p-6 rounded-xl card-hover relative overflow-hidden"
                            >
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${school.color}`}></div>
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-lg bg-gradient-to-r ${school.color} bg-opacity-20`}>
                                        <school.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold mb-1">{school.level}</h4>
                                        <p className="opacity-70 text-sm mb-3">{school.institution}</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-primary/20 text-primary rounded-lg text-xs font-semibold">{school.period}</span>
                                            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs font-semibold">{school.grade}</span>
                                            <span className="px-3 py-1 glass rounded-lg text-xs">{school.board}</span>
                                            <span className="px-3 py-1 glass rounded-lg text-xs">{school.stream}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Grid */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                        <Award className="w-7 h-7 text-accent" />
                        Professional Certifications
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {certifications.map((cert, index) => (
                            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: index * 0.1, duration: 0.4 }} className="glass p-5 rounded-xl card-hover relative overflow-hidden group">
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`}></div>
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-bold text-lg leading-tight pr-2">{cert.name}</h4>
                                    <span className="text-xs opacity-60 whitespace-nowrap">{cert.year}</span>
                                </div>
                                <p className={`text-sm font-medium bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>{cert.issuer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
                        <Trophy className="w-7 h-7 text-yellow-500" />
                        Key Achievements
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {achievements.map((achievement, index) => (
                            <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }} className="glass p-4 rounded-xl flex items-center gap-4 card-hover">
                                <span className="text-2xl">{achievement.icon}</span>
                                <span className="font-medium">{achievement.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
