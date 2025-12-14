"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle, TrendingUp, Building2 } from "lucide-react";

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
            duration: "2+ Years",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-500",
            responsibilities: [
                "Design and develop custom websites using React, Next.js, and WordPress",
                "Provide end-to-end deployment services from design to domain setup and launch",
                "Built sairatimes.com, dcinterior.co.in, and renteases.lovable.app",
                "Increased client inquiries by 40% through optimized web presence",
                "Manage client relationships and ensure on-time project delivery",
            ],
            highlights: ["40% Growth", "3+ Clients"],
        },
        {
            title: "AI & ML Intern",
            company: "Internshala Programs",
            location: "Remote",
            type: "Internship",
            period: "4th Semester",
            duration: "2 Months",
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-purple-500",
            responsibilities: [
                "Built and trained ML models (classification, regression, clustering) on real datasets",
                "Executed data preprocessing, feature engineering, and model evaluation",
                "Used Python libraries: scikit-learn, pandas, NumPy for analytical workflows",
                "Developed and presented project outcomes in Jupyter Notebook",
                "Enhanced practical understanding of AI/ML workflows through hands-on learning",
            ],
            highlights: ["ML Models", "Data Science"],
        },
        {
            title: "Software Development Projects",
            company: "Academic & Personal",
            location: "Greater Noida",
            type: "Projects",
            period: "2021 - 2025",
            duration: "4 Years",
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-green-500",
            responsibilities: [
                "Built 5+ scalable applications across cloud environments (AWS, Docker)",
                "Enhanced backend system throughput by 30% through optimized database and caching",
                "Improved API error handling and documentation, reducing debugging time by 25%",
                "Collaborated with global teams, ensuring 100% on-time project deliverables",
                "Ranked 2nd in College Aptitude Test Competition, 2022",
            ],
            highlights: ["5+ Apps", "30% Faster"],
        },
        {
            title: "Finance & Operations Manager",
            company: "Family-Owned Transport & Supply Business",
            location: "New Delhi, India",
            type: "Part-time",
            period: "Jan 2012 - Present",
            duration: "13+ Years",
            color: "from-amber-500 to-orange-500",
            bgColor: "bg-amber-500",
            responsibilities: [
                "Managed day-to-day transport operations, including route planning, vehicle scheduling, and delivery coordination",
                "Handled client billing and payments; maintained Excel spreadsheets to track invoices and communications",
                "Oversaw cash flow, expenses, and monthly budgets, ensuring financial stability through proactive budgeting",
                "Implemented cost-control measures that improved profitability and financial oversight",
                "Supported key business decisions related to pricing, vendors, and investments",
            ],
            highlights: ["13+ Years", "Finance Expert"],
        },
    ];

    return (
        <section id="experience" ref={ref} className="bg-[var(--surface)] relative overflow-hidden py-20 md:py-32">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl"></div>
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
                        <TrendingUp className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">Career Journey</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6"></div>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">
                        My professional journey and key achievements across different roles
                    </p>
                </motion.div>

                {/* Experience Cards */}
                <div className="max-w-5xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="group"
                        >
                            <div className="glass rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 relative">
                                {/* Gradient Side Bar */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${exp.color}`}></div>

                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                <div className="p-6 md:p-8 relative z-10">
                                    {/* Top Row - Header */}
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                        <div className="flex items-start gap-4">
                                            {/* Icon */}
                                            <div className={`p-4 rounded-2xl bg-gradient-to-br ${exp.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 hidden sm:block`}>
                                                <Building2 className="w-7 h-7" />
                                            </div>

                                            {/* Title & Company */}
                                            <div>
                                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                                    <span className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white text-xs font-bold rounded-full`}>
                                                        {exp.type}
                                                    </span>
                                                    <span className="px-3 py-1 bg-white/10 text-xs font-medium rounded-full">
                                                        {exp.duration}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>
                                                <div className="flex flex-wrap items-center gap-3 text-sm opacity-80">
                                                    <span className="flex items-center gap-1.5">
                                                        <Briefcase className="w-4 h-4 text-primary" />
                                                        {exp.company}
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <MapPin className="w-4 h-4" />
                                                        {exp.location}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Period Badge */}
                                        <div className="flex items-center gap-2 px-4 py-2 glass rounded-xl border border-white/10 self-start">
                                            <Calendar className="w-4 h-4 text-secondary" />
                                            <span className="text-sm font-medium">{exp.period}</span>
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {exp.highlights.map((highlight, idx) => (
                                            <span
                                                key={idx}
                                                className={`px-3 py-1.5 bg-gradient-to-r ${exp.color} bg-opacity-10 rounded-lg text-sm font-semibold flex items-center gap-1.5`}
                                            >
                                                <Sparkles className="w-3.5 h-3.5" />
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Responsibilities */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ delay: index * 0.15 + idx * 0.05 }}
                                                className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                                            >
                                                <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                                    <CheckCircle className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-sm opacity-80 leading-relaxed">{resp}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-8 mt-16"
                >
                    <div className="text-center glass px-8 py-4 rounded-2xl">
                        <div className="text-3xl md:text-4xl font-bold gradient-text">15+</div>
                        <div className="text-sm opacity-60">Years Combined</div>
                    </div>
                    <div className="text-center glass px-8 py-4 rounded-2xl">
                        <div className="text-3xl md:text-4xl font-bold gradient-text">4</div>
                        <div className="text-sm opacity-60">Roles</div>
                    </div>
                    <div className="text-center glass px-8 py-4 rounded-2xl">
                        <div className="text-3xl md:text-4xl font-bold gradient-text">∞</div>
                        <div className="text-sm opacity-60">Growth Mindset</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
