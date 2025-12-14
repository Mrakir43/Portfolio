"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);

        // Check saved theme
        const saved = localStorage.getItem("theme");
        if (saved === "light") {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "light" : "dark");
    };

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"}`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold gradient-text">
                    Aamir Khan
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-sm font-medium hover:text-primary-light transition-colors">
                            {link.label}
                        </a>
                    ))}
                    <button onClick={toggleTheme} className="p-2 rounded-lg glass hover:scale-110 transition-all" aria-label="Toggle theme">
                        {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-primary" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center gap-3">
                    <button onClick={toggleTheme} className="p-2 rounded-lg glass" aria-label="Toggle theme">
                        {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden glass mt-4 py-4 px-4 mx-4 rounded-lg space-y-3">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium hover:text-primary-light transition-colors">
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
