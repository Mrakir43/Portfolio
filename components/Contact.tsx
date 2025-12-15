"use client";

import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send, Phone, MessageCircle, Clock, Sparkles, CheckCircle, ArrowRight, Loader2, Check, AlertCircle } from "lucide-react";

export default function Contact() {
    const ref = useRef(null);
    const formRef = useRef<HTMLFormElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({ name: "", email: "", message: "", subject: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; subject?: string; message?: string }>({});

    // Email validation regex
    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Validate form fields
    const validateForm = (): boolean => {
        const errors: { name?: string; email?: string; subject?: string; message?: string } = {};

        // Name validation
        if (!formData.name.trim()) {
            errors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
            errors.name = "Name must be at least 2 characters";
        } else if (formData.name.trim().length > 100) {
            errors.name = "Name must be less than 100 characters";
        }

        // Email validation
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!isValidEmail(formData.email.trim())) {
            errors.email = "Please enter a valid email address";
        }

        // Subject validation
        if (!formData.subject.trim()) {
            errors.subject = "Subject is required";
        } else if (formData.subject.trim().length < 5) {
            errors.subject = "Subject must be at least 5 characters";
        } else if (formData.subject.trim().length > 200) {
            errors.subject = "Subject must be less than 200 characters";
        }

        // Message validation
        if (!formData.message.trim()) {
            errors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            errors.message = "Message must be at least 10 characters";
        } else if (formData.message.trim().length > 5000) {
            errors.message = "Message must be less than 5000 characters";
        }

        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage("");
        setFieldErrors({});

        // Validate form
        if (!validateForm()) {
            return;
        }

        // Check if formRef is available
        if (!formRef.current) {
            setSubmitStatus("error");
            setErrorMessage("Form reference not found. Please refresh the page.");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Check network connectivity
            if (!navigator.onLine) {
                throw new Error("No internet connection. Please check your network and try again.");
            }

            const result = await emailjs.sendForm(
                "service_zsujenu",
                "template_oxzjnvs",
                formRef.current,
                "M0BJ5sXdivcKikoE2"
            );

            if (result.status === 200) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", message: "", subject: "" });
                setTimeout(() => setSubmitStatus("idle"), 5000);
            } else {
                throw new Error("Unexpected response from email service");
            }
        } catch (error: any) {
            console.error("EmailJS Error:", error);
            setSubmitStatus("error");

            // Handle specific error types
            if (error.message?.includes("No internet")) {
                setErrorMessage(error.message);
            } else if (error.status === 400) {
                setErrorMessage("Invalid form data. Please check your inputs.");
            } else if (error.status === 401 || error.status === 403) {
                setErrorMessage("Email service authentication failed. Please try again later.");
            } else if (error.status === 422) {
                setErrorMessage("Email template error. Please contact the site owner.");
            } else if (error.status === 429) {
                setErrorMessage("Too many requests. Please wait a moment and try again.");
            } else if (error.status >= 500) {
                setErrorMessage("Email server is temporarily unavailable. Please try again later.");
            } else {
                setErrorMessage("Failed to send message. Please try again or contact via email directly.");
            }

            setTimeout(() => {
                setSubmitStatus("idle");
                setErrorMessage("");
            }, 7000);
        } finally {
            setIsSubmitting(false);
        }
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
                        <div key={index} className="flex items-center gap-2 px-3 sm:px-4 py-2 glass rounded-full">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-xs sm:text-sm font-medium">{item}</span>
                        </div>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
                    {/* Contact Info */}
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="h-full">
                        <div className="glass p-4 sm:p-8 rounded-2xl h-full flex flex-col overflow-hidden">
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
                            <div className="grid gap-3 sm:gap-4 mb-8 overflow-hidden">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="group w-full max-w-full"
                                    >
                                        {info.href ? (
                                            <a href={info.href} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[var(--surface-variant)] rounded-xl hover:scale-[1.02] transition-all duration-300 border border-transparent hover:border-primary/30 w-full max-w-full overflow-hidden">
                                                <div className={`p-2 sm:p-3 bg-gradient-to-r ${info.color} rounded-lg text-white shrink-0`}>
                                                    <span className="w-4 h-4 sm:w-5 sm:h-5">{info.icon}</span>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xs opacity-60 uppercase tracking-wide">{info.label}</p>
                                                    <p className="font-medium group-hover:text-primary transition-colors truncate">{info.value}</p>
                                                </div>
                                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary shrink-0" />
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[var(--surface-variant)] rounded-xl w-full max-w-full overflow-hidden">
                                                <div className={`p-2 sm:p-3 bg-gradient-to-r ${info.color} rounded-lg text-white shrink-0`}>
                                                    <span className="w-4 h-4 sm:w-5 sm:h-5">{info.icon}</span>
                                                </div>
                                                <div className="flex-1 min-w-0">
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
                                <div className="flex flex-wrap gap-3 sm:gap-4">
                                    {socialLinks.map((link, index) => (
                                        <motion.a
                                            key={index}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            className={`p-3 sm:p-4 bg-gradient-to-r ${link.color} rounded-xl text-white hover:scale-110 transition-all duration-300 shadow-lg ${link.hoverColor}`}
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
                        <form ref={formRef} onSubmit={handleSubmit} className="glass p-4 sm:p-8 rounded-2xl space-y-4 sm:space-y-6 h-full flex flex-col relative overflow-hidden">
                            {/* Success Overlay */}
                            {submitStatus === "success" && (
                                <div className="absolute inset-0 bg-[var(--surface)]/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-300">
                                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4 text-green-500">
                                        <CheckCircle className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                    <p className="opacity-70">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
                                </div>
                            )}

                            {/* Error Overlay */}
                            {submitStatus === "error" && (
                                <div className="absolute inset-0 bg-[var(--surface)]/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-300">
                                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4 text-red-500">
                                        <AlertCircle className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Something went wrong</h3>
                                    <p className="opacity-70 mb-6 max-w-sm">{errorMessage || "Failed to send message. Please try again later."}</p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSubmitStatus("idle");
                                            setErrorMessage("");
                                        }}
                                        className="px-6 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors font-medium"
                                    >
                                        Try Again
                                    </button>
                                </div>
                            )}

                            <div className="flex items-center gap-2 sm:gap-3 mb-2">
                                <div className="p-2 sm:p-3 bg-gradient-to-r from-accent to-primary rounded-xl">
                                    <Send className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold">Send a Message</h3>
                                    <p className="text-sm opacity-60">I&apos;ll get back to you soon</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => {
                                            setFormData({ ...formData, name: e.target.value });
                                            if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: undefined });
                                        }}
                                        className={`w-full px-4 py-3 bg-[var(--surface-variant)] rounded-xl border-2 ${fieldErrors.name ? 'border-red-500' : 'border-transparent'} focus:border-primary focus:ring-0 outline-none transition-all`}
                                        placeholder="John Doe"
                                        maxLength={100}
                                    />
                                    {fieldErrors.name && (
                                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" />
                                            {fieldErrors.name}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => {
                                            setFormData({ ...formData, email: e.target.value });
                                            if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: undefined });
                                        }}
                                        className={`w-full px-4 py-3 bg-[var(--surface-variant)] rounded-xl border-2 ${fieldErrors.email ? 'border-red-500' : 'border-transparent'} focus:border-primary focus:ring-0 outline-none transition-all`}
                                        placeholder="john@example.com"
                                        suppressHydrationWarning
                                    />
                                    {fieldErrors.email && (
                                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" />
                                            {fieldErrors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={(e) => {
                                        setFormData({ ...formData, subject: e.target.value });
                                        if (fieldErrors.subject) setFieldErrors({ ...fieldErrors, subject: undefined });
                                    }}
                                    className={`w-full px-4 py-3 bg-[var(--surface-variant)] rounded-xl border-2 ${fieldErrors.subject ? 'border-red-500' : 'border-transparent'} focus:border-primary focus:ring-0 outline-none transition-all`}
                                    placeholder="Project Inquiry / Collaboration / Job Opportunity"
                                    maxLength={200}
                                />
                                {fieldErrors.subject && (
                                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" />
                                        {fieldErrors.subject}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Your Message
                                    <span className="text-xs opacity-50 ml-2">({formData.message.length}/5000)</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={(e) => {
                                        setFormData({ ...formData, message: e.target.value });
                                        if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: undefined });
                                    }}
                                    className={`w-full px-4 py-3 bg-[var(--surface-variant)] rounded-xl border-2 ${fieldErrors.message ? 'border-red-500' : 'border-transparent'} focus:border-primary focus:ring-0 outline-none transition-all resize-none`}
                                    placeholder="Tell me about your project, timeline, and how I can help..."
                                    maxLength={5000}
                                ></textarea>
                                {fieldErrors.message && (
                                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" />
                                        {fieldErrors.message}
                                    </p>
                                )}
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
                    className="text-center mt-12 sm:mt-16 glass p-4 sm:p-8 rounded-2xl max-w-3xl mx-auto"
                >
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">Prefer a quick chat?</h3>
                    <p className="opacity-70 mb-4 sm:mb-6 text-sm sm:text-base">Schedule a free 15-minute consultation call to discuss your project.</p>
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
                        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base"
                    >
                        <Phone className="w-5 h-5" />
                        Schedule a Call
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
