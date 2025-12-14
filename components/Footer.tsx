"use client";

import { Github, Linkedin, Heart, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const links = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    const socials = [
        { icon: <Github className="w-5 h-5" />, href: "https://github.com/Mrakir43", label: "GitHub" },
        { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/mrakir/", label: "LinkedIn" },
        { icon: <Mail className="w-5 h-5" />, href: "mailto:mrakir43@gmail.com", label: "Email" },
    ];

    return (
        <footer className="py-12 border-t border-[var(--border)]">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Branding */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text mb-4">Aamir Khan</h3>
                        <p className="opacity-70 leading-relaxed">
                            Freelance Web & Mobile Developer crafting modern digital experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:text-center">
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <div className="flex flex-wrap md:justify-center gap-4">
                            {links.map((link) => (
                                <a key={link.href} href={link.href} className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div className="md:text-right">
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex md:justify-end gap-4">
                            {socials.map((social) => (
                                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg hover:scale-110 hover:text-primary transition-all" aria-label={social.label}>
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
                    <p>© {currentYear} Aamir Khan. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> using Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
