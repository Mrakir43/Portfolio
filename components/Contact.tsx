"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send, Phone, MessageCircle, Clock, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const mailtoLink = `mailto:er.aamirkhann@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`;
        window.location.href = mailtoLink;
        setTimeout(() => setIsSubmitting(false), 1000);
    };

    const contactInfo = [
        { icon: <Mail className="w-5 h-5" />, label: "Email", value: "er.aamirkhann@gmail.com", href: "mailto:er.aamirkhann@gmail.com", color: "from-red-500 to-orange-500" },
        { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "New Delhi, India", href: null, color: "from-blue-500 to-cyan-500" },
        { icon: <Clock className="w-5 h-5" />, label: "Response Time", value: "Within 24 hours", href: null, color: "from-purple-500 to-pink-500" },
    ];

    const socialLinks = [
        { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", href: "https://www.linkedin.com/in/mrakir/", color: "from-blue-600 to-blue-500", hoverColor: "hover:shadow-blue-500/50" },
        { icon: <Github className="w-6 h-6" />, label: "GitHub", href: "https://github.com/Mrakir43", color: "from-gray-700 to-gray-600", hoverColor: "hover:shadow-gray-500/50" },
        { icon: <Mail className="w-6 h-6" />, label: "Email", href: "mailto:er.aamirkhann@gmail.com", color: "from-red-500 to-orange-500", hoverColor: "hover:shadow-orange-500/50" },
    ];

    const highlights = [
        "Open to freelance opportunities",
        "Available for full-time roles",
        "Remote & on-site work",
        "Quick response guaranteed",
    ];

    return (
        <section id="contact" ref={ref} className="bg-[var(--surface)] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">Let&apos;s Build Something Amazing</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? I&apos;d love to hear from you.
                        Let&apos;s turn your ideas into reality!
                    </p>
                </motion.div>

                {/* Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {highlights.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 px-4 py-2 glass rounded-full">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-medium">{item}</span>
                        </div>
                    ))}
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
                    {/* Contact Info */}
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="h-full">
                        <div className="glass p-8 rounded-2xl h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl">
                                    <MessageCircle className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Let&apos;s Connect</h3>
                                    <p className="text-sm opacity-60">I&apos;m just a message away</p>
                                </div>
                            </div>

                            <p className="opacity-70 mb-8 leading-relaxed">
                                I&apos;m always excited to discuss new projects, creative ideas, or opportunities
                                to contribute to your vision. Whether you need a full-stack solution, mobile app,
                                or AI integration – let&apos;s make it happen!
                            </p>

                            {/* Contact Cards */}
                            <div className="grid gap-4 mb-8">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="group"
                                    >
                                        {info.href ? (
                                            <a href={info.href} className="flex items-center gap-4 p-4 bg-[var(--surface-variant)] rounded-xl hover:scale-[1.02] transition-all duration-300 border border-transparent hover:border-primary/30">
                                                <div className={`p-3 bg-gradient-to-r ${info.color} rounded-lg text-white`}>
                                                    {info.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-xs opacity-60 uppercase tracking-wide">{info.label}</p>
                                                    <p className="font-medium group-hover:text-primary transition-colors">{info.value}</p>
                                                </div>
                                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-4 p-4 bg-[var(--surface-variant)] rounded-xl">
                                                <div className={`p-3 bg-gradient-to-r ${info.color} rounded-lg text-white`}>
                                                    {info.icon}
                                                </div>
                                                <div>
                                                    <p className="text-xs opacity-60 uppercase tracking-wide">{info.label}</p>
                                                    <p className="font-medium">{info.value}</p>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mt-auto pt-6">
                                <p className="text-sm font-medium mb-4 opacity-70">Connect on social</p>
                                <div className="flex gap-4">
                                    {socialLinks.map((link, index) => (
                                        <motion.a
                                            key={index}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            className={`p-4 bg-gradient-to-r ${link.color} rounded-xl text-white hover:scale-110 transition-all duration-300 shadow-lg ${link.hoverColor}`}
                                            aria-label={link.label}
                                        >
                                            {link.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="h-full">
                        <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl">
                                    <Send className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Send a Message</h3>
                                    <p className="text-sm opacity-60">I&apos;ll get back to you soon</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-[var(--surface-variant)] rounded-xl border-2 border-transparent focus:border-primary focus:ring-0 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-[var(--surface-variant)] rounded-xl border-2 border-transparent focus:border-primary focus:ring-0 outline-none transition-all"
                                        placeholder="john@example.com"
                                        suppressHydrationWarning
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 bg-[var(--surface-variant)] rounded-xl border-2 border-transparent focus:border-primary focus:ring-0 outline-none transition-all"
                                    placeholder="Project Inquiry / Collaboration / Job Opportunity"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-[var(--surface-variant)] rounded-xl border-2 border-transparent focus:border-primary focus:ring-0 outline-none transition-all resize-none"
                                    placeholder="Tell me about your project, timeline, and how I can help..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold rounded-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed group"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        Send Message
                                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                    </>
                                )}
                            </button>

                            <p className="text-center text-sm opacity-60">
                                By submitting, you agree to be contacted regarding your inquiry.
                            </p>
                        </form>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16 glass p-8 rounded-2xl max-w-3xl mx-auto"
                >
                    <h3 className="text-2xl font-bold mb-3">Prefer a quick chat?</h3>
                    <p className="opacity-70 mb-6">Schedule a free 15-minute consultation call to discuss your project.</p>
                    <a
                        href={`mailto:er.aamirkhann@gmail.com?subject=${encodeURIComponent('Schedule a Call - Project Discussion')}&body=${encodeURIComponent(`Hi Aamir,

I would like to schedule a call to discuss a potential project/collaboration.

Here are my details:
- Name: [Your Name]
- Contact Number: [Your Phone Number]
- Company/Organization: [Your Company]
- Preferred Date & Time: [Your preferred date and time]
- Timezone: [Your timezone]

Brief Description of the Project:
[Please describe your project or what you'd like to discuss]

Looking forward to connecting with you!

Best regards,
[Your Name]`)}`}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        <Phone className="w-5 h-5" />
                        Schedule a Call
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
