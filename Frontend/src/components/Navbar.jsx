import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Franchise', href: '/franchise' },
        { name: 'Contact', href: '/contact-us' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-blue-500/5 py-4'
                    : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                            B
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-slate-900 leading-none tracking-tight">Big<span className="text-sky-600">Dental</span></span>
                            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Medical Center</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1 bg-slate-50/50 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-sm">
                        {navLinks.map((link) => (
                            link.href.startsWith('/') && !link.href.includes('#') ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="px-5 py-2.5 rounded-full text-slate-600 font-medium text-sm hover:text-sky-700 hover:bg-white hover:shadow-sm transition-all duration-300"
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-5 py-2.5 rounded-full text-slate-600 font-medium text-sm hover:text-sky-700 hover:bg-white hover:shadow-sm transition-all duration-300"
                                >
                                    {link.name}
                                </a>
                            )
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="https://wa.me/919618035653"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-900 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-xl shadow-slate-900/10 hover:bg-sky-600 hover:shadow-sky-500/20 transition-all duration-300 flex items-center gap-2 group"
                        >
                            Book Appointment
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-slate-900 bg-white rounded-lg shadow-sm"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-x-0 top-[80px] z-40 bg-white border-b border-slate-100 overflow-hidden lg:hidden"
                    >
                        <div className="p-6 space-y-4">
                            {navLinks.map((link) => (
                                link.href.startsWith('/') && !link.href.includes('#') ? (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className="block p-4 rounded-xl bg-slate-50 text-slate-900 font-medium hover:bg-sky-50 hover:text-sky-700 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="block p-4 rounded-xl bg-slate-50 text-slate-900 font-medium hover:bg-sky-50 hover:text-sky-700 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                )
                            ))}
                            <a
                                href="https://wa.me/919032018887"
                                className="block w-full text-center bg-sky-600 text-white p-4 rounded-xl font-bold shadow-lg shadow-sky-500/20 mt-4"
                            >
                                Book Appointment
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
