"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Rocket, Target, Users, ExternalLink } from "lucide-react";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const strengths = [
        { icon: <Code className="w-6 h-6" />, title: "Full-Stack Development", desc: "End-to-end web and mobile solutions" },
        { icon: <Rocket className="w-6 h-6" />, title: "Fast Delivery", desc: "Efficient project completion on time" },
        { icon: <Target className="w-6 h-6" />, title: "Client-Focused", desc: "Solutions tailored to your needs" },
        { icon: <Users className="w-6 h-6" />, title: "Collaboration", desc: "Clear communication throughout" },
    ];

    return (
        <section id="about" ref={ref} className="bg-[var(--surface)]">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
                        <p className="text-lg mb-6 opacity-80 leading-relaxed text-justify">
                            I&apos;m a <strong>passionate freelance developer</strong> with expertise in building modern, scalable web and mobile applications. From custom React/Next.js apps to WordPress websites, I deliver complete digital solutions tailored to your needs.
                        </p>
                        <p className="text-lg mb-6 opacity-80 leading-relaxed text-justify">
                            Currently working as a <strong>Freelance Website Designer & Developer</strong>, I provide <strong>end-to-end website deployment</strong> services—from design and development to domain setup, hosting, and launch. Successfully delivered projects:
                        </p>
                        <div className="flex flex-wrap gap-4 mb-6">
                            <a href="https://sairatimes.com" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 glass rounded-full hover:bg-primary/20 hover:scale-105 border border-white/10 hover:border-primary/30 transition-all flex items-center gap-2 text-sm font-medium group">
                                sairatimes.com
                                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                            </a>
                            <a href="https://dcinterior.co.in" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 glass rounded-full hover:bg-primary/20 hover:scale-105 border border-white/10 hover:border-primary/30 transition-all flex items-center gap-2 text-sm font-medium group">
                                dcinterior.co.in
                                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                            </a>
                            <a href="https://renteases.lovable.app" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 glass rounded-full hover:bg-primary/20 hover:scale-105 border border-white/10 hover:border-primary/30 transition-all flex items-center gap-2 text-sm font-medium group">
                                renteases.lovable.app
                                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                            </a>
                        </div>
                        <p className="text-lg opacity-80 leading-relaxed text-justify">
                            Whether you need a custom-coded website, a WordPress site, or a full-stack application, I help businesses establish a strong digital presence with high-quality, performant solutions that drive results.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="grid grid-cols-2 gap-4">
                        {strengths.map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 + index * 0.1 }} className="glass p-5 rounded-xl card-hover text-center">
                                <div className="p-3 bg-primary/20 rounded-lg text-primary inline-block mb-3">{item.icon}</div>
                                <h3 className="font-semibold mb-1">{item.title}</h3>
                                <p className="text-sm opacity-70">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
