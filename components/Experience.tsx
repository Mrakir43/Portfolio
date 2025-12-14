"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle } from "lucide-react";

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const experiences = [
        {
            title: "Freelance Website Designer & Developer",
            company: "Self-employed",
            location: "Remote",
            type: "Freelance",
            period: "2023 - Present",
            color: "from-blue-500 to-cyan-500",
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
            location: "Remote",
            type: "Internship",
            period: "4th Semester (2 Months)",
            color: "from-purple-500 to-pink-500",
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
            location: "Greater Noida",
            type: "Projects",
            period: "2021 - 2025",
            color: "from-green-500 to-emerald-500",
            responsibilities: [
                "Built 5+ scalable applications across cloud environments (AWS, Docker)",
                "Enhanced backend system throughput by 30% through optimized database and caching",
                "Improved API error handling and documentation, reducing debugging time by 25%",
                "Collaborated with global teams, ensuring 100% on-time project deliverables",
                "Ranked 2nd in College Aptitude Test Competition, 2022",
            ],
        },
        {
            title: "Finance & Operations Manager",
            company: "Family-Owned Transport & Supply Business",
            location: "New Delhi, India",
            type: "Part-time",
            period: "Jan 2012 - Present",
            color: "from-amber-500 to-orange-500",
            responsibilities: [
                "Managed day-to-day transport operations, including route planning, vehicle scheduling, and delivery coordination",
                "Handled client billing and payments; maintained Excel spreadsheets to track invoices and communications",
                "Oversaw cash flow, expenses, and monthly budgets, ensuring financial stability through proactive budgeting",
                "Implemented cost-control measures that improved profitability and financial oversight",
                "Supported key business decisions related to pricing, vendors, and investments",
            ],
        },
    ];

    return (
        <section id="experience" ref={ref} className="bg-[var(--surface)] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">Career Journey</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">My professional journey and key achievements</p>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className={`relative mb-12 last:mb-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}
                        >
                            {/* Timeline Dot */}
                            <div className={`absolute top-6 ${index % 2 === 0 ? 'left-0 md:right-0 md:left-auto' : 'left-0'} w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} ring-4 ring-[var(--background)] transform -translate-x-1/2 md:translate-x-1/2 z-10`}></div>

                            {/* Connector Line (Desktop) */}
                            <div className={`hidden md:block absolute top-7 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-12 h-0.5 bg-gradient-to-r ${exp.color}`}></div>

                            {/* Card */}
                            <div className="glass p-6 rounded-2xl ml-6 md:ml-0 relative overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 group">
                                {/* Gradient Top Border */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                {/* Header */}
                                <div className="relative z-10 mb-4">
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                        <div className={`px-3 py-1.5 bg-gradient-to-r ${exp.color} text-white text-xs font-semibold rounded-full`}>
                                            {exp.type}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm opacity-70">
                                            <Calendar className="w-4 h-4" />
                                            {exp.period}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{exp.title}</h3>
                                    <div className="flex flex-wrap items-center gap-4 text-sm">
                                        <span className="flex items-center gap-1.5 opacity-80">
                                            <Briefcase className="w-4 h-4 text-primary" />
                                            {exp.company}
                                        </span>
                                        <span className="flex items-center gap-1.5 opacity-60">
                                            <MapPin className="w-4 h-4" />
                                            {exp.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Responsibilities */}
                                <ul className="space-y-2.5 relative z-10">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: index * 0.2 + idx * 0.05 }}
                                            className="flex items-start gap-2.5 text-sm opacity-80"
                                        >
                                            <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 text-transparent bg-gradient-to-r ${exp.color} bg-clip-text`} style={{ WebkitBackgroundClip: 'text' }} />
                                            <span>{resp}</span>
                                        </motion.li>
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
