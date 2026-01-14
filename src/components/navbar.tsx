"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [stars, setStars] = useState<number | null>(null);

    useEffect(() => {
        const fetchStars = async () => {
            try {
                const response = await fetch("https://api.github.com/repos/KompallyAkhil/CodeSync");
                if (response.ok) {
                    const data = await response.json();
                    setStars(data.stargazers_count);
                }
            } catch (error) {
                console.error("Failed to fetch stars:", error);
            }
        };

        fetchStars();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Initial set
        setWindowWidth(window.innerWidth);

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const getNavbarWidth = () => {
        if (windowWidth < 768) return "95%";
        if (windowWidth < 1024) return scrolled ? "85%" : "90%";
        if (windowWidth < 1280) return scrolled ? "70%" : "80%";
        return scrolled ? "55%" : "70%";
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "How it Works", href: "#how-it-works" },
        { name: "GitHub", href: "https://github.com/KompallyAkhil/CodeSync" },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
            <motion.nav
                initial={{ width: "95%", y: -100, opacity: 0 }}
                animate={{
                    width: getNavbarWidth(),
                    y: 0,
                    opacity: 1
                }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
                className="pointer-events-auto rounded-2xl transition-colors duration-300 border bg-background/70 backdrop-blur-xl border-border/50 shadow-lg"
                style={{
                    maxWidth: "1200px"
                }}
            >
                <div className="px-4 md:px-6">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                             <Image 
                                src="/image.png" 
                                alt="CodeSync Logo" 
                                width={36} 
                                height={36} 
                                className="rounded-lg object-contain"
                            />
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">
                                CodeSync
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1 bg-secondary/50 p-1 rounded-full border border-border/50">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-4 py-1.5 text-sm font-medium text-muted-foreground transition-all hover:text-foreground rounded-full hover:bg-background/80"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex items-center gap-2">
                                <Button variant="ghost" size="sm" asChild>
                                    <Link href="https://github.com/KompallyAkhil/CodeSync" target="_blank" className="flex items-center gap-2">
                                        <Github className="size-5" />
                                        <span className="font-medium">{stars !== null ? stars : "Star"}</span>
                                    </Link>
                                </Button>
                                <Button className="rounded-xl shadow-lg shadow-primary/20">
                                    Add to Chrome
                                </Button>
                            </div>

                            {/* Mobile Menu Toggle */}
                            <button
                                className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                                onClick={toggleMenu}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, margin: 0 }}
                            animate={{ opacity: 1, height: "auto", margin: "8px" }}
                            exit={{ opacity: 0, height: 0, margin: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden cursor-pointer overflow-hidden bg-background/95 backdrop-blur-xl rounded-xl border border-border/50 mx-2 mb-2"
                        >
                            <div className="p-4 flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 text-sm font-medium text-muted-foreground hover:text-foreground transition-all"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                        <ChevronRight className="size-4 opacity-50" />
                                    </Link>
                                ))}
                                <div className="pt-2 mt-2 border-t border-border/50 flex flex-col gap-2">
                                    <Button className="w-full rounded-xl bg-primary border-0">
                                        Add to Chrome
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
};
