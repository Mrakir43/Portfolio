"use client";

import { Github, Linkedin, Heart, Mail, MapPin, Code, Coffee, Sparkles } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const links = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#education", label: "Education" },
        { href: "#contact", label: "Contact" },
    ];

    const socials = [
        { icon: <Github className="w-5 h-5" />, href: "https://github.com/Mrakir43", label: "GitHub", color: "hover:bg-gray-700" },
        { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/mrakir/", label: "LinkedIn", color: "hover:bg-blue-600" },
        { icon: <Mail className="w-5 h-5" />, href: "mailto:er.aamirkhann@gmail.com", label: "Email", color: "hover:bg-red-500" },
    ];

    const services = [
        "Full-Stack Development",
        "AI Call Agents",
        "LLM & ChatGPT Integration",
        "Mobile App Development",
        "AI/ML Solutions",
        "Cloud & DevOps",
        "Chatbot Development",
        "API Development",
    ];

    return (
        <footer className="relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--surface)] to-[var(--background)]"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Top Section */}
                <div className="py-16 border-b border-[var(--border)]">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Branding */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg">
                                    <Code className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold gradient-text">Aamir Khan</h3>
                            </div>
                            <p className="opacity-70 leading-relaxed mb-6">
                                Full-Stack Developer & AI/ML Enthusiast crafting modern digital experiences that make a difference.
                            </p>
                            <div className="space-y-3">
                                <a href="mailto:er.aamirkhann@gmail.com" className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                    <Mail className="w-4 h-4" />
                                    er.aamirkhann@gmail.com
                                </a>
                                <div className="flex items-center gap-3 text-sm opacity-70">
                                    <MapPin className="w-4 h-4" />
                                    New Delhi, India
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-primary" />
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="text-sm opacity-70 hover:opacity-100 hover:text-primary hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2"
                                        >
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                                <Code className="w-4 h-4 text-secondary" />
                                Services
                            </h4>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index} className="text-sm opacity-70 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Connect Section */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                                <Heart className="w-4 h-4 text-accent" />
                                Let&apos;s Connect
                            </h4>
                            <p className="text-sm opacity-70 mb-6">
                                Follow me on social media to stay updated with my latest projects and tech insights.
                            </p>
                            <div className="flex gap-3">
                                {socials.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 glass rounded-xl hover:scale-110 ${social.color} hover:text-white transition-all duration-300 shadow-lg`}
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>

                            {/* Status Badge */}
                            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="text-sm font-medium">Available for work</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col md:flex-row items-center gap-4 text-sm opacity-70">
                            <p>© {currentYear} Aamir Khan. All rights reserved.</p>
                            <span className="hidden md:block">•</span>
                            <div className="flex items-center gap-4">
                                <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
                                <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                            <span className="opacity-70">Crafted with</span>
                            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                            <span className="opacity-70">&</span>
                            <Coffee className="w-4 h-4 text-amber-500" />
                            <span className="opacity-70">using</span>
                            <span className="px-2 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-md font-medium">Next.js</span>
                            <span className="opacity-70">&</span>
                            <span className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-md font-medium">Tailwind</span>
                        </div>
                    </div>

                    {/* Easter Egg */}
                    <div className="mt-8 text-center">
                        <p className="text-xs opacity-40 hover:opacity-70 transition-opacity cursor-default">
                            ✨ Thanks for scrolling all the way down! You&apos;re awesome! ✨
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
