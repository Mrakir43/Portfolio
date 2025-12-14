"use client";

import { motion } from "framer-motion";
import { Shield, ArrowLeft, CheckCircle, Eye, Database, Cookie, UserCheck, Clock, Globe, Baby, RefreshCw, Mail, Phone, MapPin, Lock, Server, FileText } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
    const sections = [
        {
            icon: <Eye className="w-5 h-5" />,
            title: "1. Information We Collect",
            content: "We collect information to provide better services and improve your experience.",
            color: "from-blue-500 to-cyan-500",
            subsections: [
                {
                    subtitle: "Information You Provide",
                    items: [
                        "Name and email address (through the contact form)",
                        "Phone number (if you choose to provide it)",
                        "Project details, requirements, and messages",
                        "Company name and website (for business inquiries)",
                        "Any other information you voluntarily share"
                    ]
                },
                {
                    subtitle: "Automatically Collected Information",
                    items: [
                        "Browser type, version, and language preferences",
                        "Device information and screen resolution",
                        "IP address and approximate location",
                        "Pages visited, time spent, and navigation patterns",
                        "Referring website and search terms"
                    ]
                }
            ]
        },
        {
            icon: <Database className="w-5 h-5" />,
            title: "2. How We Use Your Information",
            content: "Your information is used solely for legitimate business purposes:",
            color: "from-purple-500 to-pink-500",
            list: [
                "Responding to your inquiries and messages promptly",
                "Providing project quotes, proposals, and estimates",
                "Delivering the services and solutions you request",
                "Improving website performance and user experience",
                "Sending project updates and progress reports (with consent)",
                "Analyzing website traffic and usage patterns",
                "Complying with legal and regulatory obligations"
            ]
        },
        {
            icon: <Lock className="w-5 h-5" />,
            title: "3. Data Protection & Security",
            content: "Your privacy and data security are my top priorities. I implement industry-standard security measures including encrypted data transmission (HTTPS), secure storage practices, regular security updates, and access controls. Your personal information is only accessed when necessary for providing services.",
            color: "from-green-500 to-emerald-500",
            highlights: [
                { icon: "🔒", text: "SSL/TLS Encryption" },
                { icon: "🛡️", text: "Secure Storage" },
                { icon: "🔐", text: "Access Controls" },
                { icon: "✅", text: "Regular Audits" }
            ]
        },
        {
            icon: <Server className="w-5 h-5" />,
            title: "4. Third-Party Services",
            content: "This website uses trusted third-party services to enhance functionality:",
            color: "from-orange-500 to-red-500",
            services: [
                { name: "Vercel", desc: "Website hosting, deployment, and analytics", privacy: "https://vercel.com/legal/privacy-policy" },
                { name: "GitHub", desc: "Source code hosting and project repositories", privacy: "https://docs.github.com/en/site-policy/privacy-policies" },
                { name: "LinkedIn", desc: "Professional networking and profile integration", privacy: "https://www.linkedin.com/legal/privacy-policy" }
            ]
        },
        {
            icon: <Cookie className="w-5 h-5" />,
            title: "5. Cookies & Tracking",
            content: "This website may use cookies and similar technologies to enhance your browsing experience. Cookies are small text files stored on your device that help remember your preferences and improve site functionality. You can configure your browser to refuse cookies, though this may affect some website features.",
            color: "from-amber-500 to-orange-500",
            cookieTypes: [
                { type: "Essential", desc: "Required for basic website functionality" },
                { type: "Analytics", desc: "Help understand how visitors use the site" },
                { type: "Preference", desc: "Remember your settings and choices" }
            ]
        },
        {
            icon: <UserCheck className="w-5 h-5" />,
            title: "6. Your Rights",
            content: "You have comprehensive rights regarding your personal data:",
            color: "from-indigo-500 to-blue-500",
            rights: [
                { right: "Access", desc: "Request a copy of all personal data I hold about you" },
                { right: "Correction", desc: "Request correction of any inaccurate or incomplete data" },
                { right: "Deletion", desc: "Request permanent deletion of your personal data" },
                { right: "Objection", desc: "Object to processing of your data for specific purposes" },
                { right: "Portability", desc: "Request transfer of your data to another service" },
                { right: "Withdraw Consent", desc: "Withdraw consent for data processing at any time" }
            ]
        },
        {
            icon: <Clock className="w-5 h-5" />,
            title: "7. Data Retention",
            content: "Personal information is retained only as long as necessary to fulfill the purposes outlined in this policy or as required by law. Contact form submissions are typically retained for 2 years. Project-related data may be retained longer for reference and support purposes. You may request earlier deletion at any time.",
            color: "from-cyan-500 to-teal-500"
        },
        {
            icon: <Globe className="w-5 h-5" />,
            title: "8. International Data Transfers",
            content: "If you access this website from outside India, your information may be transferred to and processed in India. By using this website, you consent to such transfers. I ensure that appropriate safeguards are in place to protect your data in accordance with applicable privacy laws.",
            color: "from-violet-500 to-purple-500"
        },
        {
            icon: <Baby className="w-5 h-5" />,
            title: "9. Children's Privacy",
            content: "This website is not intended for children under 13 years of age. I do not knowingly collect personal information from children. If you believe a child has provided personal information through this website, please contact me immediately, and I will take steps to delete such information.",
            color: "from-pink-500 to-rose-500"
        },
        {
            icon: <RefreshCw className="w-5 h-5" />,
            title: "10. Policy Updates",
            content: "This Privacy Policy may be updated periodically to reflect changes in practices, technologies, or legal requirements. Significant changes will be highlighted on this page. The 'Last Updated' date indicates the most recent revision. I encourage you to review this policy regularly.",
            color: "from-slate-500 to-gray-600"
        }
    ];

    const trustBadges = [
        { icon: <Shield className="w-5 h-5" />, text: "Your data is protected" },
        { icon: <Lock className="w-5 h-5" />, text: "Never sold to third parties" },
        { icon: <Eye className="w-5 h-5" />, text: "Full transparency" },
        { icon: <UserCheck className="w-5 h-5" />, text: "GDPR compliant" },
    ];

    return (
        <main className="min-h-screen relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
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
                            className="inline-flex p-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6"
                        >
                            <Shield className="w-10 h-10 text-white" />
                        </motion.div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Privacy <span className="gradient-text">Policy</span>
                        </h1>
                        <div className="w-20 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mx-auto mb-4"></div>
                        <p className="opacity-70 max-w-2xl mx-auto">
                            Your privacy matters. This policy explains how your information is collected, used, and protected.
                        </p>
                        <p className="text-sm opacity-50 mt-2">Last updated: December 2024</p>
                    </div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {trustBadges.map((item, index) => (
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

                                        {/* Subsections */}
                                        {section.subsections && (
                                            <div className="mt-4 grid md:grid-cols-2 gap-4">
                                                {section.subsections.map((sub, idx) => (
                                                    <div key={idx} className="bg-[var(--surface-variant)] p-4 rounded-xl">
                                                        <h4 className="font-semibold mb-2">{sub.subtitle}</h4>
                                                        <ul className="space-y-1">
                                                            {sub.items.map((item, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-sm opacity-80">
                                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* List */}
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

                                        {/* Security Highlights */}
                                        {section.highlights && (
                                            <div className="mt-4 flex flex-wrap gap-3">
                                                {section.highlights.map((h, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                                                        {h.icon} {h.text}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Services */}
                                        {section.services && (
                                            <div className="mt-4 space-y-3">
                                                {section.services.map((s, idx) => (
                                                    <div key={idx} className="flex items-center justify-between p-3 bg-[var(--surface-variant)] rounded-lg">
                                                        <div>
                                                            <span className="font-semibold">{s.name}</span>
                                                            <span className="text-sm opacity-70 ml-2">– {s.desc}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Cookie Types */}
                                        {section.cookieTypes && (
                                            <div className="mt-4 grid sm:grid-cols-3 gap-3">
                                                {section.cookieTypes.map((c, idx) => (
                                                    <div key={idx} className="p-3 bg-[var(--surface-variant)] rounded-lg text-center">
                                                        <p className="font-semibold text-amber-500">{c.type}</p>
                                                        <p className="text-xs opacity-70 mt-1">{c.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Rights */}
                                        {section.rights && (
                                            <div className="mt-4 grid sm:grid-cols-2 gap-3">
                                                {section.rights.map((r, idx) => (
                                                    <div key={idx} className="flex items-start gap-3 p-3 bg-[var(--surface-variant)] rounded-lg">
                                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                        <div>
                                                            <p className="font-semibold">{r.right}</p>
                                                            <p className="text-sm opacity-70">{r.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
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
                        <h3 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h3>
                        <p className="opacity-70 mb-6 max-w-xl mx-auto">
                            If you have questions about this Privacy Policy or wish to exercise your data rights, please contact me.
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
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-xl hover:scale-105 transition-all">
                                Contact Me
                                <ArrowLeft className="w-4 h-4 rotate-180" />
                            </Link>
                            <Link href="/terms" className="inline-flex items-center gap-2 px-6 py-3 glass font-medium rounded-xl hover:scale-105 transition-all">
                                <FileText className="w-4 h-4" />
                                Terms of Service
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}
