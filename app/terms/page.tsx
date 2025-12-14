"use client";

import { motion } from "framer-motion";
import { FileText, ArrowLeft, CheckCircle, AlertCircle, Shield, Clock, Users, Briefcase, Lock, MessageCircle, RefreshCw, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
    const sections = [
        {
            icon: <Users className="w-5 h-5" />,
            title: "1. Agreement to Terms",
            content: "By accessing and using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use this website.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Briefcase className="w-5 h-5" />,
            title: "2. Services Offered",
            content: "I provide professional freelance services in software development and technology consulting.",
            color: "from-purple-500 to-pink-500",
            list: [
                "Full-Stack Web Development (React, Next.js, Node.js, Spring Boot)",
                "Mobile App Development (Android with Kotlin, React Native)",
                "AI/ML Solutions and Integration (LangChain, OpenAI, NLP)",
                "Cloud Services and Deployment (AWS, GCP, Docker)",
                "RESTful API Development and Integration",
                "Database Design and Management",
                "Technical Consultation and Code Review"
            ]
        },
        {
            icon: <Shield className="w-5 h-5" />,
            title: "3. Intellectual Property Rights",
            content: "All content on this website, including but not limited to text, graphics, logos, images, code samples, and design elements, is my intellectual property unless otherwise stated. Unauthorized reproduction, distribution, or use of any content without explicit written permission is strictly prohibited.",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <FileText className="w-5 h-5" />,
            title: "4. Project Engagement Terms",
            content: "When engaging my services for a project, the following terms apply:",
            color: "from-orange-500 to-red-500",
            list: [
                "A detailed project scope and requirements will be documented before work begins",
                "Payment terms, milestones, and deliverables will be outlined in a separate agreement",
                "Changes to project scope may affect timeline, cost, and deliverables",
                "Regular progress updates will be provided throughout the project lifecycle",
                "Source code ownership transfers to the client upon final payment (unless otherwise agreed)",
                "A reasonable revision period will be included as per the project agreement"
            ]
        },
        {
            icon: <AlertCircle className="w-5 h-5" />,
            title: "5. Limitation of Liability",
            content: "While I strive to deliver high-quality, bug-free work, I cannot guarantee that all services will be completely error-free. I shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of my services or this website. My total liability shall not exceed the amount paid for the specific service in question.",
            color: "from-red-500 to-rose-500"
        },
        {
            icon: <Lock className="w-5 h-5" />,
            title: "6. Confidentiality Agreement",
            content: "Any confidential information shared during project discussions, negotiations, or engagement will be kept strictly confidential. I will not disclose your business information, trade secrets, or proprietary data to any third parties without your explicit written consent. This obligation continues even after the completion of our engagement.",
            color: "from-indigo-500 to-blue-500"
        },
        {
            icon: <MessageCircle className="w-5 h-5" />,
            title: "7. Communication Policy",
            content: "By contacting me through this website, you agree to receive responses via email or phone as appropriate. I aim to respond to all inquiries within 24 hours during business days. For ongoing projects, communication channels and frequency will be established based on project requirements.",
            color: "from-cyan-500 to-teal-500"
        },
        {
            icon: <RefreshCw className="w-5 h-5" />,
            title: "8. Modifications to Terms",
            content: "I reserve the right to modify these Terms of Service at any time without prior notice. Changes will be effective immediately upon posting to this website. The 'Last Updated' date at the top of this page will reflect the most recent revision. Continued use of the website after any changes constitutes acceptance of the modified terms.",
            color: "from-violet-500 to-purple-500"
        }
    ];

    const highlights = [
        { icon: <CheckCircle className="w-5 h-5" />, text: "Transparent pricing" },
        { icon: <Shield className="w-5 h-5" />, text: "Data protection" },
        { icon: <Clock className="w-5 h-5" />, text: "On-time delivery" },
        { icon: <Lock className="w-5 h-5" />, text: "100% Confidential" },
    ];

    return (
        <main className="min-h-screen relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 py-20 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Back Link */}
                    <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-primary hover:scale-105 transition-all mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    {/* Header */}
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="inline-flex p-5 bg-gradient-to-r from-primary to-secondary rounded-2xl mb-6"
                        >
                            <FileText className="w-10 h-10 text-white" />
                        </motion.div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Terms of <span className="gradient-text">Service</span>
                        </h1>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-4"></div>
                        <p className="opacity-70 max-w-2xl mx-auto">
                            Please read these terms carefully before using my services or engaging in any project.
                        </p>
                        <p className="text-sm opacity-50 mt-2">Last updated: December 2024</p>
                    </div>

                    {/* Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {highlights.map((item, index) => (
                            <div key={index} className="flex items-center gap-2 px-4 py-2 glass rounded-full">
                                <span className="text-green-500">{item.icon}</span>
                                <span className="text-sm font-medium">{item.text}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Content Sections */}
                    <div className="space-y-6">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className="glass p-6 md:p-8 rounded-2xl hover:scale-[1.01] transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 bg-gradient-to-r ${section.color} rounded-xl text-white shrink-0`}>
                                        {section.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-xl md:text-2xl font-bold mb-3">{section.title}</h2>
                                        <p className="opacity-80 leading-relaxed">{section.content}</p>
                                        {section.list && (
                                            <ul className="mt-4 space-y-2">
                                                {section.list.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 opacity-80">
                                                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 glass p-8 rounded-2xl text-center"
                    >
                        <h3 className="text-2xl font-bold mb-4">Questions About These Terms?</h3>
                        <p className="opacity-70 mb-6 max-w-xl mx-auto">
                            If you have any questions or concerns about these Terms of Service, please don&apos;t hesitate to reach out.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 mb-6">
                            <a href="mailto:er.aamirkhann@gmail.com" className="flex items-center gap-2 text-primary hover:underline">
                                <Mail className="w-4 h-4" />
                                er.aamirkhann@gmail.com
                            </a>
                            <span className="flex items-center gap-2 opacity-70">
                                <MapPin className="w-4 h-4" />
                                New Delhi, India
                            </span>
                        </div>
                        <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-xl hover:scale-105 transition-all">
                            Contact Me
                            <ArrowLeft className="w-4 h-4 rotate-180" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}
