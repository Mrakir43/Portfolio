"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:mrakir43@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`;
        window.location.href = mailtoLink;
    };

    const contactInfo = [
        { icon: <Mail className="w-5 h-5" />, label: "Email", value: "mrakir43@gmail.com", href: "mailto:mrakir43@gmail.com" },
        { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "India", href: null },
    ];

    const socialLinks = [
        { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/mrakir/", color: "hover:bg-blue-600" },
        { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/Mrakir43", color: "hover:bg-gray-700" },
    ];

    return (
        <section id="contact" ref={ref} className="bg-[var(--surface)]">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">
                        Have a project in mind? Let&apos;s work together to bring your ideas to life!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
                        <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
                        <p className="opacity-70 mb-8 leading-relaxed">
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
                        </p>

                        <div className="space-y-4 mb-8">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="p-3 glass rounded-lg text-primary">{info.icon}</div>
                                    <div>
                                        <p className="text-sm opacity-60">{info.label}</p>
                                        {info.href ? (
                                            <a href={info.href} className="font-medium hover:text-primary transition-colors">{info.value}</a>
                                        ) : (
                                            <p className="font-medium">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className={`p-4 glass rounded-lg ${link.color} hover:text-white transition-all duration-300 hover:scale-110`} aria-label={link.label}>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
                        <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-[var(--surface-variant)] rounded-lg border border-[var(--border)] focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-[var(--surface-variant)] rounded-lg border border-[var(--border)] focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea id="message" rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-[var(--surface-variant)] rounded-lg border border-[var(--border)] focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="submit" className="w-full px-6 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-medium rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
