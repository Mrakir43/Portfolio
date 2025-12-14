"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun, Code, Bot, Brain, Cloud } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [currentStack, setCurrentStack] = useState(0);

    const stacks = [
        { icon: <Code className="w-5 h-5 text-white" />, title: "Full Stack Developer", color: "from-blue-500 to-cyan-500" },
        { icon: <Bot className="w-5 h-5 text-white" />, title: "Chatbot Development", color: "from-teal-500 to-cyan-500" },
        { icon: <Brain className="w-5 h-5 text-white" />, title: "AI/ML Engineer", color: "from-purple-500 to-pink-500" },
        { icon: <Cloud className="w-5 h-5 text-white" />, title: "AI Automation", color: "from-orange-500 to-red-500" },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);

        // Check saved theme
        const saved = localStorage.getItem("theme");
        if (saved === "light") {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        }

        // Cycle through stacks every 2 seconds
        const interval = setInterval(() => {
            setCurrentStack((prev) => (prev + 1) % 4);
        }, 2000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearInterval(interval);
        };
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "light" : "dark");
    };

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"}`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Premium Animated Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    {/* Animated Logo Icon */}
                    {/* Animated Logo Icon */}
                    <div className="relative w-10 h-10">
                        <AnimatePresence>
                            <motion.div
                                key={currentStack}
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut"
                                }}
                                className={`absolute inset-0 w-full h-full bg-gradient-to-br ${stacks[currentStack].color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                            >
                                {stacks[currentStack].icon}
                            </motion.div>
                            {/* Glow Effect */}
                            <motion.div
                                key={`glow-${currentStack}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.4 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className={`absolute inset-0 bg-gradient-to-br ${stacks[currentStack].color} rounded-xl blur-lg -z-10 group-hover:opacity-60 transition-opacity`}
                            ></motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Name with Animated Title */}
                    <div className="flex flex-col">
                        <span className="text-xl font-bold leading-none">
                            <span className="gradient-text">A</span>
                            <span className="text-[var(--foreground)]">amir</span>
                            <span className="gradient-text ml-1">K</span>
                            <span className="text-[var(--foreground)]">han</span>
                        </span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentStack}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut"
                                }}
                                className="text-[10px] uppercase tracking-widest opacity-60 font-medium"
                            >
                                {stacks[currentStack].title}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="w-px h-6 bg-[var(--border)] mx-2"></div>
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-xl glass hover:scale-110 transition-all"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-primary" />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg glass"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 glass rounded-lg"
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden glass mt-4 py-4 px-4 mx-4 rounded-xl space-y-1"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-3 text-sm font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
                        >
                            {link.label}
                        </a>
                    ))}
                </motion.div>
            )}
        </nav>
    );
}
